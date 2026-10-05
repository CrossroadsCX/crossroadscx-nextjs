import React from 'react'
import Image from 'next/future/image'
import Link from 'next/link'

export const HeroSection = () => {


  return (
    <section className="relative pt-[120px] lg:pt-[150px] pb-[110px] bg-white" id="home">
      <div className="container">
        <div className="flex flex-wrap -mx-4">
          <div className="w-full lg:w-5/12 px-4">
            <div className="hero-content">
              <h1
                className="
                  text-dark
                  font-bold
                  text-4xl
                  sm:text-[42px]
                  lg:text-[40px]
                  xl:text-[42px]
                  leading-snug
                  mb-3
                "
              >
                Practical AI, data, and software
              </h1>
              <h2
                className="text-dark text-2xl mb-3"
              >
                A boutique consultancy for teams that want results, not hype
              </h2>
              <p className="text-base mb-8 text-body-color max-w-[480px]">
              CrossroadsCX is a Chicago-based consultancy that helps organizations put modern technology to work. From non-profits and growing businesses to multi-location enterprises, clients engage us to deliver AI and automation, data and analytics, systems integration, and custom software. We can augment your existing team or operate as a fully outsourced one.
              </p>
              <ul className="flex flex-wrap items-center">
                <li>
                  <Link href="/#contact-us">
                    <a
                      className="
                        py-4
                        px-6
                        sm:px-10
                        lg:px-8
                        xl:px-10
                        inline-flex
                        items-center
                        justify-center
                        text-center text-white text-base
                        bg-primary
                        hover:bg-opacity-90
                        font-normal
                        rounded-lg
                      "
                    >
                      Get In Touch
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/#services">
                    <a
                      className="
                        py-4
                        px-6
                        sm:px-10
                        lg:px-8
                        xl:px-10
                        inline-flex
                        items-center
                        justify-center
                        text-center text-base
                        font-normal
                        text-body-color
                        hover:text-primary
                      "
                    >
                      <span className="mr-2">
                        <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                          <circle cx="11" cy="11" r="11" fill="#3056D3" />
                          <path d="M7 11h7.5M11.5 7.5L15 11l-3.5 3.5" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </span>
                      Learn More
                    </a>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="hidden lg:block lg:w-1/12 px-4"></div>
          <div className="w-full lg:w-6/12 px-4">
            <div className="lg:text-right lg:ml-auto">
              <div className="relative inline-block z-10 pt-11 lg:pt-0">
                <Image
                  src="/images/hero/hero.jpg"
                  alt="Neon sign on a brick wall reading 'This is the sign you've been looking for'"
                  className="max-w-full lg:ml-auto rounded-lg rounded-tl-[150px]"
                  width="500" height="10"
                  priority
                />
                <span className="absolute -left-8 -bottom-8 z-[-1]">
                  <svg
                    width="93"
                    height="93"
                    viewBox="0 0 93 93"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="2.5" cy="2.5" r="2.5" fill="#3056D3" />
                    <circle cx="2.5" cy="24.5" r="2.5" fill="#3056D3" />
                    <circle cx="2.5" cy="46.5" r="2.5" fill="#3056D3" />
                    <circle cx="2.5" cy="68.5" r="2.5" fill="#3056D3" />
                    <circle cx="2.5" cy="90.5" r="2.5" fill="#3056D3" />
                    <circle cx="24.5" cy="2.5" r="2.5" fill="#3056D3" />
                    <circle cx="24.5" cy="24.5" r="2.5" fill="#3056D3" />
                    <circle cx="24.5" cy="46.5" r="2.5" fill="#3056D3" />
                    <circle cx="24.5" cy="68.5" r="2.5" fill="#3056D3" />
                    <circle cx="24.5" cy="90.5" r="2.5" fill="#3056D3" />
                    <circle cx="46.5" cy="2.5" r="2.5" fill="#3056D3" />
                    <circle cx="46.5" cy="24.5" r="2.5" fill="#3056D3" />
                    <circle cx="46.5" cy="46.5" r="2.5" fill="#3056D3" />
                    <circle cx="46.5" cy="68.5" r="2.5" fill="#3056D3" />
                    <circle cx="46.5" cy="90.5" r="2.5" fill="#3056D3" />
                    <circle cx="68.5" cy="2.5" r="2.5" fill="#3056D3" />
                    <circle cx="68.5" cy="24.5" r="2.5" fill="#3056D3" />
                    <circle cx="68.5" cy="46.5" r="2.5" fill="#3056D3" />
                    <circle cx="68.5" cy="68.5" r="2.5" fill="#3056D3" />
                    <circle cx="68.5" cy="90.5" r="2.5" fill="#3056D3" />
                    <circle cx="90.5" cy="2.5" r="2.5" fill="#3056D3" />
                    <circle cx="90.5" cy="24.5" r="2.5" fill="#3056D3" />
                    <circle cx="90.5" cy="46.5" r="2.5" fill="#3056D3" />
                    <circle cx="90.5" cy="68.5" r="2.5" fill="#3056D3" />
                    <circle cx="90.5" cy="90.5" r="2.5" fill="#3056D3" />
                  </svg>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
