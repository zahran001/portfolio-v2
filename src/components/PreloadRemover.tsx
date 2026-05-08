'use client'

import { useEffect } from 'react'

export default function PreloadRemover() {
  useEffect(() => {
    const timer = setTimeout(() => {
      document.body.classList.remove('is-preload')
    }, 100)
    return () => clearTimeout(timer)
  }, [])

  return null
}
