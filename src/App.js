import './css/App.css';
import { AnimatePresence } from 'framer-motion';
import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Header from './components/shared/Header.jsx';
import Footer from './components/shared/Footer.jsx';

function App() {
  return (
    <AnimatePresence>
      <div>
        <Router>
          <Header />
          <Suspense fallback={""}> 
            <Routes>

            </Routes>
          </Suspense>
        </Router>
      </div>
    </AnimatePresence>
  );
}

export default App;
