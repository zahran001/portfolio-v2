import Image from 'next/image'
import Toggle from '@/components/Toggle'

export const metadata = { title: 'E-commerce Microservices Platform — Zahran Yahia Khan' }

export default function EcommercePage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12 w-full">
      <header className="text-center mb-10">
        <h1 className="text-3xl font-bold text-white mb-2">E-commerce Microservices Platform</h1>
        <p className="text-white/80">Distributed architecture with .NET 8 and Azure cloud services</p>
      </header>

      <div className="bg-white/90 rounded-2xl shadow-lg p-8 space-y-8">
        {/* Description */}
        <section>
          <h2 className="text-xl font-bold text-content-heading mb-3"><strong>Description</strong></h2>
          <p className="text-content-text leading-relaxed">
            This project is my sandbox for learning how real enterprise systems grow. Instead of rushing features,
            I&apos;m focused on building a foundation I can evolve in phases - just like engineering teams do
            in practice.
          </p>
          <p className="text-content-text leading-relaxed mt-3">
            My goal here isn&apos;t to complete a portfolio project, but to understand the architecture behind{' '}
            <strong>production-level</strong> systems: clear service boundaries, asynchronous workflows, independent data
            ownership, cloud-native deployment patterns, and more. I plan to keep expanding it as I
            learn and explore new architectural ideas.
          </p>
        </section>

        {/* Features & Info */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <section>
            <h2 className="text-xl font-bold text-content-heading mb-3"><strong>Features</strong></h2>
            <ol className="list-decimal list-outside ml-4 space-y-3 text-content-text leading-relaxed">
              <li>Architected a <strong>6-service .NET 8 microservices platform</strong> on Azure Container Apps; implemented <strong>database-per-service isolation</strong> and a <strong>Redis cache-aside pattern</strong>, achieving a <strong>95% reduction in catalog query latency</strong>.</li>
              <li>Engineered an <strong>event-driven architecture</strong> using Azure Service Bus and built a full observability stack with <strong>OpenTelemetry and Jaeger</strong>; developed custom <strong>Correlation ID middleware</strong> to trace requests across sync and async service boundaries, streamlining root-cause analysis for complex distributed errors.</li>
              <li>Containerized services with <strong>multi-stage Docker builds (~250MB images)</strong> and orchestrated <strong>zero-downtime deployments on Azure</strong>; optimized serverless SQL infrastructure to sustain a production environment for <strong>&lt;$21/month</strong>.</li>
            </ol>
          </section>

          <section>
            <h2 className="text-xl font-bold text-content-heading mb-3"><strong>Info</strong></h2>
            <ul className="space-y-3 text-content-text">
              <li>
                <a href="https://github.com/zahran001/E-commerce" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline hover:text-blue-800">
                  source code
                </a>
              </li>
              <li>
                <a href="https://github.com/zahran001/E-commerce?tab=readme-ov-file#e-commerce-microservices-platform" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline hover:text-blue-800">
                  demo
                </a>
              </li>
              <li>
                <strong>.NET 8, Razor, Azure Container Apps, Azure Service Bus, Azure SQL, Docker, JWT/Identity, Redis, Seq, Jaeger</strong>
              </li>
            </ul>
          </section>
        </div>

        {/* Architecture Diagram */}
        <section>
          <h3 className="text-lg font-bold text-content-heading mb-3"><strong>Architecture Diagram</strong></h3>
          <div className="relative w-full aspect-[19/10] bg-gray-900 rounded-lg overflow-hidden">
            <Image
              src="/images/Ecommerce-Project-2.svg"
              alt="Azure Resource Group Architecture"
              fill
              className="object-contain"
              unoptimized
            />
          </div>
        </section>

        {/* Implementation Highlights */}
        <section>
          <h3 className="text-lg font-bold text-content-heading mb-3"><strong>Implementation Highlights</strong></h3>
          <p className="text-content-text font-semibold mb-2">Observability Stack (Seq, Jaeger, OpenTelemetry)</p>
          <Image src="/images/ecommerce1.png" alt="Observability stack with Seq, Jaeger, and OpenTelemetry integration" width={800} height={450} className="w-full rounded-lg mb-4" unoptimized />
          <p className="text-content-text font-semibold mb-2">Redis Cache-Aside Pattern Performance Comparison</p>
          <Image src="/images/ecommerce2.png" alt="Redis cache-aside implementation" width={800} height={450} className="w-full rounded-lg mb-4" unoptimized />
          <Image src="/images/ecommerce3.png" alt="Before and after latency metrics" width={800} height={450} className="w-full rounded-lg" unoptimized />
        </section>

        {/* Performance Impact */}
        <section>
          <h3 className="text-lg font-bold text-content-heading mb-3"><strong>Performance Impact</strong></h3>
          <p className="text-content-text mb-4"><strong>Latency Improvement:</strong> Reduced catalog query latency from 567ms to 28ms (95% improvement)</p>
          <div className="grid grid-cols-2 gap-4 text-center">
            <div className="bg-gray-50 rounded-lg p-4">
              <p className="font-bold text-content-heading">Before Redis</p>
              <p className="text-content-text">567ms latency</p>
            </div>
            <div className="bg-green-50 rounded-lg p-4">
              <p className="font-bold text-content-heading">After Redis</p>
              <p className="text-content-text">28ms latency</p>
            </div>
          </div>
        </section>

        {/* Engineering Reflection */}
        <section>
          <h3 className="text-lg font-bold text-content-heading mb-3"><strong>Engineering Reflection</strong></h3>
          <p className="text-content-text leading-relaxed">
            Working on this project let me stay in touch with the kind of engineering practices we
            actually need in enterprise systems - something I honestly haven&apos;t been doing much of
            lately, since most of my time goes into experimenting with and learning new AI stuff.
            This pulled me back into the mindset of building real-world, quality software. The
            design trade-offs felt almost identical to my internship work, except here I
            intentionally chose depth over speed.
          </p>
          <div className="mt-4">
            <Toggle showLabel="Read more ▼" hideLabel="Read less ▲">
              <div className="space-y-4">
                <p className="text-content-text leading-relaxed">
                  AI pair programming played a massive role too. I still stand by learning fundamentals
                  without AI first - and I had the core structure built months ago before bringing AI into
                  the loop. But coming back to the project, pair programming with Claude helped me get
                  back on track faster, think more rigorously, and catch deeper problems I probably
                  would&apos;ve missed. Honestly, having AI critique my decisions is incredibly useful; it
                  saves me from a lot of the rookie mistakes I used to make my senior engineers waste
                  hours on.
                </p>
                <p className="text-content-text leading-relaxed">
                  <strong>Update (February 2026):</strong> Since writing the above, I now actively use Claude as a learning and brainstorming tool. Whether I&apos;m diving into AI/ML concepts like transformer internals or model fine-tuning, exploring unfamiliar architectural patterns and reasoning through their design trade-offs, or getting up to speed with something I haven&apos;t worked with before, AI has become part of how I learn. My intuition is that my learning process has changed—I can now ask better questions, explore ideas faster, and fail fast, learning from mistakes in minutes instead of hours.
                </p>
                <p className="text-content-text leading-relaxed">
                  This project will keep growing in phases. If you have ideas or want to suggest
                  improvements, feel free to{' '}
                  <a href="https://github.com/zahran001/E-commerce/issues" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">open a GitHub issue</a>.
                </p>
              </div>
            </Toggle>
          </div>
        </section>
      </div>
    </div>
  )
}
