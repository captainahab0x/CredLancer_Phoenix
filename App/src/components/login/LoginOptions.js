import { useState, useContext, useEffect } from "react";
import { ethers } from "ethers";

import { hasEthereum, requestAccount } from "../../utils/ethereum";
import UserContext from "../Common/UserContext";

import { Button } from "react-bootstrap";

import React from "react";
import "./Login.css";
// import ConnectWallet from "../Wallet/WalletConnect";
import WalletMetaMask from "../Wallet";

import { useConnectors } from "@starknet-react/core";

import InjectWallet from "../Wallet/InjectWallet";
import ConnectStarknetWallet from "../Wallet/ConnectStarknetWallet";

function LoginOptions() {
  const { connect, connectors } = useConnectors();
  const { available, refresh } = useConnectors();
  const [loading, setLoading] = useState(true);
  const [connected, setConnected] = useState(false);
  const [message, setMessage] = useState("JOIN");

  // First load
  useEffect(function () {
    async function fetchConnectedAccount() {
      if (!hasEthereum()) {
        setMessage("Install MetaMask");
        setLoading(false);
        return;
      }

      await setConnectedAccount();

      setLoading(false);
    }
    fetchConnectedAccount();
  }, []);

  // Account changes
  useEffect(function () {
    async function listenMMAccount() {
      if (!hasEthereum()) return;
      window.ethereum.on("accountsChanged", async function (accounts) {
        if (accounts && accounts[0]) {
          setMessage(accounts[0]);
        } else {
          setConnected(false);
          setMessage("JOIN");
        }
      });
    }

    listenMMAccount();
  }, []);

  // Request connection to wallet
  async function requestConnection() {
    try {
      await requestAccount();
    } catch (error) {
      if (error.message) setMessage(error.message);
    }
  }

  // Request connection to wallet
  async function requestDisconnection() {
    try {
      setConnected(false);
      setMessage("JOIN");
    } catch (error) {
      if (error.message) setMessage(error.message);
    }
  }

  // Set address of connected wallet
  async function setConnectedAccount() {
    try {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      // console.log(signer);
      const address = await signer.getAddress();

      if (address) {
        setConnected(true);
        setMessage("Disconnect");
      }
    } catch {
      setMessage("JOIN");
    }
  }

  // Handle connect wallet click
  async function handleConnectWalletMetamask() {
    setLoading(true);
    if (connected) {
      await requestDisconnection();
    } else {
      await requestConnection();
      await setConnectedAccount();
    }

    setLoading(false);
  }

  // useEffect(() => {
  //   const interval = setInterval(refresh, 5000);
  //   return () => clearInterval(interval);
  // }, [refresh]);

  return (
    // <div>
    //     <Button className='login-btn'>Discord (Recommended)</Button>
    //     <Button className='login-btn'>MetaMask</Button>
    //     <Button className='login-btn'>WalletConnect</Button>
    // </div>
    // <InjectWallet/>

    // <ConnectStarknetWallet />
    <div className="d-grid gap-2 login-btn-container">
      <Button
        className="login-btn my-btn"
        variant="primary"
        size="lg"
        onClick={() => connect(connectors[0])}
      >
        Braavos
      </Button>
      <Button
        className="login-btn my-btn"
        variant="primary"
        size="lg"
        onClick={() => connect(connectors[1])}
      >
        ArgentX
      </Button>

      <Button
        className="login-btn login-btn-grey"
        variant="primary"
        size="lg"
        onClick={() => handleConnectWalletMetamask()}
      >
        MetaMask
      </Button>

      <Button
        className="login-btn login-btn-grey"
        variant="primary"
        size="lg"
        disabled
      >
        Discord
      </Button>
    </div>
  )
}

export default LoginOptions;
