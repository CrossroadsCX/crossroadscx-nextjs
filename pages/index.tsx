import type { NextPage } from 'next'
import Head from 'next/head'
import {
  ContactSection,
  ExamplesSection,
  FAQSection,
  Footer,
  HeroSection,
  NavBar,
  ServicesSection,
  TeamSection,
  WhenToCallSection,
} from '../components'
import { ToolsetsSection } from '../components/ToolsetsSection'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>CrossroadsCX | AI, Data &amp; Software Consultancy in Chicago</title>
        <meta name="description" content="CrossroadsCX is a boutique Chicago consultancy delivering practical AI and automation, data and analytics, systems integration, and custom software." />
        <link rel="icon" href="/images/logo/logo-symbol-v2.svg" />
        <link rel="canonical" href="https://crossroadscx.com/" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://crossroadscx.com/" />
        <meta property="og:title" content="CrossroadsCX | AI, Data & Software Consultancy" />
        <meta property="og:description" content="Practical AI, data, and software for teams that want results, not hype." />
        <meta property="og:image" content="https://crossroadscx.com/images/hero/hero.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <NavBar />
      <HeroSection />
      <WhenToCallSection />
      <ServicesSection />
      <ExamplesSection />
      <ToolsetsSection />
      <TeamSection />
      <FAQSection />
      <ContactSection />
      <Footer />
    </div>
  )
}

export default Home
