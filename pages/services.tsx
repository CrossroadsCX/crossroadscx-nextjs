import type { NextPage } from 'next'
import Head from 'next/head'
import {
  Footer,
  NavBar,
  ServicesSection,
} from '../components'

const Services: NextPage = () => {
  return (
    <div className="pt-[120px]">
      <Head>
        <title>Services | CrossroadsCX</title>
        <meta name="description" content="CrossroadsCX services: practical AI and automation, data and analytics, systems integration, and custom web software." />
        <link rel="icon" href="/images/logo/logo-symbol-v2.svg" />
        <link rel="canonical" href="https://crossroadscx.com/services" />
      </Head>
      <NavBar />
      <ServicesSection />
      <Footer />
    </div>
  )
}

export default Services
