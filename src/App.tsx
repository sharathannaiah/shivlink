import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import RogersPlans from './pages/RogersPlans';
import TelusPlans from './pages/TelusPlans';
import About from './pages/About';
import Contact from './pages/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-200 flex flex-col">
        <Navbar />
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={
              <>
                <Hero />
                <RogersPlans />
                <TelusPlans />
                <About />
                <Contact />
              </>
            } />
            <Route path="/rogers-plans" element={<RogersPlans />} />
            <Route path="/telus-plans" element={<TelusPlans />} />
            <Route path="/about-us" element={<About />} />
            <Route path="/contact-us" element={<Contact />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;