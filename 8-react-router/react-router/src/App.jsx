// import { useState } from "react";

import "./App.css";

// 2 - Reaproveitamento de estrutura
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="app">
      <Navbar></Navbar>
      <h1>React router</h1>
      <Outlet></Outlet>
      <footer>footer</footer>
    </div>
  );
}

export default App;
