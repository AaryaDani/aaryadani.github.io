---
title: Resume
linkTitle: About Me
url: "/about-me/"
menu: {main: {weight: 20}}
cascade:
  - type: "docs"
no_list: true
---

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Resume</title>
  <style>
    .container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 20px;
    }
    .row {
      display: flex;
      flex-wrap: wrap;
      margin: -10px;
      align-items: stretch; /* Ensures all columns stretch to the same height */
    } 
    .col-lg-12, .col-lg-4 {
      padding: 10px;
      box-sizing: border-box;
    }
    .col-lg-12 {
      flex: 0 0 100%;
    }
    .col-lg-4 {
      flex: 0 0 33.3333%;
      display: flex;
      flex-direction: column;
    }
    .feature-card {
      border: 1px solid #ddd;
      border-radius: 4px;
      padding: 20px;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
      position: relative;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      height: 100%; /* Ensures all cards have the same height */
    }
    .card-header-custom {
      display: flex;
      align-items: center;
      margin-bottom: 20px;
    }
    .card-header-custom i {
      margin-right: 10px;
    }
    .section-text-bold {
      font-weight: bold;
      margin: 0 0 10px 0;
    }
    .section-text {
      margin: 0;
    }
    .resume-section {
      max-width: 1200px;
      margin: 0 auto;
      padding: 20px;
    }
    .section-title {
      font-size: 1.3em;
      color: #0077b5;
      margin-bottom: 10px;
      border-bottom: 1px solid #0077b5;
      padding-bottom: 5px;
    }
    .section-content p {
      margin: 0 0 15px;
    }
    .section-content a {
      color: #0077b5;
      text-decoration: none;
    }
    .section-content a:hover {
      text-decoration: underline;
    }
    .profile-pic {
      width: 200px; /* Set the width to 200px */
      height: auto; /* Maintain aspect ratio */
      border-radius: 0%;
      margin-right: 20px;
    }
  </style>
  <script src="https://kit.fontawesome.com/a076d05399.js" crossorigin="anonymous"></script>
