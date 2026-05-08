import type { TagLabel } from './tags'

export interface Project {
  slug: string
  title: string
  description: string
  techStack: string
  tags: TagLabel[]
  category: 'featured' | 'earlier'
  image: {
    variant: 'diagram' | 'photo' | 'icon'
    src?: string
    icon?: string
    accent?: string
  }
}

export const projects: Project[] = [
  {
    slug: 'bitfilter',
    title: 'BitFilter',
    description: 'SIMD-accelerated audience segmentation for ad tech',
    techStack: 'C++ · AVX2 · Google Benchmark',
    tags: ['Systems', 'Performance'],
    category: 'featured',
    image: { variant: 'diagram', src: '/images/roofline.svg' },
  },
  {
    slug: 'envdrift',
    title: 'EnvDrift Analyzer',
    description: 'Edge-native AI agent that detects and explains behavioral differences across application environments',
    techStack: 'TypeScript · Llama 3.3 · Cloudflare Workers',
    tags: ['AI / Agents', 'Backend'],
    category: 'featured',
    image: { variant: 'diagram', src: '/images/cf_ai_diagram.png' },
  },
  {
    slug: 'ecommerce',
    title: 'Microservices Platform',
    description: 'Distributed e-commerce platform with event-driven architecture and zero-downtime deployments',
    techStack: '.NET 8 · Azure · Docker',
    tags: ['Cloud', 'Backend', 'DevOps'],
    category: 'featured',
    image: { variant: 'diagram', src: '/images/Ecommerce-Project-2.svg' },
  },
  {
    slug: 'design-mcp',
    title: 'Design-MCP',
    description: 'Spec-driven pipeline that crawls design system docs and generates semantic chunks for RAG-powered component generation',
    techStack: 'TypeScript · RAG · Playwright · MCP',
    tags: ['AI / Agents', 'Backend'],
    category: 'featured',
    image: { variant: 'icon', icon: 'faRobot', accent: '#a89cc8' },
  },
  {
    slug: 'leetcode',
    title: 'LeetCode Problems',
    description: 'Solutions to various LeetCode problems in C++',
    techStack: 'C++',
    tags: ['Research'],
    category: 'featured',
    image: { variant: 'icon', icon: 'faCode', accent: '#8cc9f0' },
  },
  {
    slug: 'systemdesign',
    title: 'System Design',
    description: 'Large-scale system architecture, trade-off analysis, and design patterns for distributed systems',
    techStack: 'System Design',
    tags: ['Research'],
    category: 'featured',
    image: { variant: 'icon', icon: 'faSitemap', accent: '#c79cc8' },
  },
  {
    slug: 'bookatour',
    title: 'BookATour',
    description: 'A web application that empowers users to personalize their campus tour',
    techStack: 'React · Node.js · MongoDB',
    tags: ['Full Stack', 'Frontend'],
    category: 'earlier',
    image: { variant: 'photo', src: '/images/tour1.png' },
  },
  {
    slug: 'project-showcase',
    title: 'Project Showcase',
    description: 'A Flask app for users to build personalized portfolios without dealing with repetitive coding',
    techStack: 'Flask · Python · SQLite',
    tags: ['Full Stack', 'Backend'],
    category: 'earlier',
    image: { variant: 'photo', src: '/images/git1.png' },
  },
  {
    slug: 'notemart',
    title: 'NoteMart',
    description: 'A platform for social networking focused on sharing notes',
    techStack: 'React · Node.js · MongoDB',
    tags: ['Full Stack', 'Frontend'],
    category: 'earlier',
    image: { variant: 'photo', src: '/images/note1.png' },
  },
  {
    slug: 'attendance',
    title: 'Attendance Sheet',
    description: 'An application to extract student ID numbers from PDFs and transfer them to an Excel sheet',
    techStack: 'Python · OpenCV · openpyxl',
    tags: ['Backend'],
    category: 'earlier',
    image: { variant: 'photo', src: '/images/attendance1.png' },
  },
  {
    slug: 'line-follower-robot',
    title: 'Line Follower Robot',
    description: 'A line follower robot combining sensors, control algorithms, and motor adjustments',
    techStack: 'C · Arduino · Hardware',
    tags: ['Systems'],
    category: 'earlier',
    image: { variant: 'photo', src: '/images/packet.jpeg' },
  },
]
