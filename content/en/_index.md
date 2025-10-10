---
title: Aarya Dani
---
<head>
  <style>
    /* Base styles */
    body {
      opacity: 0;
      transition: opacity 0.6s ease-in-out;
    }
    body.loaded {
      opacity: 1;
    }
    body {
      margin: 0;
      padding: 0;
      font-family: 'Roboto', 'Segoe UI', sans-serif;
      color: #333;
      line-height: 1.6;
    }
    /* Social buttons with modern styling */
    .social-container {
      display: flex;
      justify-content: center;
      gap: 1.5rem;
      margin-bottom: 3rem;
    } 
    .btn-social {
      width: 60px;
      height: 60px;
      border-radius: 50%;
      background-color: white;
      color: #2d3748;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      font-size: 1.5rem;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
      transition: all 0.3s ease;
      border: none;
      cursor: pointer;
    }
    .btn-social:hover {
      transform: translateY(-5px);
      box-shadow: 0 7px 14px rgba(0, 0, 0, 0.1);
    }
    .btn-linkedin {
      background-color: #0077b5;
      color: white;
    }
    .btn-youtube {
      background-color: #ff0000;
      color: white;
    }
    .btn-github {
      background-color: #333;
      color: white;
    }
    .btn-linkedin:hover,
    .btn-youtube:hover,
    .btn-github:hover {
      background-color: white;
      color: #2d3748; /* Adjust this to a suitable dark color */
      border: 1px solid #2d3748; /* Optional: add border for better visibility */
    }
    /* Scroll down indicator - Changed color to white */
    #lead-down {
      position: absolute;
      bottom: 2rem;
      left: 50%;
      transform: translateX(-50%);
      cursor: pointer;
      animation: bounce 2s infinite;
    }
    #lead-down span {
      color: white; /* Changed from #2d3748 to white */
      font-size: 2rem;
      opacity: 0.9; /* Increased opacity for better visibility */
    }
    @keyframes bounce {
      0%, 20%, 50%, 80%, 100% {
        transform: translateY(0) translateX(-50%);
      }
      40% {
        transform: translateY(-15px) translateX(-50%);
      }
      60% {
        transform: translateY(-7px) translateX(-50%);
      }
    }
    /* Projects section - Added transition and initial state */
    .projects {
      padding: 5rem 2rem;
      background-color: #f8f9fa;
      opacity: 0; /* Start invisible */
      transform: translateY(20px); /* Start below its final position */
      transition: opacity 0.6s ease, transform 0.6s ease; /* Smooth transition */
    }
    .projects.visible {
      opacity: 1;
      transform: translateY(0);
    }
    .projects-header {
      text-align: center;
      margin-bottom: 3rem;
    }
    .projects-title {
      font-size: 2.5rem;
      font-weight: 700;
      color: #2d3748;
      margin-bottom: 1rem;
    }
    .projects-subtitle {
      font-size: 1.1rem;
      color: #718096;
      max-width: 600px;
      margin: 0 auto;
    }
    .project-tab {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 2rem;
      max-width: 1200px;
      margin: 0 auto;
    }
    .project-item {
      background-color: white;
      border-radius: 10px;
      overflow: hidden;
      box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
      transition: transform 0.3s ease, box-shadow 0.3s ease;
    }
    .project-item:hover {
      transform: translateY(-10px);
      box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
    }
    .project-image-container {
      height: 220px;
      overflow: hidden;
      position: relative;
    }
    .project-item img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 0.5s ease;
    }
    .project-item:hover img {
      transform: scale(1.1);
    }
    .project-content {
      padding: 1.5rem;
    } 
    .project-title {
      font-size: 1.25rem;
      font-weight: 600;
      margin-bottom: 0.5rem;
      color: #2d3748;
    }
    .project-description {
      font-size: 0.95rem;
      color: #718096;
      margin-bottom: 1rem;
    }
    .project-link {
      display: inline-block;
      padding: 0.5rem 1rem;
      background-color: #4299e1;
      color: white;
      border-radius: 5px;
      text-decoration: none;
      font-weight: 500;
      transition: background-color 0.3s ease;
    }
    .project-link:hover {
      background-color: #3182ce;
    }
    /* Responsive design */
    @media (max-width: 768px) {
      .intro-title {
        font-size: 2.5rem;
      }
      .intro-subtitle {
        font-size: 1.25rem;
      }
      .project-tab {
        grid-template-columns: 1fr;
      }
    }
  </style>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
