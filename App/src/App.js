import "./App.css";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import "./assets/css/style.css";
import Home from "./pages/Home";
import Staking from "./pages/Staking";
import Snuck from "./pages/Snuck";
import Tokenomics from "./pages/Tokenomics";
import InjectWallet from "./components/Wallet/InjectWallet";
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
