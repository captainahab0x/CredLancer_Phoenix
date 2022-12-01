import React from 'react'
import { StarknetConfig, InjectedConnector } from '@starknet-react/core'
import LoginOptions from '../login/LoginOptions'

function InjectWallet({ Component, pageProps }) {
  const connectors = [
    new InjectedConnector({ options: { id: 'braavos' }}),
    new InjectedConnector({ options: { id: 'argentX' }}),
  ]
  return (
    <StarknetConfig connectors={connectors}>

      <LoginOptions />

    </StarknetConfig>
  )

}

export default InjectWallet