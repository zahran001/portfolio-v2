export const metadata = { title: 'LeetCode Problems & Solutions — Zahran Yahia Khan' }

export default function LeetcodePage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12 w-full">
      <header className="text-center mb-10">
        <h1 className="text-3xl font-bold text-white mb-2">LeetCode Problems &amp; Solutions</h1>
        <p className="text-white/80">For Accountability</p>
      </header>

      <div className="bg-white/90 rounded-2xl shadow-lg p-8 space-y-8">
        {/* Description */}
        <section>
          <h2 className="text-xl font-bold text-content-heading mb-3"><strong>My Problem-Solving Journey</strong></h2>
          <p className="text-content-text leading-relaxed">
            Each problem includes my approach, key insights, complexity analysis, and sometimes multiple solutions.
            This serves as both a learning resource and a reference for tackling similar problems in the future.
          </p>
        </section>

        {/* Stats & CTA */}
        <section>
          <div className="rounded-lg p-10 text-center text-white" style={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' }}>
            <h3 className="text-5xl font-bold text-white mb-2">X+</h3>
            <p className="text-lg mb-1">Problems Solved</p>
            <p className="opacity-90 mb-8">With comprehensive notes and solution sketches</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://www.notion.so/26d544e8e3c180269ad1eecffa31a8d7?v=26d544e8e3c181eca437000cb9b88e76"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded font-semibold text-sm"
                style={{ background: 'white', color: '#667eea', border: '2px solid white' }}
              >
                View Full Database on Notion
              </a>
              <a
                href="https://leetcode.com/u/Zahran_00/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded font-semibold text-sm border-2 border-white text-white hover:bg-white/10 transition-colors"
              >
                View LeetCode Profile
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
