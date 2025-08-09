import React from 'react'
import Navbar from './Sections/Navbar'
import Hero from './Sections/Hero'
import About from './Sections/About'
import Projects from './Sections/Projects'
import Testomonial from './Sections/Testomonial'
import Contact from './Sections/Contact'
import Footer from './Sections/Footer'

const App = () => {
  return (
    <div className='container mx-auto max-w-7x' >

      <Navbar/>
      <Hero/>
      <About/>
      <Projects/>
      <Testomonial/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App
