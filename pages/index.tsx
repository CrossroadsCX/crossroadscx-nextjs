import type { NextPage } from 'next'
import Head from 'next/head'
import {
  ContactSection,
  FAQSection,
  Footer,
  HeroSection,
  NavBar,
  ServicesSection,
  TeamSection,
  TestimonialsSection,
} from '../components'
import { ToolsetsSection } from '../components/ToolsetsSection'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>CrossroadsCX</title>
        <meta name="description" content="Boutique software consultancy - specializing in data, e-commerce, and enterprise workflows" />
        <link rel="icon" href="/images/logo/logo-symbol-v2.svg" />
      </Head>
      <NavBar />
      <HeroSection />
      <ToolsetsSection />
      <ServicesSection />
      <TeamSection />
      <FAQSection />
      {/* <TestimonialsSection /> */}
      <ContactSection />
      <Footer />
    </div>
  )
}

export default Home
