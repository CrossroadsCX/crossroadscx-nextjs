import type { NextPage } from 'next'
import Head from 'next/head'
import {
  ContactSection,
  Footer,
  NavBar,
} from '../components'

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

const sectionHeading = 'font-bold text-3xl sm:text-4xl md:text-[40px] text-dark mb-4'
const card = 'bg-white rounded-xl border border-[#EFEFEF] p-8'

const Engineering: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Engineering for Tech Teams: Cloud, Data, AI | CrossroadsCX</title>
        <meta name="description" content="Senior cloud, data, AI agent and custom software engineering for tech teams. A small Chicago team that works in your repo and leaves clean handoffs." />
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
          <div className="max-w-[760px]">
            <span className="font-semibold text-lg text-primary mb-2 block">
              For engineering teams
            </span>
            <h1 className="text-dark font-bold text-4xl sm:text-[42px] leading-snug mb-3">
              Senior engineering help for teams that already know how to build
            </h1>
            <h2 className="text-dark text-2xl mb-3">
              Cloud, data, AI agents, and custom software. A small team in Chicago that plugs into yours.
            </h2>
            <p className="text-base mb-8 text-body-color">
              The migration stalled. The agent demo never shipped. The infrastructure was clicked together in a console and nobody wants to touch it. We&apos;re a small, senior team led by an architect with 15 years of building data platforms and running engineering teams. We work in your repos, review your pull requests, and leave things better documented than we found them.
            </p>
            <ul className="flex flex-wrap items-center gap-4">
              <li>
                <a href="#contact-us" className="py-4 px-10 inline-flex items-center justify-center text-center text-white text-base bg-primary hover:bg-opacity-90 font-normal rounded-lg">
                  Talk to an engineer
                </a>
              </li>
              <li>
                <a href="#eng-triggers" className="py-4 px-6 inline-flex items-center justify-center text-center text-base text-body-color hover:text-primary">
                  Sound familiar?
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-[#F4F7FF] py-20 lg:py-[120px]" id="eng-triggers">
        <div className="container">
          <div className="text-center mx-auto mb-12 lg:mb-16 max-w-[560px]">
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
          <div className="text-center mx-auto mb-12 lg:mb-16 max-w-[560px]">
            <h2 className={sectionHeading}>What we do</h2>
            <p className="text-base text-body-color">
              Five areas. Most engagements touch two or three.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2">
            {capabilities.map((capability) => (
              <article key={capability.title} className={card}>
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
          <div className="text-center mx-auto mb-12 lg:mb-16 max-w-[560px]">
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
          <div className="text-center mx-auto mb-12 lg:mb-16 max-w-[560px]">
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
        </div>
      </section>

      <section className="bg-[#F4F7FF] py-20 lg:py-[120px]" id="eng-team">
        <div className="container">
          <div className="mx-auto max-w-[760px]">
            <h2 className={`${sectionHeading} text-center`}>Who you&apos;ll work with</h2>
            <p className="text-base text-body-color mb-4">
              Chris Birk, CEO and co-founder, is a hands-on architect with 15 years of building data platforms and leading engineering teams. He works directly with Google Cloud engineering teams on architecture, escalations, and roadmap. Before CrossroadsCX, he led a team of 15+ engineers through GCP migrations and application modernization for enterprise customers, and was lead developer and a board member at a civic-tech nonprofit whose work served the U.S. Congress, the White House, federal agencies, and major U.S. cities.
            </p>
            <p className="text-base text-body-color mb-4">
              He also plans long-range technical roadmaps across several client platforms at once, which helps when your real question is &quot;what should we do first?&quot;
            </p>
            <p className="text-base text-body-color">
              Mario Medina is our developer. It&apos;s a small team on purpose. You&apos;ll talk to the people doing the work.
            </p>
          </div>
        </div>
      </section>

      <ContactSection />
      <Footer />
    </div>
  )
}

export default Engineering
