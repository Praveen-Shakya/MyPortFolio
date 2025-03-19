import React from "react";
import "./Skill.css";
import { assets } from "../../assets/assets";

const Skill = () => {
  return (
    <section className="skills">
      <span className="skillTitle">What I do</span>
      <span className="skillDesc">
        I am a skilled and passionate web designer with expirience in Creating
        visually appealing and user friendly websites. I have a strong
        understanding of design and a keen eye for detail. I am proficient in
        HTML, CSS & JavaScript, as well as design software such as Adobe
        Photoshop and Illustrator.
      </span>
      <div className="skillBars">
        <div className="skillBar">
          <img src={assets.UIDesign} alt="UI/Ux Design" className="skillBarImg" />
          <div className="skillBarText">
          <h2>UI/UX Design</h2>
          <p>Designed User Interfaces and UX For The Projects.</p>
          </div>
        </div>
        <div className="skillBar">
          <img src={assets.WebDesign} alt="Web Design" className="skillBarImg" />
          <div className="skillBarText">
          <h2>Website Design</h2>
          <p>Create Website Or Web Pages for Clients.</p>
          </div>
        </div>
        <div className="skillBar">
          <img src={assets.AppDesign} alt="App Design" className="skillBarImg" />
          <div className="skillBarText">
          <h2>App Design</h2>
          <p>Practice In Many Web App projects.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skill;
