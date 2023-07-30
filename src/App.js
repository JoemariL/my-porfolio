import './css/App.css';
import { AnimatePresence } from 'framer-motion';
import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Header from './components/shared/Header.jsx';
import Footer from './components/shared/Footer.jsx';

const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Contact = lazy(() => import('./pages/Contacts'));
const Projects = lazy(() => import('./pages/Projects'));

function App() {
  return (
    <AnimatePresence>
      <div>
        <Router>
          <Header />
          <Suspense fallback={""}> 
            <Routes>
              <Route path="/" element={<Home />}/>
              <Route path="/About" element={<About />}/>
              <Route path="/Contact" element={<Contact />}/>
              <Route path="/Projects" element={<Projects />}/>
            </Routes>
          </Suspense>
          <Footer />
        </Router>
      </div>
    </AnimatePresence>
  );
}

export default App;
