import Image from 'next/image'
import YouTubeEmbed from '@/components/YouTubeEmbed'

export const metadata = { title: 'Project Showcase — Zahran Yahia Khan' }

export default function ProjectShowcasePage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12 w-full">
      <header className="text-center mb-10">
        <h1 className="text-3xl font-bold text-white mb-2">Project Showcase</h1>
        <p className="text-white/80">Build your own portfolio</p>
      </header>

      <div className="bg-white/90 rounded-2xl shadow-lg p-8 space-y-8">
        {/* Description */}
        <section>
          <h2 className="text-xl font-bold text-content-heading mb-3"><strong>Description</strong></h2>
          <p className="text-content-text leading-relaxed">
            Making a <strong>portfolio</strong> takes time. Repeated coding makes it difficult to maintain an updated portfolio.
          </p>
          <p className="text-content-text leading-relaxed mt-3">
            In my first hackathon, we solved this problem with a Flask project.
          </p>
          <p className="text-content-text leading-relaxed mt-3">
            This platform allows developers to easily add new projects to their portfolio, including relevant files, demos, code, and other project details - making it as simple as posting a status on Facebook :)
          </p>
        </section>

        {/* Features & Info */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <section>
            <h2 className="text-xl font-bold text-content-heading mb-3"><strong>Features</strong></h2>
            <ol className="list-decimal list-outside ml-4 space-y-3 text-content-text leading-relaxed">
              <li>Developed a dynamic blogging platform using <strong>Flask</strong> and <strong>MySQL</strong> and deployed the app on a staging server for real-time testing.</li>
              <li>Implemented <strong>SQLAlchemy</strong> library to create and manage the database models, enabling efficient data handling, and utilized <strong>Jinja2</strong> templates for streamlined HTML rendering.</li>
              <li>Secured the admin dashboard with user authentication for data management and integrated a contact form with <strong>Flask-Mail</strong> and <strong>SMTP</strong> server.</li>
            </ol>
          </section>

          <section>
            <h2 className="text-xl font-bold text-content-heading mb-3"><strong>Info</strong></h2>
            <ul className="space-y-3 text-content-text">
              <li>
                <a href="https://github.com/zahran001/Project_Showcase" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline hover:text-blue-800">
                  source code
                </a>
              </li>
              <li>
                <strong>Python, Flask, MySQL, SQLAlchemy</strong>
              </li>
            </ul>
          </section>
        </div>

        {/* Demo */}
        <section>
          <h3 className="text-lg font-bold text-content-heading mb-4"><strong>Demo</strong></h3>
          <YouTubeEmbed videoId="INyxhxVvIKA" title="Project Showcase Demo" />
          <div className="mt-6 space-y-4">
            <Image src="/images/git1.png" alt="Project Showcase screenshot 1" width={800} height={500} className="w-full rounded-lg" unoptimized />
            <Image src="/images/git2.png" alt="Project Showcase screenshot 2" width={800} height={500} className="w-full rounded-lg" unoptimized />
            <Image src="/images/git3.png" alt="Project Showcase screenshot 3" width={800} height={500} className="w-full rounded-lg" unoptimized />
            <Image src="/images/git4.png" alt="Project Showcase screenshot 4" width={800} height={500} className="w-full rounded-lg" unoptimized />
            <Image src="/images/git5.png" alt="Project Showcase screenshot 5" width={800} height={500} className="w-full rounded-lg" unoptimized />
            <Image src="/images/git_admin1.png" alt="Admin panel 1" width={800} height={500} className="w-full rounded-lg" unoptimized />
            <Image src="/images/git_admin2.png" alt="Admin panel 2" width={800} height={500} className="w-full rounded-lg" unoptimized />
            <Image src="/images/git_admin3.png" alt="Admin panel 3" width={800} height={500} className="w-full rounded-lg" unoptimized />
            <Image src="/images/git_admin4.png" alt="Admin panel 4" width={800} height={500} className="w-full rounded-lg" unoptimized />
            <Image src="/images/git_admin5.png" alt="Admin panel 5" width={800} height={500} className="w-full rounded-lg" unoptimized />
            <Image src="/images/git_contact1.png" alt="Contact form 1" width={800} height={500} className="w-full rounded-lg" unoptimized />
            <Image src="/images/git_contact2.png" alt="Contact form 2" width={800} height={500} className="w-full rounded-lg" unoptimized />
            <Image src="/images/git_contact3.png" alt="Contact form 3" width={800} height={500} className="w-full rounded-lg" unoptimized />
          </div>
        </section>
      </div>
    </div>
  )
}
