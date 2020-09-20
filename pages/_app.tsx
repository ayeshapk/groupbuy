import { AppProps } from 'next/app'
import '../src/theme/normalize.css'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import 'pure-react-carousel/dist/react-carousel.es.css';// requires a loader
import 'react-aspect-ratio/aspect-ratio.css';// requires Ratio
import React from 'react';


function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}



export default MyApp

