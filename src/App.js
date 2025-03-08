import React, { useState } from "react";
import "./App.css";

const Portfolio = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent! We will contact you soon.");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div>
      <title>From Learning to Creating | My Portfolio</title>
      <header>
        <h1>DIVYA</h1>
        <nav>
          <ul>
            <li><a href="#about">About</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </header>

      <section id="about">
        <h2>About Me</h2>
        <p>Welcome to my portfolio! I am a student passionate about coding and web development...</p>
      </section>

      <section id="projects">
        <h2>My Projects</h2>
        <div className="project">
          <h3>Detection of Kidney Stones</h3>
          <img src="image1.jpg" alt="Kidney Stone Detection" width="300" height="200" />
          <img src="image2.jpg" alt="Kidney Stone Detection" width="300" height="200" />
          <p><strong>Overview:</strong> Automated system for detecting kidney stones using medical imaging.</p>
          <ul>
            <li>Technologies: Python, MATLAB</li>
            <li>Methods: Machine Learning, Image Processing</li>
            <li>Benefits: Early detection, improved diagnostic accuracy</li>
          </ul>
        </div>

        <div class="project">
            <h3>Simple Frontend Web Page</h3>
            <img src="image3.jpg" alt="Frontend Web Page" width="300" height="200" />
            <img src="image4.jpg" alt="Frontend Web Page" width="300" height="200" />
            <p><strong>Overview:</strong> A simple web page design for displaying recipes using HTML and CSS.</p>
            <ul>
                <li>Features: Recipe cards, responsive design, hover effects</li>
                <li>Technologies: HTML, CSS</li>
                <li>Focus: Clean UI, responsive layout</li>
            </ul>
        </div>
      </section>

      <section id="skills">
        <h2>Skills</h2>
        <ul>
          <li>HTML & CSS</li>
          <li>JavaScript</li>
          <li>React</li>
          <li>Python</li>
         
        </ul>
      </section>

      <section id="contact">
        <h2>Contact Me</h2>
        <form onSubmit={handleSubmit}>
          <label>Name:</label>
          <input type="text" name="name" value={formData.name} onChange={handleChange} required />
          
          <label>Email:</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} required />
          
          <label>Message:</label>
          <textarea name="message" value={formData.message} onChange={handleChange} required></textarea>
          
          <button type="submit">Send</button>
        </form>
      </section>

      <footer>
        <p>&copy; 2024 DIVYA. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Portfolio;
