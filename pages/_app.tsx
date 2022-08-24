import EthereumProvider from '../src/services/ethereum/EthereumProvider'
import GlobalStyle from '../src/styles/globals'
import type { AppProps } from 'next/app'
import '../src/styles/globals.css'

function MyApp({ Component, pageProps }: AppProps) {
  return <> 
          <GlobalStyle/>
          <EthereumProvider>
            <Component {...pageProps} />
          </EthereumProvider>
         </>
}

export default MyApp
