import React from "react";
import "./About.css"; // Import External CSS
import { assets } from "../../assets/assets";

const About = () => {
  return (
    <section className="about-me-section">
      <h2>About Me</h2>

      <div className="about-me-container">
        {/* Profile Image Left */}
        <div className="profile-img">
          <img src={assets.Me} alt="Profile" />
        </div>

        {/* Right Side: About Me + Cards */}
        <div className="about-content">
          <div className="about-me-text">
            <p>
              I am a <strong>Frontend Web Developer</strong>. I build projects
              using <strong>HTML, CSS, JavaScript, React, and TailwindCSS</strong>. 
              I am always eager to learn new technologies and improve my skills.
            </p>
          </div>

          {/* Cards Section */}
          <div className="cards-container">
            <div className="card">
              <span>💻</span>
              <h3>Languages</h3>
              <p>HTML, CSS, JavaScript, ReactJS, TailwindCSS</p>
            </div>

            <div className="card">
              <span>🎓</span>
              <h3>Education</h3>
              <p>BCA - Bachelor of Computer Applications</p>
            </div>

            <div className="card">
              <span>📂</span>
              <h3>Projects</h3>
              <p>Built more than 8 projects</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
