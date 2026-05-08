'use client'

import { useEffect, useState } from 'react'

export function useNavShrink() {
  const [isFixed, setIsFixed] = useState(false)

  useEffect(() => {
    const main = document.getElementById('main')
    if (!main) return

    const observer = new IntersectionObserver(
      ([entry]) => setIsFixed(!entry.isIntersecting),
      { threshold: 0, rootMargin: '0px 0px 0px 0px' }
    )

    observer.observe(main)
    return () => observer.disconnect()
  }, [])

  return isFixed
}
