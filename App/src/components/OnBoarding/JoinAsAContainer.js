import React from 'react'

function JoinAsAContainer(props) {
    const { p1, p2, p3, p4, p5, p6 } = props;
  
    return props.trigger ? (
      <>
        <div className="login-popup">
          <div className="login-inner-container">
            <div className="login-inner-1">{props.children}</div>
            <div className="login-inner-2">
              <button className="close-btn" onClick={() => p6(false)}>
                X
              </button>
            </div>
            <div className="next-btn-container">
              <div></div>
              <button className="next-btn" onClick={() => (p6(false))}>
                LFG🚀🚀
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

export default JoinAsAContainer