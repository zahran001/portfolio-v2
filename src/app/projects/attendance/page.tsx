import Image from 'next/image'

export const metadata = { title: 'Attendance Sheet — Zahran Yahia Khan' }

export default function AttendancePage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12 w-full">
      <header className="text-center mb-10">
        <h1 className="text-3xl font-bold text-white mb-2">Attendance Sheet</h1>
        <p className="text-white/80">Automating attendance management</p>
      </header>

      <div className="bg-white/90 rounded-2xl shadow-lg p-8 space-y-8">
        {/* Description */}
        <section>
          <h2 className="text-xl font-bold text-content-heading mb-3"><strong>Description</strong></h2>
          <p className="text-content-text leading-relaxed">
            Routine tasks, such as creating an <strong>attendance sheet</strong>, can be fully automated to save time during recitation sessions :)
          </p>
        </section>

        {/* Features & Info */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <section>
            <h2 className="text-xl font-bold text-content-heading mb-3"><strong>Features</strong></h2>
            <ol className="list-decimal list-outside ml-4 space-y-3 text-content-text leading-relaxed">
              <li>This Python script uses Python libraries (PyPDF2, openpyxl, and re) to extract student ID numbers from PDFs and save them in an Excel spreadsheet, utilizing meeting chat for real-time attendance during recitation sessions.</li>
            </ol>
          </section>

          <section>
            <h2 className="text-xl font-bold text-content-heading mb-3"><strong>Info</strong></h2>
            <ul className="space-y-3 text-content-text">
              <li>
                <a href="https://github.com/zahran001/AttendanceSheet" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline hover:text-blue-800">
                  source code
                </a>
              </li>
              <li>
                <strong>Python, PyPDF2, Openpyxl, RE</strong>
              </li>
            </ul>
          </section>
        </div>

        {/* Demo */}
        <section>
          <h3 className="text-lg font-bold text-content-heading mb-4"><strong>Demo</strong></h3>
          <div className="space-y-4">
            <Image src="/images/attendance1.png" alt="Attendance sheet screenshot 1" width={800} height={500} className="w-full rounded-lg" unoptimized />
            <Image src="/images/attendance2.png" alt="Attendance sheet screenshot 2" width={800} height={500} className="w-full rounded-lg" unoptimized />
          </div>
        </section>
      </div>
    </div>
  )
}
