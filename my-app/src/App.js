import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/home";
import MyTypes from "./pages/my-types";
import Register from "./pages/register";

import "./style/index.scss";

const App = () => {
  const [challenger, setChallenger] = useState([]);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route 
        path="/register" 
        element={<Register
           challenger={challenger}
           setChallenger={setChallenger}
        />} 
      />
      <Route path="/ourTypes" element={<MyTypes />} />
    </Routes>
  )
}

export default App;