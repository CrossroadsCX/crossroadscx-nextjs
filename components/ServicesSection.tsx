import React from 'react'
import { useSmoothScrollTo } from '../helpers/useSmoothScrollTo'

export const ServicesSection = () => {
  const bind = useSmoothScrollTo('#services')

  return (
    <section className="pt-20 lg:pt-[120px] pb-12 lg:pb-[90px] bg-white" {...bind}>
      <div className="container">
        <div className="flex flex-wrap -mx-4">
          <div className="w-full px-4">
            <div className="text-center mx-auto mb-12 lg:mb-20 max-w-[510px]">
              <span className="font-semibold text-lg text-primary mb-2 block">
                What We Do
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
                CX Services
              </h2>
              <p className="text-base text-body-color">
                We&apos;re a full-service micro-agency. We&apos;re also human beings. No sales jargon or technical run-arounds. Let&apos;s chat about what you need.
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap justify-center -mx-4">
          <div className="w-full sm:w-4/5 md:w-1/2 lg:w-1/3 px-4">
            <div
              className="
                p-10
                md:px-8
                lg:py-9 lg:px-6
                xl:p-10
                2xl:p-12
                rounded-xl
                bg-white
                border border-[#EFEFEF]
                mb-8
                text-center
                group
                relative
              "
            >
              <div
                className="
                  h-11
                  inline-flex
                  items-center
                  mb-10
                  relative
                  z-10
                  mx-auto
                "
              >
                <span
                  className="
                    w-7
                    h-7
                    rounded-full
                    bg-primary
                    opacity-20
                    absolute
                    -right-3
                    top-0
                    z-[-1]
                  "
                ></span>
                <svg
                  width="49"
                  height="35"
                  viewBox="0 0 49 35"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M46.7188 20.1553H44.9219C44.2188 20.1553 43.5938 19.3741 43.5938 18.4366V6.56157C43.5938 5.54594 44.2188 4.76469 45 4.76469H46.7188C47.5 4.76469 48.125 4.13969 48.125 3.35844C48.125 2.57719 47.5 2.03032 46.7188 2.03032H44.9219C43.4375 2.03032 42.1094 2.96782 41.3281 4.29594H30.9375L29.9219 3.43657C25.7812 -0.157184 19.6094 -0.547809 15.3125 2.57719C13.4375 3.98344 12.1094 5.62407 11.4844 6.48344C11.4844 6.56157 11.4062 6.56157 11.4062 6.56157H9.60938V6.48344C9.60938 3.98344 7.8125 2.03032 5.54688 2.03032H1.40625C0.625 2.03032 0 2.65532 0 3.43657C0 4.21782 0.625 4.76469 1.40625 4.76469H5.46875C6.17188 4.76469 6.79688 5.54594 6.79688 6.48344V18.2803C6.79688 19.2959 6.17188 20.0772 5.39063 20.0772H1.40625C0.625 20.0772 0 20.7022 0 21.4834C0 22.2647 0.625 22.8897 1.40625 22.8897H5.46875C6.95312 22.8897 8.28125 21.9522 9.0625 20.6241H9.6875C10.3906 20.6241 11.0156 20.8584 11.6406 21.1709C11.5625 21.5616 11.5625 22.0303 11.875 22.3428L13.6719 24.7647C13.8281 24.9991 14.1406 25.1553 14.375 25.2334L16.875 25.9366L17.9688 28.2803C18.125 28.6709 18.4375 28.9053 18.8281 28.9834L21.4062 29.6866L23.0469 32.3428C23.2031 32.6553 23.5156 32.8116 23.8281 32.9678L28.2031 34.2178C28.3594 34.2178 28.4375 34.2959 28.5937 34.2959C29.0625 34.2959 29.4531 34.0616 29.7656 33.6709L38.5156 20.7022C38.5938 20.7022 38.5938 20.6241 38.75 20.6241H41.4844C42.1875 21.9522 43.5156 22.8897 45 22.8897H46.7188C47.5 22.8897 48.125 22.2647 48.125 21.4834C48.125 20.7022 47.5 20.1553 46.7188 20.1553ZM13.3594 19.0616C12.2656 18.2803 11.0156 17.8897 9.6875 17.8897H9.60938V9.29594H11.4062C12.3438 9.29594 13.2031 8.82719 13.75 8.12407C14.2969 7.42094 15.3906 6.01469 16.9531 4.84282C20.2344 2.42094 24.9219 2.73344 28.2031 5.54594L30.8594 7.88969C31.3281 8.28032 31.6406 8.82719 31.6406 9.21782C31.6406 9.53032 31.5625 9.76469 31.3281 9.99907L30 11.4053C29.2187 12.2647 27.9687 12.3428 27.0312 11.6397L26.7188 11.4053C24.7656 9.92094 22.1094 10.1553 20.3906 11.8741L13.3594 19.0616ZM36.4844 18.7491C36.4062 18.8272 36.3281 18.9053 36.3281 18.9834L27.9688 31.3272L25.0781 30.5459L23.4375 27.8897C23.2812 27.5772 22.9688 27.4209 22.6562 27.2647L20.1562 26.5616L19.0625 24.2178C18.9062 23.8272 18.5938 23.5928 18.2031 23.5147L15.5469 22.8116L14.6875 21.6397L22.3437 13.7491C23.125 13.0459 24.2187 12.9678 25.0781 13.5928L25.3906 13.8272C27.4219 15.3116 30.2344 15.0772 31.9531 13.2803L33.2812 11.8741C33.9844 11.0928 34.375 10.0772 34.2969 9.06157C34.2969 8.35844 34.0625 7.73344 33.6719 7.10844H40.7812V17.9678H38.5938C37.8125 17.8897 37.0312 18.2022 36.4844 18.7491Z"
                    fill="#3056D3"
                  />
                </svg>
              </div>
              <h4 className="font-semibold text-xl text-dark mb-3">
                Technology Leaders
              </h4>
              <p className="text-body-color">
                <q>Our IT was cutting edge... five years ago. We need to level up, but where to even start?</q>
              </p>

              <span
                className="
                  absolute
                  -bottom-2
                  left-0
                  right-0
                  w-3/4
                  mx-auto
                  h-12
                  bg-primary
                  opacity-0
                  group-hover:opacity-[14%]
                  blur-[12px]
                  transition
                  z-[-1]
                "
              ></span>
            </div>
          </div>
          <div className="w-full sm:w-4/5 md:w-1/2 lg:w-1/3 px-4">
            <div
              className="
                p-10
                md:px-8
                lg:py-9 lg:px-6
                xl:p-10
                2xl:p-12
                rounded-xl
                bg-white
                border border-[#EFEFEF]
                mb-8
                text-center
                group
                relative
              "
            >
              <div
                className="
                  h-11
                  inline-flex
                  items-center
                  mb-10
                  relative
                  z-10
                  mx-auto
                "
              >
                <span
                  className="
                    w-7
                    h-7
                    rounded-full
                    bg-primary
                    opacity-20
                    absolute
                    -right-3
                    top-0
                    z-[-1]
                  "
                ></span>
                <svg
                  width="45"
                  height="48"
                  viewBox="0 0 45 48"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M43.827 35.6532C42.8929 32.6172 39.8569 30.8268 36.8988 31.6831C34.0963 32.5394 30.2819 33.6292 27.4795 34.4855C27.8687 33.3957 27.713 32.5394 27.4795 31.8388C26.8567 30.204 24.9884 29.4256 23.4315 29.4256H15.8026C15.102 29.4256 14.4014 29.1142 13.7008 28.4136C12.9224 27.713 11.9104 27.3237 10.8205 27.3237H4.67073C2.10183 27.3237 0 29.5034 0 32.1502V41.9587C0 44.6833 2.10183 46.863 4.74858 46.863H12.1439C13.078 46.863 14.0122 46.5516 14.7907 46.0067L14.9463 46.0845C17.0482 47.2522 19.4614 47.875 21.8746 47.875C23.3537 47.875 24.8327 47.6414 26.1561 47.2522L39.9348 43.0485H40.0126C43.9049 41.5695 44.5276 38.1443 43.827 35.6532ZM4.74858 44.1384C3.65874 44.1384 2.72459 43.1264 2.72459 41.9587V32.1502C2.72459 30.9825 3.58089 30.0483 4.67073 30.0483H10.8205C11.2876 30.0483 11.6768 30.2819 11.8325 30.4376C12.0661 30.6711 12.3774 30.9046 12.611 31.0603V44.0605C12.4553 44.1384 12.2996 44.1384 12.1439 44.1384H4.74858ZM39.0785 40.4796L25.3776 44.6833C24.2878 44.9947 23.1201 45.2282 21.9524 45.2282C20.0063 45.2282 18.0602 44.7611 16.2697 43.7491L15.3356 43.2821V32.1502C15.4913 32.1502 15.647 32.1502 15.8026 32.1502H23.4315C24.1321 32.1502 24.8327 32.4615 24.9884 32.8508C25.1441 33.3178 24.8327 34.3298 23.2758 35.8089C22.8087 36.276 22.7309 36.8987 23.0423 37.4436C23.5872 38.4556 23.5872 38.4556 31.1382 36.1981C34.4077 35.264 37.6772 34.252 37.6772 34.252C39.1563 33.8628 40.7132 34.7191 41.1803 36.3538C41.4917 37.5215 41.6474 39.5455 39.0785 40.4796Z"
                    fill="#3056D3"
                  />
                  <path
                    d="M36.4317 11.0541C39.4677 11.0541 41.9588 8.56301 41.9588 5.52703C41.9588 2.49106 39.4677 0 36.4317 0C33.3957 0 30.9047 2.49106 30.9047 5.52703C30.9047 8.56301 33.4736 11.0541 36.4317 11.0541ZM36.4317 2.80244C37.9886 2.80244 39.2342 4.04797 39.2342 5.60488C39.2342 7.16179 37.9886 8.40732 36.4317 8.40732C34.8748 8.40732 33.6293 7.16179 33.6293 5.60488C33.7071 3.97012 34.9527 2.80244 36.4317 2.80244Z"
                    fill="#3056D3"
                  />
                  <path
                    d="M34.6412 27.9467H37.2102C40.2461 27.9467 42.6593 25.5334 42.6593 22.4975V18.0603C42.6593 15.0243 40.2461 12.6111 37.2102 12.6111H34.8748C31.8388 12.6111 29.4256 15.0243 29.4256 18.0603V22.4975C29.5034 25.5334 31.8388 27.9467 34.6412 27.9467ZM32.1502 18.0603C32.1502 16.5812 33.3957 15.3357 34.8748 15.3357H37.2102C38.6892 15.3357 39.9347 16.5812 39.9347 18.0603V22.4975C39.9347 23.9765 38.6892 25.2221 37.2102 25.2221H34.6412C33.3179 25.2221 32.1502 23.9765 32.1502 22.4196V18.0603Z"
                    fill="#3056D3"
                  />
                </svg>
              </div>
              <h4 className="font-semibold text-xl text-dark mb-3">
                Data Storytellers
              </h4>
              <p className="text-body-color">
                <q>So much internal data, so little actual use from it - we should be doing much more!</q>
              </p>
              <span
                className="
                  absolute
                  -bottom-2
                  left-0
                  right-0
                  w-3/4
                  mx-auto
                  h-12
                  bg-primary
                  opacity-0
                  group-hover:opacity-[14%]
                  blur-[12px]
                  transition
                  z-[-1]
                "
              ></span>
            </div>
          </div>
          <div className="w-full sm:w-4/5 md:w-1/2 lg:w-1/3 px-4">
            <div
              className="
                p-10
                md:px-8
                lg:py-9 lg:px-6
                xl:p-10
                2xl:p-12
                rounded-xl
                bg-white
                border border-[#EFEFEF]
                mb-8
                text-center
                group
                relative
              "
            >
              <div
                className="
                  h-11
                  inline-flex
                  items-center
                  mb-10
                  relative
                  z-10
                  mx-auto
                "
              >
                <span
                  className="
                    w-7
                    h-7
                    rounded-full
                    bg-primary
                    opacity-20
                    absolute
                    -right-3
                    top-0
                    z-[-1]
                  "
                ></span>
                <svg
                  width="39"
                  height="35"
                  viewBox="0 0 39 35"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M36.5897 11.4805H31.6252V1.8617C31.6252 0.868794 30.8184 0 29.7635 0H5.06489C4.07198 0 3.26524 0.806738 3.26524 1.8617V15.0177C2.83084 15.266 2.52056 15.7004 2.39645 16.2589L0.0382918 27.8635C-0.0858217 28.422 0.100349 28.9805 0.472689 29.4149C0.845029 29.8493 1.34148 30.0975 1.89999 30.0975H22.9372V33.4486C22.9372 34.3174 23.6199 35 24.4886 35H36.6518C37.5206 35 38.2032 34.3174 38.2032 33.4486V13.0319C38.2032 12.2252 37.4585 11.4805 36.5897 11.4805ZM2.27233 27.8635L4.50638 16.9415H5.12694H22.9372V27.8635H2.27233ZM22.9372 13.0319V14.7695H5.43723V2.23404H29.4532V11.5426H24.4886C23.6199 11.4805 22.9372 12.2252 22.9372 13.0319ZM36.0312 32.766H25.1092V13.6525H36.0312V32.766Z"
                    fill="#3056D3"
                  />
                  <path
                    d="M30.5705 28.7322C29.7638 28.7322 29.1432 29.3527 29.1432 30.1595C29.1432 30.9662 29.7638 31.5868 30.5705 31.5868C31.3772 31.5868 31.9978 30.9662 31.9978 30.1595C31.9978 29.3527 31.3152 28.7322 30.5705 28.7322Z"
                    fill="#3056D3"
                  />
                  <path
                    d="M29.143 18.4308H32.6802C33.3008 18.4308 33.7972 17.9343 33.7972 17.3138C33.7972 16.6932 33.2387 16.2588 32.6802 16.2588H29.143C28.5224 16.2588 28.0259 16.7552 28.0259 17.3758C28.0259 17.9964 28.5224 18.4308 29.143 18.4308Z"
                    fill="#3056D3"
                  />
                </svg>
              </div>
              <h4 className="font-semibold text-xl text-dark mb-3">
                Systems Integrators
              </h4>
              <p className="text-body-color">
                <q>Why do we look at four different systems to find a simple, but critical, answer? Can&apos;t we bring these together in one place?</q>
              </p>

              <span
                className="
                  absolute
                  -bottom-2
                  left-0
                  right-0
                  w-3/4
                  mx-auto
                  h-12
                  bg-primary
                  opacity-0
                  group-hover:opacity-[14%]
                  blur-[12px]
                  transition
                  z-[-1]
                "
              ></span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
