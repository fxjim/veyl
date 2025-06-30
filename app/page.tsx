export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center text-center px-4 py-10">
      <img
        src="/logo-veyl.png"
        alt="Veyl Logo"
        className="mx-auto mb-8 w-[280px] md:w-[340px]"
      />

      <h1 className="text-2xl md:text-3xl font-bold text-white leading-tight">
        Everyone wears a veil.
        <br />
        But what happens when you strip it away — and no one’s watching?
      </h1>

      <p className="mt-4 max-w-xl text-sm md:text-base text-ash leading-relaxed">
        <strong>Veyl</strong> is your anonymous space for unfiltered thoughts — and uncensored answers.{" "}
        Ask what you can’t elsewhere. Confess what you’ve buried. Our AI doesn’t judge or censor.
      </p>

      <button
        className="mt-10 px-6 py-3 rounded-full font-semibold text-white transition"
        style={{
          backgroundColor: "#D87A56", // ember
          boxShadow: "0 4px 14px 0 rgba(216, 122, 86, 0.39)",
        }}
        onMouseOver={e => e.currentTarget.style.backgroundColor = "#e08a67"}
        onMouseOut={e => e.currentTarget.style.backgroundColor = "#D87A56"}
      >
        Start Stryping
      </button>
    </main>
  );
}
