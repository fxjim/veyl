// app/page.tsx
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center text-center p-6 bg-[#1c1c1e] text-white">
      <img
        src="/logo-veyl.png"
        alt="Veyl Logo"
        className="w-72 md:w-80 mb-12"
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
        href="#"
        className="inline-block bg-white text-black font-semibold text-base md:text-lg px-8 py-3 rounded-full shadow-xl hover:bg-gray-200 hover:text-black hover:scale-105 transition-transform duration-200"
      >
        Start Stryping
      </a>
    </main>
  );
}
