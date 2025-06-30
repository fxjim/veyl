// app/layout.tsx

import './globals.css';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Veyl',
  description: 'Everyone wears a veil. What happens when you stryp it away?',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-[#1a1a1a] text-white font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
