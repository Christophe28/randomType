import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/home";
import MyTypes from "./pages/my-types";
import Register from "./pages/register";

import "./style/index.scss";

const App = () => {
  const [challenger, setChallenger] = useState([]);
  const [allType, setAllType] = useState([]);
  
  return (
    <Routes>
      <Route 
        exact path="/" 
        element={<Register
           challenger={challenger}
           setChallenger={setChallenger}
        />} 
      />
      <Route 
        exact path="/choose-type" 
        element={<Home 
          challenger={challenger}
          allType={allType}
          setAllType={setAllType}
        />}
      />
      <Route 
        exact path="/ourTypes" 
        element={<MyTypes 
          challenger={challenger}
          type={allType}
        />} 
      />
    </Routes>
  )
}

export default App;