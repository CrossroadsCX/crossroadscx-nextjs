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

const examples = [
  {
    who: 'A multi-location restaurant group',
    problem: 'Every location reported sales, labor and inventory from a different system. Getting the full picture meant waiting on spreadsheets.',
    work: 'We connected the point-of-sale, scheduling and inventory tools and built one dashboard for the whole group.',
  },
  {
    who: 'A statewide non-profit association',
    problem: 'Membership, the online store and event registration lived in separate tools. Staff re-typed the same data between them.',
    work: 'We integrated the systems and automated renewals and receipts, so staff could get back to members.',
  },
  {
    who: 'A manufacturer asking about AI',
    problem: 'Leadership kept hearing they should "use AI" and didn\'t know where to start, or what was safe.',
    work: 'We reviewed their workflows, ranked the real candidates, and built for the best one, tested against their own data with a person reviewing the output.',
  },
  {
    who: 'A professional services firm',
    problem: 'The business ran on an internal tool built years ago. Nobody left on staff understood it.',
    work: 'We assessed it, mapped a plan, and rebuilt it in stages while the old one kept running.',
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
                When to call us
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

        <div className="mt-16 lg:mt-20">
          <h3 className="font-bold text-2xl sm:text-3xl text-dark text-center mb-3">
            What that looks like in practice
          </h3>
          <p className="text-base text-body-color text-center mx-auto max-w-[560px] mb-10">
            A few recent engagements. We keep client names to ourselves, and we&apos;d do the same for you.
          </p>
          <div className="grid gap-8 md:grid-cols-2">
            {examples.map((example) => (
              <article key={example.who} className="bg-white rounded-xl border border-[#EFEFEF] p-8">
                <h4 className="font-semibold text-xl text-dark mb-4">{example.who}</h4>
                <p className="text-base text-body-color mb-3">
                  <span className="font-semibold text-dark">The problem: </span>
                  {example.problem}
                </p>
                <p className="text-base text-body-color">
                  <span className="font-semibold text-dark">What we did: </span>
                  {example.work}
                </p>
              </article>
            ))}
          </div>
        </div>

        <div className="mt-16 text-center mx-auto max-w-[560px]">
          <p className="text-sm text-body-color mb-6">
            We work with manufacturers, restaurants, non-profits, e-commerce, finance, government, legal and logistics teams, from one-person shops to multi-location enterprises.
          </p>
          <p className="text-lg text-dark mb-6">
            Not on this list? Tell us what&apos;s going wrong in plain English. We&apos;ll tell you honestly whether we&apos;re a fit. The first call is free.
          </p>
          <Link href="/#contact-us">
            <a className="py-4 px-10 inline-flex items-center justify-center text-center text-white text-base bg-primary hover:bg-opacity-90 font-normal rounded-lg">
              Get In Touch
            </a>
          </Link>
        </div>
      </div>
    </section>
  )
}
