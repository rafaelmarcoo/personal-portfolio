import React from 'react'
import Navbar from './components/Navbar'
import HomeSection from './components/HomeSection'
import AboutSection from './components/AboutSection'
import ProjectsSection from './components/ProjectsSection'
import ExperienceSection from './components/ExperienceSection'

const App = () => {
  return (
    <div>
      <Navbar />
      <div className="max-w-7xl mx-auto pt-20 px-6">
        <HomeSection />
        <AboutSection />
        <ProjectsSection />
        <ExperienceSection />
      </div>
    </div>
  )
}

export default App