// app/layout.tsx
import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "Mafid's Portfolio",
  description: "Abdulloh Anvarov's Portfolio",
  generator: "Abdulloh Anvarov",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        {/* Preconnect to Telegram API for faster connection */}
        <link rel="preconnect" href="https://api.telegram.org" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://api.telegram.org" />
      </head>
      <body>{children}</body>
    </html>
  )
}
