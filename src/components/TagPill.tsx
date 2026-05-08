import type { TagLabel } from '@/data/tags'

const COLOR_MAP: Record<TagLabel, string> = {
  'Systems':     'bg-blue-100 text-blue-800',
  'Cloud':       'bg-sky-100 text-sky-800',
  'AI / Agents': 'bg-purple-100 text-purple-800',
  'Backend':     'bg-green-100 text-green-800',
  'Frontend':    'bg-pink-100 text-pink-800',
  'DevOps':      'bg-orange-100 text-orange-800',
  'Performance': 'bg-yellow-100 text-yellow-800',
  'Full Stack':  'bg-teal-100 text-teal-800',
  'Research':    'bg-gray-100 text-gray-800',
}

export default function TagPill({ label }: { label: TagLabel }) {
  return (
    <span className={`inline-block rounded-full px-2.5 py-0.5 text-xs font-semibold ${COLOR_MAP[label]}`}>
      {label}
    </span>
  )
}
