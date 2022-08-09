import React from 'react'
import Image from 'next/future/image'
import { useSmoothScrollTo } from '../helpers/useSmoothScrollTo'
import { TwitterIcon } from './TwitterIcon'
import { LinkedInIcon } from './LinkedInIcon'
import { GitHubIcon } from './GitubIcon'

export const TeamSection = () => {
  const scrollBind = useSmoothScrollTo('#team')

  return (
    <section
      {...scrollBind}
      className="
        bg-[#F4F7FF]
        pt-20
        lg:pt-[120px]
        pb-20
        lg:pb-[120px]
        overflow-hidden
      "
    >
      <div className="container">
        <div className="flex flex-wrap -mx-4">
          <div className="w-full px-4">
            <div className="text-center mx-auto mb-[60px] lg:mb-20 max-w-[510px]">
              <span className="font-semibold text-lg text-primary mb-2 block">
                Our Team
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
                Our Team Members
              </h2>
              <p className="text-base text-body-color">
                There are many variations of passages of Lorem Ipsum available
                but the majority have suffered alteration in some form.
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap justify-center -mx-4">
          <div className="w-full xl:w-10/12 2xl:w-9/12 px-4">
            <div
              className="
                bg-white
                px-6
                pt-10
                rounded-lg
                shadow-lg
                relative
                flex flex-wrap
                justify-between
              "
            >
              {/* <div className="w-full flex flex-wrap -mx-4"> */}
              <div className="w-full sm:w-1/2 lg:w-1/4 px-4">
                <div className="max-w-[200px] mx-auto mb-10">
                  <div className="rounded overflow-hidden mb-5">
                    <Image
                      src="/images/team/Chris.jpg"
                      alt="image"
                      className="w-full"
                      width="500"
                      height="500"
                    />
                  </div>
                  <div className="text-center">
                    <h4 className="font-semibold text-base text-dark mb-2">
                      Chris Birk
                    </h4>
                    <p className="text-[10px] uppercase text-body-color mb-5">
                      CEO / Co-Founder
                    </p>
                    <div className="flex justify-center items-center">
                      <TwitterIcon link="https://twitter.com/cmbirk" />
                      <LinkedInIcon link="https://linkedin.com/in/cmbirk" />
                      <GitHubIcon link="https://github.com/cmbirk" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full sm:w-1/2 lg:w-1/4 px-4">
                <div className="max-w-[200px] mx-auto mb-10">
                  <div className="rounded overflow-hidden mb-5">
                    <Image
                      src="/images/team/team-05/image-02.jpg"
                      alt="image"
                      className="w-full"
                      width="500"
                      height="500"
                    />
                  </div>
                  <div className="text-center">
                    <h4 className="font-semibold text-base text-dark mb-2">
                      Jimmy Steinmetz
                    </h4>
                    <p className="text-[10px] uppercase text-body-color mb-5">
                      CAO / Co-Founder
                    </p>
                    <div className="flex justify-center items-center">
                      <TwitterIcon link="https://twitter.com/jimmysteinmetz" />
                      <LinkedInIcon link="https://linkedin.com/in/jimmysteinmetz" />
                      <GitHubIcon link="https://github.com/jimmysteinmetz" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full sm:w-1/2 lg:w-1/4 px-4">
                <div className="max-w-[200px] mx-auto mb-10">
                  <div className="rounded overflow-hidden mb-5">
                    <Image
                      src="/images/team/team-05/image-03.jpg"
                      alt="image"
                      className="w-full"
                      width="500"
                      height="500"
                    />
                  </div>
                  <div className="text-center">
                    <h4 className="font-semibold text-base text-dark mb-2">
                      Mario Enrique Aquino Medina
                    </h4>
                    <p className="text-[10px] uppercase text-body-color mb-5">
                      Developer
                    </p>
                    <div className="flex justify-center items-center">
                      <GitHubIcon link="https://github.com/blakidarkness" />
                    </div>
                  </div>
                </div>
              </div>
              {/* </div> */}
              <span className="absolute -left-12 -top-12 z-[-1]">
                <svg
                  width="143"
                  height="143"
                  viewBox="0 0 143 143"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g opacity="0.5">
                    <mask
                      id="mask0"
                      style={{ maskType: 'alpha' }}
                      maskUnits="userSpaceOnUse"
                      x="19"
                      y="19"
                      width="105"
                      height="105"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M45.1467 26.0654C70.0804 11.6699 101.963 20.2128 116.359 45.1465C130.754 70.0803 122.211 101.963 97.2774 116.358C72.3437 130.754 40.461 122.211 26.0655 97.2773C11.67 72.3435 20.2129 40.4609 45.1467 26.0654Z"
                        fill="white"
                      />
                    </mask>
                    <g mask="url(#mask0)">
                      <path
                        d="M25.1829 111.911L139.425 45.9534"
                        stroke="#3056D3"
                        strokeWidth="3"
                      />
                      <path
                        d="M28.6829 117.973L142.925 52.0157"
                        stroke="#3056D3"
                        strokeWidth="3"
                      />
                      <path
                        d="M32.1829 124.035L146.425 58.0779"
                        stroke="#3056D3"
                        strokeWidth="3"
                      />
                      <path
                        d="M35.6829 130.097L149.925 64.1399"
                        stroke="#3056D3"
                        strokeWidth="3"
                      />
                      <path
                        d="M39.1829 136.16L153.425 70.2022"
                        stroke="#3056D3"
                        strokeWidth="3"
                      />
                      <path
                        d="M42.6829 142.222L156.925 76.2644"
                        stroke="#3056D3"
                        strokeWidth="3"
                      />
                      <path
                        d="M18.1829 99.7867L132.425 33.8291"
                        stroke="#3056D3"
                        strokeWidth="3"
                      />
                      <path
                        d="M21.6829 105.849L135.925 39.8914"
                        stroke="#3056D3"
                        strokeWidth="3"
                      />
                      <path
                        d="M11.1829 87.6624L125.425 21.7049"
                        stroke="#3056D3"
                        strokeWidth="3"
                      />
                      <path
                        d="M14.6829 93.7244L128.925 27.7669"
                        stroke="#3056D3"
                        strokeWidth="3"
                      />
                      <path
                        d="M4.18294 75.5381L118.425 9.5806"
                        stroke="#3056D3"
                        strokeWidth="3"
                      />
                      <path
                        d="M7.68294 81.6001L121.925 15.6426"
                        stroke="#3056D3"
                        strokeWidth="3"
                      />
                      <path
                        d="M-2.72363 63.5754L111.518 -2.3821"
                        stroke="#3056D3"
                        strokeWidth="3"
                      />
                      <path
                        d="M0.682943 69.4759L114.925 3.51835"
                        stroke="#3056D3"
                        strokeWidth="3"
                      />
                      <path
                        d="M-6.28369 57.4087L107.958 -8.54884"
                        stroke="#3056D3"
                        strokeWidth="3"
                      />
                    </g>
                  </g>
                </svg>
              </span>
              <span className="absolute -bottom-8 -right-8 z-[-1]">
                <svg
                  width="76"
                  height="75"
                  viewBox="0 0 76 75"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    opacity="0.613296"
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M16.3327 4.38806C17.5444 4.38806 18.5267 3.40576 18.5267 2.19403C18.5267 0.982301 17.5444 0 16.3327 0C15.121 0 14.1387 0.982301 14.1387 2.19403C14.1387 3.40576 15.121 4.38806 16.3327 4.38806Z"
                    fill="#13C296"
                  />
                  <path
                    opacity="0.613296"
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M30.4724 4.38806C31.6841 4.38806 32.6664 3.40576 32.6664 2.19403C32.6664 0.982301 31.6841 0 30.4724 0C29.2606 0 28.2783 0.982301 28.2783 2.19403C28.2783 3.40576 29.2606 4.38806 30.4724 4.38806Z"
                    fill="#13C296"
                  />
                  <path
                    opacity="0.613296"
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M44.612 4.38806C45.8237 4.38806 46.806 3.40576 46.806 2.19403C46.806 0.982301 45.8237 0 44.612 0C43.4003 0 42.418 0.982301 42.418 2.19403C42.418 3.40576 43.4003 4.38806 44.612 4.38806Z"
                    fill="#13C296"
                  />
                  <path
                    opacity="0.613296"
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M58.7512 4.38806C59.9629 4.38806 60.9452 3.40576 60.9452 2.19403C60.9452 0.982301 59.9629 0 58.7512 0C57.5394 0 56.5571 0.982301 56.5571 2.19403C56.5571 3.40576 57.5394 4.38806 58.7512 4.38806Z"
                    fill="#13C296"
                  />
                  <path
                    opacity="0.613296"
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M72.8908 4.38806C74.1025 4.38806 75.0848 3.40576 75.0848 2.19403C75.0848 0.982301 74.1025 0 72.8908 0C71.6791 0 70.6968 0.982301 70.6968 2.19403C70.6968 3.40576 71.6791 4.38806 72.8908 4.38806Z"
                    fill="#13C296"
                  />
                  <path
                    opacity="0.613296"
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M2.19403 18.5101C3.40576 18.5101 4.38806 17.5278 4.38806 16.3161C4.38806 15.1044 3.40576 14.1221 2.19403 14.1221C0.982301 14.1221 0 15.1044 0 16.3161C0 17.5278 0.982301 18.5101 2.19403 18.5101Z"
                    fill="#13C296"
                  />
                  <path
                    opacity="0.613296"
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M16.3327 18.5101C17.5444 18.5101 18.5267 17.5278 18.5267 16.3161C18.5267 15.1044 17.5444 14.1221 16.3327 14.1221C15.121 14.1221 14.1387 15.1044 14.1387 16.3161C14.1387 17.5278 15.121 18.5101 16.3327 18.5101Z"
                    fill="#13C296"
                  />
                  <path
                    opacity="0.613296"
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M30.4724 18.5101C31.6841 18.5101 32.6664 17.5278 32.6664 16.3161C32.6664 15.1044 31.6841 14.1221 30.4724 14.1221C29.2606 14.1221 28.2783 15.1044 28.2783 16.3161C28.2783 17.5278 29.2606 18.5101 30.4724 18.5101Z"
                    fill="#13C296"
                  />
                  <path
                    opacity="0.613296"
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M44.612 18.5101C45.8237 18.5101 46.806 17.5278 46.806 16.3161C46.806 15.1044 45.8237 14.1221 44.612 14.1221C43.4003 14.1221 42.418 15.1044 42.418 16.3161C42.418 17.5278 43.4003 18.5101 44.612 18.5101Z"
                    fill="#13C296"
                  />
                  <path
                    opacity="0.613296"
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M58.7512 18.5101C59.9629 18.5101 60.9452 17.5278 60.9452 16.3161C60.9452 15.1044 59.9629 14.1221 58.7512 14.1221C57.5394 14.1221 56.5571 15.1044 56.5571 16.3161C56.5571 17.5278 57.5394 18.5101 58.7512 18.5101Z"
                    fill="#13C296"
                  />
                  <path
                    opacity="0.613296"
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M72.8908 18.5101C74.1025 18.5101 75.0848 17.5278 75.0848 16.3161C75.0848 15.1044 74.1025 14.1221 72.8908 14.1221C71.6791 14.1221 70.6968 15.1044 70.6968 16.3161C70.6968 17.5278 71.6791 18.5101 72.8908 18.5101Z"
                    fill="#13C296"
                  />
                  <path
                    opacity="0.613296"
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M2.19403 32.6327C3.40576 32.6327 4.38806 31.6504 4.38806 30.4387C4.38806 29.2269 3.40576 28.2446 2.19403 28.2446C0.982301 28.2446 0 29.2269 0 30.4387C0 31.6504 0.982301 32.6327 2.19403 32.6327Z"
                    fill="#13C296"
                  />
                  <path
                    opacity="0.613296"
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M16.3327 32.6327C17.5444 32.6327 18.5267 31.6504 18.5267 30.4387C18.5267 29.2269 17.5444 28.2446 16.3327 28.2446C15.121 28.2446 14.1387 29.2269 14.1387 30.4387C14.1387 31.6504 15.121 32.6327 16.3327 32.6327Z"
                    fill="#13C296"
                  />
                  <path
                    opacity="0.613296"
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M30.4724 32.6327C31.6841 32.6327 32.6664 31.6504 32.6664 30.4387C32.6664 29.2269 31.6841 28.2446 30.4724 28.2446C29.2606 28.2446 28.2783 29.2269 28.2783 30.4387C28.2783 31.6504 29.2606 32.6327 30.4724 32.6327Z"
                    fill="#13C296"
                  />
                  <path
                    opacity="0.613296"
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M44.612 32.6327C45.8237 32.6327 46.806 31.6504 46.806 30.4387C46.806 29.2269 45.8237 28.2446 44.612 28.2446C43.4003 28.2446 42.418 29.2269 42.418 30.4387C42.418 31.6504 43.4003 32.6327 44.612 32.6327Z"
                    fill="#13C296"
                  />
                  <path
                    opacity="0.613296"
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M58.7512 32.6327C59.9629 32.6327 60.9452 31.6504 60.9452 30.4387C60.9452 29.2269 59.9629 28.2446 58.7512 28.2446C57.5394 28.2446 56.5571 29.2269 56.5571 30.4387C56.5571 31.6504 57.5394 32.6327 58.7512 32.6327Z"
                    fill="#13C296"
                  />
                  <path
                    opacity="0.613296"
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M72.8908 32.6327C74.1025 32.6327 75.0848 31.6504 75.0848 30.4387C75.0848 29.2269 74.1025 28.2446 72.8908 28.2446C71.6791 28.2446 70.6968 29.2269 70.6968 30.4387C70.6968 31.6504 71.6791 32.6327 72.8908 32.6327Z"
                    fill="#13C296"
                  />
                  <path
                    opacity="0.613296"
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M2.19403 46.7552C3.40576 46.7552 4.38806 45.7729 4.38806 44.5612C4.38806 43.3495 3.40576 42.3672 2.19403 42.3672C0.982301 42.3672 0 43.3495 0 44.5612C0 45.7729 0.982301 46.7552 2.19403 46.7552Z"
                    fill="#13C296"
                  />
                  <path
                    opacity="0.613296"
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M16.3327 46.7552C17.5444 46.7552 18.5267 45.7729 18.5267 44.5612C18.5267 43.3495 17.5444 42.3672 16.3327 42.3672C15.121 42.3672 14.1387 43.3495 14.1387 44.5612C14.1387 45.7729 15.121 46.7552 16.3327 46.7552Z"
                    fill="#13C296"
                  />
                  <path
                    opacity="0.613296"
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M30.4724 46.7552C31.6841 46.7552 32.6664 45.7729 32.6664 44.5612C32.6664 43.3495 31.6841 42.3672 30.4724 42.3672C29.2606 42.3672 28.2783 43.3495 28.2783 44.5612C28.2783 45.7729 29.2606 46.7552 30.4724 46.7552Z"
                    fill="#13C296"
                  />
                  <path
                    opacity="0.613296"
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M44.612 46.7552C45.8237 46.7552 46.806 45.7729 46.806 44.5612C46.806 43.3495 45.8237 42.3672 44.612 42.3672C43.4003 42.3672 42.418 43.3495 42.418 44.5612C42.418 45.7729 43.4003 46.7552 44.612 46.7552Z"
                    fill="#13C296"
                  />
                  <path
                    opacity="0.613296"
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M58.7512 46.7552C59.9629 46.7552 60.9452 45.7729 60.9452 44.5612C60.9452 43.3495 59.9629 42.3672 58.7512 42.3672C57.5394 42.3672 56.5571 43.3495 56.5571 44.5612C56.5571 45.7729 57.5394 46.7552 58.7512 46.7552Z"
                    fill="#13C296"
                  />
                  <path
                    opacity="0.613296"
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M72.8908 46.7552C74.1025 46.7552 75.0848 45.7729 75.0848 44.5612C75.0848 43.3495 74.1025 42.3672 72.8908 42.3672C71.6791 42.3672 70.6968 43.3495 70.6968 44.5612C70.6968 45.7729 71.6791 46.7552 72.8908 46.7552Z"
                    fill="#13C296"
                  />
                  <path
                    opacity="0.613296"
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M2.19403 60.8778C3.40576 60.8778 4.38806 59.8955 4.38806 58.6838C4.38806 57.472 3.40576 56.4897 2.19403 56.4897C0.982301 56.4897 0 57.472 0 58.6838C0 59.8955 0.982301 60.8778 2.19403 60.8778Z"
                    fill="#13C296"
                  />
                  <path
                    opacity="0.613296"
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M16.3327 60.8778C17.5444 60.8778 18.5267 59.8955 18.5267 58.6838C18.5267 57.472 17.5444 56.4897 16.3327 56.4897C15.121 56.4897 14.1387 57.472 14.1387 58.6838C14.1387 59.8955 15.121 60.8778 16.3327 60.8778Z"
                    fill="#13C296"
                  />
                  <path
                    opacity="0.613296"
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M30.4724 60.8778C31.6841 60.8778 32.6664 59.8955 32.6664 58.6838C32.6664 57.472 31.6841 56.4897 30.4724 56.4897C29.2606 56.4897 28.2783 57.472 28.2783 58.6838C28.2783 59.8955 29.2606 60.8778 30.4724 60.8778Z"
                    fill="#13C296"
                  />
                  <path
                    opacity="0.613296"
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M44.612 60.8778C45.8237 60.8778 46.806 59.8955 46.806 58.6838C46.806 57.472 45.8237 56.4897 44.612 56.4897C43.4003 56.4897 42.418 57.472 42.418 58.6838C42.418 59.8955 43.4003 60.8778 44.612 60.8778Z"
                    fill="#13C296"
                  />
                  <path
                    opacity="0.613296"
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M58.7512 60.8778C59.9629 60.8778 60.9452 59.8955 60.9452 58.6838C60.9452 57.472 59.9629 56.4897 58.7512 56.4897C57.5394 56.4897 56.5571 57.472 56.5571 58.6838C56.5571 59.8955 57.5394 60.8778 58.7512 60.8778Z"
                    fill="#13C296"
                  />
                  <path
                    opacity="0.613296"
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M72.8908 60.8778C74.1025 60.8778 75.0848 59.8955 75.0848 58.6838C75.0848 57.472 74.1025 56.4897 72.8908 56.4897C71.6791 56.4897 70.6968 57.472 70.6968 58.6838C70.6968 59.8955 71.6791 60.8778 72.8908 60.8778Z"
                    fill="#13C296"
                  />
                  <path
                    opacity="0.613296"
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M2.19403 74.9999C3.40576 74.9999 4.38806 74.0176 4.38806 72.8058C4.38806 71.5941 3.40576 70.6118 2.19403 70.6118C0.982301 70.6118 0 71.5941 0 72.8058C0 74.0176 0.982301 74.9999 2.19403 74.9999Z"
                    fill="#13C296"
                  />
                  <path
                    opacity="0.613296"
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M16.3327 74.9999C17.5444 74.9999 18.5267 74.0176 18.5267 72.8058C18.5267 71.5941 17.5444 70.6118 16.3327 70.6118C15.121 70.6118 14.1387 71.5941 14.1387 72.8058C14.1387 74.0176 15.121 74.9999 16.3327 74.9999Z"
                    fill="#13C296"
                  />
                  <path
                    opacity="0.613296"
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M30.4724 74.9999C31.6841 74.9999 32.6664 74.0176 32.6664 72.8058C32.6664 71.5941 31.6841 70.6118 30.4724 70.6118C29.2606 70.6118 28.2783 71.5941 28.2783 72.8058C28.2783 74.0176 29.2606 74.9999 30.4724 74.9999Z"
                    fill="#13C296"
                  />
                  <path
                    opacity="0.613296"
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M44.612 74.9999C45.8237 74.9999 46.806 74.0176 46.806 72.8058C46.806 71.5941 45.8237 70.6118 44.612 70.6118C43.4003 70.6118 42.418 71.5941 42.418 72.8058C42.418 74.0176 43.4003 74.9999 44.612 74.9999Z"
                    fill="#13C296"
                  />
                  <path
                    opacity="0.613296"
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M58.7512 74.9999C59.9629 74.9999 60.9452 74.0176 60.9452 72.8058C60.9452 71.5941 59.9629 70.6118 58.7512 70.6118C57.5394 70.6118 56.5571 71.5941 56.5571 72.8058C56.5571 74.0176 57.5394 74.9999 58.7512 74.9999Z"
                    fill="#13C296"
                  />
                  <path
                    opacity="0.613296"
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M72.8908 74.9999C74.1025 74.9999 75.0848 74.0176 75.0848 72.8058C75.0848 71.5941 74.1025 70.6118 72.8908 70.6118C71.6791 70.6118 70.6968 71.5941 70.6968 72.8058C70.6968 74.0176 71.6791 74.9999 72.8908 74.9999Z"
                    fill="#13C296"
                  />
                </svg>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
