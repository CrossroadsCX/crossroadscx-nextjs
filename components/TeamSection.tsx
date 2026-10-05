import React from 'react'
import Image from 'next/future/image'
import { TwitterIcon } from './TwitterIcon'
import { LinkedInIcon } from './LinkedInIcon'
import { GitHubIcon } from './GitubIcon'

type TeamSectionProps = {
  id?: string
  className?: string
  children?: React.ReactNode
}

const people = [
  {
    name: 'Chris Birk',
    role: 'CEO / Co-Founder',
    photo: '/images/team/Chris.jpg',
    blurb: 'Hands-on architect. 15 years of building data platforms and leading engineering teams.',
    links: (
      <>
        <TwitterIcon link="https://x.com/cmbirk" />
        <LinkedInIcon link="https://linkedin.com/in/cmbirk" />
        <GitHubIcon link="https://github.com/cmbirk" />
      </>
    ),
  },
  {
    name: 'Mario Medina',
    role: 'Developer',
    photo: '/images/team/Mario.jpg',
    blurb: null,
    links: <GitHubIcon link="https://github.com/blakidarkness" />,
  },
]

// Shared by the home page (#team) and /engineering (#eng-team); children add page-specific detail.
export const TeamSection = ({ id = 'team', className = 'bg-[#F4F7FF]', children }: TeamSectionProps) => {
  return (
    <section id={id} className={`${className} py-20 lg:py-[120px]`}>
      <div className="container">
        <div className="text-center mx-auto mb-12 lg:mb-16 max-w-[560px]">
          <span className="font-semibold text-lg text-primary mb-2 block">
            Team
          </span>
          <h2 className="font-bold text-3xl sm:text-4xl md:text-[40px] text-dark mb-4">
            Who you&apos;ll work with
          </h2>
          <p className="text-base text-body-color">
            A small team on purpose. You&apos;ll talk to the people doing the work.
          </p>
        </div>

        <ul className="grid gap-8 sm:grid-cols-2 mx-auto max-w-[640px]">
          {people.map((person) => (
            <li key={person.name} className="bg-white rounded-xl border border-[#E5E7EB] p-6 text-center">
              <div className="rounded-lg overflow-hidden mb-5 mx-auto max-w-[220px]">
                <Image
                  src={person.photo}
                  alt={`Portrait of ${person.name}`}
                  className="w-full"
                  width="500"
                  height="500"
                />
              </div>
              <h3 className="font-semibold text-lg text-dark">{person.name}</h3>
              <p className="text-sm text-body-color mb-3">{person.role}</p>
              {person.blurb && <p className="text-base text-body-color mb-4">{person.blurb}</p>}
              <div className="flex justify-center items-center">{person.links}</div>
            </li>
          ))}
        </ul>

        {children && <div className="mt-12 mx-auto max-w-[640px]">{children}</div>}
      </div>
    </section>
  )
}
