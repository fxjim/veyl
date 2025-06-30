// app/page.tsx
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center text-center px-4 py-10">
      <img
        src="/logo-veyl.png"
        alt="Veyl Logo"
        className="mx-auto mb-8 max-w-[300px]"
      />

      <h1 className="text-2xl md:text-3xl font-bold text-white leading-tight">
        Everyone wears a veil.
        <br />
        But what happens when you strip it away — and no one’s watching?
      </h1>

      <p className="mt-4 max-w-xl text-sm md:text-base text-ash leading-relaxed">
        <strong>Veyl</strong> is your anonymous space for unfiltered thoughts — and uncensored answers.
        <br className="hidden md:inline" />
        Ask what you can’t elsewhere. Confess what you’ve buried. Our AI doesn’t judge or censor.
      </p>

      <button
        className="mt-10 px-8 py-3 text-lg font-medium rounded-full bg-ember text-white hover:bg-ember/80 transition-all shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-ember focus:ring-offset-2"
      >
        Start Stryping
      </button>
    </main>
  );
}
