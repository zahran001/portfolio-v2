import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Footer() {
  return (
    <footer className="bg-white/10 backdrop-blur-sm border-t border-white/20 mt-16">
      <div className="max-w-5xl mx-auto px-6 py-10 text-center text-white">
        <h2 className="text-xl font-semibold mb-4">connect with me!</h2>
        <dl className="flex flex-col items-center gap-1 mb-6 text-white/80">
          <div className="flex gap-2">
            <dt className="font-semibold">located</dt>
            <dd>Tampa, FL &bull; United States</dd>
          </div>
          <div className="flex gap-2">
            <dt className="font-semibold">email</dt>
            <dd>zykkhan.bd@gmail.com</dd>
          </div>
        </dl>
        <div className="flex justify-center gap-5 mb-6">
          <a
            href="https://www.linkedin.com/in/zahran-yahia/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/70 hover:text-white transition-colors"
            aria-label="LinkedIn"
          >
            <FontAwesomeIcon icon={faLinkedin} style={{ fontSize: '1.5rem' }} />
          </a>
          <a
            href="https://github.com/zahran001"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/70 hover:text-white transition-colors"
            aria-label="GitHub"
          >
            <FontAwesomeIcon icon={faGithub} style={{ fontSize: '1.5rem' }} />
          </a>
        </div>
        <p className="text-white/50 text-sm">&copy; 2026 Zahran Yahia Khan.</p>
      </div>
    </footer>
  )
}
