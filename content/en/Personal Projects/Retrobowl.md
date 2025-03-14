---
date: 2024-04-06
title: Retro Bowl
linkTitle: Retro Bowl
author: Aarya Dani 
resources:
  - src: 
    title: 
    params:
      byline: 
cascade:
  - type: "docs"
weight: 100
---

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="styles.css">
    <link rel="shortcut icon" href="retro bowl.jpg" type="image">
    <title>Retro Bowl | Alexx743</title>
</head>
<body>

  <h2> Retro Bowl</h2>

<iframe src="https://retro-bowl-six.vercel.app" class="retro-bowl-iframe" style="width: 60vw; height: 50vh; border: none;"></iframe>
    <button 
    onclick="iffs('https://retro-bowl-six.vercel.app')"
     class="fullscreen"></button>
     <script>
      function iffs(href) {
    const iframe = document.querySelector("iframe");
    const stl = iframe.style;
    stl.border = stl.outline = 'none';
    stl.width = '1000vw';
    stl.height = '1000vh';
    stl.position = 'fixed';
    stl.left = stl.right = stl.top = stl.bottom = '0';
    iframe.src = href;
    }
    </script>

<script>
  document.addEventListener("keydown", 
  async (e) => { if ("`" == e.key) window.parent.window.location.replace("https://google.com/") });
</script>

</body>
</html>