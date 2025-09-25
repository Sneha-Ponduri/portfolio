import React from "react";
import "../styles/Home.css";


const Home = () => {
  // Smooth scroll handler
  const handleScroll = (e, id) => {
    e.preventDefault(); // prevent default jump for <a>
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="home">
      {/* Navbar */}
      <nav className="navbar">
        <div className="logo">Sneha Ponduri</div>
        <ul className="nav-links">
          <li>
            <a href="#education" onClick={(e) => handleScroll(e, "education")}>
              Education
            </a>
          </li>
          <li>
            <a href="#experience" onClick={(e) => handleScroll(e, "experience")}>
              Experience
            </a>
          </li>
          <li>
            <a href="#skills" onClick={(e) => handleScroll(e, "skills")}>
              Skills
            </a>
          </li>
          <li>
            <a href="#projects" onClick={(e) => handleScroll(e, "projects")}>
              Projects
            </a>
          </li>
          <li>
            <a href="#contact" onClick={(e) => handleScroll(e, "contact")}>
              Contact
            </a>
          </li>
        </ul>
      </nav>

      {/* Hero Section */}
      <div className="hero">
        <div className="hero-text">
          <h1>Hi, I'm Sneha Ponduri</h1>
          <h2>FullStack developer and AI enthusiast</h2>
          <p>
             I am a dedicated and enthusiastic student with a rapid learning aptitude, deeply passionate about 
computer science. I thrive on industry engagement, consistently seeking self-development. My strong 
interest in Fullstack Web Development and Generative AI is complemented by hands-on project experience 
in these domains. Aspiring software development intern, aiming to contribute innovation and skills.
          </p>
          <div className="buttons">
            {/* Contact Me button scrolls to ContactForm */}
            <button className="btn primary" onClick={(e) => handleScroll(e, "contact")}>
              Contact Me
            </button>

            {/* Resume button opens Google Drive link */}
            <a
              href="https://drive.google.com/file/d/1JNEK2bDz54weYIUBiTKR9zey0CZSTFoC/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="btn primary"
              style={{ marginLeft: "15px" }}
            >
              Resume
            </a>

           
          </div>
        </div>

        <div className="hero-image">
         <img src="/finalprofile.png" alt="Profile" />

        </div>
      </div>
    </div>
  );
};

export default Home;
