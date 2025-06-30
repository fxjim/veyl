// app/page.tsx

import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#1a1a1a] flex flex-col items-center justify-center text-center px-4">
      <div className="mb-6">
        <Image
          src="/logo-veyl.png"
          alt="Veyl Logo"
          width={300}
          height={100}
          className="object-contain"
          priority
        />
      </div>

      <h1 className="text-white text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
        Everyone wears a veil.
      </h1>

      <h2 className="text-white text-xl sm:text-2xl md:text-3xl font-semibold mb-6">
        But what happens when you strip it away — and no one’s watching?
      </h2>

      <p className="text-sm sm:text-base text-gray-300 max-w-xl mb-8 leading-relaxed">
        <strong>Veyl</strong> is your anonymous space for unfiltered thoughts — and uncensored answers. <br />
        Ask what you can’t elsewhere. Confess what you’ve buried. <br />
        Our AI doesn’t judge or censor.
      </p>

      <Link
        href="/ask"
        className="text-white bg-blue-600 hover:bg-blue-700 transition-colors px-6 py-3 rounded-full text-sm font-medium shadow-lg"
      >
        Start Stryping
      </Link>
    </main>
  );
}
