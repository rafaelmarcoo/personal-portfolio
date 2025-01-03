import React from 'react'
import Navbar from './components/Navbar'
import HomeSection from './components/HomeSection'

const App = () => {
  return (
    <div>
      <Navbar />
      <div className="max-w-7xl mx-auto pt-20 px-6">
        <HomeSection />
      </div>
    </div>
  )
}

export default App