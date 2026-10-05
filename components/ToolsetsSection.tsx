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
    <section className="py-16 lg:py-20 bg-white" aria-labelledby="toolsets-heading">
      <div className="container">
        <h2 id="toolsets-heading" className="text-sm font-medium text-body-color text-center mb-8">
          Tools we know well
        </h2>
        <ul className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-9 items-center gap-x-8 gap-y-6">
          {tools.map((tool) => (
            <li key={tool.name} className="flex justify-center">
              <a
                href={tool.href}
                target="_blank"
                rel="noreferrer"
                className="grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition"
              >
                <Image src={tool.src} alt={tool.name} width={tool.width} height="60" className="h-8 w-auto" />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
