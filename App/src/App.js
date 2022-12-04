import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./assets/css/style.css";
import Home from "./pages/Home";
import "./style.css";
import OrgDashboard from "./pages/ORGDASHBOARD";
import React from "react";


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/minting" element={<OrgDashboard/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
