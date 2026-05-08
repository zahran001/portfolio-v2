import Image from 'next/image'

interface SpotlightProps {
  children: React.ReactNode
  imageSrc: string
  imageAlt: string
}

export default function Spotlight({ children, imageSrc, imageAlt }: SpotlightProps) {
  return (
    <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
      <div className="flex-1">{children}</div>
      <div className="flex-shrink-0">
        <Image
          src={imageSrc}
          alt={imageAlt}
          width={220}
          height={220}
          className="rounded-full object-cover"
          unoptimized
        />
      </div>
    </div>
  )
}
