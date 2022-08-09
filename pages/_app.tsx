import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Script from 'next/script'

function MyApp({ Component, pageProps }: AppProps) {
  return (
  <>
  <Script
    strategy="lazyOnload"
    src={`https://www.googletagmanager.com/gtag/js?id=UA-119741426-1`}
  />
  <Script
    id="google-analytics"
    strategy="lazyOnload"
  >
    {`
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());

      gtag('config', 'UA-119741426-1');
    `}
</Script>

    <Component {...pageProps} />
    </>
  )
}

export default MyApp
