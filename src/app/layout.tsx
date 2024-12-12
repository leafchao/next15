import type { Metadata } from 'next'
import './globals.css'
import { Comforter } from 'next/font/google'
import { AntdRegistry } from '@ant-design/nextjs-registry'

const comforter = Comforter({
  subsets: ['latin'],
  weight: '400',
  display: 'swap', // 未加载字体之前，使用默认字体
})

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
        <AntdRegistry>{children}</AntdRegistry>
      </body>
    </html>
  )
}
