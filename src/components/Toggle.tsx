'use client'

import { useState } from 'react'

interface ToggleProps {
  showLabel: string
  hideLabel: string
  children: React.ReactNode
}

export default function Toggle({ showLabel, hideLabel, children }: ToggleProps) {
  const [open, setOpen] = useState(false)

  return (
    <>
      <button
        onClick={() => setOpen((v) => !v)}
        className="inline-block rounded border-2 border-white/60 px-6 py-2 text-sm font-semibold text-white hover:border-white hover:bg-white/10 transition-colors cursor-pointer"
      >
        {open ? hideLabel : showLabel}
      </button>
      {open && <div className="mt-6">{children}</div>}
    </>
  )
}
