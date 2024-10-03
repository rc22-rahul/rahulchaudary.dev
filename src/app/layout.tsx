import type { Metadata, Viewport } from "next";
import { Providers } from './providers'
import { Inter, Caveat } from 'next/font/google'
import { Header } from './_components/header'
import '@/styles/main.css'

export const metadata: Metadata = {
  title: "₹ahu! Chaudhar¥",
  description: "'My description for the internet!!'",
};


export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: dark)', color: '#060606' },
    { media: '(prefers-color-scheme: light)', color: '#fafafa' }
  ],
  colorScheme: 'dark light',
  width: 'device-width',
  initialScale: 1
}

const inter = Inter({
  subsets: ['latin'],
  weight: ['200', '300', '400', '500', '600', '700', '900'],
  variable: '--font-inter',
  display: 'swap'
})

const dancingScript = Caveat({
  subsets: ['latin'],
  weight: ['700'],
  variable: '--font-caveat',
  display: 'swap'
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`scroll-smooth ${inter.variable} ${dancingScript.variable}`}
      >
        <Providers>
          <div className="relative">
            <Header />
            <div>{children}</div>
          </div>
        </Providers>
      </body>
    </html>
  );
}
