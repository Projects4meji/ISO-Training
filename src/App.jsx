import './index.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Stats from './components/Stats'
import About from './components/About'
import Certifications from './components/Certifications'
import Approved from './components/Approved'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'
import CertificationPage from './pages/certificates/CertificationPage'
import ScrollToTop from './components/ScrollToTop'

function App() {
  // Create a Home component that contains the main page content
  const Home = () => (
    <>
      <Hero />
      <Stats />
      <About />
      <Certifications />
      <Approved />
      <Testimonials />
      <Contact />
    </>
  );

  return (
    <Router>
      <ScrollToTop />
      <div className="relative w-full min-h-screen bg-light">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Certifications />} />
            <Route path="/certifications" element={<Certifications />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/certificates/:certId" element={<CertificationPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App
