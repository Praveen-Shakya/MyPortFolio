import React from "react";
import "./Intro.css";
import { assets } from "../../assets/assets";
import { Link } from "react-scroll";

const Intro = () => {
  return (
    <section className="intro">
      <div className="introImg">
        <img src={assets.bgImg} alt="Profile" className='bg' />
      </div>
      <div className="introContent">
        
        <span className="introText">
            Hello, I'm <span className="introName">Praveen Shakya</span>
        </span>
        <span className="introSkill">Frontend Developer</span>
        <p className="introPara">
          I am a passionate and skilled Frontend Developer with extensive 
          experience in designing <br /> and building dynamic, user-friendly, 
          and visually appealing websites.
        </p>
        <div className="btns">
        <a
          href="https://www.linkedin.com/in/praveen-shakya-7b22562ba/"
          target="blank"
        >
          <button className="btn btn1">
            <img src={assets.hire} alt="Hire" className="btnImg" />
            Hire Me
          </button>
        </a>
        <a href="/Resume.docx" target="blank">
          <button className="btn"><i class="fa-solid fa-cloud-arrow-down">Resume</i></button>
        </a>
        </div>
      </div>
    </section>
  );
};

export default Intro;
