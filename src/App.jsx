import { useState } from "react";
import Homepage from "./Homepage";
import "./App.css";

import MovieDetails from "./component/MovieDetails";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage/>} />
        <Route path="/movie/:id" element={<MovieDetails/>} />
      </Routes>
    </Router>
  );
}

export default App;
