import React, { useState } from 'react'
import Link from 'next/link'

type FAQ = {
  question: React.ReactNode
  answer: React.ReactNode
}

// Questions business leaders ask come first; technical ones follow.
const faqs: FAQ[] = [
  {
    question: 'Should we be implementing AI at our company?',
    answer: (
      <>
        Maybe. Start with a problem, not a tool. If a task is repetitive, runs on your own documents or
        data, and a person can check the result, AI may help. If not, a simpler fix is usually cheaper.
        <br /><br />
        We&apos;ll tell you which one you have.
      </>
    ),
  },
  {
    question: 'We don\'t have a technical team. Can you still help?',
    answer: (
      <>
        Yes. Many of our clients don&apos;t. We can run the work end to end and explain what we&apos;re
        doing in plain English along the way.
      </>
    ),
  },
  {
    question: 'How do I know when it\'s time to bring in outside help?',
    answer: (
      <>
        When the same problem keeps coming back. When the people who could fix it are too busy running
        things. Or when a decision is bigger than anything anyone in the room has done before.
        <br /><br />
        If you&apos;re asking, it&apos;s usually time for a conversation.
      </>
    ),
  },
  {
    question: 'What does a first conversation look like?',
    answer: (
      <>
        It&apos;s free. You tell us what&apos;s going wrong, and we ask a lot of questions. That&apos;s
        discovery, and it&apos;s where we figure out together whether we&apos;re the right fit.
        <br /><br />
        If we are, we&apos;ll propose the smallest sensible next step. If we aren&apos;t, we&apos;ll say so,
        and point you somewhere better if we can.
      </>
    ),
  },
  {
    question: 'Is our data safe with AI tools?',
    answer: (
      <>
        It depends on how they&apos;re set up, so we design for privacy from the start. We keep a person in
        the loop and test what we build before it reaches your team. We&apos;ll walk you through exactly
        where your data goes.
      </>
    ),
  },
  {
    question: 'What makes you different from other technology vendors?',
    answer: (
      <>
        We&apos;ve been where you&apos;re sitting, so we know hiring outside help is risky. We earn trust
        first and the work second, and we&apos;d rather prove our value over years than over one project.
        <br /><br />
        We&apos;ll tell you about timelines and risks up front, and point you to cheaper off-the-shelf
        options when they fit.
      </>
    ),
  },
  {
    question: 'Do you build AI tools?',
    answer: (
      <>
        Yes, and we keep it practical. We start with the problems where AI can measurably save time
        or improve decisions, then build assistants and automations grounded in your own data
        and existing tools.
        <br /><br />
        We test what we build before it reaches your team, design with data privacy and human
        review in mind, and will tell you honestly when a simpler, non-AI approach is the better fit.
      </>
    ),
  },
  {
    question: 'What types of projects / clients have you worked with in the past?',
    answer: (
      <>
        We&apos;ve worked with everyone from single-employee non-profits to multi-location
        enterprises. Their industries span manufacturing, restaurants, non-profits, e-commerce, finance, government, legal, and logistics.
        Our services for these clients have included building new software from scratch, augmenting existing teams,
        connecting off-the-shelf software tools and workflows, and even just playing an advisory role. If we aren&apos;t
        absolutely sure that we are a good fit for your project, we will be the first to say so.
      </>
    ),
  },
  {
    question: 'What types of engagements do you offer?',
    answer: (
      <>
        We&apos;re flexible: hourly, by project, or on retainer. We can augment your team or
        run the work end to end. A retainer lets us scale up when you need us most.
      </>
    ),
  },
  {
    question: 'Do you work with existing teams or partners?',
    answer: (
      <>
        Yes.
        <br /><br />
        We pick up new codebases, patterns, and workflows quickly. We&apos;ve done everything from
        hands-on-keyboard development to helping C-level executives make high-impact decisions. We can also work hand-in-hand with existing vendors and partners to
        ensure your project is successful.
      </>
    ),
  },
  {
    question: <>Are you familiar with &lt;insert-technology-here&gt;?</>,
    answer: (
      <>
        Maybe? It&apos;s always worth asking. If we aren&apos;t experts, we&apos;ll let you know.
        We&apos;ll also let you know if it&apos;s similar enough to technologies that we know well
        and continue the discussion from there. We will never sell you on a project that we aren&apos;t
        able to execute at a very high standard.
      </>
    ),
  },
  {
    question: 'Can you help with IT services?',
    answer: (
      <>
        Unfortunately, no. While we do help our mothers with their printers when they call,
        that&apos;s generally free-of-charge and not a recommended service to our clients.
      </>
    ),
  },
]

// Two independent columns, so opening an item never stretches its neighbor.
const columns = [faqs.slice(0, Math.ceil(faqs.length / 2)), faqs.slice(Math.ceil(faqs.length / 2))]

