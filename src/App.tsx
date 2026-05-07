import Navbar from './components/Navbar'
import Hero from './components/sections/Hero'
import About from './components/sections/About'
import Experience from './components/sections/Experience'
import Projects from './components/sections/Projects'
import Certificates from './components/sections/Certificates'
import Contact from './components/sections/Contact'
import Footer from './components/sections/Footer'

function App() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#0a0a0f' }}>
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Experience />
      <Certificates />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
