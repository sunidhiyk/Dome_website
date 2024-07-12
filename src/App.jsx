import "./App.css";
import React from "react";

import Home from "./pages/Home/Home";
import { Route, Routes } from "react-router-dom";
import Subscribe from "./pages/Subscribe/Subscribe";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home></Home>} />
        <Route path="/Subscribe" element={<Subscribe></Subscribe>}></Route>
      </Routes>
    </div>
  );
}

export default App;
