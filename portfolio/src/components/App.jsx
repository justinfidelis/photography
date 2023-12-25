import '../app.css';

import React from 'react';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"

import Sidebar from './Sidebar'
import Home from "../pages/Home";
import Singapore from "../pages/Singapore";
import Travel from "../pages/Travel";
import Film from "../pages/Film";
import About from "../pages/About";
import Contact from "../pages/Contact";

const App = () => {
  return (
    <div className="App">
      <Router basename="/photography">
        <Sidebar />
        <div className="Content">
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/singapore" element={<Singapore />} />
            <Route exact path="/travel" element={<Travel />} />
            <Route exact path="/film" element={<Film />} />
            <Route exact path="/about" element={<About />} />
            {/* <Route exact path="/contact" element={<Contact />} /> */}
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
