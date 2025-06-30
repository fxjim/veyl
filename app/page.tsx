'use client'

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-6 text-center">
      <div className="max-w-2xl">

        {/* SVG Wordmark */}
        <div className="mb-8 mx-auto max-w-[300px]">
          <svg
            viewBox="0 0 200 50"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-auto"
          >
            <text
              x="0"
              y="35"
              fontFamily="Sora, sans-serif"
              fontSize="32"
              fill="#E5E5E7"
              letterSpacing="0.5"
            >
              Ve
            </text>
            <text
              x="58"
              y="35"
              fontFamily="Sora, sans-serif"
              fontSize="32"
              fill="url(#maskGradient)"
            >
              y
            </text>
            <text
              x="80"
              y="35"
              fontFamily="Sora, sans-serif"
              fontSize="32"
              fill="#E5E5E7"
            >
              l
            </text>

            <defs>
              <linearGradient id="maskGradient" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#D87A56" />
                <stop offset="100%" stopColor="#1C1C1E" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        {/* Headline */}
        <h1 className="text-4xl md:text-5xl font-semibold text-ash leading-tight">
          Everyone wears a veil.
          <br />
          <span className="text-ember">
            But what happens when you strip it away — and no one’s watching?
          </span>
        </h1>

        {/* Paragraph */}
        <p className="mt-6 text-lg text-ash/80 leading-relaxed">
          <strong>Veyl</strong> is your anonymous space for unfiltered thoughts — and uncensored answers.{" "}
          Ask what you can’t elsewhere. Confess what you’ve buried. Our AI doesn’t judge or censor.
        </p>

        {/* CTA Button */}
        <button className="mt-10 px-8 py-3 rounded-full bg-ember text-white hover:bg-ember/80 transition font-medium shadow-md">
          Start Stryping
        </button>
      </div>
    </main>
  )
}
