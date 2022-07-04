import '../styles/globals.css'
import { MoralisProvider } from 'react-moralis'
import { ShopProvider } from '../context/ShopContext'



function MyApp({ Component, pageProps }) {
  return (
    <MoralisProvider
    serverUrl= {process.env.NEXT_PUBLIC_MORALIS_SERVER}
    appId= {process.env.NEXT_PUBLIC_MORALIS_APP_ID}>

   <ShopProvider>
  <Component {...pageProps} />
  </ShopProvider> 
  </MoralisProvider>
)}

export default MyApp
