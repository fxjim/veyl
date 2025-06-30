// app/layout.tsx
import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Veyl',
  description: 'Unfiltered thoughts. Uncensored AI. Total anonymity.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        {/* Google Analytics */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-7Z3ZKDBZR5" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-7Z3ZKDBZR5');
            `,
          }}
        />

        {/* Meta Pixel */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '2207093403044127');
              fbq('track', 'PageView');
            `,
          }}
        />
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: 'none' }}
            src="https://www.facebook.com/tr?id=2207093403044127&ev=PageView&noscript=1"
          />
        </noscript>
                {/* Favicon */}
                <link rel="icon" href="/favicon.ico" />

{/* SEO Meta Tags */}
<meta name="viewport" content="width=device-width, initial-scale=1" />
<meta name="theme-color" content="#1C1C1E" />
<meta name="author" content="Veyl" />
<meta name="keywords" content="anonymous AI, uncensored chatbot, confession AI, emotional support, AI therapy, venting app, safe space" />

{/* Open Graph Tags */}
<meta property="og:title" content="Veyl" />
<meta property="og:description" content="Unfiltered thoughts. Uncensored AI. Total anonymity." />
<meta property="og:image" content="/og-image.jpg" />
<meta property="og:url" content="https://useveyl.com" />
<meta property="og:type" content="website" />

{/* Twitter Card Tags */}
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content="Veyl" />
<meta name="twitter:description" content="Say what you've never said. Ask what you've never asked. No judgment. No filter." />
<meta name="twitter:image" content="/og-image.jpg" />

      </head>
      <body className="bg-charcoal text-ash">
        {children}
      </body>
    </html>
  )
}
