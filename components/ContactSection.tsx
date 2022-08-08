import React from 'react'

export const ContactSection = () => {
  return (
    <section className="relative py-20 lg:py-[120px] z-40">
      <div className="absolute w-full h-1/2 z-[-1] top-0 left-0 bg-[#E9F9FF]"></div>
      <div className="container">
        <div className="flex flex-wrap items-center -mx-4">
          <div className="w-full lg:w-6/12 xl:w-7/12 px-4">
            <div className="mb-[60px] lg:mb-[100px] xl:mb-[150px]">
              <span className="text-base font-semibold text-black mb-6">
                CONTACT US
              </span>
              <h2 className="font-semibold text-black text-[35px] leading-tight">
                Let’s talk about <br />
                your problem.
              </h2>
            </div>

            <div className="flex flex-wrap -mx-4">
              <div className="max-w-[330px] w-full px-4">
                <div className="w-full mb-12">
                  <div className="flex">
                    <div className="w-9 h-9 mr-6 text-primary">
                      <svg
                        width="35"
                        height="35"
                        viewBox="0 0 35 35"
                        className="fill-current"
                      >
                        <path
                          d="M17.5 0.710938C9.89844 0.710938 3.66406 6.72656 3.66406 14.0547C3.66406 19.9062 12.0313 29.5859 15.6406 33.5234C16.1328 34.0703 16.7891 34.3437 17.5 34.3437C18.2109 34.3437 18.8672 34.0703 19.3594 33.5234C22.9688 29.6406 31.3359 19.9062 31.3359 14.0547C31.3359 6.67188 25.1016 0.710938 17.5 0.710938ZM17.9375 32.2109C17.6641 32.4844 17.2812 32.4844 17.0625 32.2109C14.3828 29.3125 5.57812 19.3594 5.57812 14.0547C5.57812 7.71094 10.9375 2.625 17.5 2.625C24.0625 2.625 29.4219 7.76562 29.4219 14.0547C29.4219 19.3594 20.6172 29.2578 17.9375 32.2109Z"
                        />
                        <path
                          d="M17.5 8.58594C14.2734 8.58594 11.5938 11.2109 11.5938 14.4922C11.5938 17.7188 14.2187 20.3984 17.5 20.3984C20.7812 20.3984 23.4062 17.7734 23.4062 14.4922C23.4062 11.2109 20.7266 8.58594 17.5 8.58594ZM17.5 18.4297C15.3125 18.4297 13.5078 16.625 13.5078 14.4375C13.5078 12.25 15.3125 10.4453 17.5 10.4453C19.6875 10.4453 21.4922 12.25 21.4922 14.4375C21.4922 16.625 19.6875 18.4297 17.5 18.4297Z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h5 className="text-lg font-medium text-dark mb-4">
                        Our Location
                      </h5>
                      <p className="text-base text-body-color">
                        401 Broadway, 24th Floor, Orchard Cloud View, London
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="max-w-[330px] w-full px-4">
                <div className="w-full mb-12">
                  <div className="flex">
                    <div className="w-9 h-9 mr-6 text-primary">
                      <svg
                        width="35"
                        height="25"
                        viewBox="0 0 35 25"
                        className="fill-current"
                      >
                        <path
                          d="M31.1719 0.960938H3.82812C2.07813 0.960938 0.65625 2.38281 0.65625 4.13281V20.9219C0.65625 22.6719 2.07813 24.0938 3.82812 24.0938H31.1719C32.9219 24.0938 34.3438 22.6719 34.3438 20.9219V4.13281C34.3438 2.38281 32.9219 0.960938 31.1719 0.960938ZM31.1719 2.875C31.4453 2.875 31.6641 2.92969 31.8828 3.09375L18.2656 11.3516C17.7734 11.625 17.2266 11.625 16.7344 11.3516L3.11719 3.09375C3.33594 2.98438 3.55469 2.875 3.82812 2.875H31.1719ZM31.1719 22.125H3.82812C3.17188 22.125 2.57031 21.5781 2.57031 20.8672V5.00781L15.6953 12.9922C16.2422 13.3203 16.8438 13.4844 17.4453 13.4844C18.0469 13.4844 18.6484 13.3203 19.1953 12.9922L32.3203 5.00781V20.8672C32.4297 21.5781 31.8281 22.125 31.1719 22.125Z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h5 className="text-lg font-medium text-dark mb-4">
                        How Can We Help?
                      </h5>
                      <p className="text-base text-body-color mb-2">
                        info@yourdomain.com
                      </p>
                      <p className="text-base text-body-color">
                        contact@yourdomain.com
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-6/12 xl:w-5/12 px-4">
            <div
              className="
                bg-white
                rounded-lg
                shadow-lg
                py-12
                px-8
                sm:p-[60px]
                lg:px-12
                xl:p-60px
              "
            >
              <h3 className="font-semibold text-black text-2xl sm:text-[28px] mb-8">
                Send us a Message
              </h3>
              <form>
                <div className="mb-6">
                  <label className="text-xs text-body-color block">
                    Full Name*
                  </label>
                  <input
                    type="text"
                    placeholder="Adam Gelius"
                    className="
                      border-b border-[#f1f1f1]
                      w-full
                      text-base text-body-color
                      py-4
                      focus-visible:shadow-none
                      focus:border-primary
                      outline-none
                    "
                  />
                </div>
                <div className="mb-6">
                  <label className="text-xs text-body-color block">Email*</label>
                  <input
                    type="email"
                    placeholder="example@yourmail.com"
                    className="
                      border-b border-[#f1f1f1]
                      w-full
                      text-base text-body-color
                      py-4
                      focus-visible:shadow-none
                      focus:border-primary
                      outline-none
                    "
                  />
                </div>
                <div className="mb-6">
                  <label className="text-xs text-body-color block">Phone*</label>
                  <input
                    type="text"
                    placeholder="+885 1254 5211 552"
                    className="
                      border-b border-[#f1f1f1]
                      w-full
                      text-base text-body-color
                      py-4
                      focus-visible:shadow-none
                      focus:border-primary
                      outline-none
                    "
                  />
                </div>
                <div className="mb-6">
                  <label className="text-xs text-body-color block">Message*</label>
                  <textarea
                    rows={1}
                    placeholder="Type your message here"
                    className="
                      border-b border-[#f1f1f1]
                      w-full
                      text-base text-body-color
                      py-4
                      resize-none
                      focus-visible:shadow-none
                      focus:border-primary
                      outline-none
                    "
                  ></textarea>
                </div>
                <div>
                  <button
                    type="submit"
                    className="
                      text-white
                      bg-primary
                      text-base
                      font-medium
                      rounded
                      px-10
                      py-3
                      transition
                      hover:bg-opacity-90
                    "
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
