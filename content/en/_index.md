---
title: Aarya Dani
---

<head>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;800&display=swap" rel="stylesheet">
  <style>
    body, html {
      margin: 0;
      padding: 0;
      font-family: 'Inter', sans-serif;
      background-color: #ffffff;
      color: #111;
      overflow-x: hidden;
    }
    canvas#hero-canvas {
      position: absolute;
      top: 0;
      left: 0;
      width: 100vw;
      height: 100vh;
      z-index: -1;
    }
    .hero {
      height: 100vh;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      text-align: center;
      padding: 2rem;
      position: relative;
      z-index: 1;
    }
    .hero img {
      width: 160px;
      height: 160px;
      object-fit: cover;
      border-radius: 50%;
      border: 4px solid #111;
      margin-bottom: 1.5rem;
    }
    .intro-title {
      font-size: 3rem;
      font-weight: 800;
      margin-bottom: 1rem;
    }
    .intro-subtitle {
      font-size: 1.25rem;
      margin-bottom: 2rem;
      color: #555;
    }
    .btn-primary {
      padding: 1rem 2rem;
      background-color: #000;
      color: white;
      border: none;
      border-radius: 8px;
      font-weight: 600;
      cursor: pointer;
      transition: background-color 0.3s ease;
    }
    .btn-primary:hover {
      background-color: #333;
    }
    .social-container {
      display: flex;
      justify-content: center;
      gap: 1rem;
      margin-top: 2rem;
    }
    .btn-social {
      width: 50px;
      height: 50px;
      border-radius: 50%;
      background-color: #f3f3f3;
      color: #111;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1.25rem;
      transition: transform 0.3s, background-color 0.3s;
    }
    .btn-social:hover {
      transform: scale(1.15);
      background-color: #e2e2e2;
    }
    .projects {
      padding: 5rem 2rem;
      background-color: #fafafa;
    }
    .projects-title {
      font-size: 2.5rem;
      text-align: center;
      margin-bottom: 3rem;
    }
    .project-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
      gap: 2rem;
      max-width: 1200px;
      margin: 0 auto;
    }
    .project-card {
      background-color: #fff;
      border-radius: 16px;
      overflow: hidden;
      transition: transform 0.3s, box-shadow 0.3s;
      cursor: pointer;
      box-shadow: 0 2px 10px rgba(0,0,0,0.06);
    }
    .project-card:hover {
      transform: translateY(-6px);
      box-shadow: 0 12px 24px rgba(0,0,0,0.12);
    }
    .project-card img {
      width: 100%;
      height: 200px;
      object-fit: cover;
    }
    .project-card h3 {
      padding: 1rem;
      font-weight: 600;
    }
    .modal {
      display: none;
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0,0,0,0.65);
      justify-content: center;
      align-items: center;
    }
    .modal-content {
      background-color: #fff;
      color: #000;
      padding: 2rem;
      border-radius: 12px;
      max-width: 600px;
      width: 90%;
      box-shadow: 0 10px 30px rgba(0,0,0,0.15);
    }
    .close-button {
      float: right;
      font-size: 1.5rem;
      cursor: pointer;
    }
  </style>
</head>

<body>
  <canvas id="hero-canvas"></canvas>
  <section class="hero">
    <img src="/images/Aarya.png" alt="Aarya Dani">
    <h1 class="intro-title">Aarya Dani</h1>
    <p class="intro-subtitle">Chemical Engineering @ Pitt • J&J Intern • Merck Co-op</p>
    <button class="btn-primary" onclick="document.getElementById('projects').scrollIntoView({behavior: 'smooth'})">View My Work</button>
    <div class="social-container">
      <a class="btn-social" href="https://www.linkedin.com/in/aarya-dani-82413b287/" target="_blank"><i class="fab fa-linkedin-in"></i></a>
      <a class="btn-social" href="https://www.youtube.com/channel/UCV9CfYEKDSPeG1FtkOhksqA" target="_blank"><i class="fab fa-youtube"></i></a>
      <a class="btn-social" href="https://github.com/AaryaDani" target="_blank"><i class="fab fa-github"></i></a>
    </div>
  </section>

  <section class="projects" id="projects">
    <h2 class="projects-title">Featured Projects</h2>
    <div class="project-grid">
      <div class="project-card" onclick="openModal('jj')">
        <img src="/images/Johnson & Johnson.png" alt="JJ">
        <h3>J&J Internship</h3>
      </div>
      <div class="project-card" onclick="openModal('pong')">
        <img src="/images/Pong.png" alt="Pong">
        <h3>Pong Game</h3>
      </div>
    </div>
  </section>

  <div id="projectModal" class="modal">
    <div class="modal-content">
      <span class="close-button" onclick="closeModal()">&times;</span>
      <div id="modalContent"></div>
    </div>
  </div>

  <script>
    function openModal(projectId) {
      const modal = document.getElementById('projectModal');
      const content = document.getElementById('modalContent');
      if (projectId === 'jj') {
        content.innerHTML = `<h2>J&J Internship</h2><p>Created Hugo-based dashboards for internal data visibility at Johnson & Johnson. Integrated with engineering processes.</p>`;
      } else if (projectId === 'pong') {
        content.innerHTML = `<h2>Pong Game</h2><p>A fun recreation of the classic Pong game, with added speed modes and clean JavaScript implementation.</p>`;
      }
      modal.style.display = 'flex';
    }
    function closeModal() {
      document.getElementById('projectModal').style.display = 'none';
    }
    window.onclick = function(e) {
      if (e.target === document.getElementById('projectModal')) closeModal();
    }

    const canvas = document.getElementById("hero-canvas");
    const ctx = canvas.getContext("2d");
    let balls = [];
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    class Ball {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.radius = Math.random() * 4 + 2;
        this.color = `rgba(0,0,0,${Math.random().toFixed(1)})`;
        this.dx = (Math.random() - 0.5) * 1.5;
        this.dy = (Math.random() - 0.5) * 1.5;
      }
      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.fill();
      }
      update() {
        this.x += this.dx;
        this.y += this.dy;
        if (this.x < 0 || this.x > canvas.width) this.dx *= -1;
        if (this.y < 0 || this.y > canvas.height) this.dy *= -1;
        this.draw();
      }
    }

    for (let i = 0; i < 75; i++) {
      balls.push(new Ball());
    }

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      balls.forEach(ball => ball.update());
      requestAnimationFrame(animate);
    }
    animate();
    window.addEventListener("resize", () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    });
  </script>
</body>