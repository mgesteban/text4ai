import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'text4ai',
  description: 'LLMs Discovery Guide - Making the web AI-discoverable',
  generator: 'text4ai',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
