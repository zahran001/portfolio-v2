import Image from 'next/image'
import Toggle from '@/components/Toggle'

export const metadata = { title: 'My Experience & Education — Zahran Yahia Khan' }

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12 w-full">
      {/* Page header */}
      <header className="text-center mb-10">
        <h1 className="text-3xl font-bold text-white mb-2">My Experience &amp; Education</h1>
      </header>

      {/* Photo strip */}
      <div className="grid grid-cols-3 gap-4 mb-10">
        <Image src="/images/zahran2.jpeg" alt="Zahran" width={300} height={300} className="w-full rounded-lg object-cover" unoptimized />
        <Image src="/images/portfolioImage.jpg" alt="Zahran at event" width={300} height={300} className="w-full rounded-lg object-cover" unoptimized />
        <Image src="/images/portrait.jpeg" alt="Zahran portrait" width={300} height={300} className="w-full rounded-lg object-cover" unoptimized />
      </div>

      <div className="bg-white/90 rounded-2xl shadow-lg p-8 space-y-8">
        {/* Fun tidbit */}
        <p className="text-center text-content-text italic">
          <strong>Fun tidbit!</strong>{' '}
          My first coding project was a{' '}
          <a href="https://drive.google.com/file/d/1yML7_GdWkb2ZEw-kM89IMZPwN0d2TRaf/view" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">Music Player</a>
          {' '}- and even now, the most used app on my phone is Spotify.
        </p>

        {/* EXPERIENCE */}
        <section>
          <h1 className="text-2xl font-bold text-content-heading uppercase tracking-wide mb-6">EXPERIENCE</h1>

          {/* Rocket 2025 */}
          <div className="mb-6">
            <h2 className="text-lg font-bold text-content-heading mb-2">
              <strong>Software Engineer Intern</strong> | Rocket Mortgage | Detroit, MI | May &apos;25 - August &apos;25
            </h2>
            <p className="text-content-text leading-relaxed">
              &bull; Migrated microservices from <strong>AWS ECS</strong> to <strong>EKS</strong> with <strong>Istio</strong>, enforcing Zero Trust networking via default-deny policies and <strong>mTLS</strong> to contain blast radius of any compromised service. Improved deployment speed by <strong>~50%</strong> and reduced API latency by <strong>~33%</strong>.
              <br />&bull; Engineered a distributed multi-agent mortgage processing system using <strong>Google A2A</strong>, <strong>Gemini LLM</strong>, and <strong>Anthropic MCP</strong> with runtime auto-discovery of agents and tools, eliminating redeployments on every tool change and cutting query latency by <strong>~40%</strong> across <strong>100+</strong> concurrent sessions.
              <br />&bull; Built <strong>.NET 8</strong>/<strong>Angular</strong> self-service features for non-agency products, implementing full-stack validation that eliminated the primary driver of support tickets, reducing support requests by <strong>~80%</strong> and unlocking <strong>~$246M</strong> in addressable loan volume.
            </p>
          </div>

          {/* Rocket 2024 */}
          <div className="mb-6">
            <h2 className="text-lg font-bold text-content-heading mb-2">
              <strong>Software Engineer Intern</strong> | Rocket Mortgage | Detroit, MI | May &apos;24 - August &apos;24
            </h2>
            <p className="text-content-text leading-relaxed">
              &bull; Owned end-to-end data contract mapping across the <strong>Angular</strong> UI and <strong>.NET</strong> backend for high-velocity refinance flows, eliminating systemic rate-lock qualification failures that had generated recurring severity tickets.
              <br />&bull; Proactively migrated <strong>100+</strong> API collections to <strong>Bruno</strong> to mitigate licensing and security risks from Postman&apos;s cloud shift; rewrote <strong>CircleCI</strong> pipelines using Bruno CLI and <strong>Docker</strong> to catch bugs pre-production and reduce rollback frequency.
              <br />&bull; Overhauled the <strong>Rancher</strong> local development environment, reducing setup time from <strong>4 days to 1</strong> and enabling local <strong>E2E testing</strong> with direct beta-pointing for hotfix validation.
            </p>
          </div>

          {/* VS One World */}
          <div className="mb-6">
            <h2 className="text-lg font-bold text-content-heading mb-2">
              <strong>Database Developer Intern</strong> |{' '}
              <a href="https://www.vsoneworld.com/" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">VS One World</a>{' '}
              | Dhaka, Bangladesh | May &apos;23 - July &apos;23
            </h2>
            <p className="text-content-text leading-relaxed">
              &bull; Designed and implemented database structures using <strong>MSSQL</strong> and enhanced database performance by optimizing <strong>T-SQL</strong> queries.{' '}
              <br />&bull; Integrated <strong>Crystal Reports</strong> with MSSQL databases and implemented parameterized reports by addressing <strong>8</strong> user-specific report customization requests.
              <br />&bull; Documented and maintained <strong>3</strong> comprehensive entity-relationship diagrams, providing clear visual representations for future reference and team collaboration.
            </p>
          </div>

          {/* Tour Guide */}
          <div className="mb-6">
            <h2 className="text-lg font-bold text-content-heading mb-2">
              <strong>USF Green &amp; Gold Tour Guide</strong> | Office of Admissions | USF Tampa, FL | May &apos;23 - Present
            </h2>
            <p className="text-content-text leading-relaxed">
              &bull; Conducted more than <strong>150</strong> campus tours per semester, effectively serving over <strong>15,000</strong> guests, showcasing USF&apos;s facilities and academic programs to prospective students and their families.{' '}
              <br />&bull; Collaborated with the admissions team in coordinating large-scale events and group visits, effectively managing and engaging over <strong>1,200</strong> daily attendees, bolstering freshman experience and involvement.
              <br />&bull; Enhanced office management by streamlining schedule organization, appointment coordination, and supporting team members, ensuring seamless operational efficiency.
            </p>
          </div>
        </section>

        {/* EDUCATION */}
        <section>
          <h1 className="text-2xl font-bold text-content-heading uppercase tracking-wide mb-4">EDUCATION</h1>
          <h2 className="text-lg font-bold text-content-heading mb-2">
            <strong>University of South Florida</strong> | Bachelor of Science in Computer Science | May 2026
          </h2>
          <p className="text-content-text ml-4">&bull; Current year: <strong>Senior</strong></p>
          <p className="text-content-text ml-4 mb-6">&bull; GPA: <strong>3.95 / 4.00</strong></p>
        </section>

        {/* TECHNICAL SKILLS */}
        <section>
          <h2 className="text-xl font-bold text-content-heading mb-3">TECHNICAL SKILLS</h2>
          <p className="text-content-text leading-relaxed">
            &bull; <strong>Languages:</strong> C#, C/C++, Python, Java, Go, TypeScript/JavaScript, SQL
            <br />&bull; <strong>Frameworks:</strong> .NET 8/ASP.NET Core, Angular, React, Node.js/Express
            <br />&bull; <strong>Cloud/DevOps:</strong> AWS, Kubernetes, Terraform, Docker, Rancher, GitHub Actions/CircleCI, OpenTelemetry, Dynatrace, Splunk
            <br />&bull; <strong>Databases &amp; Testing:</strong> PostgreSQL, MySQL, Redis, Kafka; xUnit, Jest, Playwright, Karma
          </p>
        </section>

        {/* RELEVANT COURSEWORK */}
        <section>
          <h2 className="text-xl font-bold text-content-heading mb-3">RELEVANT COURSEWORK</h2>
          <p className="text-content-text leading-relaxed mb-4">
            &bull; Data Structures &amp; Algorithms &bull; Artificial Intelligence &bull; Machine Learning &bull; Computer Architecture &bull; Operating Systems &bull; Database Design &bull; Cryptographic Hardware &amp; Embedded Systems &bull; Computer Networks
          </p>
          <Toggle showLabel="Show more courses ▼" hideLabel="Show fewer courses ▲">
            <p className="text-content-text leading-relaxed">
              &bull; Secure Coding &bull; Software System Development &bull; Software Engineering &bull; Massively Parallel Systems &bull; Automata Theory &bull; Programming Concepts &bull; Program Design &bull; Computer Logic &amp; Design &bull; Discrete Structures &bull; Linear Systems
            </p>
          </Toggle>
        </section>
      </div>
    </div>
  )
}
