// roster_expand.js
(function () {
  console.log("Waiting for Retro Bowl to load...");

  const waitForGame = () => {
    try {
      if (typeof window.game !== "undefined" && game.roster) {
        console.log("Game loaded — expanding roster.");

        // Detect base roster size (either 10 or 12)
        const baseRosterLimit =
          game.max_roster || (game.roster.length <= 10 ? 10 : 12);

        // Add 3 extra slots depending on the mode
        const newLimit = baseRosterLimit + 3;
        game.max_roster = newLimit;

        console.log(`📈 Roster limit expanded from ${baseRosterLimit} → ${newLimit}`);

        // Create offensive linemen as real roster players
        const newLinemen = [
          { name: "LT", pos: "OL", rating: 78 },
          { name: "LG", pos: "OL", rating: 74 },
          { name: "C", pos: "OL", rating: 80 },
          { name: "RG", pos: "OL", rating: 75 },
          { name: "RT", pos: "OL", rating: 77 },
        ];

        // Add realistic player stats
        newLinemen.forEach((p, i) => {
          p.id = `OL${i + 1}`;
          p.age = 24 + Math.floor(Math.random() * 8);
          p.salary = 2.5 + Math.random() * 1.5;
          p.cond = 100;
          p.morale = 100;
          p.level = 1;
          p.xp = 0;
          p.pos_name = p.name;
          p.showInRoster = true;
          p.draw = function (ctx) {
            ctx.fillStyle = "#bbbbbb";
            ctx.fillRect(this.x - 5, this.y - 5, 10, 10);
          };
        });

        // Push OL to roster
        game.roster.push(...newLinemen);

        console.log("✅ Added 5 offensive linemen to roster:", newLinemen);

        // Update Roster UI (optional fallback visual)
        if (typeof game.btn_click_Roster_List === "function") {
          const originalRosterList = game.btn_click_Roster_List;
          game.btn_click_Roster_List = function (...args) {
            const result = originalRosterList.apply(this, args);

            const rosterDiv = document.querySelector("#rosterOverlay");
            if (rosterDiv && !document.querySelector("#ol-section")) {
              const olSection = document.createElement("div");
              olSection.id = "ol-section";
              olSection.style.padding = "10px";
              olSection.style.background = "#111";
              olSection.style.color = "#ccc";
              olSection.innerHTML = `
                <h3>Offensive Line</h3>
                <ul style="list-style:none;padding:0;margin:0;">
                  ${newLinemen
                    .map(
                      (p) =>
                        `<li>${p.name} — ${p.pos} — Rating: ${p.rating}</li>`
                    )
                    .join("")}
                </ul>`;
              rosterDiv.appendChild(olSection);
            }

            return result;
          };
          console.log("📋 Roster UI patched to include OL display.");
        }

        // Add OL to team_offense lineup
        if (Array.isArray(game.team_offense)) {
          const qb = game.team_offense.find((p) => p.pos === "QB");
          const baseX = qb ? qb.x - 50 : 300;
          const baseY = qb ? qb.y + 40 : 200;

          newLinemen.forEach((p, i) => {
            p.x = baseX + i * 15;
            p.y = baseY;
          });

          game.team_offense.push(...newLinemen);
          console.log("🏈 Offensive linemen added to team formation.");
        }

        console.log("Roster expansion complete!");
      } else {
        setTimeout(waitForGame, 1000);
      }
    } catch (err) {
      console.error("Roster expansion failed:", err);
      setTimeout(waitForGame, 2000);
    }
  };

  waitForGame();
})();