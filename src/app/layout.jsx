import './globals.css'
import { Inter, Playfair_Display } from 'next/font/google'

// Using Inter for UI text and Playfair Display for Headings (Classic Luxury Combo)
const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair' })

export const metadata = {
  title: 'Vanguard Development | Premium Real Estate',
  description: 'Building the future of luxury living.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${playfair.variable} font-sans`}>{children}</body>
    </html>
  )
}