// roster_expand.js (robust patcher)
(function () {
  console.log("[roster_expand] loader running");

  // How many extra slots to add
  const EXTRA_SLOTS = 3;

  // Find candidate game/root objects on window that look like the exported GameMaker globals.
  function findGameRoot() {
    // Fast path: common name
    if (window.game && typeof window.game === "object" && Array.isArray(window.game.roster)) {
      return window.game;
    }

    // Otherwise scan window for objects with a 'roster' array
    for (const k in window) {
      try {
        const v = window[k];
        if (v && typeof v === "object") {
          // check common patterns
          if (Array.isArray(v.roster) && (Array.isArray(v.team_offense) || Array.isArray(v.team))) {
            console.log(`[roster_expand] found candidate root: window.${k}`);
            return v;
          }
          // some builds put arrays directly on window (rare)
          if (Array.isArray(v) && v.length && v.every(p => p && typeof p === "object" && "pos" in p)) {
            // create a small wrapper so code below can still work
            return { roster: v, team_offense: v.filter(p=>p.pos) };
          }
        }
      } catch (e) {
        // ignore cross-origin or other weird objects
      }
    }
    return null;
  }

  // Patch many possible variable names that might hold roster limits
  function setRosterLimit(root, newLimit) {
    const tried = [];

    // common properties
    const candidates = [
      "max_roster", "maxRoster", "max_players", "maxPlayers",
      "roster_limit", "rosterLimit", "rosterMax", "roster_max",
      "team_max", "teamMax", "rosterSize", "max_team_size"
    ];

    candidates.forEach((name) => {
      try {
        if (name in root) {
          tried.push(name);
          root[name] = newLimit;
        }
      } catch (e) {}
    });

    // If there is a nested team object
    try {
      if (root.team && typeof root.team === "object") {
        candidates.forEach((name) => {
          try {
            if (name in root.team) {
              tried.push("team." + name);
              root.team[name] = newLimit;
            }
          } catch (e) {}
        });
      }
    } catch (e) {}

    // Also try changing fields on likely UI objects
    try {
      if (root.ui && typeof root.ui === "object") {
        ["rosterCap", "rosterMax", "maxPlayers"].forEach(n => {
          if (n in root.ui) {
            tried.push("ui." + n);
            root.ui[n] = newLimit;
          }
        });
      }
    } catch (e) {}

    // Return what we touched for debugging
    return tried;
  }

  // Force-correct displayed roster text on the canvas (overlay approach)
  function addRosterOverlayPatch(root, newLimit) {
    const canvas = document.getElementById("canvas");
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    let lastText = "";

    function drawOverlay() {
      try {
        const rosterCount = Array.isArray(root.roster) ? root.roster.length : 0;
        const text = `PLAYERS ${rosterCount} / ${newLimit}`;

        // Only redraw if changed (cheap check)
        if (text !== lastText) {
          // Clear the area where the original text sits (approx); tweak values if needed
          // We will draw a small rectangle over the original "Players" text area
          ctx.save();
          // position is approximate for the standard export; adjust if you need
          const w = 240, h = 24;
          const x = canvas.width/2 - 120, y = 92;
          ctx.fillStyle = "#2f7be6"; // blue background approximating roster header
          ctx.fillRect(x - 4, y - 18, w + 8, h + 8);

          // draw our text
          ctx.fillStyle = "#ffffff";
          ctx.font = "18px monospace";
          ctx.textAlign = "center";
          ctx.fillText(text, canvas.width/2, y + 2);
          ctx.restore();
          lastText = text;
        }
      } catch (e) {}
      requestAnimationFrame(drawOverlay);
    }

    drawOverlay();
  }

  // create 5 OL objects (if not already present)
  function createOLs(root) {
    // If OLs already present or we already injected, skip
    const existingOLs = Array.isArray(root.roster) ? root.roster.filter(p => p && p.pos === "OL") : [];
    if (existingOLs.length >= 5 && existingOLs.some(p => p._injected)) {
      return existingOLs;
    }

    const newLinemen = [
      { name: "LT", pos: "OL", rating: 78 },
      { name: "LG", pos: "OL", rating: 74 },
      { name: "C",  pos: "OL", rating: 80 },
      { name: "RG", pos: "OL", rating: 75 },
      { name: "RT", pos: "OL", rating: 77 },
    ];

    newLinemen.forEach((p, i) => {
      p.id = `OL${i+1}`;
      p.age = 24 + Math.floor(Math.random() * 6);
      p.salary = 2.5 + Math.random() * 1.5;
      p.cond = 100;
      p.morale = 100;
      p.level = 1;
      p.xp = 0;
      p.pos_name = p.name;
      p._injected = true;
      // stats object
      p.stats = { plays:0, blocks:0, sacks_allowed:0 };
    });

    // push into roster array (if found)
    if (!Array.isArray(root.roster)) root.roster = [];
    root.roster.push(...newLinemen);

    // also push into team_offense if exists
    if (!Array.isArray(root.team_offense)) root.team_offense = [];
    root.team_offense.push(...newLinemen);

    return newLinemen;
  }

  // main polling loop
  function boot() {
    const root = findGameRoot();
    if (!root) {
      // not ready yet — try again
      setTimeout(boot, 800);
      return;
    }

    console.log("[roster_expand] game root found -> patching");

    // Determine base limit: prefer existing fields if present, otherwise infer
    let baseLimit = 12;
    if (typeof root.max_roster === "number") baseLimit = root.max_roster;
    else if (typeof root.maxPlayers === "number") baseLimit = root.maxPlayers;
    else if (Array.isArray(root.roster) && root.roster.length <= 10) baseLimit = 10;
    else baseLimit = 12; // fallback

    const newLimit = baseLimit + EXTRA_SLOTS;

    // try to set several properties
    const touched = setRosterLimit(root, newLimit);
    console.log("[roster_expand] attempted to set roster limit on:", touched);

    // As extra measure, if there is a global numeric that equals baseLimit,
    // try to find a property likely used for UI text or cache and update it
    try {
      // If there is a UI function which draws the roster header, we cannot know its name.
      // But overlay will cover the displayed digits.
      addRosterOverlayPatch(root, newLimit);
    } catch (e) {}

    // Create and add OLs (if you want them)
    try {
      const ols = createOLs(root);
      console.log("[roster_expand] injected OLs:", ols.map(o=>o.name).join(", "));
    } catch (e) {
      console.warn("[roster_expand] failed to inject OLs", e);
    }

    // If the game has a save or roster validation function, we can attempt to patch it
    // so it allows more members. Try a few common names and wrap them.
    const validationCandidates = ["validateRoster", "canAddPlayer", "addPlayer", "saveRoster", "save_game"];
    validationCandidates.forEach(name => {
      try {
        if (typeof root[name] === "function") {
          const old = root[name];
          root[name] = function(...args) {
            // temporarily relax limits by setting a property they might check
            try { root._temp_expand = true; } catch(e){}
            const res = old.apply(this, args);
            try { delete root._temp_expand; } catch(e){}
            return res;
          };
          console.log(`[roster_expand] wrapped ${name}`);
        }
      } catch (e) {}
    });

    console.log(`[roster_expand] done. roster length now ${Array.isArray(root.roster)?root.roster.length:"?"} and limit set to ${newLimit}`);
  }

  setTimeout(boot, 300);
})();
