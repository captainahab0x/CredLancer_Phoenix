import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import { useEffect } from "react";
import "./App.css";
import { BrowserRouter, Link } from "react-router-dom";
import "./assets/css/style.css";
import Home from "./pages/Home";
import Staking from "./pages/Staking";
import Snuck from "./pages/Snuck";
import Tokenomics from "./pages/Tokenomics";
import InjectWallet from "./components/Wallet/InjectWallet";
import "./style.css";
import ORGDASHBOARD from "./pages/ORGDASHBOARD";
import React from "react";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    //TODO: Update meta titles and descriptions below
    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag: HTMLMetaElement | null = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
          <Route path="/snuck" element={<Snuck />}></Route>
          <Route path="/staking" element={<Staking />}></Route>
          <Route path="/tokenomics" element={<Tokenomics />}></Route>
          <Route path="/minting" element={<ORGDASHBOARD/>}></Route>
    </Routes>
  );
}

export default App;
