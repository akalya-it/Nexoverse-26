import type { Metadata } from "next"
import type { ReactNode } from "react"
import "./globals.css"

export const metadata: Metadata = {
  title: "Nexoverse'26 Logo Hunt",
  description: "A live logo hunt game for teams and participants.",
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
