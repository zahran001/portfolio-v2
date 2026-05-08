import Image from 'next/image'
import Link from 'next/link'
import ProjectCard from '@/components/ProjectCard'
import { projects } from '@/data/projects'

const featuredProjects = projects.filter((p) => p.category === 'featured')

export default function Home() {
  return (
    <>
      {/* Hero Header */}
      <header className="text-center py-16 px-6">
        <div className="flex flex-col items-center">
          <Image
            src="/images/profile.png"
            alt="Zahran Yahia Khan"
            width={240}
            height={240}
            className="rounded-full object-cover rotate-90 mb-4"
            priority
            unoptimized
          />
          <h1 className="text-4xl font-bold text-white mt-2 mb-2">Zahran Yahia Khan</h1>
          <p className="text-xl text-white/90 mb-1">Software Engineer | Backend, Cloud &amp; AI</p>
          <p className="text-base text-white/70 mb-6">University of South Florida &bull; Computer Science, B.S.</p>
          <div className="flex flex-wrap justify-center gap-3">
            <a
              href="https://github.com/zahran001"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded border-2 border-white/70 px-5 py-2 text-sm font-semibold text-white hover:border-white hover:bg-white/10 transition-colors"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/zahran-yahia/"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded border-2 border-white/70 px-5 py-2 text-sm font-semibold text-white hover:border-white hover:bg-white/10 transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="https://drive.google.com/file/d/1d_HQYQmHnq7EEbJOmQmGY2gI3y9lmKJG/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded border-2 border-white/70 px-5 py-2 text-sm font-semibold text-white hover:border-white hover:bg-white/10 transition-colors"
            >
              Resume
            </a>
          </div>
        </div>
      </header>

      <div className="max-w-5xl mx-auto px-6 w-full pb-16">
        {/* About Section */}
        <section id="aboutme" className="mb-16">
          <div className="bg-white/90 rounded-2xl shadow-lg p-8 flex flex-col md:flex-row items-center gap-8">
            <div className="flex-1">
              <h2 className="text-2xl font-bold text-content-heading mb-4">About</h2>
              <p className="text-content-text mb-4 leading-relaxed">
                I&apos;m a CS senior at the University of South Florida. I build distributed systems and cloud infrastructure, focusing on Kubernetes, microservices, and high-throughput backends. Recently, I&apos;ve been designing agentic systems and orchestrating multi-agent workflows in production.
              </p>
              <p className="text-content-text mb-6 leading-relaxed">
                I&apos;m currently exploring compiler optimizations (SIMD, memory-bound performance), high-performance computing, and AI/ML systems, including training, fine-tuning, and post-training.
              </p>
              <Link
                href="/about/"
                className="inline-block rounded border-2 border-accent-purple px-5 py-2 text-sm font-bold text-accent-purple hover:bg-accent-purple hover:text-white transition-colors"
              >
                Education &amp; Experience
              </Link>
            </div>
            <div className="flex-shrink-0">
              <Image
                src="/images/zyk_image.png"
                alt="Zahran Yahia Khan"
                width={200}
                height={200}
                className="rounded-xl object-cover"
                unoptimized
              />
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects">
          <h2 className="text-2xl font-bold text-white mb-6 text-center">
            <strong>Projects</strong>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
          <div className="text-center">
            <Link
              href="/projects/"
              className="inline-block rounded border-2 border-white/70 px-6 py-2 text-sm font-semibold text-white hover:border-white hover:bg-white/10 transition-colors"
            >
              Show all
            </Link>
          </div>
        </section>
      </div>
    </>
  )
}
