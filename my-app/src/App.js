import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/home";
import MyTypes from "./pages/my-types";
import Register from "./pages/register";
import Test from "./pages/Test";

import "./style/index.scss";

const App = () => {
  const [challenger, setChallenger] = useState([]);
  const [allType, setAllType] = useState([]);
  
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
          allType={allType}
          setAllType={setAllType}
        />}
      />
      <Route 
        path="/ourTypes" 
        element={<MyTypes 
          challenger={challenger}
          type={allType}
        />} 
      />
      <Route
        path="/test"
        element={<Test />}
      >

      </Route>
    </Routes>
  )
}

export default App;