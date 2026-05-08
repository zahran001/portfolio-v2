export const TAG_COLORS = {
  'Systems':     'blue',
  'Cloud':       'sky',
  'AI / Agents': 'purple',
  'Backend':     'green',
  'Frontend':    'pink',
  'DevOps':      'orange',
  'Performance': 'yellow',
  'Full Stack':  'teal',
  'Research':    'gray',
} as const

export type TagLabel = keyof typeof TAG_COLORS
