import React from 'react'
import { StarknetConfig, InjectedConnector } from '@starknet-react/core'


function WalletConnect({ Component, pageProps }) {
  const connectors = [
    new InjectedConnector({ options: { id: 'braavos' }}),
    new InjectedConnector({ options: { id: 'argentX' }}),
  ]
  return (
    <StarknetConfig connectors={connectors}>
      <Component {...pageProps} />
      
    </StarknetConfig>
  )

}

export default WalletConnect