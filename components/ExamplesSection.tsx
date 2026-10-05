import React from 'react'

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

export const ExamplesSection = () => {
  return (
    <section className="bg-[#F4F7FF] py-20 lg:py-[120px]" id="examples">
      <div className="container">
        <div className="text-center mx-auto mb-12 lg:mb-16 max-w-[640px]">
          <span className="font-semibold text-lg text-primary mb-2 block">
            Examples
          </span>
          <h2 className="font-bold text-3xl sm:text-4xl md:text-[40px] text-dark mb-4">
            What that looks like in practice
          </h2>
          <p className="text-base text-body-color">
            A few recent engagements. We keep client names to ourselves, and we&apos;d do the same for you.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-2">
          {examples.map((example) => (
            <article key={example.who} className="bg-white rounded-xl border border-[#E5E7EB] p-8">
              <h3 className="font-semibold text-xl text-dark mb-4">{example.who}</h3>
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
    </section>
  )
}
