import Image from 'next/image'
import YouTubeEmbed from '@/components/YouTubeEmbed'

export const metadata = { title: 'BookATour — Zahran Yahia Khan' }

export default function BookATourPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12 w-full">
      <header className="text-center mb-10">
        <h1 className="text-3xl font-bold text-white mb-2">BookATour</h1>
        <p className="text-white/80">Customize campus tour experience</p>
      </header>

      <div className="bg-white/90 rounded-2xl shadow-lg p-8 space-y-8">
        {/* Description */}
        <section>
          <h2 className="text-xl font-bold text-content-heading mb-3"><strong>Description</strong></h2>
          <p className="text-content-text leading-relaxed">
            <strong>Campus tours</strong> become more effective when they are personalized to individual preferences.
          </p>
          <p className="text-content-text leading-relaxed mt-3">
            The ticketing platform for USF Tampa tours lacks the flexibility to customize stops and office visits according to a group&apos;s specific requirements.{' '}
            <a href="https://www.eventbrite.com/e/usf-tampa-campus-campus-tour-tickets-696849715257?aff=oddtdtcreator" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline"><strong>Eventbrite</strong></a>{' '}
            limits participants to tour registration without offering the possibility to tailor or customize their individual experiences.
          </p>
          <p className="text-content-text leading-relaxed mt-3">
            In my role as a tour guide, this project was the perfect opportunity not only to gain skills in website development,
            but also to address a real-world problem through my prototype.
          </p>
          <p className="text-content-text leading-relaxed mt-2">
            This prototype is currently in the pipeline to become an integral part of the future implementation for the entire platform :)
          </p>
        </section>

        {/* Features & Info */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <section>
            <h2 className="text-xl font-bold text-content-heading mb-3"><strong>Features</strong></h2>
            <ol className="list-decimal list-outside ml-4 space-y-3 text-content-text leading-relaxed">
              <li>Implemented a React-based campus tour booking platform, incorporating dynamic routing, product visualization, and payment integration using <strong>PayPal&apos;s JavaScript SDK</strong>.</li>
              <li>Developed the backend using Express.js, featuring MongoDB integration, <strong>JSON Web Token</strong> for secure authentication, <strong>multer</strong> for efficient image handling, and <strong>APIs</strong> for product management.</li>
              <li>Programmed an admin panel, incorporating React with integrated API services for dynamic product management, connected to the backend powered by <strong>MongoDB Atlas</strong> database for synchronized tour services and user data management.</li>
            </ol>
          </section>

          <section>
            <h2 className="text-xl font-bold text-content-heading mb-3"><strong>Info</strong></h2>
            <ul className="space-y-3 text-content-text">
              <li>
                <a href="https://github.com/zahran001/BookATour" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline hover:text-blue-800">
                  source code
                </a>
              </li>
              <li>
                <strong>React, Node.js, Express.js, Vite, MongoDB, PayPal, JSON Web Token</strong>
              </li>
            </ul>
          </section>
        </div>

        {/* Demo */}
        <section>
          <h3 className="text-lg font-bold text-content-heading mb-4"><strong>Demo</strong></h3>
          <YouTubeEmbed videoId="yK7YfIreIkU" title="BookATour Demo" />
          <div className="mt-6 space-y-4">
            <Image src="/images/tour1.png" alt="BookATour screenshot 1" width={800} height={500} className="w-full rounded-lg" unoptimized />
            <Image src="/images/tour2.png" alt="BookATour screenshot 2" width={800} height={500} className="w-full rounded-lg" unoptimized />
            <Image src="/images/tour3.png" alt="BookATour screenshot 3" width={800} height={500} className="w-full rounded-lg" unoptimized />
            <Image src="/images/tour4.png" alt="BookATour screenshot 4" width={800} height={500} className="w-full rounded-lg" unoptimized />
            <Image src="/images/tour_cart1.png" alt="BookATour cart 1" width={800} height={500} className="w-full rounded-lg" unoptimized />
            <Image src="/images/tour_cart2.png" alt="BookATour cart 2" width={800} height={500} className="w-full rounded-lg" unoptimized />
            <Image src="/images/tour_admin1.png" alt="BookATour admin 1" width={800} height={500} className="w-full rounded-lg" unoptimized />
            <Image src="/images/tour_admin2.png" alt="BookATour admin 2" width={800} height={500} className="w-full rounded-lg" unoptimized />
          </div>
        </section>
      </div>
    </div>
  )
}
