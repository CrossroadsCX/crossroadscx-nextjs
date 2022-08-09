import React from 'react'
import Image from 'next/future/image'
import { GitHubIcon } from './GitubIcon'
import { LinkedInIcon } from './LinkedInIcon'

export const Footer = () => {
  return (
    <footer className="bg-primary relative z-10">
      <div className="container">
        <div className="border-b border-opacity-30 pt-[70px] pb-10">
          {/* <div className="flex flex-wrap items-center -mx-4">
            <div className="w-full lg:w-1/2 px-4">
              <div className="w-full mb-5">
                <h3
                  className="
                    text-white
                    font-bold
                    text-2xl
                    sm:text-[28px] sm:leading-snug
                  "
                >
                  Signup for latest news and insights fromTailGridsUI
                </h3>
              </div>
            </div>
            <div className="w-full lg:w-1/2 px-4">
              <div className="w-full mb-5">
                <form className="flex flex-wrap">
                  <div className="max-w-[370px] w-full relative mr-5 mb-3">
                    <input
                      type="email"
                      placeholder="Enter your email address"
                      className="
                        w-full
                        bg-white bg-opacity-20
                        text-white
                        rounded
                        pl-14
                        pr-5
                        h-14
                        placeholder-white placeholder-opacity-60
                        border border-transparent
                        outline-none
                        focus-visible:shadow-none
                        focus:border-white
                      "
                    />
                    <label className="absolute left-5 top-1/2 -translate-y-1/2">
                      <svg
                        width="18"
                        height="13"
                        viewBox="0 0 18 13"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M16.3052 0H1.69481C0.75974 0 0 0.799055 0 1.78251V11.2175C0 12.2009 0.75974 13 1.69481 13H16.3052C17.2403 13 18 12.2009 18 11.2175V1.78251C18 0.799055 17.2403 0 16.3052 0ZM16.3052 1.07565C16.4513 1.07565 16.5682 1.10638 16.6851 1.19858L9.40909 5.83924C9.1461 5.99291 8.8539 5.99291 8.59091 5.83924L1.31494 1.19858C1.43182 1.13712 1.5487 1.07565 1.69481 1.07565H16.3052ZM16.3052 11.8936H1.69481C1.34416 11.8936 1.02273 11.5863 1.02273 11.1868V2.27423L8.03572 6.76123C8.32792 6.94563 8.64935 7.03782 8.97078 7.03782C9.29221 7.03782 9.61364 6.94563 9.90584 6.76123L16.9188 2.27423V11.1868C16.9773 11.5863 16.6558 11.8936 16.3052 11.8936Z"
                          fill="white"
                        />
                      </svg>
                    </label>
                  </div>
                  <button
                    type="submit"
                    className="
                      bg-white
                      text-primary
                      h-14
                      px-8
                      mb-3
                      rounded
                      hover:bg-opacity-90
                      transition
                    "
                  >
                    Subscribe
                  </button>
                </form>
              </div>
            </div>
          </div> */}
        </div>
      </div>

      <div className="container pt-14 lg:pt-20">
        <div className="flex flex-wrap -mx-4">
          <div className="w-full sm:w-2/3 lg:w-4/12 2xl:w-3/12 px-4">
            <div className="w-full mb-10">
              <a
                href="#"
                className="inline-block max-w-[160px] mb-6"
              >
                <Image
                  src="/images/logo/logo-symbol-v2.svg"
                  alt="logo"
                  className="max-w-full rounded-lg bg-white"
                  height="500"
                  width="500"
                />
              </a>
              <p className="text-base text-[#efefef] mb-7">
                Let&apos;s Chat.
              </p>
              <div className="flex items-center -mx-3">
                <LinkedInIcon link="https://www.linkedin.com/company/crossroads-cx" />
                <GitHubIcon link="https://github.com/crossroadscx" />
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 lg:w-4/12 2xl:w-3/12 px-4">
            <div className="w-full mb-10">
              <h4 className="text-white text-lg font-semibold mb-9">Read Our Blog</h4>
              <ul>
                <li>
                  <a
                    href="https://crossroads-cx.medium.com/"
                    target="_blank"
                    rel="noreferrer"
                    className="
                      inline-block
                      text-base text-[#efefef]
                      hover:text-white
                      leading-loose
                      mb-2
                      hover:underline
                    "
                  >
                    CrossroadsCX on Medium
                  </a>
                </li>
              </ul>
              {/* <a
                href="#"
                className="flex items-center text-[#efefef] hover:text-white mb-8"
              >
                <div className="w-full max-w-[70px] rounded mr-5 overflow-hidden">
                  <Image
                    src="/images/footers/footer-04/blog-01.jpg"
                    alt="image"
                    className="w-full"
                    height="500"
                    width="500"
                  />
                </div>
                <p className="text-base">I think really important to design...</p>
              </a>
              <a
                href="#"
                className="flex items-center text-[#efefef] hover:text-white mb-8"
              >
                <div className="w-full max-w-[70px] rounded mr-5 overflow-hidden">
                  <Image
                    src="/images/footers/footer-04/blog-02.jpg"
                    alt="image"
                    className="w-full"
                    height="500"
                    width="500"
                  />
                </div>
                <p className="text-base">Recognizing the need is the primary...</p>
              </a> */}
            </div>
          </div>
          <div className="w-full sm:w-1/2 lg:w-3/12 2xl:w-2/12 px-4">
            <div className="w-full mb-10">
              <h4 className="text-white text-lg font-semibold mb-9">Company</h4>
              <ul>
                <li>
                  <a
                    href="#home"
                    className="
                      inline-block
                      text-base text-[#efefef]
                      hover:text-white
                      leading-loose
                      mb-2
                    "
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#services"
                    className="
                      inline-block
                      text-base text-[#efefef]
                      hover:text-white
                      leading-loose
                      mb-2
                    "
                  >
                    Services
                  </a>
                </li>
                <li>
                  <a
                    href="#team"
                    className="
                      inline-block
                      text-base text-[#efefef]
                      hover:text-white
                      leading-loose
                      mb-2
                    "
                  >
                    Team
                  </a>
                </li>
                <li>
                  <a
                    href="#faq"
                    className="
                      inline-block
                      text-base text-[#efefef]
                      hover:text-white
                      leading-loose
                      mb-2
                    "
                  >
                    FAQ
                  </a>
                </li>
                <li>
                  <a
                    href="#testimonials"
                    className="
                      inline-block
                      text-base text-[#efefef]
                      hover:text-white
                      leading-loose
                      mb-2
                    "
                  >
                    Testimonials
                  </a>
                </li>
                <li>
                  <a
                    href="#contact-us"
                    className="
                      inline-block
                      text-base text-[#efefef]
                      hover:text-white
                      leading-loose
                      mb-2
                    "
                  >
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
          </div>
          {/* <div className="w-full sm:w-1/2 lg:w-3/12 2xl:w-2/12 px-4">
            <div className="w-full mb-10">
              <h4 className="text-white text-lg font-semibold mb-9">Customer</h4>
              <ul>
                <li>
                  <a
                    href="#"
                    className="
                      inline-block
                      text-base text-[#efefef]
                      hover:text-white
                      leading-loose
                      mb-2
                    "
                  >
                    Client support
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="
                      inline-block
                      text-base text-[#efefef]
                      hover:text-white
                      leading-loose
                      mb-2
                    "
                  >
                    Latest news
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="
                      inline-block
                      text-base text-[#efefef]
                      hover:text-white
                      leading-loose
                      mb-2
                    "
                  >
                    Company story
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="
                      inline-block
                      text-base text-[#efefef]
                      hover:text-white
                      leading-loose
                      mb-2
                    "
                  >
                    Pricing packages
                  </a>
                </li>
              </ul>
            </div>
          </div> */}
          <div className="w-full sm:w-1/2 lg:w-4/12 2xl:w-2/12 px-4">
            <div className="w-full mb-10">
              <h4 className="text-white text-lg font-semibold mb-9">
                Contact Info
              </h4>
              <ul>
                <li>
                  <p
                    className="
                      inline-flex
                      items-start
                      text-base text-[#efefef]
                      leading-loose
                      mb-3
                    "
                  >
                    <span className="mr-3 mt-[10px]">
                      <svg
                        width="18"
                        height="13"
                        viewBox="0 0 18 13"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M16.3052 0H1.69481C0.75974 0 0 0.799055 0 1.78251V11.2175C0 12.2009 0.75974 13 1.69481 13H16.3052C17.2403 13 18 12.2009 18 11.2175V1.78251C18 0.799055 17.2403 0 16.3052 0ZM16.3052 1.07565C16.4513 1.07565 16.5682 1.10638 16.6851 1.19858L9.40909 5.83924C9.1461 5.99291 8.8539 5.99291 8.59091 5.83924L1.31494 1.19858C1.43182 1.13712 1.5487 1.07565 1.69481 1.07565H16.3052ZM16.3052 11.8936H1.69481C1.34416 11.8936 1.02273 11.5863 1.02273 11.1868V2.27423L8.03572 6.76123C8.32792 6.94563 8.64935 7.03782 8.97078 7.03782C9.29221 7.03782 9.61364 6.94563 9.90584 6.76123L16.9188 2.27423V11.1868C16.9773 11.5863 16.6558 11.8936 16.3052 11.8936Z"
                          fill="white"
                        />
                      </svg>
                    </span>
                    <a href="mailto:hello@crossroadscx.com" className="hover:underline">hello@crossroadscx.com</a>
                  </p>
                </li>

                {/* <li>
                  <p
                    className="
                      inline-flex
                      items-start
                      text-base text-[#efefef]
                      leading-loose
                      mb-3
                    "
                  >
                    <span className="mr-3 mt-[10px]">
                      <svg
                        width="18"
                        height="20"
                        viewBox="0 0 18 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M16.8473 11.1758C16.7843 10.4517 16.1862 9.948 15.4621 9.948H2.05104C1.32697 9.948 0.760308 10.4832 0.665863 11.1758L0.00475417 17.7869C-0.0267272 18.1646 0.0991985 18.5739 0.35105 18.8572C0.602901 19.1406 0.980677 19.298 1.38994 19.298H16.1547C16.5325 19.298 16.9103 19.1406 17.1936 18.8572C17.4454 18.5739 17.5714 18.1961 17.5399 17.7869L16.8473 11.1758ZM16.3436 18.1332C16.3121 18.1646 16.2492 18.2276 16.1232 18.2276H1.38994C1.29549 18.2276 1.20105 18.1646 1.16957 18.1332C1.13808 18.1017 1.07512 18.0387 1.1066 17.9128L1.76771 11.2702C1.76771 11.1128 1.89364 11.0184 2.05104 11.0184H15.4936C15.651 11.0184 15.7455 11.1128 15.7769 11.2702L16.438 17.9128C16.4066 18.0072 16.3751 18.1017 16.3436 18.1332Z"
                          fill="white"
                        />
                        <path
                          d="M8.75838 12.4036C7.53061 12.4036 6.55469 13.3795 6.55469 14.6073C6.55469 15.835 7.53061 16.811 8.75838 16.811C9.98616 16.811 10.9621 15.835 10.9621 14.6073C10.9621 13.3795 9.98616 12.4036 8.75838 12.4036ZM8.75838 15.7091C8.16024 15.7091 7.65654 15.2054 7.65654 14.6073C7.65654 14.0091 8.16024 13.5054 8.75838 13.5054C9.35653 13.5054 9.86023 14.0091 9.86023 14.6073C9.86023 15.2054 9.35653 15.7091 8.75838 15.7091Z"
                          fill="white"
                        />
                        <path
                          d="M0.759997 5.72961C0.82296 7.11479 2.05073 7.68146 2.68036 7.68146H4.88406C4.91554 7.68146 4.91554 7.68146 4.91554 7.68146C5.85998 7.61849 6.80442 6.98887 6.80442 5.72961V4.97406C7.84331 4.97406 10.2359 4.97406 11.2748 4.97406V5.72961C11.2748 6.98887 12.2192 7.61849 13.1637 7.68146H13.1951H15.3674C15.997 7.68146 17.2248 7.11479 17.2877 5.72961C17.2877 5.63517 17.2877 5.28887 17.2877 4.97406C17.2877 4.72221 17.2877 4.50184 17.2877 4.47036C17.2877 4.43888 17.2877 4.40739 17.2877 4.40739C17.1933 3.52592 16.8785 2.80184 16.3433 2.23518L16.3118 2.2037C15.5248 1.47962 14.5803 1.07037 13.8563 0.818516C11.747 0 9.10257 0 8.97664 0C7.11924 0.0314814 5.92295 0.188888 4.12851 0.818516C3.43591 1.03889 2.49147 1.44814 1.70444 2.17222L1.67296 2.2037C1.13777 2.77036 0.82296 3.49443 0.728516 4.37591C0.728516 4.40739 0.728516 4.43888 0.728516 4.43888C0.728516 4.50184 0.728516 4.69073 0.728516 4.94258C0.759997 5.22591 0.759997 5.60369 0.759997 5.72961ZM2.45999 2.95925C3.08962 2.39259 3.87665 2.04629 4.53776 1.79444C6.1748 1.19629 7.24516 1.07037 9.0396 1.03889C9.16553 1.03889 11.6211 1.07037 13.51 1.79444C14.1711 2.04629 14.9581 2.3611 15.5877 2.95925C15.934 3.33703 16.1544 3.84073 16.2174 4.43888C16.2174 4.53332 16.2174 4.69073 16.2174 4.94258C16.2174 5.25739 16.2174 5.60369 16.2174 5.69813C16.1859 6.4222 15.4933 6.57961 15.3988 6.57961H13.2266C12.9118 6.54813 12.4081 6.4222 12.4081 5.72961V4.43888C12.4081 4.18702 12.2507 3.99814 12.0303 3.90369C11.8414 3.84073 6.3322 3.84073 6.14332 3.90369C5.92295 3.96665 5.76554 4.18702 5.76554 4.43888V5.72961C5.76554 6.4222 5.26184 6.54813 4.94702 6.57961H2.77481C2.68036 6.57961 1.98777 6.4222 1.95629 5.69813C1.95629 5.60369 1.95629 5.25739 1.95629 4.94258C1.95629 4.69073 1.95629 4.5648 1.95629 4.47036C1.89333 3.84073 2.1137 3.33703 2.45999 2.95925Z"
                          fill="white"
                        />
                      </svg>
                    </span>
                    +885 543 4565
                  </p>
                </li> */}

                <li>
                  <p
                    className="
                      inline-flex
                      items-start
                      text-base text-[#efefef]
                      leading-loose
                      mb-3
                    "
                  >
                    <span className="mr-3 mt-[10px]">
                      <svg
                        width="18"
                        height="21"
                        viewBox="0 0 18 21"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M8.63902 0C3.89268 0 0 3.7561 0 8.33171C0 11.9854 5.22439 18.0293 7.47805 20.4878C7.78537 20.8293 8.19512 21 8.63902 21C9.08293 21 9.49268 20.8293 9.8 20.4878C12.0537 18.0634 17.278 11.9854 17.278 8.33171C17.278 3.72195 13.3854 0 8.63902 0ZM8.9122 19.6683C8.74146 19.839 8.50244 19.839 8.36585 19.6683C6.69268 17.8585 1.19512 11.6439 1.19512 8.33171C1.19512 4.37073 4.54146 1.19512 8.63902 1.19512C12.7366 1.19512 16.0829 4.40488 16.0829 8.33171C16.0829 11.6439 10.5854 17.8244 8.9122 19.6683Z"
                          fill="white"
                        />
                        <path
                          d="M8.63898 4.91699C6.62434 4.91699 4.95117 6.55602 4.95117 8.6048C4.95117 10.6194 6.5902 12.2926 8.63898 12.2926C10.6878 12.2926 12.3268 10.6536 12.3268 8.6048C12.3268 6.55602 10.6536 4.91699 8.63898 4.91699ZM8.63898 11.0633C7.27312 11.0633 6.14629 9.93651 6.14629 8.57065C6.14629 7.2048 7.27312 6.07797 8.63898 6.07797C10.0048 6.07797 11.1317 7.2048 11.1317 8.57065C11.1317 9.93651 10.0048 11.0633 8.63898 11.0633Z"
                          fill="white"
                        />
                      </svg>
                    </span>
                    Chicago, IL <br /> New York, NY
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#101541] py-8 mt-12 lg:mt-[60px]">
        <div className="container">
          <div className="flex flex-wrap -mx-4">
            <div className="w-full md:w-1/3 lg:w-1/2 px-4">
              <div className="flex justify-center md:justify-start my-1">
                <p className="text-base text-[#efefef]">&copy; 2025 TailGrids</p>
              </div>
            </div>
            <div className="w-full md:w-2/3 lg:w-1/2 px-4">
              <div className="my-1">
                <div
                  className="
                    flex flex-wrap
                    items-center
                    justify-center
                    md:justify-end
                    -mx-3
                  "
                >
                  <a
                    href="#"
                    className="text-base text-[#efefef] hover:text-white px-3"
                  >
                    Privacy policy
                  </a>
                  <a
                    href="#"
                    className="text-base text-[#efefef] hover:text-white px-3"
                  >
                    Legal notice
                  </a>
                  <a
                    href="#"
                    className="text-base text-[#efefef] hover:text-white px-3"
                  >
                    Terms of service
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