</head>

{{< blocks/cover title="Aarya Dani" title_class="red-bold-title" image_anchor="top" height="full" >}}

<p class="lead mt-5">Hello, I am Aarya Dani! I currently attend the University of Pittsburgh, studying chemical engineering. In the summer of 2024, I completed an internship at Johnson & Johnson, where I leveraged my skills to develop Hugo websites that effectively showcase diverse datasets. Drawing from my engineering background, I am passionate about bridging the gap between engineering principles, data science insights, user requirements, and cutting-edge technology. Currently at Merck in their Global Engineering Solutions Co-Op program, I hope to apply these skills in my future work. </p>

<p>Here is some of my contact information:</p>

<div class="container">
  <div class="row">
    <div class="col-lg-8 mx-auto text-center">
      <a class="btn btn-lg btn-social me-3 mb-4 btn-linkedin" href="https://www.linkedin.com/in/aarya-dani-82413b287/" target="_blank">
        <i class="fab fa-linkedin-in"></i>
      </a>
      <a class="btn btn-lg btn-social me-3 mb-4 btn-youtube" href="https://www.youtube.com/channel/UCV9CfYEKDSPeG1FtkOhksqA" target="_blank">
        <i class="fab fa-youtube"></i>
      </a>
      <a class="btn btn-lg btn-social me-3 mb-4 btn-github" href="https://github.com/AaryaDani" target="_blank">
        <i class="fab fa-github"></i>
      </a>
    </div>
  </div>
</div>
{{< /blocks/cover >}}

<div id="lead-down">
  <span>
    <i class="fa fa-chevron-down" aria-hidden="true"></i>
  </span>
</div>

<!-- Projects Section -->
<div class="projects" id="projects">
<div class = >
  <div class="project-tab">
  <div class="project-item">
      <div class="project-image-container">
        <img src="/images/rb.png" alt="rb">
      </div>
      <div class="project-content">
        <h3 class="project-title">Retrobowl</h3>
        <p class="project-description">A version of retrobowl on the computer!.</p>
        <a href="personal-projects/rb/" class="project-link">Learn More</a>
      </div>
    </div>
    <div class="project-item">
      <div class="project-image-container">
        <img src="/images/Merck.png" alt="GES Delivery Co-Op Experience">
      </div>
      <div class="project-content">
        <h3 class="project-title">GES Project Engineer Co-Op</h3>
        <p class="project-description">Summary of my 2nd Co-Op at Merck, including projects and key learnings.</p>
        <a href="professional-portfolio/internship-content/ges/" class="project-link">Learn More</a>
      </div>
    </div>
    <div class="project-item">
      <div class="project-image-container">
        <img src="/images/Merck.png" alt="Vaccine Manufacturing Operations Co-Op Experience">
      </div>
      <div class="project-content">
        <h3 class="project-title">Vaccine Manufacturing Co-Op</h3>
        <p class="project-description">Summary of my 1st Co-Op at Merck, including projects and key learnings.</p>
        <a href="professional-portfolio/internship-content/lvv/" class="project-link">Learn More</a>
      </div>
    </div>
  <div class="project-item">
      <div class="project-image-container">
        <img src="/images/Johnson & Johnson.png" alt="J&J Internship Experience">
      </div>
      <div class="project-content">
        <h3 class="project-title">Data Engineering Internship</h3>
        <p class="project-description">Summary of my internship at Johnson & Johnson, including projects and key learnings.</p>
        <a href="professional-portfolio/internship-content/jj/" class="project-link">Learn More</a>
      </div>
    </div>
    <div class="project-item">
      <div class="project-image-container">
        <img src="/images/FYEC.png" alt="AI in Waste Management">
      </div>
      <div class="project-content">
        <h3 class="project-title">AI in Waste Management</h3>
        <p class="project-description">Paper regarding the usage of artificial intelligence in waste management.</p>
        <a href="professional-portfolio/projects--papers/fyec-paper/" class="project-link">View Project</a>
      </div>
    </div>
    <div class="project-item">
      <div class="project-image-container">
        <img src="/images/Docsy.png" alt="Website Development">
      </div>
      <div class="project-content">
        <h3 class="project-title">Website Development</h3>
        <p class="project-description">Tutorial series on developing a Docsy themed website.</p>
        <a href="personal-projects/website/" class="project-link">View Project</a>
      </div>
    </div>
        <div class="project-item">
      <div class="project-image-container">
        <img src="/images/racist.png" alt="YOLO Object Detection">
      </div>
      <div class="project-content">
        <h3 class="project-title">YOLO Object Detection</h3>
        <p class="project-description">Implementation of real-time object detection using the YOLO (You Only Look Once) algorithm.</p>
        <a href="personal-projects/yolo/" class="project-link">View Project</a>
      </div>
    </div>
    <div class="project-item">
      <div class="project-image-container">
        <img src="/images/Balloon.png" alt="Balloon Project">
      </div>
      <div class="project-content">
        <h3 class="project-title">Balloon Project</h3>
        <p class="project-description">An engineering project focused on designing and optimizing heat transfer.</p>
        <a href="professional-portfolio/projects--papers/balloon/" class="project-link">View Project</a>
      </div>
    </div>
    <div class="project-item">
  <div class="project-image-container">
    <img src="/images/ORC.png" alt="ORC">
  </div>
  <div class="project-content">
    <h3 class="project-title">Organic Rankine Cycle</h3>
    <p class="project-description"> A thermodynamics project regarding the organic rankine cycle. </p>
    <a href="professional-portfolio/projects--papers/Rankine/" class="project-link">View Project</a>
  </div>
