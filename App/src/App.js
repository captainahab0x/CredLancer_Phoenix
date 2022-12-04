import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./assets/css/style.css";
import Home from "./pages/Home";
import "./style.css";
import OrgDashboard from "./pages/ORGDASHBOARD";
import React from "react";


function App() {
  const [address, setAddress] = React.useState('');
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home address={address} setAddress={setAddress} />}></Route>
          <Route path="/minting" element={<OrgDashboard address={address} />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
