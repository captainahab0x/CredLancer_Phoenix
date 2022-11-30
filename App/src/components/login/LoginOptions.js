import React from "react";
import Button from "react-bootstrap/Button";
import "./Login.css";
import ConnectWallet from "../Wallet/WalletConnect";

function LoginOptions() {
  return (
    // <div>
    //     <Button className='login-btn'>Discord (Recommended)</Button>
    //     <Button className='login-btn'>MetaMask</Button>
    //     <Button className='login-btn'>WalletConnect</Button>
    // </div>
    <div className="d-grid gap-2 login-btn-container">
      <Button className='login-btn' variant="primary" size="lg" onClick={() => ConnectWallet }>
        ArgentX
      </Button>
      <Button className='login-btn login-btn-grey' variant="primary" size="lg" disabled>
        MetaMask
      </Button>
      <Button className='login-btn login-btn-grey' variant= "primary" size="lg" disabled>
        Discord
      </Button>
    </div>
  );
}

export default LoginOptions;
