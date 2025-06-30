// app/page.tsx
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center text-center p-6 bg-[#1c1c1e] text-white">
      <img
        src="/logo-veyl.png"
        alt="Veyl Logo"
        className="w-[300px] sm:w-[360px] md:w-[400px] mb-12"
      />

      <h1 className="text-3xl md:text-4xl font-bold mb-4">
        Everyone wears a veil.
      </h1>

      <h2 className="text-xl md:text-2xl font-semibold mb-6">
        But what happens when you strip it away — and no one&apos;s watching?
      </h2>

      <p className="text-sm md:text-base max-w-xl leading-relaxed mb-10">
        <strong>Veyl</strong> is your anonymous space for unfiltered thoughts — and uncensored answers.<br />
        Ask what you can&apos;t elsewhere. Confess what you&apos;ve buried.<br />
        Our AI doesn&apos;t judge or censor.
      </p>

      <a
        href="/chat"
        className="bg-white text-black font-bold text-base md:text-lg px-10 py-4 rounded-full shadow-lg hover:bg-gray-300 transition-all duration-200"
      >
        Start Stryping
      </a>
    </main>
  );
}
