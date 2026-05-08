export const metadata = { title: 'System Design Problems & Solutions — Zahran Yahia Khan' }

export default function SystemDesignPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12 w-full">
      <header className="text-center mb-10">
        <h1 className="text-3xl font-bold text-white mb-2">System Design Problems &amp; Solutions</h1>
        <p className="text-white/80">Designing Scalable Systems at Scale</p>
      </header>

      <div className="bg-white/90 rounded-2xl shadow-lg p-8 space-y-8">
        {/* Description */}
        <section>
          <h2 className="text-xl font-bold text-content-heading mb-3"><strong>My System Design Journey</strong></h2>
          <p className="text-content-text leading-relaxed">
            To me, great engineering isn&apos;t about finding a perfect solution; it&apos;s about making the right trade-offs. I spend a lot of my time diving into high-scale architectures to figure out why they work the way they do. Building those mental models helps me move past just following patterns and start developing the actual intuition needed to build systems that are fast, reliable, and cost-effective.
          </p>
        </section>

        {/* Stats & CTA */}
        <section>
          <div className="rounded-lg p-10 text-center text-white" style={{ background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)' }}>
            <h3 className="text-5xl font-bold text-white mb-2">X+</h3>
            <p className="text-lg mb-1">Problems Designed</p>
            <p className="opacity-90 mb-8">With architecture diagrams, trade-off analyses, and implementation notes</p>
            <a
              href="https://www.notion.so/297544e8e3c180b58df5e11bf74955f6?v=297544e8e3c18178b86d000cf0a2aa2f&source=copy_link"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded font-bold text-sm"
              style={{ background: 'white', color: '#f5576c' }}
            >
              View Full Database on Notion
            </a>
          </div>
        </section>
      </div>
    </div>
  )
}
