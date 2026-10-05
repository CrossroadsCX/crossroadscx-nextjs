import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import {
  ContactSection,
  FAQSection,
  Footer,
  NavBar,
  TeamSection,
} from '../components'
import type { FAQ } from '../components/FAQSection'

const triggers = [
  {
    quote: 'Our migration to GCP stalled halfway.',
    answer: 'We pick it up where it stopped, finish the cutover, and leave runbooks your team can follow.',
  },
  {
    quote: 'We need agents in production, not another demo.',
    answer: 'We build them with evals, human approval steps, and a proper API layer to your systems, so they hold up on a Tuesday.',
  },
  {
    quote: 'Our infrastructure was clicked together in the console.',
    answer: 'We move it into Terraform, so every environment is reviewable and repeatable.',
  },
  {
    quote: 'Security review is coming and we\'re not ready.',
    answer: 'We tighten access controls, cloud configuration, and engineering process until it can take enterprise scrutiny.',
  },
  {
    quote: 'The data platform works, but nobody trusts the numbers.',
    answer: 'We rework ingestion and modeling in the warehouse, so there\'s one set of definitions and a clear path from source to dashboard.',
  },
  {
    quote: 'We\'re adopting AI coding tools and getting chaos.',
    answer: 'We set up the conventions, ticket-driven agent workflows, automated review, and CI checks that keep speed from turning into mess.',
  },
]

const capabilities = [
  {
    title: 'Cloud architecture and DevOps',
    body: 'We design and build on Google Cloud, AWS, and Azure, with a bias toward infrastructure you can read in a pull request. Migrations, application modernization, CI/CD, and the unglamorous work that makes deploys boring. (DevOps for your product, that is. We don\'t do help desk or general IT support.)',
    stack: 'GCP (Cloud Run, GKE, Pub/Sub, Cloud SQL, IAM/VPC), AWS, Azure, Terraform, Pulumi, Docker, CI/CD, serverless',
  },
  {
    title: 'Custom software and application development',
    body: 'We build web applications and APIs from the ground up, and integrate them with the legacy systems they have to live beside. We write tests, keep scope honest, and say so when a simpler option exists.',
    stack: 'Node.js, React, Next.js, Python, GraphQL, PHP, PostgreSQL, MySQL, automated testing',
  },
  {
    title: 'Data platforms',
    body: 'Ingestion from many sources into a warehouse, modeled and put in front of the people who need it, including embedded in your own product. The goal is numbers people stop arguing about.',
    stack: 'dbt, BigQuery, Snowflake, PostgreSQL, ELT, Tableau embedded analytics',
  },
  {
    title: 'AI agents and AI-assisted engineering',
    body: 'Two jobs. Production agent systems: the agent, the API or MCP layer connecting it to your warehouse, CRM, and internal tools, human-in-the-loop approvals, and evals. And helping your engineers adopt AI tooling without lowering the bar: conventions, ticket-driven agent workflows, automated code review.',
    stack: 'Gemini Enterprise Agent Platform (Vertex AI), Google ADK, Claude API, Claude Agent SDK, Claude Code, MCP',
  },
  {
    title: 'Security and compliance',
    body: 'We harden the platform and the process around it: cloud configuration, access controls, and engineering practices, so the system holds up in a customer\'s security review.',
    stack: 'GCP IAM/VPC, infrastructure as code, review and CI gates',
  },
]

const practices = [
  { title: 'Your repo, your tickets.', body: 'We work in your version control and your tracker. No parallel universe to reconcile later.' },
  { title: 'Pull requests, reviewed.', body: 'We expect our code to be reviewed, and we\'ll review yours if you want us to.' },
  { title: 'CI from day one.', body: 'Tests and checks run on every change, so "works on my machine" never ships.' },
  { title: 'Docs as we go.', body: 'Decisions, runbooks, and diagrams get written while we build, not in the last week.' },
  { title: 'A clean handoff.', body: 'Your team should be able to run what we build without us. If they want to keep us around, that\'s their call.' },
  { title: 'Augment or own.', body: 'Join your team by the hour or on a retainer, or take a project start to finish. We\'ll tell you which we\'d pick.' },
]

