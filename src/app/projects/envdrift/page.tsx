import Image from 'next/image'

export const metadata = { title: 'Environment Drift Analyzer — Zahran Yahia Khan' }

export default function EnvdriftPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12 w-full">
      <header className="text-center mb-10">
        <h1 className="text-3xl font-bold text-white mb-2">Environment Drift Analyzer</h1>
        <p className="text-white/80">Detect and explain behavioral differences across application environments with AI-powered insights</p>
      </header>

      <div className="bg-white/90 rounded-2xl shadow-lg p-8 space-y-8">
        {/* Description */}
        <section>
          <h2 className="text-xl font-bold text-content-heading mb-3"><strong>Description</strong></h2>
          <p className="text-content-text leading-relaxed">
            In real-world systems, the same application often behaves differently across environments. Local development rarely reflects production reality. As applications move through staging, beta, and production, they accumulate additional layers of security, networking, and policy enforcement. These differences frequently result in unexpected latency, failed requests, or production-only bugs that are difficult to diagnose quickly.
          </p>
          <p className="text-content-text leading-relaxed mt-3">
            While developers can manually investigate these issues using browser tools, logs, and metrics, doing so requires fragmented context and prior knowledge of what to look for. Environment Drift Analyzer solves this by providing an automated AI agent that identifies why application behavior differs across environments and explains the root causes in digestible terms.
          </p>
        </section>

        {/* System Architecture */}
        <section>
          <h3 className="text-lg font-bold text-content-heading mb-2"><strong>System Architecture</strong></h3>
          <p className="text-content-text mb-3"><strong>Workflow Sequence Diagram</strong></p>
          <Image
            src="/images/cf_ai_diagram.png"
            alt="Environment Drift Analyzer workflow sequence"
            width={800}
            height={500}
            className="w-full rounded-lg"
            unoptimized
          />
        </section>

        {/* Features & Info */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <section>
            <h2 className="text-xl font-bold text-content-heading mb-3"><strong>Features</strong></h2>
            <ol className="list-decimal list-outside ml-4 space-y-3 text-content-text leading-relaxed">
              <li>Designed an <strong>edge-native system</strong> to detect and explain behavioral drift between application environments using <strong>deterministic diffing</strong> combined with <strong>LLM-generated, schema-validated explanations</strong>.</li>
              <li>Architected a <strong>contract-first pipeline</strong> with normalized observable signals, <strong>idempotent workflow orchestration</strong>, and <strong>SQLite-backed Durable Objects</strong> for persistent, bounded historical memory across deploys.</li>
              <li>Implemented <strong>manual redirect probing, header whitelisting, SSRF safeguards</strong>, and <strong>retry-safe workflows</strong> to ensure correctness under edge execution constraints and strict network policies.</li>
            </ol>
          </section>

          <section>
            <h2 className="text-xl font-bold text-content-heading mb-3"><strong>Info</strong></h2>
            <ul className="space-y-3 text-content-text">
              <li>
                <a href="https://cf-ai-drift-ui.pages.dev/" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline hover:text-blue-800">
                  live demo
                </a>
              </li>
              <li>
                <a href="https://github.com/zahran001/cf_ai_env_drift_analyzer" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline hover:text-blue-800">
                  source code
                </a>
              </li>
              <li>
                <strong>Cloudflare (Workers, Workflows, Durable Objects, Pages), SQLite, Llama 3.3, TypeScript, React, Zod</strong>
              </li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  )
}
