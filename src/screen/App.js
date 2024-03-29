import React, { useEffect, useState } from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import '../styles/App.css';
import { motion } from "framer-motion";
import HomePage from "../pages/HomePage";
import GamePage from "../pages/GamePage";

function App() {
  // States
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => setLoading(false), 3000)
  }, []);

  const loadText = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition:{
        duration: 1
      }
    }
  }


  return (
    loading ? 
    <div className="loader">
      <div className="svg-wrapper">
        <svg height="50" width="265" xmlns="http://www.w3.org/2000/svg">
          <rect className="shape" height="50" width="265" />
        </svg>        
        <motion.p variants={loadText} initial='hidden' animate='visible' className="text">Lindsea Martin</motion.p>
      </div>
    </div>
    :
    <div className="App">
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />}  />
        <Route path="/GamePage" element={<GamePage />} />
      </Routes>
    </Router>
  </div>
  );
}

export default App;
