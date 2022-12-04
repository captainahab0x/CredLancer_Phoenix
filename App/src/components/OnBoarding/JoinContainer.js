import React from 'react';
import './JoinContainer.css';

export default function JoinContainer(props) {

  const { setModalState } = props;
  return (
    <>
      <div className='content-heading-wrapper'>
        <h3 className='modal-header-heading'> WELCOME  TO CREDLANCER </h3>
        <h4 className='modal-header-subheading'> Sign in to get started </h4>
      </div>
      <br />
      <br />
      <div className='signin-btn-wrapper'>
        <button className='signin-btn'>Metamask</button>
        <br/>
        <button className='signin-btn'>Discord</button>
      </div>
      <div className='join-modal-footer'>
        <button className='join-modal-next-btn' onClick={() => setModalState(1)}>Next</button>
      </div>
    </>
  );
}