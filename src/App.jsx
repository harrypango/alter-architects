import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import { Projects, About, Contact } from "./pages";

const App = () => {
  return (
    <div>
      <Projects></Projects>
      <About></About>
      <Contact></Contact>
    </div>
  );
};

export default App;