</div>
        <div class="project-item">
      <div class="project-image-container">
        <img src="/images/C++.png" alt"=C++ Final">
      </div>
      <div class="project-content">
        <h3 class="project-title">C++ Final Project</h3>
        <p class="project-description">An engineering project focused on designing and optimizing balloon-based systems.</p>
        <a href="professional-portfolio/projects--papers/c_final_project/" class="project-link">View Project</a>
      </div>
  </div>
        <div class="project-item">
      <div class="project-image-container">
        <img src="/images/Image8.png" alt"=C++ Final">
      </div>
  <div class="project-content">
        <h3 class="project-title">Lab Notebook</h3>
        <p class="project-description">Engineering projects based on Physics 2 concepts.</p>
        <a href="professional-portfolio/projects--papers/lab-notebook/" class="project-link">View Project</a>
      </div>
</div>
    <div class="project-item">
      <div class="project-image-container">
        <img src="/images/Pong.png" alt="Pong">
      </div>
      <div class="project-content">
        <h3 class="project-title">Pong Game</h3>
        <p class="project-description">A recreation of the classic Pong game with modern features and gameplay improvements.</p>
        <a href="personal-projects/pong/" class="project-link">Play Game</a>
      </div>
    </div>




<script>


  function handleScroll() {
    const projectsSection = document.getElementById('projects');
    const scrollPosition = window.scrollY || window.pageYOffset;
    
    // Calculate opacity based on scroll position
    const opacity = Math.min(scrollPosition / 500, 1); // Adjust 500 to control how quickly it appears
    projectsSection.style.opacity = opacity;
    
    // Update the last scroll position
    this.lastScrollPosition = scrollPosition;
  }
  
  // Initialize last scroll position
  let lastScrollPosition = window.scrollY || window.pageYOffset;
  
  // Add event listener for scroll
  window.addEventListener('scroll', handleScroll);
  
  // Smooth scroll to projects section when arrow is clicked
  document.getElementById('lead-down').addEventListener('click', function() {
    const projectsSection = document.getElementById('projects');
    window.scrollTo({
      top: projectsSection.offsetTop,
      behavior: 'smooth'
    });
  });
  
  // Make projects visible when they come into view (optional)
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // You might want to remove the opacity transition here
        // to avoid a jump when the element becomes visible
        entry.target.style.opacity = 1; 
      }
    });
  }, { threshold: 0.1 }); // 10% of the element is visible
  
  observer.observe(document.getElementById('projects'));

  document.addEventListener("DOMContentLoaded", function () {
    // ... (rest of your existing code) ...
  });

  document.addEventListener("DOMContentLoaded", function() {
    document.body.classList.add("loaded");
  });


</script>