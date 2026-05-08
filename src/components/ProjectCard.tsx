import Image from 'next/image'
import Link from 'next/link'
import {
  faCode,
  faRobot,
  faSitemap,
  faCodeBranch,
  faCube,
  faWalking,
  faSearch,
  faStickyNote,
  faTable,
  faRoad,
  faChartBar,
  faMicrochip,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import type { IconDefinition } from '@fortawesome/fontawesome-svg-core'
import TagPill from './TagPill'
import type { Project } from '@/data/projects'

const ICON_MAP: Record<string, IconDefinition> = {
  faCode,
  faRobot,
  faSitemap,
  faCodeBranch,
  faCube,
  faWalking,
  faSearch,
  faStickyNote,
  faTable,
  faRoad,
  faChartBar,
  faMicrochip,
}

export default function ProjectCard({ project }: { project: Project }) {
  const { slug, title, description, techStack, tags, image } = project

  return (
    <Link
      href={`/projects/${slug}/`}
      className="group block rounded-xl border border-content-border bg-white overflow-hidden shadow-sm hover:shadow-md transition-shadow"
    >
      {image.variant === 'diagram' && image.src && (
        <div className="relative w-full aspect-[19/10] bg-gray-900">
          <Image
            src={image.src}
            alt={title}
            fill
            className="object-contain"
            unoptimized
          />
        </div>
      )}

      {image.variant === 'photo' && image.src && (
        <div className="relative w-full aspect-[19/10]">
          <Image
            src={image.src}
            alt={title}
            fill
            className="object-cover object-top"
            unoptimized
          />
        </div>
      )}

      {image.variant === 'icon' && (
        <div
          className="relative w-full aspect-[19/10] flex items-center justify-center"
          style={{ background: `linear-gradient(135deg, ${image.accent ?? '#935d8c'} 0%, #5f4d93 100%)` }}
        >
          {image.icon && ICON_MAP[image.icon] && (
            <FontAwesomeIcon
              icon={ICON_MAP[image.icon]}
              className="text-white/80"
              style={{ fontSize: '3.5rem' }}
            />
          )}
        </div>
      )}

      <div className="p-4">
        <p className="text-xs font-medium text-content-dim uppercase tracking-wide mb-1">{techStack}</p>
        <h3 className="text-base font-bold text-content-heading mb-1 group-hover:text-accent-purple transition-colors">
          {title}
        </h3>
        <p className="text-sm text-content-text mb-3 leading-relaxed">{description}</p>
        <div className="flex flex-wrap gap-1.5">
          {tags.map((tag) => (
            <TagPill key={tag} label={tag} />
          ))}
        </div>
      </div>
    </Link>
  )
}
