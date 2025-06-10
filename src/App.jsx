import './index.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Stats from './components/Stats'
import About from './components/About'
import Certifications from './components/Certifications'
import Approved from './components/Approved'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="relative w-full min-h-screen bg-light">
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <About />
        <Certifications />
        <Approved />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
