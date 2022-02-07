
import * as React from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import Script from 'next/script'
import Head from "next/head";
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {

  return  <>
  
   <Script
   id="will-fail"
   src="https://cdn.zlick.it/zlick-dev-2.6.1.js"
   onError={(e) => {
     console.error('Script failed to load', e)
   }}
   onLoad={() =>
       console.log('script loaded correctly, window.FB has been populated')
     }
 />
 
 (<ChakraProvider> <Component {...pageProps} /> </ChakraProvider>
  )
  </>
}

export default MyApp
