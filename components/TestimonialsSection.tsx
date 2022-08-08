import React from 'react'

export const TestimonialsSection = () => {
  return (
    <section className="bg-[#F4F7FF] pt-20 lg:pt-[120px] pb-10 lg:pb-20">
      <div className="container">
        <div className="flex flex-wrap justify-center -mx-4">
          <div className="w-full px-4">
            <div className="text-center mx-auto mb-[60px] max-w-[510px]">
              <span className="font-semibold text-lg text-primary mb-2 block">
                Testimonials
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
                What our Clients Says
              </h2>
              <p className="text-base text-body-color">
                There are many variations of passages of Lorem Ipsum available
                but the majority have suffered alteration in some form.
              </p>
            </div>
          </div>
        </div>

        <div
          x-data="
                {
                  slides: ['1','2','3', '4'],
                  activeSlide: 1,
                  activeButton: 'w-[30px] bg-primary',
                  button: 'w-[10px] bg-[#E4E4E4]'
                }
              "
        >
          <div className="flex justify-center relative">
            <div className="w-full relative pb-16">
              <div
                className="
                  snap
                  w-full
                  max-w-[300px]
                  xs:max-w-[400px]
                  sm:max-w-[540px]
                  md:max-w-[720px]
                  lg:max-w-[960px]
                  xl:max-w-[1140px]
                  2xl:max-w-[1320px]
                  mx-auto
                  h-auto
                  flex flex-no-wrap
                  overflow-hidden
                  transition-all
                "
                x-ref="carousel"
              >
                <div
                  className="
                    min-w-[300px]
                    xs:min-w-[368px]
                    sm:min-w-[510px]
                    md:min-w-[340px]
                    lg:min-w-[465px]
                    xl:min-w-[370px]
                    2xl:min-w-[430px]
                    mx-auto
                    px-4
                    h-full
                  "
                >
                  <div
                    className="
                      bg-white
                      p-8
                      lg:py-8 lg:px-6
                      xl:p-8
                      shadow-testimonial-5
                      mb-10
                    "
                  >
                    <div className="flex items-center mb-5">
                      <span className="mr-1">
                        <svg
                          width="18"
                          height="16"
                          viewBox="0 0 18 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M9.09815 0.360596L11.1054 6.06493H17.601L12.3459 9.5904L14.3532 15.2947L9.09815 11.7693L3.84309 15.2947L5.85035 9.5904L0.595291 6.06493H7.0909L9.09815 0.360596Z"
                            fill="#FBB040"
                          />
                        </svg>
                      </span>
                      <span className="mr-1">
                        <svg
                          width="18"
                          height="16"
                          viewBox="0 0 18 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M9.09815 0.360596L11.1054 6.06493H17.601L12.3459 9.5904L14.3532 15.2947L9.09815 11.7693L3.84309 15.2947L5.85035 9.5904L0.595291 6.06493H7.0909L9.09815 0.360596Z"
                            fill="#FBB040"
                          />
                        </svg>
                      </span>
                      <span className="mr-1">
                        <svg
                          width="18"
                          height="16"
                          viewBox="0 0 18 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M9.09815 0.360596L11.1054 6.06493H17.601L12.3459 9.5904L14.3532 15.2947L9.09815 11.7693L3.84309 15.2947L5.85035 9.5904L0.595291 6.06493H7.0909L9.09815 0.360596Z"
                            fill="#FBB040"
                          />
                        </svg>
                      </span>
                      <span className="mr-1">
                        <svg
                          width="18"
                          height="16"
                          viewBox="0 0 18 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M9.09815 0.360596L11.1054 6.06493H17.601L12.3459 9.5904L14.3532 15.2947L9.09815 11.7693L3.84309 15.2947L5.85035 9.5904L0.595291 6.06493H7.0909L9.09815 0.360596Z"
                            fill="#FBB040"
                          />
                        </svg>
                      </span>
                      <span className="mr-1">
                        <svg
                          width="18"
                          height="16"
                          viewBox="0 0 18 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M9.09815 0.360596L11.1054 6.06493H17.601L12.3459 9.5904L14.3532 15.2947L9.09815 11.7693L3.84309 15.2947L5.85035 9.5904L0.595291 6.06493H7.0909L9.09815 0.360596Z"
                            fill="#FBB040"
                          />
                        </svg>
                      </span>
                    </div>

                    <p className="text-base text-body-color leading-relaxed mb-5">
                      “Our members are so impressed. It&apos;s intuitive. It&apos;s clean.
                      It&apos;s distraction free. If you&apos;re building a community.
                    </p>
                    <div className="flex items-center">
                      <div className="max-w-[50px] w-full h-[50px] mr-4">
                        <img
                          src="assets/images/testimonials/testimonial-04/image-01.png"
                          alt="image"
                          className="w-full"
                        />
                      </div>
                      <div className="w-full">
                        <h5 className="text-sm font-semibold text-dark mb-1">
                          Sabo Masties
                        </h5>
                        <p className="text-xs text-body-color">Founder @ Rolex</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="
                    min-w-[300px]
                    xs:min-w-[368px]
                    sm:min-w-[510px]
                    md:min-w-[340px]
                    lg:min-w-[465px]
                    xl:min-w-[370px]
                    2xl:min-w-[430px]
                    mx-auto
                    px-4
                    h-full
                  "
                >
                  <div
                    className="
                      bg-white
                      p-8
                      lg:py-8 lg:px-6
                      xl:p-8
                      shadow-testimonial-5
                      mb-10
                    "
                  >
                    <div className="flex items-center mb-5">
                      <span className="mr-1">
                        <svg
                          width="18"
                          height="16"
                          viewBox="0 0 18 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M9.09815 0.360596L11.1054 6.06493H17.601L12.3459 9.5904L14.3532 15.2947L9.09815 11.7693L3.84309 15.2947L5.85035 9.5904L0.595291 6.06493H7.0909L9.09815 0.360596Z"
                            fill="#FBB040"
                          />
                        </svg>
                      </span>
                      <span className="mr-1">
                        <svg
                          width="18"
                          height="16"
                          viewBox="0 0 18 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M9.09815 0.360596L11.1054 6.06493H17.601L12.3459 9.5904L14.3532 15.2947L9.09815 11.7693L3.84309 15.2947L5.85035 9.5904L0.595291 6.06493H7.0909L9.09815 0.360596Z"
                            fill="#FBB040"
                          />
                        </svg>
                      </span>
                      <span className="mr-1">
                        <svg
                          width="18"
                          height="16"
                          viewBox="0 0 18 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M9.09815 0.360596L11.1054 6.06493H17.601L12.3459 9.5904L14.3532 15.2947L9.09815 11.7693L3.84309 15.2947L5.85035 9.5904L0.595291 6.06493H7.0909L9.09815 0.360596Z"
                            fill="#FBB040"
                          />
                        </svg>
                      </span>
                      <span className="mr-1">
                        <svg
                          width="18"
                          height="16"
                          viewBox="0 0 18 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M9.09815 0.360596L11.1054 6.06493H17.601L12.3459 9.5904L14.3532 15.2947L9.09815 11.7693L3.84309 15.2947L5.85035 9.5904L0.595291 6.06493H7.0909L9.09815 0.360596Z"
                            fill="#FBB040"
                          />
                        </svg>
                      </span>
                      <span className="mr-1">
                        <svg
                          width="18"
                          height="16"
                          viewBox="0 0 18 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M9.09815 0.360596L11.1054 6.06493H17.601L12.3459 9.5904L14.3532 15.2947L9.09815 11.7693L3.84309 15.2947L5.85035 9.5904L0.595291 6.06493H7.0909L9.09815 0.360596Z"
                            fill="#FBB040"
                          />
                        </svg>
                      </span>
                    </div>

                    <p className="text-base text-body-color leading-relaxed mb-5">
                      “Our members are so impressed. It&apos;s intuitive. It&apos;s clean.
                      It&apos;s distraction free. If you&apos;re building a community.
                    </p>
                    <div className="flex items-center">
                      <div className="max-w-[50px] w-full h-[50px] mr-4">
                        <img
                          src="assets/images/testimonials/testimonial-04/image-01.png"
                          alt="image"
                          className="w-full"
                        />
                      </div>
                      <div className="w-full">
                        <h5 className="text-sm font-semibold text-dark mb-1">
                          Sabo Masties
                        </h5>
                        <p className="text-xs text-body-color">Founder @ Rolex</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="
                    min-w-[300px]
                    xs:min-w-[368px]
                    sm:min-w-[510px]
                    md:min-w-[340px]
                    lg:min-w-[465px]
                    xl:min-w-[370px]
                    2xl:min-w-[430px]
                    mx-auto
                    px-4
                    h-full
                  "
                >
                  <div
                    className="
                      bg-white
                      p-8
                      lg:py-8 lg:px-6
                      xl:p-8
                      shadow-testimonial-5
                      mb-10
                    "
                  >
                    <div className="flex items-center mb-5">
                      <span className="mr-1">
                        <svg
                          width="18"
                          height="16"
                          viewBox="0 0 18 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M9.09815 0.360596L11.1054 6.06493H17.601L12.3459 9.5904L14.3532 15.2947L9.09815 11.7693L3.84309 15.2947L5.85035 9.5904L0.595291 6.06493H7.0909L9.09815 0.360596Z"
                            fill="#FBB040"
                          />
                        </svg>
                      </span>
                      <span className="mr-1">
                        <svg
                          width="18"
                          height="16"
                          viewBox="0 0 18 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M9.09815 0.360596L11.1054 6.06493H17.601L12.3459 9.5904L14.3532 15.2947L9.09815 11.7693L3.84309 15.2947L5.85035 9.5904L0.595291 6.06493H7.0909L9.09815 0.360596Z"
                            fill="#FBB040"
                          />
                        </svg>
                      </span>
                      <span className="mr-1">
                        <svg
                          width="18"
                          height="16"
                          viewBox="0 0 18 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M9.09815 0.360596L11.1054 6.06493H17.601L12.3459 9.5904L14.3532 15.2947L9.09815 11.7693L3.84309 15.2947L5.85035 9.5904L0.595291 6.06493H7.0909L9.09815 0.360596Z"
                            fill="#FBB040"
                          />
                        </svg>
                      </span>
                      <span className="mr-1">
                        <svg
                          width="18"
                          height="16"
                          viewBox="0 0 18 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M9.09815 0.360596L11.1054 6.06493H17.601L12.3459 9.5904L14.3532 15.2947L9.09815 11.7693L3.84309 15.2947L5.85035 9.5904L0.595291 6.06493H7.0909L9.09815 0.360596Z"
                            fill="#FBB040"
                          />
                        </svg>
                      </span>
                      <span className="mr-1">
                        <svg
                          width="18"
                          height="16"
                          viewBox="0 0 18 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M9.09815 0.360596L11.1054 6.06493H17.601L12.3459 9.5904L14.3532 15.2947L9.09815 11.7693L3.84309 15.2947L5.85035 9.5904L0.595291 6.06493H7.0909L9.09815 0.360596Z"
                            fill="#FBB040"
                          />
                        </svg>
                      </span>
                    </div>

                    <p className="text-base text-body-color leading-relaxed mb-5">
                      “Our members are so impressed. It&apos;s intuitive. It&apos;s clean.
                      It&apos;s distraction free. If you&apos;re building a community.
                    </p>
                    <div className="flex items-center">
                      <div className="max-w-[50px] w-full h-[50px] mr-4">
                        <img
                          src="assets/images/testimonials/testimonial-04/image-01.png"
                          alt="image"
                          className="w-full"
                        />
                      </div>
                      <div className="w-full">
                        <h5 className="text-sm font-semibold text-dark mb-1">
                          Sabo Masties
                        </h5>
                        <p className="text-xs text-body-color">Founder @ Rolex</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="
                    min-w-[300px]
                    xs:min-w-[368px]
                    sm:min-w-[510px]
                    md:min-w-[340px]
                    lg:min-w-[465px]
                    xl:min-w-[370px]
                    2xl:min-w-[430px]
                    mx-auto
                    px-4
                    h-full
                  "
                >
                  <div
                    className="
                      bg-white
                      p-8
                      lg:py-8 lg:px-6
                      xl:p-8
                      shadow-testimonial-5
                      mb-10
                    "
                  >
                    <div className="flex items-center mb-5">
                      <span className="mr-1">
                        <svg
                          width="18"
                          height="16"
                          viewBox="0 0 18 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M9.09815 0.360596L11.1054 6.06493H17.601L12.3459 9.5904L14.3532 15.2947L9.09815 11.7693L3.84309 15.2947L5.85035 9.5904L0.595291 6.06493H7.0909L9.09815 0.360596Z"
                            fill="#FBB040"
                          />
                        </svg>
                      </span>
                      <span className="mr-1">
                        <svg
                          width="18"
                          height="16"
                          viewBox="0 0 18 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M9.09815 0.360596L11.1054 6.06493H17.601L12.3459 9.5904L14.3532 15.2947L9.09815 11.7693L3.84309 15.2947L5.85035 9.5904L0.595291 6.06493H7.0909L9.09815 0.360596Z"
                            fill="#FBB040"
                          />
                        </svg>
                      </span>
                      <span className="mr-1">
                        <svg
                          width="18"
                          height="16"
                          viewBox="0 0 18 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M9.09815 0.360596L11.1054 6.06493H17.601L12.3459 9.5904L14.3532 15.2947L9.09815 11.7693L3.84309 15.2947L5.85035 9.5904L0.595291 6.06493H7.0909L9.09815 0.360596Z"
                            fill="#FBB040"
                          />
                        </svg>
                      </span>
                      <span className="mr-1">
                        <svg
                          width="18"
                          height="16"
                          viewBox="0 0 18 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M9.09815 0.360596L11.1054 6.06493H17.601L12.3459 9.5904L14.3532 15.2947L9.09815 11.7693L3.84309 15.2947L5.85035 9.5904L0.595291 6.06493H7.0909L9.09815 0.360596Z"
                            fill="#FBB040"
                          />
                        </svg>
                      </span>
                      <span className="mr-1">
                        <svg
                          width="18"
                          height="16"
                          viewBox="0 0 18 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M9.09815 0.360596L11.1054 6.06493H17.601L12.3459 9.5904L14.3532 15.2947L9.09815 11.7693L3.84309 15.2947L5.85035 9.5904L0.595291 6.06493H7.0909L9.09815 0.360596Z"
                            fill="#FBB040"
                          />
                        </svg>
                      </span>
                    </div>

                    <p className="text-base text-body-color leading-relaxed mb-5">
                      “Our members are so impressed. It&apos;s intuitive. It&apos;s clean.
                      It&apos;s distraction free. If you&apos;re building a community.
                    </p>
                    <div className="flex items-center">
                      <div className="max-w-[50px] w-full h-[50px] mr-4">
                        <img
                          src="assets/images/testimonials/testimonial-04/image-01.png"
                          alt="image"
                          className="w-full"
                        />
                      </div>
                      <div className="w-full">
                        <h5 className="text-sm font-semibold text-dark mb-1">
                          Sabo Masties
                        </h5>
                        <p className="text-xs text-body-color">Founder @ Rolex</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="
                  absolute
                  left-0
                  right-0
                  bottom-0
                  flex
                  items-center
                  justify-center
                "
              >
                <button
                  className="
                    w-12
                    h-12
                    mx-2
                    flex
                    items-center
                    justify-center
                    bg-white
                    text-primary
                    hover:bg-primary hover:text-white
                    transition-all
                    shadow-input
                  "
                  // @click="$refs.carousel.scrollLeft = $refs.carousel.scrollLeft - ($refs.carousel.scrollWidth / slides.length); activeSlide -= 1"
                >
                  <svg
                    width="15"
                    height="13"
                    viewBox="0 0 15 13"
                    className="fill-current"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M5.24264 11.8033L0.46967 7.03037C0.176777 6.73748 0.176777 6.2626 0.46967 5.96971L5.24264 1.19674C5.53553 0.903845 6.01041 0.903845 6.3033 1.19674C6.59619 1.48963 6.59619 1.96451 6.3033 2.2574L2.81066 5.75004H14C14.4142 5.75004 14.75 6.08583 14.75 6.50004C14.75 6.91425 14.4142 7.25004 14 7.25004H2.81066L6.3033 10.7427C6.59619 11.0356 6.59619 11.5104 6.3033 11.8033C6.01041 12.0962 5.53553 12.0962 5.24264 11.8033Z"
                    />
                  </svg>
                </button>
                <button
                  className="
                    w-12
                    h-12
                    flex
                    items-center
                    justify-center
                    bg-white
                    text-primary
                    hover:bg-primary hover:text-white
                    transition-all
                    shadow-input
                    mx-2
                  "
                  // @click="$refs.carousel.scrollLeft = $refs.carousel.scrollLeft + ($refs.carousel.scrollWidth / slides.length); activeSlide += 1"
                >
                  <svg
                    width="15"
                    height="13"
                    viewBox="0 0 15 13"
                    className="fill-current"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M9.75736 11.8033L14.5303 7.03037C14.8232 6.73748 14.8232 6.2626 14.5303 5.96971L9.75736 1.19674C9.46447 0.903845 8.98959 0.903845 8.6967 1.19674C8.40381 1.48963 8.40381 1.96451 8.6967 2.2574L12.1893 5.75004H1C0.585786 5.75004 0.25 6.08583 0.25 6.50004C0.25 6.91425 0.585786 7.25004 1 7.25004H12.1893L8.6967 10.7427C8.40381 11.0356 8.40381 11.5104 8.6967 11.8033C8.98959 12.0962 9.46447 12.0962 9.75736 11.8033Z"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
