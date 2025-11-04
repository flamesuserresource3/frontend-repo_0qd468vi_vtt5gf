import { useState } from 'react';
import { Home, PenSquare, Settings, User } from 'lucide-react';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navItems = [
    { href: '#home', label: 'Home', icon: Home },
    { href: '#blog', label: 'Blog', icon: PenSquare },
    { href: '#admin', label: 'Admin', icon: Settings },
    { href: '#about', label: 'About', icon: User },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-black/40 bg-black/60 border-b border-white/10">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#home" className="text-white font-semibold tracking-tight text-lg">Flames Portfolio</a>
        <div className="hidden md:flex items-center gap-1">
          {navItems.map(({ href, label, icon: Icon }) => (
            <a key={href} href={href} className="text-sm text-gray-300 hover:text-white px-3 py-2 rounded-md inline-flex items-center gap-2 transition-colors">
              <Icon size={16} />
              {label}
            </a>
          ))}
          <a href="#contact" className="ml-2 inline-flex items-center px-4 py-2 rounded-md bg-white text-black font-medium hover:bg-gray-200 transition-colors">Contact</a>
        </div>
        <button
          className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-md border border-white/10 text-white"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          <span className="sr-only">Toggle menu</span>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4 6H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            <path d="M4 12H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            <path d="M4 18H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        </button>
      </nav>
      {open && (
        <div className="md:hidden border-t border-white/10 bg-black/80">
          <div className="px-4 py-3 space-y-1">
            {navItems.map(({ href, label, icon: Icon }) => (
              <a key={href} href={href} onClick={() => setOpen(false)} className="flex items-center gap-2 px-3 py-2 rounded-md text-gray-200 hover:bg-white/10">
                <Icon size={16} /> {label}
              </a>
            ))}
            <a href="#contact" onClick={() => setOpen(false)} className="block px-3 py-2 rounded-md bg-white text-black font-medium text-center">Contact</a>
          </div>
        </div>
      )}
    </header>
  );
}
