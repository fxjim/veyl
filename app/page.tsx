// app/page.tsx
'use client'

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-6 text-center">
      <div className="max-w-2xl">
        <h1 className="text-4xl md:text-5xl font-semibold text-ash leading-tight">
          Everyone wears a veil.
          <br />
          <span className="text-ember">But what happens when you strip it away — and no one’s watching?</span>
        </h1>

        <p className="mt-6 text-lg text-ash/80 leading-relaxed">
          <strong>Veyl</strong> is your anonymous space for unfiltered thoughts — and uncensored answers.
          <br className="hidden md:inline" />
          Ask what you can’t elsewhere. Confess what you’ve buried. Our AI doesn’t judge or censor.
        </p>

        <button className="mt-10 px-6 py-3 rounded-2xl text-charcoal font-semibold bg-ember hover:brightness-110 transition duration-200 shadow-lg shadow-ember/30">
          🔓 Start Stryping
        </button>

        <p className="mt-4 text-sm text-ash/50">
          Or invite 2 friends to unlock unlimited replies.
        </p>
      </div>
    </main>
  )
}