export const FAQSection = () => {
  const [currentOpen, setCurrentOpen] = useState<number>()

  const handleOpen = (index: number) => {
    setCurrentOpen(currentOpen === index ? undefined : index)
  }

  return (
    <section
      className="
        bg-white
        pt-20
        lg:pt-[120px]
        pb-12
        lg:pb-[90px]
        relative
        z-20
        overflow-hidden
      "
      id="faq"
    >
      <div className="container">
        <div className="flex flex-wrap -mx-4">
          <div className="w-full px-4">
            <div className="text-center mx-auto mb-[60px] lg:mb-20 max-w-[520px]">
              <span className="font-semibold text-lg text-primary mb-2 block">
                FAQ
              </span>
              <h2
                className="
                  font-bold
                  text-3xl
                  sm:text-4xl
                  md:text-[40px]
                  text-dark
                  mb-4
                "
              >
                You have questions. <br /> We have answers.
              </h2>
              <p className="text-base text-body-color">
                Feel free to ask any questions <Link href="/#contact-us"><a className="hover:underline font-semibold">below</a></Link> as well.
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap -mx-4">
          {columns.map((column, columnIndex) => (
            <div key={columnIndex} className="w-full lg:w-1/2 px-4">
              {column.map((faq, i) => {
                const index = columnIndex * columns[0].length + i
                const isOpen = currentOpen === index
                return (
                  <div
                    key={index}
                    className="
                      single-faq
                      w-full
                      bg-white
                      border border-[#F3F4FE]
                      rounded-lg
                      p-4
                      sm:p-8
                      lg:px-6
                      xl:px-8
                      mb-8
                    "
                  >
                    <button
                      className="faq-btn flex w-full text-left"
                      onClick={() => handleOpen(index)}
                      aria-expanded={isOpen}
                      aria-controls={`faq-answer-${index}`}
                    >
                      <div
                        className={`
                          ${isOpen ? 'rotate-0' : '-rotate-90'}
                          transition
                          w-full
                          max-w-[40px]
                          h-10
                          flex
                          items-center
                          justify-center
                          rounded-lg
                          bg-primary
                          text-primary
                          bg-opacity-5
                          mr-5
                        `}
                      >
                        <svg
                          width="17"
                          height="10"
                          viewBox="0 0 17 10"
                          className="fill-current icon"
                          aria-hidden="true"
                        >
                          <path
                            d="M7.28687 8.43257L7.28679 8.43265L7.29496 8.43985C7.62576 8.73124 8.02464 8.86001 8.41472 8.86001C8.83092 8.86001 9.22376 8.69083 9.53447 8.41713L9.53454 8.41721L9.54184 8.41052L15.7631 2.70784L15.7691 2.70231L15.7749 2.69659C16.0981 2.38028 16.1985 1.80579 15.7981 1.41393C15.4803 1.1028 14.9167 1.00854 14.5249 1.38489L8.41472 7.00806L2.29995 1.38063L2.29151 1.37286L2.28271 1.36548C1.93092 1.07036 1.38469 1.06804 1.03129 1.41393L1.01755 1.42738L1.00488 1.44184C0.69687 1.79355 0.695778 2.34549 1.0545 2.69659L1.05999 2.70196L1.06565 2.70717L7.28687 8.43257Z"
                            fill="#3056D3"
                            stroke="#3056D3"
                          />
                        </svg>
                      </div>
                      <div className="w-full">
                        <h4 className="text-lg font-semibold text-black">
                          {faq.question}
                        </h4>
                      </div>
                    </button>
                    <div
                      id={`faq-answer-${index}`}
                      className={`
                        faq-content
                        pl-[62px]
                        ${isOpen ? '' : 'hidden'}
                      `}
                    >
                      <p className="text-base text-body-color leading-relaxed py-3">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                )
              })}
            </div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-0 right-0 z-[-1]">
        <svg
          width="1440"
          height="886"
          viewBox="0 0 1440 886"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            opacity="0.5"
            d="M193.307 -273.322L1480.87 1014.24L1121.85 1373.26C1121.85 1373.26 731.745 983.23 478.513 729.926C225.976 477.316 -165.714 85.6985 -165.714 85.6985L193.307 -273.322Z"
            fill="url(#paint0_linear_1314_168)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_1314_168"
              x1="1308.65"
              y1="1142.58"
              x2="602.827"
              y2="-418.682"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#3056D3" stopOpacity="0.36" />
              <stop offset="1" stopColor="#F5F2FD" stopOpacity="0" />
              <stop offset="1" stopColor="#F5F2FD" stopOpacity="0.096144" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </section>
  )
}
