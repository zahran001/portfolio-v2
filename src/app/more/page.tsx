import Image from 'next/image'

export const metadata = { title: 'Milestones — Zahran Yahia Khan' }

export default function MorePage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12 w-full">
      <header className="text-center mb-10">
        <h1 className="text-3xl font-bold text-white mb-2">Milestones</h1>
        <p className="text-white/80">My undergraduate journey!</p>
      </header>

      <div className="bg-white/90 rounded-2xl shadow-lg p-8 space-y-10">

        {/* 2025 */}
        <section>
          <div className="inline-block bg-gradient-to-r from-gradient-start to-gradient-end text-white text-2xl font-bold px-6 py-2 rounded-full mb-6">
            2025
          </div>

          <div className="flex flex-col md:flex-row gap-6 mb-4">
            <div className="flex-1">
              <a href="https://www.rocketprotpo.com/" target="_blank" rel="noopener noreferrer">
                <h3 className="text-lg font-bold text-content-heading hover:text-accent-purple transition-colors mb-2">
                  <strong>Software Engineer Intern</strong>
                </h3>
              </a>
              <p className="text-content-text leading-relaxed">
                This summer, I interned with the Rocket Pro team at Rocket, contributing to new broker-facing product features while also diving deep into cloud and infrastructure. I worked with Kubernetes, Terraform, and CI/CD pipelines to streamline core services, and implemented multi-agent AI workflows to improve mortgage processing. The combination of feature development, systems-level engineering, and networking gave me a broader perspective on building scalable, reliable tools.
              </p>
              <br />
              <p className="text-content-text leading-relaxed">
                <strong>Engineering Reflection (July 2025):</strong>
                SWE has never evolved this quickly—it&apos;s a different game now. Compared to my internship last year, I&apos;ve seen just how far AI has advanced, with <strong> Model Context Protocol (MCP) </strong> and <strong>agentic AI</strong> emerging as industry-wide trends. At Rocket&apos;s quarterly hackathon, we prototyped several enterprise-level use cases around these technologies and even implemented multiple working solutions. This reinforced my belief that AI is no longer just an experimental prototype, but a serious engineering tool that every developer should leverage to boost <strong> productivity</strong>—so that we can spend more time tackling the harder aspects of the job.
              </p>
              <br />
              <p className="text-content-text leading-relaxed">
                At the same time, I also encountered its boundaries in hands-on software engineering. For tasks with clear references—such as <strong>scaffolding a new microservice </strong> based on existing patterns, generating <strong>CRUD layers</strong>, or spinning up <strong>utility scripts</strong>—GPT was incredible, often saving hours of effort. However, when the problem space was less defined, the models degraded code quality, overlooked architectural considerations, or confidently produced incorrect implementations—PRs that no reasonable engineer would ever approve. It was like being taken from point A to point B without acknowledging the road in between—sometimes crashing along the way.
              </p>
              <br />
              <p className="text-content-text leading-relaxed">
                This summer highlighted the distinction between what AI can accelerate and what requires <strong>further engineering judgment.</strong> Building an API is no longer a differentiating skill when GPT can generate one in a few prompts. The core engineering value lies in areas where experience and foresight matter: ensuring <strong>observability, tracing, and monitoring</strong> so that debugging is possible when systems fail, or making long-term architectural choices for <strong>database operations and performance optimizations.</strong> I came to appreciate this by observing senior engineers and architects. I also realized how essential it is to deeply understand a framework&apos;s <strong>design patterns</strong>—without that foundation, even the best prompts couldn&apos;t steer Copilot toward optimal solutions. That&apos;s exactly how transformer models are expected to work: way powerful within context.
              </p>
              <br />
              <p className="text-content-text leading-relaxed">
                My biggest takeaway is that becoming an entry-level engineer in the age of AI can go two ways. Either I use AI as a tool to sharpen my <strong>reasoning</strong> and scale as an impeccable engineer, or I risk becoming a mere AI wizard who skips over the fundamentals—something I never want to be.
              </p>
              <br />
              <p className="text-content-text leading-relaxed">
                Overall, this internship showed me that AI is a powerful amplifier but not a replacement for <strong>engineering fundamentals.</strong> It excels at <strong>accelerating implementation</strong> but still struggles with design, resilience, and long-term maintainability. My growth this summer was learning when to lean on AI for speed—and when to slow down and apply <strong>architectural discipline</strong> myself.
              </p>
              <br />
              <p className="text-content-text leading-relaxed">
                Looking ahead, my goal is to continuously adapt to newer technologies while never compromising the <strong>basics.</strong> I want to see how much more productive I can become by leveraging AI tools thoughtfully, while steadily developing the <strong>intuition</strong> that defines good engineers.
              </p>
              <br />
              <p className="text-content-text leading-relaxed">
                <strong>TL;DR:</strong> If I could summarize it in one line, I wouldn&apos;t have written the whole damn thing.
              </p>
            </div>
            <div className="flex-shrink-0 md:w-56">
              <Image src="/images/rocket2025.jpeg" alt="Rocket 2025" width={224} height={280} className="rounded-lg object-cover w-full" unoptimized />
            </div>
          </div>
        </section>

        {/* 2024 */}
        <section>
          <div className="inline-block bg-gradient-to-r from-purple-500 to-indigo-600 text-white text-2xl font-bold px-6 py-2 rounded-full mb-6">
            2024
          </div>

          <div className="flex flex-col md:flex-row gap-6 mb-4">
            <div className="flex-1">
              <a href="https://www.rocketprotpo.com/" target="_blank" rel="noopener noreferrer">
                <h3 className="text-lg font-bold text-content-heading hover:text-accent-purple transition-colors mb-2">
                  <strong>Software Engineer Intern</strong>
                </h3>
              </a>
              <p className="text-content-text leading-relaxed">
                As a Software Engineer Intern at Rocket Mortgage, I contributed to the Third Party Origination team as a full-stack developer. I collaborated on implementing new features to automate specific loan application processes, working on both the front-end and back-end to streamline user interactions and data processing.
              </p>
              <br />
              <p className="text-content-text leading-relaxed">
                <strong>Engineering Reflection:</strong> As generative AI advances, it can increasingly handle tasks like building simple end-to-end applications, generating unit tests, and automating repetitive tasks. However, real engineering involves understanding the underlying concepts and the codebase, especially when debugging complex systems. Other key challenges include ensuring the application is scalable, available across all regions, and resilient—getting the cloud engineering right.
              </p>
            </div>
            <div className="flex-shrink-0 md:w-56">
              <Image src="/images/namecard.jpeg" alt="Rocket namecard" width={224} height={280} className="rounded-lg object-cover w-full" unoptimized />
            </div>
          </div>

          <div className="mt-4">
            <a href="https://www.usf.edu/engineering/cse/graduate/assistantships.aspx" target="_blank" rel="noopener noreferrer">
              <h3 className="text-lg font-bold text-content-heading hover:text-accent-purple transition-colors mb-2">
                <strong>Undergraduate Teaching Assistant (UGTA)</strong>
              </h3>
            </a>
            <p className="text-content-text leading-relaxed">
              As an Undergraduate Teaching Assistant for the Computer Organization course, I assisted students with their coursework and helped develop instructional materials.
            </p>
          </div>
        </section>

        {/* 2023 */}
        <section>
          <div className="inline-block bg-gradient-to-r from-orange-400 to-pink-500 text-white text-2xl font-bold px-6 py-2 rounded-full mb-6">
            2023
          </div>

          <div className="flex flex-col md:flex-row gap-6 mb-4">
            <div className="flex-1">
              <a href="https://discover.usf.edu/portal/visit-tours" target="_blank" rel="noopener noreferrer">
                <h3 className="text-lg font-bold text-content-heading hover:text-accent-purple transition-colors mb-2">
                  <strong>Campus Tour Guide</strong>
                </h3>
              </a>
              <p className="text-content-text leading-relaxed">
                The Green &amp; Gold Guides are the official tour guides for prospective students and their families on USF Tampa&apos;s campus.
              </p>
              <br />
              <p className="text-content-text leading-relaxed">
                As a USF Green &amp; Gold Tour Guide, I conduct over 150 campus tours per semester, showcasing USF&apos;s facilities and academic programs to prospective students and their families.
              </p>
              <br />
              <p className="text-content-text leading-relaxed">
                My role as a tour guide has provided me with valuable personal and professional benefits. I improved my communication skills by talking to different groups, answering questions, and giving accurate information. It also boosted my confidence in public speaking, especially when talking to large audiences.
              </p>
            </div>
            <div className="flex-shrink-0 md:w-56">
              <Image src="/images/G3.jpeg" alt="Campus tour" width={224} height={280} className="rounded-lg object-cover w-full" unoptimized />
            </div>
          </div>

          <div className="mt-4">
            <h3 className="text-lg font-bold text-content-heading mb-2">
              <strong>USF College of Engineering Dean&apos;s List</strong>
            </h3>
            <p className="text-content-text">
              &bull; Recognition for academic excellence, achieving a position on the Dean&apos;s List for outstanding performance during the semesters Spring 2023 and Fall 2023.
            </p>
          </div>
        </section>

        {/* 2022 */}
        <section>
          <div className="inline-block bg-gradient-to-r from-teal-400 to-cyan-500 text-white text-2xl font-bold px-6 py-2 rounded-full mb-6">
            2022
          </div>

          <div className="flex flex-col md:flex-row gap-6 mb-4">
            <div className="flex-shrink-0 md:w-56">
              <Image src="/images/castor.jpeg" alt="Castor" width={224} height={350} className="rounded-lg object-cover w-full" unoptimized />
            </div>
            <div className="flex-1">
              <a href="https://www.usf.edu/admissions/freshmen/admissions-scholarships/nonflorida.aspx" target="_blank" rel="noopener noreferrer">
                <h3 className="text-lg font-bold text-content-heading hover:text-accent-purple transition-colors mb-2">
                  <strong>USF Green and Gold Presidential Waiver Award</strong>
                </h3>
              </a>
              <p className="text-content-text leading-relaxed">
                &bull; Recognized for outstanding academic achievement and commitment to scholarly pursuits.
              </p>
              <br />
              <p className="text-content-text leading-relaxed">
                This award significantly contributed to covering my attendance costs, providing me with the flexibility for substantial personal and academic growth here at USF.
              </p>
              <br />
              <h3 className="text-lg font-bold text-content-heading mb-2">
                <strong>USF College of Engineering Dean&apos;s List</strong>
              </h3>
              <p className="text-content-text">
                &bull; Recognition for academic excellence, achieving a position on the Dean&apos;s List for outstanding performance during the Fall 2022 semester.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
