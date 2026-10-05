import React from 'react'
import Link from 'next/link'

const triggers = [
  {
    quote: 'We have four systems and no single answer.',
    answer: 'Sales, inventory, billing and membership each tell a different story. We connect them so the answer lives in one place.',
  },
  {
    quote: 'Somebody on the team rebuilds that spreadsheet every Monday.',
    answer: 'That\'s skilled people doing a machine\'s job. We automate the repeat work and leave the judgment calls to people.',
  },
  {
    quote: 'The board wants to know if we should be doing AI. I don\'t know what to tell them.',
    answer: 'We find the two or three places it would help, and tell you where it wouldn\'t. You leave with a plain answer you can repeat in the meeting.',
  },
  {
    quote: 'Our software works, but nobody dares touch it.',
    answer: 'The person who built it is gone and every change feels risky. We assess it, then fix it, rebuild it, or tell you to leave it alone.',
  },
  {
    quote: 'We have the data. We just can\'t see it.',
    answer: 'Years of records, and every report is a manual project. We build dashboards your team actually opens.',
  },
  {
    quote: 'We need more hands, but not a full-time hire.',
    answer: 'We can join your team by the hour, on a project, or on a retainer. Or we can take the whole thing off your plate.',
  },
]

export const WhenToCallSection = () => {
  return (
    <section className="bg-[#F4F7FF] py-20 lg:py-[120px]" id="when-to-call">
      <div className="container">
        <div className="flex flex-wrap -mx-4">
          <div className="w-full px-4">
            <div className="text-center mx-auto mb-12 lg:mb-16 max-w-[560px]">
              <span className="font-semibold text-lg text-primary mb-2 block">
                When to call
              </span>
              <h2 className="font-bold text-3xl sm:text-4xl md:text-[40px] text-dark mb-4">
                Sounds familiar?
              </h2>
              <p className="text-base text-body-color">
                If you&apos;ve said one of these out loud lately, we should talk. If you&apos;re passing this page along, send it to someone who has.
              </p>
            </div>
          </div>
        </div>

        <ul className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {triggers.map((trigger) => (
            <li key={trigger.quote} className="bg-white rounded-xl border border-[#EFEFEF] p-8">
              <p className="font-semibold text-lg text-dark mb-3">
                <q>{trigger.quote}</q>
              </p>
              <p className="text-base text-body-color">{trigger.answer}</p>
            </li>
          ))}
        </ul>

        <div className="mt-16 text-center mx-auto max-w-[560px]">
          <p className="text-sm text-body-color mb-6">
            We work with manufacturers, restaurants, non-profits, e-commerce, finance, government, legal and logistics teams, from one-person shops to multi-location enterprises.
          </p>
          <p className="text-lg text-dark mb-6">
            Not on this list? Tell us what&apos;s going wrong in plain English. We&apos;ll tell you honestly whether we&apos;re a fit. Discovery calls are free.
          </p>
          <Link href="/#contact-us">
            <a className="py-4 px-10 inline-flex items-center justify-center text-center text-white text-base bg-primary hover:bg-opacity-90 font-normal rounded-lg">
              Get in touch
            </a>
          </Link>
        </div>
      </div>
    </section>
  )
}
