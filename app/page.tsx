export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center text-center px-4">
      {/* Scalable SVG logo without interactivity */}
      <div className="mb-10">
        <svg
          viewBox="0 0 120 40"
          xmlns="http://www.w3.org/2000/svg"
          className="h-20 md:h-28"
        >
          <text
            x="0"
            y="28"
            fontFamily="Sora, sans-serif"
            fontSize="28"
            fill="#E5E5E7"
          >
            Ve
          </text>
          <path
            d="M58 15 C60 10, 65 10, 67 15 C68 20, 65 25, 62 28"
            fill="#D87A56"
          />
          <text
            x="70"
            y="28"
            fontFamily="Sora, sans-serif"
            fontSize="28"
            fill="#E5E5E7"
          >
            l
          </text>
        </svg>
      </div>

      <h1 className="text-2xl md:text-3xl font-bold text-ash">
        Everyone wears a veil.
      </h1>
      <h2 className="text-xl md:text-2xl font-bold text-ash mt-2">
        But what happens when you strip it away — and no one’s watching?
      </h2>

      <p className="mt-6 max-w-2xl text-sm md:text-base text-white">
        <strong>Veyl</strong> is your anonymous space for unfiltered thoughts —
        and uncensored answers.
        <span className="block md:inline"> Ask what you can’t elsewhere.</span>{' '}
        Confess what you’ve buried. Our AI doesn’t judge or censor.
      </p>

      <button className="mt-10 px-8 py-3 rounded-full bg-ember text-white font-semibold text-sm shadow-md hover:bg-white hover:text-ember transition">
        Start Stryping
      </button>
    </main>
  )
}
