import React from 'react'
import Hero from "../components/Hero"
import About from '../components/About'
import Skills from '../components/Skills'
import Projects from '../components/Projects'
import Contact from '../components/Contact'


const Home = () => {
  return (
    <div id='#home'>
    <Hero id="hero" />
    <About id="about" />
    <Skills id="skills" />
    <Projects id="projects" />
    <Contact id="contact" />
  </div>
  )
}

export default Home