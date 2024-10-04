import React, { useState } from 'react'
import Image from 'next/future/image'


export const VideoSection = () => {
  const [videoOpen, setVideoOpen] = useState(false)

  return (
    <section
      className="bg-primary relative z-10 overflow-hidden"
    >
      <div className="container">
        <div className="flex flex-wrap -mx-4">
          <div className="w-full lg:w-1/2 px-4">
            <div className="py-[100px] lg:py-[140px] max-w-[490px]">
              <span className="text-base font-semibold block mb-3 text-white">
                Watch Our Intro Video
              </span>
              <h2
                className="
                  font-bold
                  text-white text-3xl
                  sm:text-4xl
                  md:text-[40px]
                  leading-snug
                  sm:leading-snug
                  md:leading-snug
                  mb-6
                "
              >
                Making world a better place for you and us
              </h2>
              <p className="text-base text-white leading-relaxed mb-9">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
                at quam fringilla, scelerisque nisl in, accumsan diam. Quisque
                sollicitudin risus eu tortor euismod imperdiet.
              </p>
              <a
                href="#"
                className="
                  text-base
                  font-medium
                  text-white
                  hover:text-primary hover:bg-white
                  py-3
                  px-9
                  inline-block
                  border border-white
                  rounded-full
                "
              >
                Know More
              </a>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className="lg:absolute top-0 right-0 h-full w-full lg:w-1/2 z-10">
          <div className="h-full w-full flex items-center justify-center">
            <Image
              src="assets/images/videos/image-01.jpg"
              alt="image"
              className="
                w-full
                h-full
                object-cover object-center
                lg:absolute
                z-[-1]
                top-0
                left-0
              "
            />
            <a
              href="#"
              onClick={() => setVideoOpen(true)}
              className="
                flex
                items-center
                justify-center
                w-20
                md:w-[100px]
                h-20
                md:h-[100px]
                rounded-full
                bg-primary
                absolute
                z-40
              "
            >
              <span
                className="
                  absolute
                  w-full
                  h-full
                  rounded-full
                  top-0
                  right-0
                  bg-primary bg-opacity-20
                  z-[-1]
                  animate-ping
                  delay-300
                  duration-1000
                "
              ></span>
              <svg
                width="23"
                height="27"
                viewBox="0 0 23 27"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M22.5 12.634C23.1667 13.0189 23.1667 13.9811 22.5 14.366L2.25 26.0574C1.58333 26.4423 0.750001 25.9611 0.750001 25.1913L0.750002 1.80866C0.750002 1.03886 1.58334 0.557731 2.25 0.942631L22.5 12.634Z"
                  fill="white"
                />
              </svg>
            </a>
          </div>
        </div>

        <span className="absolute left-0 top-0 z-[-1]">
          <svg
            width="644"
            height="489"
            viewBox="0 0 644 489"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="196" cy="41" r="448" fill="white" fillOpacity="0.04" />
          </svg>
        </span>
        <span className="absolute left-0 top-0 z-[-1]">
          <svg
            width="659"
            height="562"
            viewBox="0 0 659 562"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx="211"
              cy="114"
              r="448"
              fill="white"
              fillOpacity="0.04"
            />
          </svg>
        </span>
        <span className="absolute right-3 lg:mr-3 lg:right-1/2 top-3 z-[-1]">
          <svg
            width="50"
            height="79"
            viewBox="0 0 50 79"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx="47.7119"
              cy="76.9617"
              r="1.74121"
              transform="rotate(180 47.7119 76.9617)"
              fill="white"
            />
            <circle
              cx="47.7119"
              cy="61.6385"
              r="1.74121"
              transform="rotate(180 47.7119 61.6385)"
              fill="white"
            />
            <circle
              cx="47.7119"
              cy="46.3163"
              r="1.74121"
              transform="rotate(180 47.7119 46.3163)"
              fill="white"
            />
            <circle
              cx="47.7119"
              cy="16.7159"
              r="1.74121"
              transform="rotate(180 47.7119 16.7159)"
              fill="white"
            />
            <circle
              cx="47.7119"
              cy="31.3421"
              r="1.74121"
              transform="rotate(180 47.7119 31.3421)"
              fill="white"
            />
            <circle
              cx="47.7119"
              cy="1.74122"
              r="1.74121"
              transform="rotate(180 47.7119 1.74122)"
              fill="white"
            />
            <circle
              cx="32.3916"
              cy="76.9617"
              r="1.74121"
              transform="rotate(180 32.3916 76.9617)"
              fill="white"
            />
            <circle
              cx="32.3877"
              cy="61.6384"
              r="1.74121"
              transform="rotate(180 32.3877 61.6384)"
              fill="white"
            />
            <circle
              cx="32.3916"
              cy="46.3162"
              r="1.74121"
              transform="rotate(180 32.3916 46.3162)"
              fill="white"
            />
            <circle
              cx="32.3916"
              cy="16.7161"
              r="1.74121"
              transform="rotate(180 32.3916 16.7161)"
              fill="white"
            />
            <circle
              cx="32.3877"
              cy="31.342"
              r="1.74121"
              transform="rotate(180 32.3877 31.342)"
              fill="white"
            />
            <circle
              cx="32.3916"
              cy="1.74145"
              r="1.74121"
              transform="rotate(180 32.3916 1.74145)"
              fill="white"
            />
            <circle
              cx="17.0674"
              cy="76.9617"
              r="1.74121"
              transform="rotate(180 17.0674 76.9617)"
              fill="white"
            />
            <circle
              cx="17.0674"
              cy="61.6384"
              r="1.74121"
              transform="rotate(180 17.0674 61.6384)"
              fill="white"
            />
            <circle
              cx="17.0674"
              cy="46.3162"
              r="1.74121"
              transform="rotate(180 17.0674 46.3162)"
              fill="white"
            />
            <circle
              cx="17.0674"
              cy="16.7161"
              r="1.74121"
              transform="rotate(180 17.0674 16.7161)"
              fill="white"
            />
            <circle
              cx="17.0674"
              cy="31.342"
              r="1.74121"
              transform="rotate(180 17.0674 31.342)"
              fill="white"
            />
            <circle
              cx="17.0674"
              cy="1.74145"
              r="1.74121"
              transform="rotate(180 17.0674 1.74145)"
              fill="white"
            />
            <circle
              cx="1.74316"
              cy="76.9617"
              r="1.74121"
              transform="rotate(180 1.74316 76.9617)"
              fill="white"
            />
            <circle
              cx="1.74316"
              cy="61.6384"
              r="1.74121"
              transform="rotate(180 1.74316 61.6384)"
              fill="white"
            />
            <circle
              cx="1.74316"
              cy="46.3162"
              r="1.74121"
              transform="rotate(180 1.74316 46.3162)"
              fill="white"
            />
            <circle
              cx="1.74316"
              cy="16.7161"
              r="1.74121"
              transform="rotate(180 1.74316 16.7161)"
              fill="white"
            />
            <circle
              cx="1.74316"
              cy="31.342"
              r="1.74121"
              transform="rotate(180 1.74316 31.342)"
              fill="white"
            />
            <circle
              cx="1.74316"
              cy="1.74145"
              r="1.74121"
              transform="rotate(180 1.74316 1.74145)"
              fill="white"
            />
          </svg>
        </span>
      </div>

      <div
        // x-show="videoOpen"
        // x-transition
        className="
          fixed
          top-0
          left-0
          w-full
          h-screen
          flex
          items-center
          justify-center
          z-50
          bg-black bg-opacity-70
        "
      >
        <div
          // @click.outside="videoOpen = false"
          className="max-w-[550px] w-full mx-auto bg-white"
        >
          <iframe
            className="w-full h-[320px]"
            src="https://www.youtube.com/embed/LXb3EKWsInQ?autoplay=1&mute=1"
          >
          </iframe>
        </div>

        <button
          onClick={() => setVideoOpen(false)}
          className="
            absolute
            top-0
            right-0
            w-20
            h-20
            flex
            items-center
            justify-center
            cursor-pointer
            text-body-color
            hover:bg-black
          "
        >
          <svg viewBox="0 0 16 15" className="fill-current w-8 h-8">
            <path
              d="M3.37258 1.27L8.23258 6.13L13.0726 1.29C13.1574 1.19972 13.2596 1.12749 13.373 1.07766C13.4864 1.02783 13.6087 1.00141 13.7326 1C13.9978 1 14.2522 1.10536 14.4397 1.29289C14.6272 1.48043 14.7326 1.73478 14.7326 2C14.7349 2.1226 14.7122 2.24439 14.6657 2.35788C14.6193 2.47138 14.5502 2.57419 14.4626 2.66L9.57258 7.5L14.4626 12.39C14.6274 12.5512 14.724 12.7696 14.7326 13C14.7326 13.2652 14.6272 13.5196 14.4397 13.7071C14.2522 13.8946 13.9978 14 13.7326 14C13.6051 14.0053 13.478 13.984 13.3592 13.9375C13.2404 13.8911 13.1326 13.8204 13.0426 13.73L8.23258 8.87L3.38258 13.72C3.29809 13.8073 3.19715 13.8769 3.08559 13.925C2.97402 13.9731 2.85405 13.9986 2.73258 14C2.46737 14 2.21301 13.8946 2.02548 13.7071C1.83794 13.5196 1.73258 13.2652 1.73258 13C1.73025 12.8774 1.753 12.7556 1.79943 12.6421C1.84586 12.5286 1.91499 12.4258 2.00258 12.34L6.89258 7.5L2.00258 2.61C1.83777 2.44876 1.74112 2.23041 1.73258 2C1.73258 1.73478 1.83794 1.48043 2.02548 1.29289C2.21301 1.10536 2.46737 1 2.73258 1C2.97258 1.003 3.20258 1.1 3.37258 1.27Z"
            />
          </svg>
        </button>
      </div>
    </section>
  )
}
