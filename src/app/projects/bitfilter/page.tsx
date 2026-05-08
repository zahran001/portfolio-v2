import Image from 'next/image'

export const metadata = { title: 'BitFilter — Zahran Yahia Khan' }

export default function BitfilterPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12 w-full">
      <header className="text-center mb-10">
        <h1 className="text-3xl font-bold text-white mb-2">BitFilter</h1>
        <p className="text-white/80">SIMD-accelerated audience segmentation at memory-bandwidth speed</p>
      </header>

      <div className="bg-white/90 rounded-2xl shadow-lg p-8 space-y-8">
        {/* Description */}
        <section>
          <h2 className="text-xl font-bold text-content-heading mb-3"><strong>Description</strong></h2>
          <p className="text-content-text leading-relaxed">
            Modern ad tech platforms need to answer one question billions of times per day: <em>&ldquo;Which users belong to Segment A AND Segment B, but NOT Segment C?&rdquo;</em> Storing user IDs in lists requires massive memory and slow pointer chasing, so BitFilter represents each segment as a <strong>dense bitmap</strong> where one bit maps to one user. This turns a boolean query into pure bitwise logic across hundreds of megabytes of data, executed at memory-bandwidth speed using SIMD.
          </p>
          <p className="text-content-text leading-relaxed mt-3">
            The project is built around <strong>mechanical sympathy</strong>: writing code that respects how the CPU physically moves data from RAM to registers. Using <strong>Coreinfo64</strong> and <strong>CPU-Z</strong> to characterize the hardware first (cache hierarchy, DRAM bandwidth ceiling, SIMD support), then shaping every allocation, loop, and prefetch hint around those constraints. With AVX2&apos;s 256-bit YMM registers, a single <code className="bg-gray-100 px-1 rounded text-sm">_mm256_andnot_si256</code> instruction intersects two segments across <strong>256 users per clock cycle</strong>.
          </p>
        </section>

        {/* Roofline Diagram */}
        <div className="relative w-full aspect-[19/10] bg-gray-900 rounded-lg overflow-hidden">
          <Image
            src="/images/roofline.svg"
            alt="Roofline model performance analysis"
            fill
            className="object-contain"
            unoptimized
          />
        </div>

        {/* Features & Info */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <section>
            <h2 className="text-xl font-bold text-content-heading mb-3"><strong>Features</strong></h2>
            <ol className="list-decimal list-outside ml-4 space-y-3 text-content-text leading-relaxed">
              <li>Built a <strong>SIMD-accelerated</strong> audience segmentation engine in <strong>C++20</strong> that evaluates boolean queries over <strong>500M users in 11 ms</strong>, achieving <strong>29 GB/s</strong> throughput at 85-90% of the DDR4 memory ceiling.</li>
              <li>Identified single-threaded <strong>DDR4 bus saturation</strong> as the root cause of 0.98x multi-threaded eval scaling: <strong>write-allocate RFO traffic</strong> inflates actual bus load by 26% beyond application-visible throughput, leaving no headroom for additional threads.</li>
              <li>Built <strong>CI pipeline</strong> with GitHub Actions testing <strong>x86 AVX2</strong> natively and <strong>ARM SVE</strong> via cross-compilation + QEMU emulation, validating bit-exact correctness across architectures.</li>
            </ol>
          </section>

          <section>
            <h2 className="text-xl font-bold text-content-heading mb-3"><strong>Info</strong></h2>
            <ul className="space-y-3 text-content-text">
              <li>
                <a href="https://zahran001.github.io/bitfilter/" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline hover:text-blue-800">
                  benchmarks &amp; analysis
                </a>
              </li>
              <li>
                <a href="https://github.com/zahran001/bitfilter" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline hover:text-blue-800">
                  source code
                </a>
              </li>
              <li>
                <strong>C++20, AVX2/SIMD, ARM SVE, CMake, Google Benchmark, GitHub Actions, Coreinfo64, CPU-Z</strong>
              </li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  )
}
