import React from 'react'
import './Intro.css'
import { assets } from '../../assets/assets'
import { Link } from 'react-scroll'

const Intro = () => {
  return (
    <section className='intro'>
      <div className="introContent">
        <span className='hello'>Hello,</span>
        <span className='introText'>I'm <span className='introName'>Praveen</span> <br />Web Developer</span>
        <p className='introPara'>I am a passionate and skilled web developer with extensive <br /> experience in designing and building dynamic, user-friendly, <br /> and visually appealing websites.</p>
        <a href='https://www.linkedin.com/in/praveen-shakya-7b22562ba/' target='blank'><button className="btn"><img src={assets.hire} alt="Hire" className='btnImg' />Hire Me</button></a>
      </div>
      <img src={assets.bgImg} alt="Profile" className='bg' />
    </section>
  )
}

export default Intro
