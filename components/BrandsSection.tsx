import React from 'react'
import Image from 'next/future/image'

export const BrandsSection = () => {
  return (
    <section className="bg-[#F4F7FF] py-20 lg:py-[120px]">
      <div className="container">
        <div className="flex flex-wrap -mx-4">
          <div className="w-full px-4">
            <div className="flex flex-wrap justify-center items-center">
              <a
                href="#"
                className="
                  min-w-[150px]
                  max-w-[200px]
                  py-5
                  flex
                  items-center
                  justify-center
                  mx-4
                "
              >
                <Image
                  src="assets/images/brands/graygrids.svg"
                  alt="image"
                  className="w-full h-10"
                />
              </a>
              <a
                href="#"
                className="
                  min-w-[150px]
                  max-w-[200px]
                  py-5
                  flex
                  items-center
                  justify-center
                  mx-4
                "
              >
                <Image
                  src="assets/images/brands/lineicons.svg"
                  alt="image"
                  className="w-full h-10"
                />
              </a>
              <a
                href="#"
                className="
                  min-w-[150px]
                  max-w-[200px]
                  py-5
                  flex
                  items-center
                  justify-center
                  mx-4
                "
              >
                <Image
                  src="assets/images/brands/uideck.svg"
                  alt="image"
                  className="w-full h-10"
                />
              </a>
              <a
                href="#"
                className="
                  min-w-[150px]
                  max-w-[200px]
                  py-5
                  flex
                  items-center
                  justify-center
                  mx-4
                "
              >
                <Image
                  src="assets/images/brands/ayroui.svg"
                  alt="image"
                  className="w-full h-10"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
