import React, { useState } from 'react'
import { useSmoothScrollTo } from '../helpers/useSmoothScrollTo'

export const FAQSection = () => {
  const [currentOpen, setCurrentOpen] = useState<number>()

  const scrollBind = useSmoothScrollTo('#faq')

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
      {...scrollBind}
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
                Feel free to ask any questions <a href="#contact-us" className="hover:underline font-bold italic">below</a> as well.
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap -mx-4">
          <div className="w-full lg:w-1/2 px-4">
            <div
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
                onClick={() => setCurrentOpen(currentOpen ? undefined : 1)}
              >
                <div
                  className="
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
                  "
                >
                  <svg
                    width="17"
                    height="10"
                    viewBox="0 0 17 10"
                    className="fill-current icon"
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
                    What makes you different than other technology vendors?
                  </h4>
                </div>
              </button>
              <div className={`
                faq-content
                pl-[62px]
                ${currentOpen === 1 ? '' : 'hidden'}
              `}>
                <p className="text-base text-body-color leading-relaxed py-3">
                  We&apos;ve been where you&apos;re sitting. We know there are a lot of risks to hiring
                  outside help. We try to build trust with our clients first and help them grow. We would
                  much rather create a lasting relationship where we can prove our value time and time again.
                  <br /><br />
                  We pride ourselves on our clear and consistent communication - including offering advice
                  to our clients that may be out-of-box, less costly alternatives to building
                  everything ourselves. We will ensure that you are informed of all timelines and risks
                  and will be there to assist in your decision making every step of the way.
                </p>
              </div>
            </div>
            <div
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
                onClick={() => setCurrentOpen(currentOpen === 2 ? undefined : 2)}
              >
                <div
                  className="
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
                  "
                >
                  <svg
                    width="17"
                    height="10"
                    viewBox="0 0 17 10"
                    className="fill-current icon"
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
                    What types of projects / clients have you worked with in the past?
                  </h4>
                </div>
              </button>
              <div className={`
                faq-content
                pl-[62px]
                ${currentOpen === 2 ? '' : 'hidden'}
              `}>
                <p className="text-base text-body-color leading-relaxed py-3">
                  We&apos;ve worked on projects and clients from small single-employee non-profits to large
                  multi-billion dollar commerce giants. Their industries span e-commerce, finance, government, legal, and logistics.
                  Our services for these clients have included architecting greenfield applications, augmenting existing teams,
                  connecting out-of-the-box software tools / workflows, and even just playing an advisory role. If we aren&apos;t
                  absolutely sure that we are a good fit for your project, we will be the first to say so.
                </p>
              </div>
            </div>
            <div
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
                onClick={() => setCurrentOpen(currentOpen ? undefined : 3)}
              >
                <div
                  className="
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
                  "
                >
                  <svg
                    width="17"
                    height="10"
                    viewBox="0 0 17 10"
                    className="fill-current icon"
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
                    Can you help with IT services?
                  </h4>
                </div>
              </button>
              <div className={`
                faq-content
                pl-[62px]
                ${currentOpen === 3 ? '' : 'hidden'}
              `}>
                <p className="text-base text-body-color leading-relaxed py-3">
                  Unfortunately, no. While we do help our mothers with their printers when they call,
                  that&apos;s generally free-of-charge and not a recommended service to our clients.
                </p>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-1/2 px-4">
            <div
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
                onClick={() => setCurrentOpen(currentOpen ? undefined : 4)}
              >
                <div
                  className="
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
                  "
                >
                  <svg
                    width="17"
                    height="10"
                    viewBox="0 0 17 10"
                    className="fill-current icon"
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
                    What types of engagements do you offer?
                  </h4>
                </div>
              </button>
              <div className={`
                faq-content
                pl-[62px]
                ${currentOpen === 4 ? '' : 'hidden'}
              `}>
                <p className="text-base text-body-color leading-relaxed py-3">
                  We&apos;re flexible. We want to make sure that you get the value you deserve.
                  We are comfortable operating on an hourly basis if that works for you, although we
                  also are very comfortable in a project-by-project basis or even on retainer. The retainer option
                  does allow us to be more flexible with our customers and flex higher during periods of
                  time that we are needed more.
                </p>
              </div>
            </div>
            <div
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
                onClick={() => setCurrentOpen(currentOpen ? undefined : 5)}
              >
                <div
                  className="
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
                  "
                >
                  <svg
                    width="17"
                    height="10"
                    viewBox="0 0 17 10"
                    className="fill-current icon"
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
                    Are you familiar with &lt;insert-technology-here&gt;
                  </h4>
                </div>
              </button>
              <div className={`
                faq-content
                pl-[62px]
                ${currentOpen === 5 ? '' : 'hidden'}
              `}>
                <p className="text-base text-body-color leading-relaxed py-3">
                  Maybe? It&apos;s always worth asking. If we aren&apos;t experts, we&apos;ll let you know.
                  We&apos;ll also let you know if it&apos;s similar enough to technologies that we know well
                  and continue the discussion from there. We will never sell you on a project that we aren&apos;t
                  able to execute at a very high standard.
                </p>
              </div>
            </div>
            <div
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
                onClick={() => setCurrentOpen(currentOpen ? undefined : 6)}
              >
                <div
                  className="
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
                  "
                >
                  <svg
                    width="17"
                    height="10"
                    viewBox="0 0 17 10"
                    className="fill-current icon"
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
                    Do you work with existing teams or partners?
                  </h4>
                </div>
              </button>
              <div className={`
                faq-content
                pl-[62px]
                ${currentOpen === 6 ? '' : 'hidden'}
              `}>
                <p className="text-base text-body-color leading-relaxed py-3">
                  Yes.
                  <br /><br />
                  We&apos;re very comfortable augmenting existing teams, and believe that
                  we are very quick studies on new codebases, patterns, and workflows. We have experience with
                  performing roles ranging from hands-on-a-keyboard to assisting C-level executives make
                  high-impact decisions. We can also work hand-in-hand with existing vendors and partners to
                  ensure your project is successful.
                </p>
              </div>
            </div>
          </div>
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
