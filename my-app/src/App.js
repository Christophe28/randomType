import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import "./style/index.scss";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  )
}

export default App;