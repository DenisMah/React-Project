import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Navbar from "./Navbar";
import Hero from "./Hero";
import AboutMe from "./AboutMe";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/aboutme" element={<AboutMe />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
