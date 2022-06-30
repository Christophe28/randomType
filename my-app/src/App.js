import React from "react";

import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import MyTypes from "./pages/my-types";
import "./style/index.scss";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/ourTypes" element={<MyTypes />} />
    </Routes>
  )
}

export default App;