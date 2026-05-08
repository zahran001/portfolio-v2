export const metadata = { title: 'Design-MCP — Zahran Yahia Khan' }

export default function DesignMcpPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12 w-full">
      <header className="text-center mb-10">
        <h1 className="text-3xl font-bold text-white mb-2">Design-MCP</h1>
        <p className="text-white/80">Spec-Driven Component Generator for RAG Systems</p>
      </header>

      <div className="bg-white/90 rounded-2xl shadow-lg p-8 space-y-8">
        {/* Description */}
        <section>
          <h2 className="text-xl font-bold text-content-heading mb-3"><strong>Description</strong></h2>
          <p className="text-content-text leading-relaxed">
            Design-MCP is a TypeScript CLI pipeline that crawls design system documentation (starting with <strong>Chakra UI</strong>), extracts structured component specifications, and transforms them into semantic chunks optimized for <strong>RAG (Retrieval-Augmented Generation)</strong> systems.
          </p>
          <p className="text-content-text leading-relaxed mt-3">
            The tool automates what would otherwise be a tedious manual process: gathering component props, code examples, and accessibility notes from documentation sites, then normalizing that data into machine-readable formats suitable for vector search and AI-powered component generation.
          </p>
        </section>

        {/* Pipeline Architecture */}
        <section>
          <h2 className="text-xl font-bold text-content-heading mb-3"><strong>Pipeline Architecture</strong></h2>
          <p className="text-content-text">
            <strong>Step 0: Extract</strong> &rarr; <strong>Step 1: Normalize</strong> &rarr; <em>Step 2: Embed</em> &rarr; <em>Step 3: Search</em>
            <br />
            <small>(Steps 0 &amp; 1 implemented &bull; Steps 2 &amp; 3 in progress)</small>
          </p>
        </section>

        {/* Features & Info */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <section>
            <h2 className="text-xl font-bold text-content-heading mb-3"><strong>Features</strong></h2>
            <ol className="list-decimal list-outside ml-4 space-y-3 text-content-text leading-relaxed">
              <li>Built a <strong>Playwright-based web crawler</strong> that discovers and navigates design system documentation pages, extracting structured component data (props, code examples, accessibility notes) with schema validation on every artifact via Zod.</li>
              <li>Implemented a <strong>multi-stage normalization pipeline</strong> with an inference engine (code analyzer, section inferrer, intent classifier with 14 intent classes) that transforms raw extractions into semantic chunks with natural language explanations.</li>
              <li>Designed a <strong>composition-scored code filtering</strong> system that surfaces meaningful usage patterns while filtering out boilerplate, paired with column-order-agnostic props table parsing for robust extraction across varying doc layouts.</li>
              <li>Engineered <strong>resilient error handling</strong> with a success/failure union return type and automatic fallback chunk generation, plus JSONL metrics tracking for monitoring transformation quality across components.</li>
            </ol>
          </section>

          <section>
            <h2 className="text-xl font-bold text-content-heading mb-3"><strong>Info</strong></h2>
            <ul className="space-y-3 text-content-text">
              <li>
                <a href="https://github.com/zahran001/Design-MCP" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline hover:text-blue-800">
                  source code
                </a>
              </li>
              <li>
                <strong>TypeScript, Node.js, Playwright, Commander.js, Zod, Docker</strong>
              </li>
              <li>
                <strong>Status:</strong> In Progress &mdash; Extraction &amp; normalization complete, embedding &amp; retrieval next
              </li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  )
}
