import React, { useRef } from 'react'
import './Contact.css'
import { assets } from '../../assets/assets'
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_jbetqhf', 'template_escqcli', form.current,'8gGZQxIj9jGdDTGPA')
      .then(
        () => {
          console.log('SUCCESS!');
          e.target.reset();
          alert('Email Sent !');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };
  return (
    <section id='contactPage'>
      <div className="clients">
        <h1 className="contactPageTitle">My Skills</h1>
        <p className="clientDesc">
            I have a strong passion for web developement and specialize in <b className='bold'> Frontend Technology </b>
            like<b className='bold'> HTML, CSS, JavaScript, ReactJS </b> and <b className='bold'>TailwindCSS </b>. 
        </p>
        <div className="clientImgs">
            <img src={assets.HTMLCSSLogo} alt="HTML CSS" className="clientImg" />
            <img src={assets.Js} alt="Client" className="clientImg" />
            <img src={assets.React} alt="Client" className="clientImg" />
            <img src={assets.Tailwind} alt="Client" className="clientImg" />
        </div>
      </div>
      <div id="contact">
        <h1 className="contactPageTitle">Contact Me</h1>
        <span className="contactDesc">
            Please Fill out the form below to discuss anywork opportunities.
        </span>
        <form ref={form} className="contactForm" onSubmit={sendEmail}>
            <input type="text" className="name" placeholder='Your Name' name='your_name' />
            <input type="email" className="email" placeholder='Your email' name='your_email' />
            <textarea name="message" rows="5" placeholder='Your Message' className='msg'></textarea>
            <button className="submitBtn" type='submit'>Submit</button>
            <div className="links">
                <a target='blank' href='https://github.com/Praveen-Shakya?tab=overview&from=2025-01-01&to=2025-01-31'><img src={assets.Github} alt="FaceBook" className="link"/></a> 
                <a href="https://www.linkedin.com/in/praveen-shakya-7b22562ba/" target='blank'><img src={assets.linkedIn} alt="Twitter" className="link" /></a>
                <a href="https://x.https://twitter.com/Praveen Shakya" target='blank'><img src={assets.TwitterIcon} alt="Youtube" className="link" /></a>
                <a href="https://www.instagram.com/psyhco_praveen/"><img src={assets.InstagramIcon} alt="Instagram" className="link" /></a>
            </div>
        </form>
      </div>
    </section>
  )
}

export default Contact
