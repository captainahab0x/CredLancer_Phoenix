import React from "react";

// import WalletMetaMask from "../Wallet/WalletMetaMask";
import { useAccount } from "@starknet-react/core";
import WalletMetaMask from "../Wallet";
import "./Login.css";

function LoginContainer(props) {
  // const [joinButtonPopup, setJoinButtonPopup] = useState(false);
  const { account, address, status } = useAccount();
  const { p1, p2, p3, p4 } = props;

  return props.trigger && status === "disconnected" ? (
    <>
      <div className="login-popup">
        <div className="login-inner-container">
          <div className="login-inner-1">{props.children}</div>
          <div className="login-inner-2">
            <button className="close-btn" onClick={() => p2(false)}>
              X
            </button>
          </div>
          <div className="next-btn-container">
            <div></div>
            <button className="next-btn" onClick={() => (p2(false), p4(true))}>
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

export default LoginContainer;
