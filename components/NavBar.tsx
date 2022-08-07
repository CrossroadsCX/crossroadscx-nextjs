import React, { useState } from 'react'

export const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolledFromTop, setScrolledFromTop] = useState(false)

  return (
    <header
      className={`
        ${scrolledFromTop ? 'fixed z-50 bg-primary bg-opacity-80 shadow-sm backdrop-blur-sm' : 'absolute'}
        z-50 w-full left-0 top-0
      `}
    >
      <div className="container">
        <div className="flex -mx-4 items-center justify-between relative">
          <div className="px-4 w-60 max-w-full">
            <a href="#" className="w-full block py-5">
              <img
                src="assets/images/logo/logo-white.svg"
                alt="logo"
                className="max-w-full"
              />
            </a>
          </div>
          <div className="flex px-4 justify-between items-center w-full">
            <div>
              <button
                onClick={() => setIsOpen(!isOpen)}

                className={`
                  ${isOpen && 'navbarTogglerActive'}
                  block
                  absolute
                  right-4
                  top-1/2
                  -translate-y-1/2
                  lg:hidden
                  px-3
                  py-[6px]
                  rounded-lg
                `}
                id="navbarToggler"
              >
                <span
                  className="relative w-[30px] h-[2px] my-[6px] block bg-white"
                ></span>
                <span
                  className="relative w-[30px] h-[2px] my-[6px] block bg-white"
                ></span>
                <span
                  className="relative w-[30px] h-[2px] my-[6px] block bg-white"
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
                  top-full
                  lg:block lg:static lg:shadow-none
                `}
                id="navbarCollapse"
              >
                <ul className="block lg:flex">
                  <li>
                    <a
                      href="#"
                      className="
                        text-base
                        font-medium
                        text-dark
                        lg:text-white lg:hover:text-white lg:hover:opacity-50
                        hover:opacity-100 hover:text-primary
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
                      href="#"
                      className="
                        text-base
                        font-medium
                        text-dark
                        lg:text-white lg:hover:text-white lg:hover:opacity-50
                        hover:opacity-100 hover:text-primary
                        py-2
                        lg:inline-flex
                        flex
                        lg:ml-12
                      "
                    >
                      About
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="
                        text-base
                        font-medium
                        text-dark
                        lg:text-white lg:hover:text-white lg:hover:opacity-50
                        hover:opacity-100 hover:text-primary
                        py-2
                        lg:inline-flex
                        flex
                        lg:ml-12
                      "
                    >
                      Features
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="
                        text-base
                        font-medium
                        text-dark
                        lg:text-white lg:hover:text-white lg:hover:opacity-50
                        hover:opacity-100 hover:text-primary
                        py-2
                        lg:inline-flex
                        flex
                        lg:ml-12
                      "
                    >
                      Contact
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="sm:flex justify-end hidden pr-16 lg:pr-0">
              <a
                href="#"
                className="
                  text-base
                  font-medium
                  text-white
                  bg-primary
                  rounded-lg
                  py-3
                  px-7
                  hover:opacity-50
                  mr-3
                "
              >
                Sign In
              </a>
              <a
                href="#"
                className="
                  text-base
                  font-medium
                  text-white
                  bg-white bg-opacity-20
                  rounded-lg
                  py-3
                  px-7
                  hover:bg-opacity-100 hover:text-dark
                "
              >
                Sign Up
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