const examples = [
  {
    who: 'A mid-market restaurant group: data platform',
    problem: 'Operational data lived in many separate systems, and every team worked from its own version of the numbers.',
    work: 'Multi-source ingestion, dbt models on BigQuery, and Terraform-provisioned GCP infrastructure. It now powers a business-operations and embedded-analytics platform used across every team.',
    stack: 'dbt, BigQuery, Terraform, GCP, Tableau embedded analytics',
  },
  {
    who: 'Production AI agents on real systems',
    problem: 'Agent prototypes existed, but there was no safe way to connect them to the warehouse, CRM, and internal tools.',
    work: 'Agents on Google ADK and the Claude API, with custom API and MCP server layers to the client\'s systems. People approve consequential actions, and evals check behavior before and after every change.',
    stack: 'Google ADK, Claude API, Claude Agent SDK, MCP, Vertex AI',
  },
  {
    who: 'Getting ready for enterprise security review',
    problem: 'The platform worked, but the cloud setup, access controls, and engineering process needed to withstand an enterprise customer\'s review.',
    work: 'We hardened the cloud infrastructure, tightened access controls, and formalized the engineering process.',
    stack: 'GCP IAM/VPC, Terraform, CI',
  },
]

const engineeringFaqs: FAQ[] = [
  {
    question: 'How do engagements work?',
    answer: (
      <>
        Hourly, project-based or on retainer, whichever fits the work. We can augment your team and work
        alongside your engineers, or take a piece of the work and own it end to end.
        <br /><br />
        Discovery calls are free. If we&apos;re not the right fit, we&apos;ll say so and point you somewhere useful.
      </>
    ),
  },
  {
    question: 'Can you work inside our repos, tracker and cloud accounts?',
    answer: (
      <>
        Yes, with the access you grant. We use your repos, your issue tracker and your cloud accounts, so the
        work lives where your team already looks.
        <br /><br />
        Google Cloud is our home turf. We also work in AWS and Azure.
      </>
    ),
  },
  {
    question: 'Do you work with startups and early teams?',
    answer: (
      <>
        Yes. Early teams often need senior architecture help well before a full-time hire makes sense. We can
        set the foundations, such as cloud setup, deployment pipelines and data model, and then step back or
        stay on as you grow.
      </>
    ),
  },
  {
    question: 'How do you use AI coding tools in our codebase?',
    answer: (
      <>
        Carefully. AI-assisted engineering only helps if it follows your conventions, so we agree on those
        first. Generated code goes through the same review and CI as everything else.
        <br /><br />
        Where AI is part of your product, we add evaluations and guardrails so you can tell when it works and
        when it doesn&apos;t.
      </>
    ),
  },
  {
    question: 'Is DevOps the same as IT support?',
    answer: (
      <>
        No. Our DevOps work is infrastructure and CI/CD for your product: cloud environments, deployments,
        monitoring and security hardening. We don&apos;t do help desk or general IT support, like laptops,
        email accounts or printers.
      </>
    ),
  },
]

const sectionHeading = 'font-bold text-3xl sm:text-4xl md:text-[40px] text-dark mb-4'
const eyebrow = 'font-semibold text-lg text-primary mb-2 block'
const sectionIntro = 'text-center mx-auto mb-12 lg:mb-16 max-w-[640px]'
const card = 'bg-white rounded-xl border border-[#E5E7EB] p-8'
const primaryButton = 'py-4 px-10 inline-flex items-center justify-center text-center text-white text-base bg-primary hover:bg-opacity-90 font-normal rounded-lg'

