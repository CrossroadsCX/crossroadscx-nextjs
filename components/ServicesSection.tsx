import React from 'react'
import Link from 'next/link'

const services = [
  {
    title: 'Software that\'s showing its age',
    body: 'We assess where you are, map a practical roadmap, and build or rebuild the software your team runs on.',
  },
  {
    title: 'Data you can\'t see',
    body: 'We build the reports and dashboards that turn raw data into answers your team actually uses: automated, trusted, and up to date.',
  },
  {
    title: 'Systems that don\'t talk',
    body: 'We connect your CRM, e-commerce, membership, and back-office tools so critical answers live in one place.',
  },
  {
    title: 'The AI question',
    body: 'We find the use cases worth doing, then build and test assistants and automations grounded in your own data, with privacy and human review built in.',
  },
]

export const ServicesSection = () => {
  return (
    <section className="py-20 lg:py-[120px] bg-white" id="services">
      <div className="container">
        <div className="text-center mx-auto mb-12 lg:mb-16 max-w-[560px]">
          <span className="font-semibold text-lg text-primary mb-2 block">
            Services
          </span>
          <h2 className="font-bold text-3xl sm:text-4xl md:text-[40px] text-dark mb-4">
            How we help
          </h2>
          <p className="text-base text-body-color">
            We&apos;re a small, senior team of builders. We&apos;re also human beings. No sales jargon, no AI hype, no technical runarounds.
          </p>
        </div>
        <ul className="grid gap-8 md:grid-cols-2 mx-auto max-w-[960px]">
          {services.map((service) => (
            <li key={service.title} className="h-full rounded-xl border border-[#E5E7EB] p-8">
              <h3 className="font-semibold text-xl text-dark mb-3">{service.title}</h3>
              <p className="text-base text-body-color">{service.body}</p>
            </li>
          ))}
        </ul>
        <p className="text-base text-dark text-center mt-10">
          Have an engineering team? <Link href="/engineering"><a className="text-primary font-medium hover:underline">Here&apos;s how we plug in.</a></Link>
        </p>
      </div>
    </section>
  )
}
