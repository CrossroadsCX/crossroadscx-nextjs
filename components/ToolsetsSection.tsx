import React from 'react'
import Image from 'next/future/image'

export const ToolsetsSection = () => {
  return (
    <section className="pb-12 lg:pb-[90px] bg-white">
      <div className="container">
        <div className="flex flex-wrap -mx-4">
          <h6
            className="
              font-normal
              text-xs
              flex
              items-center
              text-body-color
              mb-2
            "
          >
            Our strongest toolsets and technologies
            <span
              className="w-8 h-[1px] bg-body-color inline-block ml-2"
            ></span>
          </h6>
          <div className="flex items-center w-full justify-between">
            <div className="w-1/7 py-3 mr-4">
              <a href="https://reactjs.org/" target="_blank" rel="noreferrer">
                <Image src="/images/tools/react.svg" alt="React" width="120" height="10" />
              </a>
            </div>
            <div className="w-1/7 py-3 mr-4">
              <a href="https://cloud.google.com/gcp" target="_blank" rel="noreferrer">
                <Image src="/images/tools/gcp.svg" alt="GCP" width="120" height="10" />
              </a>
            </div>
            <div className="w-1/7 py-3 mr-4">
              <a href="https://www.snowflake.com/" target="_blank" rel="noreferrer">
                <Image
                  src="/images/tools/snowflake.svg"
                  alt="Snowflake"
                  width="120" height="10"
                />
              </a>
            </div>
            <div className="w-1/7 py-3 mr-4">
              <a href="https://www.tableau.com/" target="_blank" rel="noreferrer">
                <Image
                  src="/images/tools/tableau.svg"
                  alt="Tableau"
                  width="150" height="10"
                />
              </a>
            </div>
            <div className="w-1/7 py-3 mr-4">
              <a href="https://graphql.org/" target="_blank" rel="noreferrer">
                <Image
                  src="/images/tools/graphql.svg"
                  alt="GraphQL"
                  width="150" height="10"
                />
              </a>
            </div>
            <div className="w-1/7 py-3 mr-4">
              <a href="https://nextjs.org/" target="_blank" rel="noreferrer">
                <Image
                  src="/images/tools/nextjs.svg"
                  alt="NextJS"
                  width="150" height="10"
                />
              </a>
            </div>
            <div className="w-1/7 py-3 mr-4">
              <a href="https://www.zingg.ai/" target="_blank" rel="noreferrer">
                <Image
                  src="/images/tools/zingg.svg"
                  alt="NextJS"
                  width="150" height="10"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
