import React from 'react'
import Navbar from './components/Navbar'
import HomeSection from './components/HomeSection'
import AboutSection from './components/AboutSection'
import ProjectsSection from './components/ProjectsSection'
import ExperienceSection from './components/ExperienceSection'
import EducationSection from './components/EducationSection'

const App = () => {
  return (
    <div>
      <div className="max-w-7xl mx-auto px-6">
        <Navbar />
      </div>
      <div className="max-w-7xl mx-auto pt-10 px-6">
        <HomeSection />
        <AboutSection />
        <ProjectsSection />
        <ExperienceSection />
        <EducationSection />
      </div>
    </div>
  )
}

export default App