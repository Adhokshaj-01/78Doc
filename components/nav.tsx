'use client'

import { Scroll } from 'lucide-react'
import Link from 'next/link'
import { useEffect, useState } from 'react'

export function Nav() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`fixed top-0 left-0 w-full p-6 flex justify-between items-center z-50 transition-colors duration-300 ${
      isScrolled ? 'bg-[#F5F5F3]' : 'bg-transparent'
    }`}>
      <Link 
        href="/" 
        className="text-lg font-cinzel-decorative tracking-wider flex"
      >
        {/* VII.VIII */}
        <Scroll />&nbsp;Branding Manual
      </Link>
      <div className="flex gap-6 text-sm tracking-wider font-cinzel">
        {/* <Link href="/about" className="hover:opacity-70 transition-opacity">
          About
        </Link>
        <Link href="/contact" className="hover:opacity-70 transition-opacity">
          Contact
        </Link>
        <Link href="https://instagram.com" className="hover:opacity-70 transition-opacity">
          Instagram
        </Link> */}
        <Link href={'#'}>
        VII.VIII
        </Link>
      </div>
    </nav>
  )
}

