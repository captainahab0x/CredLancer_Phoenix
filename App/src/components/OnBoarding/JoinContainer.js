import { useState, useEffect } from "react";
import { ethers } from "ethers";

import { hasEthereum, requestAccount } from "../../utils/ethereum";

import './JoinContainer.css';
import WalletMetaMask from '../Wallet';

export default function JoinContainer(props) {

  const { setModalState, address, setAddress } = props;
  const [loading, setLoading] = useState(true);
  const [connected, setConnected] = useState(false);
  const [connectedAccAddress, setConnectedAccAddress] = useState(address);
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
        setConnectedAccAddress(address);
        setAddress(address);
        setMessage("Disconnect");
      }
    } catch {
      setMessage("JOIN");
    }
  }

  // Handle connect wallet click
  async function handleConnectWallet() {
    setLoading(true);
    if (connected) {
      await requestDisconnection();
    } else {
      await requestConnection();
      await setConnectedAccount();
    }
    setModalState(1);
    setLoading(false);
  }
  return (
    <>
      <div className='content-heading-wrapper'>
        <h3 className='modal-header-heading'> WELCOME  TO CREDLANCER </h3>
        <h4 className='modal-header-subheading'> Sign in to get started </h4>
      </div>
      <br />
      <br />
      <div className='signin-btn-wrapper'>
        <button className='signin-btn' onClick={handleConnectWallet}>
          {connectedAccAddress ? connectedAccAddress : 'Metamask'}
        </button>
        <br/>
        <button className='signin-btn'>Discord</button>
      </div>
      <div className='join-modal-footer'>
        <button className='join-modal-next-btn' onClick={() => setModalState(1)}>Next</button>
      </div>
    </>
  );
}