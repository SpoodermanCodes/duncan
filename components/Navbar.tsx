'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const links = [
  { href: '/', label: 'HOME' },
  { href: '/products', label: 'PRODUCTS' },
  { href: '/drivers', label: 'DRIVERS' },
  { href: '/support', label: 'TECH SUPPORT' },
  { href: '/auth', label: 'LOGIN' },
]

export default function Navbar() {
  const pathname = usePathname()
  return (
    <header className="text-center py-4 border-b border-green-700 bg-black">
      <h2 className="text-2xl font-bold text-green-400">Duncan</h2>
      <p className="text-green-600 text-sm">A place for gamers, by gamers</p>
      <nav className="flex bg-[#333] border-b-2 border-green-700 mt-2">
        {links.map(({ href, label }) => (
          <Link
            key={href}
            href={href}
            className={`flex-1 py-3 text-center text-sm font-medium transition-colors hover:bg-black hover:text-green-400 ${
              pathname === href ? 'bg-black text-green-400' : 'text-gray-200'
            }`}
          >
            {label}
          </Link>
        ))}
      </nav>
    </header>
  )
}
