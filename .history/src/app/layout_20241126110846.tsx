import type { Metadata } from 'next'
import './globals.css'
import { Comforter } from 'next/font/google'

const comforter = Comforter({ subsets: ['latin'], weight: '400' })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={comforter.className}>
      <body>
        {children}
      </body>
    </html>
  )
}
