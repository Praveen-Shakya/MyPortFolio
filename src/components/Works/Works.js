import React from 'react'
import './Works.css'
import { assets } from '../../assets/assets'

const Works = () => {
  return (
    <section className='works'>
      <h2 className="worksTitle">My PortFolio</h2>
      <span className='worksDesc'>I Take pride in paying attention to the smallest details and making sure that my work is pixel perfect I am excited to bring my skills and experience to help business achieve their goals and create a strong online presence.</span>
      <div className="worksImgs">
        <img src={assets.PortFolio1} alt="" className="worksImg" />
        <img src={assets.PortFolio2} alt="" className="worksImg" />
        <img src={assets.PortFolio3} alt="" className="worksImg" />
        <img src={assets.PortFolio4} alt="" className="worksImg" />
        <img src={assets.PortFolio5} alt="" className="worksImg" />
        <img src={assets.PortFolio6} alt="" className="worksImg" />
      </div>
      <button className='worksBtn'>See More...</button>
    </section>
  )
}

export default Works
