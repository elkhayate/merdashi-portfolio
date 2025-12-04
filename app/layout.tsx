import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Head from 'next/head'
import { Analytics } from '@vercel/analytics/react'
import ClientProviders from '@/components/ClientProviders'
import { cookies } from 'next/headers'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Merdashi (Mohamed El Khayate) | Frontend Specialist Portfolio',
  description: "Portfolio of Merdashi (Mohamed El Khayate), Full-Stack Developer & Computer Engineer based in Leipzig, Germany. Explore projects, experience, and contact information.",
  keywords: [
    'Merdashi',
    'Mohamed El Khayate',
    'Frontend Specialist',
    'Full-Stack Developer',
    'Portfolio',
    'Frankfurt',
    'Web Developer',
    'React',
    'Next.js',
    'TypeScript',
    'Personal Website'
  ],
  authors: [{ name: 'Mohamed El Khayate', url: 'https://github.com/elkhayate' }],
  creator: 'Merdashi (Mohamed El Khayate)',
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    url: 'https://merdashi.com',
    title: 'Merdashi (Mohamed El Khayate) | Frontend Specialist Portfolio',
    description: "Portfolio of Merdashi (Mohamed El Khayate), Frontend Specialist with Full-Stack Capability based in Frankfurt, Germany.",
    siteName: 'Merdashi Portfolio',
    images: [
      {
        url: 'https://blobnest.blob.core.windows.net/merdashi/WhatsApp%20Image%202025-06-17%20at%2015.46.47_9444452c.jpg',
        width: 800,
        height: 800,
        alt: 'Merdashi (Mohamed El Khayate) Profile Image'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Merdashi (Mohamed El Khayate) | Frontend Specialist Portfolio',
    description: "Portfolio of Merdashi (Mohamed El Khayate), Frontend Specialist with Full-Stack Capability.",
    images: [
      'https://blobnest.blob.core.windows.net/merdashi/WhatsApp%20Image%202025-06-17%20at%2015.46.47_9444452c.jpg'
    ]
  },
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon.ico', type: 'image/x-icon' }
    ],
    apple: { url: '/apple-touch-icon.png', type: 'image/png' }
  }
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const cookieStore = await cookies()
  const localeCookie = cookieStore.get('locale')?.value
  const locale = localeCookie === 'de' ? 'de' : 'en'
  const langName = locale === 'de' ? 'Deutsch' : 'English'
  return (
    <html lang={locale}>
      <Head>
        {/* Extra SEO Meta Tags */}
        <meta name="author" content="Merdashi (Mohamed El Khayate)" />
        <meta name="language" content={langName} />
        {/* JSON-LD Person & WebSite Schema */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "Mohamed El Khayate",
            "alternateName": "Merdashi",
            "url": "https://merdashi.com",
            "image": "https://blobnest.blob.core.windows.net/merdashi/WhatsApp%20Image%202025-06-17%20at%2015.46.47_9444452c.jpg",
            "email": "elkhayatemohamed2@gmail.com",
            "jobTitle": "Frontend Specialist with Full-Stack Capability",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Frankfurt",
              "addressCountry": "Germany"
            },
            "sameAs": [
              "https://github.com/elkhayate",
              "https://www.linkedin.com/in/mohamed-el-khayate-4535a91b6"
            ]
          })
        }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            "url": "https://merdashi.com",
            "name": "Merdashi Portfolio",
            "author": {
              "@type": "Person",
              "name": "Mohamed El Khayate"
            }
          })
        }} />
      </Head>
      <body className={inter.className}>
        <ClientProviders>{children}</ClientProviders>
        <Analytics />
      </body>
    </html>
  )
}
