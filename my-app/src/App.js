import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/home";
import MyTypes from "./pages/my-types";
import Register from "./pages/register";

import "./style/index.scss";

import { objectChallenger } from "./configs/config";

const App = () => {
  const [challenger, setChallenger] = useState([]);
  const [test, setTest] = useState([
    {
      name: "",
      chance: 2,
      type: "",
      pictures: ""
    }
  ])
  return (
    <Routes>
      <Route 
        path="/" 
        element={<Register
           challenger={challenger}
           setChallenger={setChallenger}
        />} 
      />
      <Route 
        path="/randomType" 
        element={<Home 
          challenger={challenger}
        />}
      />
      <Route path="/ourTypes" element={<MyTypes />} />
    </Routes>
  )
}

export default App;