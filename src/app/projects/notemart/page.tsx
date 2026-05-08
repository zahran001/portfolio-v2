import Image from 'next/image'
import YouTubeEmbed from '@/components/YouTubeEmbed'

export const metadata = { title: 'NoteMart — Zahran Yahia Khan' }

export default function NotemartPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12 w-full">
      <header className="text-center mb-10">
        <h1 className="text-3xl font-bold text-white mb-2">NoteMart</h1>
        <p className="text-white/80">Learning Uninterrupted: Zero Distractions</p>
      </header>

      <div className="bg-white/90 rounded-2xl shadow-lg p-8 space-y-8">
        {/* Description */}
        <section>
          <h2 className="text-xl font-bold text-content-heading mb-3"><strong>Description</strong></h2>
          <p className="text-content-text leading-relaxed">
            Many note-sharing services, such as <strong>Chegg and Course Hero</strong>, are inundated with distracting ads, several of which contain promo codes for dating websites. These components act as a deterrent to using these study help applications for their intended purpose.
          </p>
          <p className="text-content-text leading-relaxed mt-3">
            This project addresses the problem by creating a note-sharing platform that ensures a distraction-free experience for users :)
          </p>
        </section>

        {/* Features & Info */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <section>
            <h2 className="text-xl font-bold text-content-heading mb-3"><strong>Features</strong></h2>
            <ol className="list-decimal list-outside ml-4 space-y-3 text-content-text leading-relaxed">
              <li>Developed a <strong>full-stack</strong> note-sharing website using React, Appwrite backend, Tailwind CSS, and Anime.js for a dynamic user experience.</li>
              <li>Implemented <strong>TanStack Query</strong> for simplified data fetching and mutation, auto-caching, coupled with <strong>React Context API</strong> for global state management, and <strong>React Router</strong> for efficient navigation.</li>
              <li>Utilized <strong>Appwrite</strong> for backend, offering secure user authentication, efficient data management, and scalable server-side functionality for the note-sharing platform.</li>
            </ol>
          </section>

          <section>
            <h2 className="text-xl font-bold text-content-heading mb-3"><strong>Info</strong></h2>
            <ul className="space-y-3 text-content-text">
              <li>
                <a href="https://github.com/zahran001/NoteMart" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline hover:text-blue-800">
                  source code
                </a>
              </li>
              <li>
                <strong>React, Tailwind CSS, Anime.js, TanStack Query, Vite, Appwrite</strong>
              </li>
            </ul>
          </section>
        </div>

        {/* Demo */}
        <section>
          <h3 className="text-lg font-bold text-content-heading mb-4"><strong>Demo</strong></h3>
          <YouTubeEmbed videoId="cMgCppDB3v4" title="NoteMart Demo" />
          <div className="mt-6 space-y-4">
            <Image src="/images/note1.png" alt="NoteMart screenshot 1" width={800} height={500} className="w-full rounded-lg" unoptimized />
            <Image src="/images/note2.png" alt="NoteMart screenshot 2" width={800} height={500} className="w-full rounded-lg" unoptimized />
            <Image src="/images/note3.png" alt="NoteMart screenshot 3" width={800} height={500} className="w-full rounded-lg" unoptimized />
            <Image src="/images/note4.png" alt="NoteMart screenshot 4" width={800} height={500} className="w-full rounded-lg" unoptimized />
          </div>
        </section>
      </div>
    </div>
  )
}
