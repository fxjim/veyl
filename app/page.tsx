import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center text-center px-4">
      <div className="mb-6">
        <Image
          src="/logo-veyl.png"
          alt="Veyl Logo"
          width={300}
          height={100}
          priority
        />
      </div>

      <h1 className="text-3xl md:text-4xl font-bold mb-2 text-white">
        Everyone wears a veil.
      </h1>
      <h2 className="text-xl md:text-2xl font-semibold mb-6 text-gray-100">
        But what happens when you strip it away — and no one’s watching?
      </h2>

      <p className="text-sm md:text-base text-gray-300 max-w-xl leading-relaxed mb-8">
        <strong>Veyl</strong> is your anonymous space for unfiltered thoughts — and uncensored answers.<br />
        Ask what you can’t elsewhere. Confess what you’ve buried.<br />
        Our AI doesn’t judge or censor.
      </p>

      <Link
        href="/chat"
        className="bg-white text-black font-semibold py-2 px-4 rounded-full hover:bg-gray-200 transition"
      >
        Start Stryping
      </Link>
    </main>
  );
}
