import YouTubeEmbed from '@/components/YouTubeEmbed'

export const metadata = { title: 'Line Follower Robot — Zahran Yahia Khan' }

export default function LineFollowerRobotPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12 w-full">
      <header className="text-center mb-10">
        <h1 className="text-3xl font-bold text-white mb-2">Line Follower Robot</h1>
        <p className="text-white/80">Implementation using Arduino Uno</p>
      </header>

      <div className="bg-white/90 rounded-2xl shadow-lg p-8 space-y-8">
        {/* Description */}
        <section>
          <h2 className="text-xl font-bold text-content-heading mb-3"><strong>Description</strong></h2>
          <p className="text-content-text leading-relaxed">
            Introducing our Line Follower Robot—it follows a line using sensors and clever motor control,
            making it easy and fun to explore!
          </p>
        </section>

        {/* Features & Info */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <section>
            <h2 className="text-xl font-bold text-content-heading mb-3"><strong>Features</strong></h2>
            <ol className="list-decimal list-outside ml-4 space-y-3 text-content-text leading-relaxed">
              <li>Discover the inner workings of our Line Follower Robot project. Using <strong>infrared sensors</strong>, it interprets black line detection. With precise motor control through <strong>Pulse width modulation</strong>, the robot dynamically adjusts its movements based on real-time sensor readings, offering a technical yet accessible glimpse into <strong>autonomous</strong> navigation.</li>
              <li>Users can engage in hands-on learning, experimenting with the code and observing how changes impact the robot&apos;s behavior, fostering a deeper understanding of robotics and programming.</li>
            </ol>
          </section>

          <section>
            <h2 className="text-xl font-bold text-content-heading mb-3"><strong>Info</strong></h2>
            <ul className="space-y-3 text-content-text">
              <li>
                <a href="https://github.com/zahran001/LineFollowerRobot" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline hover:text-blue-800">
                  source code
                </a>
              </li>
              <li>
                <strong>Arduino Uno, DC Motors, IR Sensor, H-bridge, Wheels, Battery</strong>
              </li>
              <li>
                <a href="https://drive.google.com/file/d/1DqZx90XqUGLS5vWdbXH5x8FSYnLKxjGQ/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline hover:text-blue-800">
                  Executive Summary
                </a>
              </li>
            </ul>
          </section>
        </div>

        {/* Demo */}
        <section>
          <h3 className="text-lg font-bold text-content-heading mb-4"><strong>Demo</strong></h3>
          <YouTubeEmbed videoId="_znIPmBL7tE" title="Line Follower Robot Demo" />
        </section>
      </div>
    </div>
  )
}
