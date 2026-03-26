import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import RogersPlans from './pages/RogersPlans';
import TelusPlans from './pages/TelusPlans';
import About from './pages/About';
import Contact from './pages/Contact';
import Footer from './components/Footer';
import ShivlinkSolutions from './pages/ShivlinkSolutions';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ShivlinkSolutions />} />
        <Route
          path="/legacy-home"
          element={
            <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-200 flex flex-col">
              <Navbar />
              <div className="flex-grow">
                <Hero />
                <RogersPlans />
                <TelusPlans />
                <About />
                <Contact />
              </div>
              <Footer />
            </div>
          }
        />
        <Route
          path="/rogers-plans"
          element={
            <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-200 flex flex-col">
              <Navbar />
              <div className="flex-grow">
                <RogersPlans />
              </div>
              <Footer />
            </div>
          }
        />
        <Route
          path="/telus-plans"
          element={
            <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-200 flex flex-col">
              <Navbar />
              <div className="flex-grow">
                <TelusPlans />
              </div>
              <Footer />
            </div>
          }
        />
        <Route
          path="/about-us"
          element={
            <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-200 flex flex-col">
              <Navbar />
              <div className="flex-grow">
                <About />
              </div>
              <Footer />
            </div>
          }
        />
        <Route
          path="/contact-us"
          element={
            <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-200 flex flex-col">
              <Navbar />
              <div className="flex-grow">
                <Contact />
              </div>
              <Footer />
            </div>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;