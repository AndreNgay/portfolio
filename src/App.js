import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./Home";
import Reviews from "./Reviews";
import NotFound from "./NotFound";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/reviews" element={<Reviews />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;
