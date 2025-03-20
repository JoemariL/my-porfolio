import { AnimatePresence } from 'framer-motion';
import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

import Header from './components/shared/Header.jsx';
import Footer from './components/shared/Footer.jsx';

const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About.jsx'));
const Projects = lazy(() => import('./pages/Projects'));
const Achievements = lazy(() => import('./pages/Achievements'));

function App() {
  return (
    <AnimatePresence mode="wait">
      <div className='w-full font-body flex flex-col min-h-screen'> 
        <Header />
        <main className="flex-grow">
          <Suspense fallback={<div className="text-center py-10 text-yellow-300">Loading...</div>}> 
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/achievements" element={<Achievements />} />
            </Routes>
          </Suspense>
        </main>
        <Footer />
      </div>
    </AnimatePresence>
  );
}

export default App;
