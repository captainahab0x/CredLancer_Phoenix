import React from "react";

// import WalletMetaMask from "../Wallet/WalletMetaMask";
import WalletMetaMask from "../Wallet";
import "../login/Login.css";

function AreYouReadyContainer(props) {
  // const [joinButtonPopup, setJoinButtonPopup] = useState(false);
  const {p1, p2, p3, p4, p5, p6} = props


  return props.trigger ? (
    <>
      <div className="login-popup">
        <div className="login-inner-container">
          <div className="login-inner-1">{props.children}</div>
          <div className="login-inner-2">
            <button className="close-btn" onClick={() => p4(false)}>
              X
            </button>
          </div>
          <div className="next-btn-container">
            <div></div>
            <button className="next-btn" onClick={() => (p4(false), p6(true))}>
              Next
            </button>
          </div>
          <div className="login-inner-3"></div>
        </div>
      </div>
    </>
  ) : (
    ""
  );
}

export default AreYouReadyContainer;
