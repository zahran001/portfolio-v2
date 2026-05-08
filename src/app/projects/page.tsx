import ProjectCard from '@/components/ProjectCard'
import Toggle from '@/components/Toggle'
import { projects } from '@/data/projects'

export const metadata = { title: 'My Projects — Zahran Yahia Khan' }

const featuredProjects = projects.filter((p) => p.category === 'featured')
const earlierProjects = projects.filter((p) => p.category === 'earlier')

export default function ProjectsPage() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-12 w-full">
      <header className="text-center mb-10">
        <h1 className="text-3xl font-bold text-white mb-2">My projects</h1>
        <p className="text-white/80">Click on the title to learn more about each project!</p>
      </header>

      {/* Featured projects grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
        {featuredProjects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>

      {/* Earlier work toggle */}
      <div className="text-center">
        <Toggle showLabel="Earlier Work" hideLabel="Hide Earlier Work">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-2">
            {earlierProjects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </Toggle>
      </div>
    </div>
  )
}
