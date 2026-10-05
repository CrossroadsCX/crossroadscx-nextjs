import React from 'react'
import Image from 'next/future/image'

const tools = [
  { name: 'Claude', href: 'https://www.anthropic.com/claude', src: '/images/tools/claude.svg', width: 112 },
  { name: 'OpenAI', href: 'https://openai.com/', src: '/images/tools/openai.svg', width: 118 },
  { name: 'Google ADK', href: 'https://google.github.io/adk-docs/', src: '/images/tools/google-adk.svg', width: 150 },
  { name: 'React', href: 'https://react.dev/', src: '/images/tools/react.svg', width: 120 },
  { name: 'Google Cloud', href: 'https://cloud.google.com/', src: '/images/tools/gcp.svg', width: 120 },
  { name: 'Snowflake', href: 'https://www.snowflake.com/', src: '/images/tools/snowflake.svg', width: 120 },
  { name: 'Tableau', href: 'https://www.tableau.com/', src: '/images/tools/tableau.svg', width: 150 },
  { name: 'GraphQL', href: 'https://graphql.org/', src: '/images/tools/graphql.svg', width: 150 },
  { name: 'Next.js', href: 'https://nextjs.org/', src: '/images/tools/nextjs.svg', width: 150 },
]

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
          <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-2 w-full">
            {tools.map((tool) => (
              <div key={tool.name} className="py-3">
                <a href={tool.href} target="_blank" rel="noreferrer">
                  <Image src={tool.src} alt={tool.name} width={tool.width} height="60" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
