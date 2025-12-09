import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Experience from './components/Experience'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Background3D from './components/Background3D'
import Footer from './components/Footer'
import Terminal from './components/Terminal'

function App() {
  return (
    <div className="bg-primary min-h-screen text-white relative">
      <Background3D />
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <Experience />
        <Skills />
        <Projects />
        <Terminal />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
