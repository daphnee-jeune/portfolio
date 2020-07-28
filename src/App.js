import React from 'react'
import Navbar from './components/Header/Navbar'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Projects from './components/Projects/Projects'
import AboutMe from './components/AboutMe/AboutMe'
import Skills from './components/AboutMe/Skills'
import './App.css'

const App = () => {
  return (
        <div className="App">
          <Navbar />
          <Header />
          <AboutMe />
          <Skills />
          <Projects />
          <Footer />
        </div>
  )
}

export default App
