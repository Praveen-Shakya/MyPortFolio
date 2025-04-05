import React from "react";
import "./Projects.css";
import { assets } from "../../assets/assets";
import { image, title } from "framer-motion/client";

const projects = [
  {
    title: "E Restuarent",
    image: `${assets.FoodPanda}`,
    technologies: "React.js, JavaScript, TailwindCSS, HTML, PaymentGateway",
    github: "#",
    live: "#",
  },
  {
    title: "Chat-App",
    image: `${assets.ChatApp}`,
    technologies: "ReactJs, Redux, Redux-Toolkit, Web API, HTML, CSS",
    github: "https://github.com/Praveen-Shakya/ChatApp",
    live: "#",
  },
  {
    title: "BIMT Institute",
    image: `${assets.CollegeWebsite}`,
    technologies: "React-Js, Next-Js, Javascript, TailwindCSS, HTML, CSS, Firebases",
    github: "#",
    live: "#",
  },
  {
    title: "Weather App",
    image: `${assets.WeatherAppImg}`,
    technologies: "JavaScript, Web-APIs, CSS, HTML",
    github: "https://github.com/Praveen-Shakya/WeatherApp",
    live: "https://weather-app-nine-weld-25.vercel.app/"
  }
];

const Projects = () => {
  return (
    <div className="projects-container">
      <h2 className="projects-title">My Projects</h2>
      <p className="projects-description">
        Welcome to my web development portfolio! Explore a collection of my recent projects below.
      </p>
      <p className="projects-subtext">Click on the project to learn more about the technologies used.</p>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <img src={project.image} alt={project.title} className="project-image" />
            <div className="project-info">
              <h3>{project.title}</h3>
              <p>{project.technologies}</p>
              <div className="project-links">
                <a href={project.live} target="_blank" rel="noopener noreferrer">🔗</a>
                <a href={project.github} target="_blank" rel="noopener noreferrer">🐱</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;