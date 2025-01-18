import React, { useEffect, useState } from 'react'
import Image from 'next/future/image'

export const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isSticky, setIsSticky] = useState(false)

  const handleScroll = () => {
    const position = window.scrollY

    if (position >= 50) {
      setIsSticky(true)
    } else {
      setIsSticky(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <header
      className={`
        ${isSticky ? 'fixed z-50 bg-white bg-opacity-80 shadow-sm backdrop-blur-sm' : 'absolute'}
        z-50 w-full left-0 top-0
      `}
    >
      <section className="container">
        <div className="flex -mx-4 items-center justify-between relative">
          <div className="px-4 w-80 max-w-full">
            <a href="#home" className="w-full flex items-center justify-between py-5">
              <Image
                src="/images/logo/logo-symbol-v2.svg"
                alt="logo"
                className="w-20"
                width="100"
                height="100"
              />
              <div className="text-black text-2xl">CrossroadsCX</div>
            </a>
          </div>
          <div className="flex px-4 justify-between items-center w-full">
            <div>
              <button
                onClick={ () => setIsOpen(!isOpen)}
                className={`
                  ${isOpen && 'navbarTogglerActive'}
                  block
                  absolute
                  right-4
                  top-1/2
                  -translate-y-1/2
                  lg:hidden
                  focus:ring-2
                  ring-primary
                  px-3
                  py-[6px]
                  rounded-lg
                `}
                id="navbarToggler"
              >
                <span
                  className="relative w-[30px] h-[2px] my-[6px] block bg-body-color"
                ></span>
                <span
                  className="relative w-[30px] h-[2px] my-[6px] block bg-body-color"
                ></span>
                <span
                  className="relative w-[30px] h-[2px] my-[6px] block bg-body-color"
                ></span>
              </button>
              <nav
                className={`
                  ${!isOpen && 'hidden'}
                  absolute
                  py-5
                  px-6
                  bg-white
                  lg:bg-transparent
                  shadow
                  rounded-lg
                  max-w-[250px]
                  w-full
                  lg:max-w-full lg:w-full
                  right-4
                  lg:block lg:static lg:shadow-none
                  transition-all
                  top-full
                `}
                id="navbarCollapse"
              >
                <ul className="block lg:flex">
                  <li>
                    <a
                      href="#home"
                      className="
                        text-base
                        font-medium
                        text-dark
                        hover:text-primary
                        py-2
                        lg:inline-flex
                        flex
                        lg:ml-12
                      "
                    >
                      Home
                    </a>
                  </li>
                  <li>
                    <a
                      href="#services"
                      className="
                        text-base
                        font-medium
                        text-dark
                        hover:text-primary
                        py-2
                        lg:inline-flex
                        flex
                        lg:ml-12
                      "
                    >
                      Services
                    </a>
                  </li>
                  <li>
                    <a
                      href="#team"
                      className="
                        text-base
                        font-medium
                        text-dark
                        hover:text-primary
                        py-2
                        lg:inline-flex
                        flex
                        lg:ml-12
                      "
                    >
                      Team
                    </a>
                  </li>
                  <li>
                    <a
                      href="#faq"
                      className="
                        text-base
                        font-medium
                        text-dark
                        hover:text-primary
                        py-2
                        lg:inline-flex
                        flex
                        lg:ml-12
                      "
                    >
                      FAQ
                    </a>
                  </li>
                  {/* <li>
                    <a
                      href="#testimonials"
                      className="
                        text-base
                        font-medium
                        text-dark
                        hover:text-primary
                        py-2
                        lg:inline-flex
                        flex
                        lg:ml-12
                      "
                    >
                      Testimonials
                    </a>
                  </li> */}
                  <li>
                    <a
                      href="#contact-us"
                      className="
                        text-base
                        font-medium
                        text-dark
                        hover:text-primary
                        py-2
                        lg:inline-flex
                        flex
                        lg:ml-12
                      "
                    >
                      Contact Us
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="sm:flex justify-end hidden pr-16 lg:pr-0">
              {/* <a
                href="#"
                className="
                  text-base
                  font-medium
                  text-dark
                  hover:text-primary
                  py-3
                  px-7
                "
              >
                Login
              </a> */}
              <a
                href="#contact-us"
                className="
                  text-base
                  font-medium
                  text-white
                  bg-primary
                  rounded-lg
                  py-3
                  px-7
                  hover:bg-opacity-90
                "
              >
                Get In Touch
              </a>
            </div>
          </div>
        </div>
      </section>
    </header>
  )
}
