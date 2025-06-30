// app/page.tsx
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-4 text-center text-white">
      <Image
        src="/logo/veyl-wordmark.png"
        alt="Veyl Logo"
        width={400}
        height={100}
        className="mb-10"
        priority
      />
      <h1 className="text-3xl md:text-4xl font-bold mb-2">
        Everyone wears a veil.
      </h1>
      <h2 className="text-2xl md:text-3xl font-bold mb-6">
        But what happens when you strip it away — and no one’s watching?
      </h2>
      <p className="max-w-xl text-sm md:text-base text-gray-300 leading-relaxed">
        <strong>Veyl</strong> is your anonymous space for unfiltered thoughts — and uncensored answers.
        <br />
        Ask what you can’t elsewhere. Confess what you’ve buried.
        <br />
        Our AI doesn’t judge or censor.
      </p>
      <Link
        href="/chat"
        className="mt-8 px-6 py-3 bg-ember text-white rounded-full font-medium hover:bg-ember-dark transition"
      >
        Start Stryping
      </Link>
    </main>
  );
}
