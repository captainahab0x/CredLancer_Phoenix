import React from "react";

// import WalletMetaMask from "../Wallet/WalletMetaMask";
import WalletMetaMask from "../Wallet";
import "./Login.css";

function LoginContainer(props) {
  // const [joinButtonPopup, setJoinButtonPopup] = useState(false);
  const {p1, p2} = props


  return props.trigger ? (
    <>
      <div className="login-popup">
        <div className="login-inner-container">
          <div className="login-inner-1">{props.children}</div>
          <div className="login-inner-2">
            <button className="close-btn" onClick={() => p2(false)}>X</button>
          </div>
          <div className="login-inner-3"></div>
        </div>
      </div>
    </>
  ) : (
    ""
  );
}

export default LoginContainer;
