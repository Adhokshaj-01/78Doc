import './globals.css'
import { Playfair_Display, Cinzel } from 'next/font/google'
import type { Metadata } from 'next'

const playfair = Playfair_Display({ 
  subsets: ['latin'],
  variable: '--font-playfair',
})

const cinzel = Cinzel({ 
  subsets: ['latin'],
  variable: '--font-cinzel',
})

export const metadata: Metadata = {
  title: 'VII.VIII Coffee & Co.',
  description: 'Brand Guidelines & Documentation',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${playfair.variable} ${cinzel.variable} bg-[#F5F5F3]`}>
        {children}
      </body>
    </html>
  )
}

