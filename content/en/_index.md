---
title: Aarya Dani
---

<head>
  <style>
    body {
      margin: 0;
      padding: 0;
      font-family: Georgia, serif;
    }
    .btn-social {
      background-color: #ff0000; /* YouTube red */
      color: #fff; /* White text */
      width: 60px; /* Increased button size */
      height: 60px; /* Increased button size */
      font-size: 28px; /* Increased icon size */
      border-radius: 50%;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      transition: all 0.3s ease;
    }
    .btn-social.btn-linkedin {  /* Target LinkedIn button */
      background-color: #0077b5; /* LinkedIn blue */
      color: #fff; /* White text */
    }
    .btn-social.btn-instagram {
      background: linear-gradient(to right, #f44336, #e91e63); /* Purple to orange gradient */
      color: #fff; /* White text */
    }
    .btn-social.btn-github {
      background-color: #333; /* GitHub dark gray */
      color: #fff; /* White text */
    }
    .btn-social:hover {
      background-color: white; 
      color: #e00000;
    }
    .footer {
      display: none;
      background-color: #f1f1f1;
      text-align: center;
      padding: 20px;
    }
    .projects {
      opacity: 0;
      transition: opacity 0.5s ease;
      background-color: #e2e2e2;
      padding: 20px;
    }
    #lead-down {
      position: fixed;
      bottom: 20px;
      left: 50%;
      transform: translateX(-50%);
      z-index: 20;
      cursor: pointer;
    }
    #lead-down span {
      font-size: 2em;
      color: white;
    }
    .project-tab {
      display: flex;
      flex-wrap: wrap;
      gap: 20px;
    }
    .project-item {
      flex: 1 1 calc(50% - 20px); /* Two items per row with gap */
      text-align: center;
    }
    .project-item img {
      width: 100%;
      height: 300px; /* Fixed height for all images */
      object-fit: cover; /* Ensure images fit within the fixed height */
    }
    .project-item p {
      margin-top: 10px;
      font-size: 1em;
      color: #333;
    }
  </style>
</head>

{{< blocks/cover title="Aarya Dani" image_anchor="top" height="full" >}}
<p class="lead mt-5">Hello, I am Aarya Dani. I currently attend the University of Pittsburgh, currently studying chemical engineering. I recently completed an internship at Johnson & Johnson, where I leveraged my skills to develop Hugo websites that effectively showcase diverse datasets. Drawing from my engineering background, I am passionate about bridging the gap between engineering principles, data science insights, user requirements, and cutting-edge technology. Currently at Merck in their Vaccine Manufacturing Co-Op program, I hope to apply these skills in my future work. </p>

<p>Here is some of my contact information:</p>

<div class="container">
  <div class="row">
    <div class="col-lg-8 mx-auto text-center">
      <a class="btn btn-lg btn-social me-3 mb-4 btn-linkedin" href="https://www.linkedin.com/in/aarya-dani-82413b287/" target="_blank">
        <i class="fab fa-linkedin-in"></i>
      </a>
      <a class="btn btn-lg btn-social me-3 mb-4 btn-youtube" href="https://www.youtube.com/@vrajvaishnavkendrasoutheas6099" target="_blank">
        <i class="fab fa-youtube"></i>
      </a>
      <a class="btn btn-lg btn-social me-3 mb-4 btn-github" href="https://github.com/AaryaDani" target="_blank">
        <i class="fab fa-github"></i>
      </a>
    </div>
  </div>
</div>

<div id="lead-down">
  <span>
    <i class="fa fa-chevron-down" aria-hidden="true"></i>
  </span>
</div>

<div class="projects" id="projects">
  <div class="project-tab">
    <div class="project-item">
      <a href="personal-projects/yolo/"><img src="/images/racist.png" alt="YOLO Object Detection"></a>
      <p>YOLO Object Detection</p>
    </div>
    <div class="project-item">
      <a href="professional-portfolio/jj-content/final-presentation/"><img src="/images/J&J.png" alt="J&J Internship Experience"></a>
      <p>J&J Internship Experience</p>
    </div>
    <div class="project-item">
      <a href="personal-projects/pong/"><img src="/images/Pong.jpg" alt="Pong"></a>
      <p>Pong</p>
    </div>
    <div class="project-item">
      <a href="professional-portfolio/projects--papers/balloon/"><img src="/images/Balloon.png" alt="Balloon Project"></a>
      <p>Balloon Project</p>
    </div>
  </div>
</div>

<script>
  document.getElementById('lead-down').addEventListener('click', function() {
    document.getElementById('footer').style.display = 'block';
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: 'smooth'
    });
  });

  window.addEventListener('scroll', function() {
    const projectsSection = document.getElementById('projects');
    const scrollPosition = window.scrollY;
    const windowHeight = window.innerHeight;
    const documentHeight = document.body.offsetHeight;

    if (scrollPosition > 0 && scrollPosition < documentHeight - windowHeight) {
      const opacity = scrollPosition / (documentHeight - windowHeight);
      projectsSection.style.opacity = opacity;
    } else if (scrollPosition === 0) {
      projectsSection.style.opacity = 0;
    } else if (scrollPosition >= documentHeight - windowHeight) {
      projectsSection.style.opacity = 1;
    }
  });
</script>
{{< /blocks/cover >}}
