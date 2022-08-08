import React from 'react'

export const CallToActionSection = () => {
  return (
    <section
      className="bg-primary py-20 lg:py-[110px] relative overflow-hidden z-10"
    >
      <div className="container">
        <div className="overflow-hidden relative">
          <div className="flex items-stretch flex-wrap -mx-4">
            <div className="w-full px-4">
              <div className="max-w-[570px] mx-auto text-center">
                <h2
                  className="
                    font-semibold
                    text-white text-3xl
                    md:text-[40px]
                    leading-snug
                    mb-6
                  "
                >
                  What Are You Looking For?

                  <span className="font-light"> Get Started Now </span>
                </h2>
                <p className="text-base text-white leading-relaxed mb-8 md:pr-10">
                  There are many variations of passages of Lorem Ipsum but the
                  majority have suffered in some form.
                </p>
                <a
                  href="javascript:void(0)"
                  className="
                    inline-block
                    py-3
                    px-7
                    rounded
                    text-base
                    font-medium
                    bg-[#13C296]
                    hover:bg-opacity-90
                    text-white
                    transition
                  "
                >
                  Explore Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <span className="absolute left-0 top-0">
          <svg
            width="495"
            height="470"
            viewBox="0 0 495 470"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx="55"
              cy="442"
              r="138"
              stroke="white"
              strokeOpacity="0.04"
              strokeWidth="50"
            />
            <circle
              cx="446"
              r="39"
              stroke="white"
              strokeOpacity="0.04"
              strokeWidth="20"
            />
            <path
              d="M245.406 137.609L233.985 94.9852L276.609 106.406L245.406 137.609Z"
              stroke="white"
              strokeOpacity="0.08"
              strokeWidth="12"
            />
          </svg>
        </span>
        <span className="absolute right-0 bottom-0">
          <svg
            width="493"
            height="470"
            viewBox="0 0 493 470"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx="462"
              cy="5"
              r="138"
              stroke="white"
              strokeOpacity="0.04"
              strokeWidth="50"
            />
            <circle
              cx="49"
              cy="470"
              r="39"
              stroke="white"
              strokeOpacity="0.04"
              strokeWidth="20"
            />
            <path
              d="M222.393 226.701L272.808 213.192L259.299 263.607L222.393 226.701Z"
              stroke="white"
              strokeOpacity="0.06"
              strokeWidth="13"
            />
          </svg>
        </span>
      </div>
    </section>
  )
}
