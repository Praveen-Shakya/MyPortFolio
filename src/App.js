import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Intro from './components/Intro/Intro'
import Works from './components/Works/Works'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import './App.css'
import About from './components/About/About'
import Skills from './components/Skills/Skill'
import Projects from './components/Projects/Projects'

const App = () => {
  return (
    <div className='app'>
      <Navbar/>
      <Intro/>
      <About />
      <Skills />
      <Projects />
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App
