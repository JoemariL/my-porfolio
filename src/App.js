import { AnimatePresence } from 'framer-motion';
import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Header from './components/shared/Header.jsx';
import Footer from './components/shared/Footer.jsx';

const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About.jsx'));
const Projects = lazy(() => import('./pages/Projects'));
const Achievements = lazy(() => import('./pages/Achievements'));

function App() {
  return (
    <AnimatePresence>
      <div className='w-full font-body'>
        <Router>
          <Header />
          <Suspense fallback={""}> 
            <Routes>
              <Route path="/" element={<Home />}/>
              <Route path="/About" element={<About />}/>
              <Route path="/Projects" element={<Projects />}/>
              <Route path="/AchievementsAndCerts" element={<Achievements />}/>
            </Routes>
          </Suspense>
          <Footer />
        </Router>
      </div>
    </AnimatePresence>
  );
}

export default App;
