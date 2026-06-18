import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'AI for Wise Guys - Simple Starts to Super Skills',
  description: 'AI Made Easy for All Ages. Learn AI from beginner to advanced.',
  keywords: 'AI, course, education, teens, adults',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-white text-gray-900">
        {children}
      </body>
    </html>
  )
}