const Engineering: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Engineering for Tech Teams: Cloud, Data, AI | CrossroadsCX</title>
        <meta name="description" content="Senior cloud, data, AI agent and custom software engineering for tech teams and startups. A small Chicago team that works in your repo and leaves clean handoffs." />
        <link rel="icon" href="/images/logo/logo-symbol-v2.svg" />
        <link rel="canonical" href="https://crossroadscx.com/engineering" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://crossroadscx.com/engineering" />
        <meta property="og:title" content="Engineering for Tech Teams | CrossroadsCX" />
        <meta property="og:description" content="Cloud, data, AI agents and custom software. A small Chicago team that plugs into yours." />
        <meta property="og:image" content="https://crossroadscx.com/images/hero/hero.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <NavBar />

      <section className="pt-[120px] lg:pt-[150px] pb-20 lg:pb-[110px] bg-white" id="engineering">
        <div className="container">
          <div className="flex flex-wrap -mx-4 items-center">
            <div className="w-full lg:w-7/12 px-4">
              <span className={eyebrow}>For engineering teams and startups</span>
              <h1 className="text-dark font-bold text-4xl sm:text-[42px] leading-snug mb-3 max-w-[760px]">
                Senior engineering help for teams that already know how to build
              </h1>
              <h2 className="text-dark text-2xl mb-3 max-w-[640px]">
                Cloud, data, AI agents, and custom software. A small team in Chicago that plugs into yours.
              </h2>
              <p className="text-base mb-8 text-body-color max-w-[640px]">
                The migration stalled. The agent demo never shipped. The infrastructure was clicked together in a console and nobody wants to touch it. We&apos;re a small, senior team led by an architect with 15 years of building data platforms and running engineering teams. We work in your repos, review your pull requests, and leave things better documented than we found them.
              </p>
              <ul className="flex flex-wrap items-center gap-4">
                <li>
                  <a href="#contact-us" className={primaryButton}>
                    Talk to an engineer
                  </a>
                </li>
                <li>
                  <a href="#eng-triggers" className="py-4 px-6 inline-flex items-center justify-center text-center text-base text-body-color hover:text-primary">
                    <span className="mr-2">
                      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                        <circle cx="11" cy="11" r="11" fill="#3056D3" />
                        <path d="M7 11h7.5M11.5 7.5L15 11l-3.5 3.5" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                    Sounds familiar?
                  </a>
                </li>
              </ul>
            </div>
            <div className="hidden lg:block lg:w-5/12 px-4">
              <ul className="bg-[#F4F7FF] rounded-xl p-8 space-y-4">
                {practices.slice(0, 4).map((practice) => (
                  <li key={practice.title} className="flex gap-3 items-start">
                    <svg width="20" height="20" viewBox="0 0 20 20" className="flex-none mt-1" aria-hidden="true">
                      <circle cx="10" cy="10" r="10" fill="#3056D3" />
                      <path d="M6 10.5l2.5 2.5L14 7.5" stroke="white" strokeWidth="1.8" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <span className="text-base text-dark font-medium">{practice.title}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#F4F7FF] py-20 lg:py-[120px]" id="eng-triggers">
        <div className="container">
          <div className={sectionIntro}>
            <span className={eyebrow}>When to call</span>
            <h2 className={sectionHeading}>Sounds familiar?</h2>
            <p className="text-base text-body-color">
              If you&apos;ve said one of these in standup lately, we should talk.
            </p>
          </div>
          <ul className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            {triggers.map((trigger) => (
              <li key={trigger.quote} className={card}>
                <p className="font-semibold text-lg text-dark mb-3">
                  <q>{trigger.quote}</q>
                </p>
                <p className="text-base text-body-color">{trigger.answer}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-white py-20 lg:py-[120px]" id="eng-capabilities">
        <div className="container">
          <div className={sectionIntro}>
            <span className={eyebrow}>Services</span>
            <h2 className={sectionHeading}>What we do</h2>
            <p className="text-base text-body-color">
              Five areas. Most engagements touch two or three.
            </p>
            <p className="text-base text-dark mt-4">
              No engineering team? <Link href="/#services"><a className="text-primary font-medium hover:underline">Here&apos;s how we help business leaders.</a></Link>
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2">
            {capabilities.map((capability, i) => (
              // The odd last card spans both columns so it isn't orphaned.
              <article key={capability.title} className={`${card} ${i === capabilities.length - 1 && capabilities.length % 2 ? 'md:col-span-2' : ''}`}>
                <h3 className="font-semibold text-xl text-dark mb-3">{capability.title}</h3>
                <p className="text-base text-body-color mb-4">{capability.body}</p>
                <p className="text-sm text-body-color">
                  <span className="font-semibold text-dark">Stack: </span>
                  {capability.stack}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#F4F7FF] py-20 lg:py-[120px]" id="eng-how-we-work">
        <div className="container">
          <div className={sectionIntro}>
            <span className={eyebrow}>How we work</span>
            <h2 className={sectionHeading}>How we work with your team</h2>
            <p className="text-base text-body-color">
              We&apos;d rather be a good teammate than a black box.
            </p>
          </div>
          <ul className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            {practices.map((practice) => (
              <li key={practice.title} className={card}>
                <p className="font-semibold text-lg text-dark mb-2">{practice.title}</p>
                <p className="text-base text-body-color">{practice.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-white py-20 lg:py-[120px]" id="eng-examples">
        <div className="container">
          <div className={sectionIntro}>
            <span className={eyebrow}>Examples</span>
            <h2 className={sectionHeading}>What that looks like in practice</h2>
            <p className="text-base text-body-color">
              Client names stay private. We&apos;d do the same for you.
            </p>
          </div>
          <div className="grid gap-8 lg:grid-cols-3">
            {examples.map((example) => (
              <article key={example.who} className={card}>
                <h3 className="font-semibold text-xl text-dark mb-4">{example.who}</h3>
                <p className="text-base text-body-color mb-3">
                  <span className="font-semibold text-dark">The problem: </span>
                  {example.problem}
                </p>
                <p className="text-base text-body-color mb-4">
                  <span className="font-semibold text-dark">What we built: </span>
                  {example.work}
                </p>
                <p className="text-sm text-body-color">
                  <span className="font-semibold text-dark">Stack: </span>
                  {example.stack}
                </p>
              </article>
            ))}
          </div>
          <div className="mt-16 text-center mx-auto max-w-[560px]">
            <p className="text-lg text-dark mb-6">
              Got one of these on your board? Discovery calls are free.
            </p>
            <a href="#contact-us" className={primaryButton}>
              Talk to an engineer
            </a>
          </div>
        </div>
      </section>

      <TeamSection id="eng-team">
        <h3 className="font-semibold text-xl text-dark mb-4">About Chris</h3>
        <ul className="list-disc pl-5 space-y-2 text-base text-body-color">
          <li>15 years of building data platforms and leading engineering teams, hands on the keyboard throughout.</li>
          <li>Works directly with Google Cloud engineering teams on architecture, escalations, and roadmap.</li>
          <li>Before CrossroadsCX, led a team of 15+ engineers through GCP migrations and application modernization for enterprise customers.</li>
          <li>Was lead developer and a board member at a civic-tech nonprofit whose work served the U.S. Congress, the White House, federal agencies, and major U.S. cities.</li>
          <li>Plans long-range technical roadmaps across several client platforms at once, which helps when your real question is &quot;what should we do first?&quot;</li>
        </ul>
      </TeamSection>

      <FAQSection id="eng-faq" faqs={engineeringFaqs} />

      <ContactSection
        eyebrow="Talk to an engineer"
        heading="Tell us what's stuck"
        intro="Describe it the way you'd explain it to a colleague. We'll tell you honestly whether we're a fit, and whether you need us at all."
      />
      <Footer />
    </div>
  )
}

export default Engineering