</head>
<body>
  <div class="container">
    <!-- Contact Information and Education -->
    <div class="row">
      <div class="col-lg-12">
        <div class="feature-card">
          <div class="card-header-custom">
            <img src="/images/Aarya.jpeg" alt="Aarya Dani" class="profile-pic">
            <div>
              <h4 class="section-text-bold">Contact Information & Education</h4>
              <div class="section-content">
                <p>Aarya Dani<br>
                <a href="mailto:AND321@pitt.edu">AND321@pitt.edu</a> | <a href="https://www.linkedin.com/in/aarya-dani" target="_blank">linkedin.com/in/aarya-dani</a> | <a href="https://aaryadani.github.io/" target="_blank">https://aaryadani.github.io/</a></p>
                <p><strong>University of Pittsburgh - Frederick Honors Program, Pittsburgh, PA</strong><br>
                Bachelor of Science in Chemical Engineering, August 2023 – Present<br>
                Relevant Coursework: Honors Calculus 1 & 2, Honors Physics 1, General Chemistry 1 & 2</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-lg-4">
        <div class="feature-card">
          <h4 class="section-title">Work Experience</h4>
          <div class="card-header-custom">
            <i class="fas fa-vaccine"></i>
            <h4 class="section-text-bold">Vaccine Manufacturing Co-op, Merck Sharp & Dohme</h4>
          </div>
          <p class="section-text">
            May 2025 – August 2025<br>
            • Supported vaccine manufacturing by troubleshooting operational issues, ensuring GMP compliance.<br>
            • Led deviation investigations to identify root causes and implement corrective actions.<br>
            • Drove process improvements using Lean Six Sigma, enhancing yield and reducing cycle times.
          </p>
        </div>
      </div>
      <div class="col-lg-4">
        <div class="feature-card">
          <h4 class="section-title">Work Experience</h4>
          <div class="card-header-custom">
            <i class="fas fa-database"></i>
            <h4 class="section-text-bold">Data Engineering Intern, Johnson & Johnson</h4>
          </div>
          <p class="section-text">
            June 2024 – August 2024<br>
            • Collaborated with Quality & Compliance team to develop a data dictionary for over 40 unique drug products.<br>
            • Converted over 15,000 source files using an automated R script, improving build time by over 50%.<br>
            • Refactored and tested R code to support commercially launched products and improve performance.
          </p>
        </div>
      </div>
      <div class="col-lg-4">
        <div class="feature-card">
          <h4 class="section-title">Work Experience</h4>
          <div class="card-header-custom">
            <i class="fas fa-flask"></i>
            <h4 class="section-text-bold">Cardiovascular Research Assistant, University of Pittsburgh</h4>
          </div>
          <p class="section-text">
            February 2024 – May 2024<br>
            • Conducted experiments for cell culture, immunolabeling, fluorescence imaging, and image processing.<br>
            • Used FlexCell to observe biochemical changes, cell migration, and signaling under fluid shear load in vitro.<br>
            • Managed and analyzed patient heart condition data, categorizing over 200 cases based on medical history.
          </p>
        </div>
      </div>
    </div>
    <!-- Leadership Experience -->
    <div class="row">
      <div class="col-lg-4">
        <div class="feature-card">
          <h4 class="section-title">Leadership Experience</h4>
          <div class="card-header-custom">
            <i class="fas fa-bullhorn"></i>
            <h4 class="section-text-bold">Opportunities Chair, Society for Advancement of Chicanos/Hispanics & Native Americans in Science</h4>
          </div>
          <p class="section-text">
            August 2023 – Present<br>
            • Coordinated 15+ events providing research opportunities and professional development for undergraduate students
          </p>
        </div>
      </div>
      <div class="col-lg-4">
        <div class="feature-card">
          <h4 class="section-title">Leadership Experience</h4>
          <div class="card-header-custom">
            <i class="fas fa-chalkboard-teacher"></i>
            <h4 class="section-text-bold">Representative, American Institute of Chemical Engineers</h4>
          </div>
          <p class="section-text">
            August 2024 – Present<br>
            • Provided feedback for several professional development events, ensuring collaboration between members  
            <br>
            <br>
            <br>
          </p>
        </div>
      </div>
      <div class="col-lg-4">
        <div class="feature-card">
          <h4 class="section-title">Leadership Experience</h4>
          <div class="card-header-custom">
            <i class="fas fa-user-shield"></i>
            <h4 class="section-text-bold">Group Leader, Chi Alpha</h4>
          </div>
          <p class="section-text">
            August 2024 – Present<br>
            • Led events with 100+ members while mentoring peers, fostering leadership, collaboration, and professional growth
            <br>
            <br>
            <br>
            <br>
          </p>
        </div>
      </div>
    </div>
    <!-- Other Sections -->
    <div class="row">
      <div class="col-lg-12">
        <div class="feature-card">
          <div class="card-header-custom">
            <h4 class="section-text-bold">Projects and Publications</h4>
          </div>
          <div class="section-content">
            <p><strong>YOLO Object Detection Project| Python </strong><br>
            October 2024 – Present<br>
            • Developed a real-time object detection system using the YOLO model, detecting over 40 types of objects with accuracy and efficiency</p>
            <p><strong>First Year Engineering Conference</strong><br>
            January 2024 – April 2024<br>
            • Authored and delivered a scholarly paper in collaboration with two fellow students, elucidating the application of artificial intelligence within the realm of waste management, with a specific focus on enhancing sustainability practices</p>
            <p><strong>Engineering Sustainability Project | C++ </strong><br>
            March 2024 – April 2024<br>
            • Developed a program featuring quiz-based learning on paper topics, a user-authenticated sustainability game, and an interactive explanation of neural network operations
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-lg-12">
        <div class="feature-card">
          <div class="card-header-custom">
            <h4 class="section-text-bold">Technical Skills</h4>
          </div>
          <div class="section-content">
            <p><strong>Systems & Applications:</strong> C++, MATLAB, R, Hugo, Jira, BitBucket, Terminal, ASPEN, Microsoft Office<br>
            <strong>Laboratory Skills:</strong> ELISA, Western Blotting, Southern Blotting, Gram Staining & Cloning, Mammalian Cell Culture, CRISPR gene editing, 3-D Printing, Polymerase Chain Reaction (PCR), Fluorescence Microscopy<br>
             <strong>Laboratory Certifications:</strong> OSHA, CPR, CITI Program, SAChE Certificate Program
            </p>
          </div>
        </div>
      </div>
    </div>
</body>
</html>