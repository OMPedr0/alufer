"use client"

import { useRouter, usePathname } from 'next/navigation';
import Link from 'next/link';
import { useState } from 'react';

export default function NavBar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = ['Home', 'Quem-Somos', 'O-Que-Fazemos', 'Projetos', 'Contact'];

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="bg-bgnavbar">
      <div className="flex items-center justify-between p-5">
        <div className="flex items-center">
          <img src="/logo.svg" alt="Logo" className="w-40 h-20 mr-4" />
        </div>
        <div className="hidden md:flex space-x-6">
          {navItems.map((item, index) => (
            <Link legacyBehavior key={index} href={item.toLowerCase() === 'Home' ? '/' : `/${item.toLowerCase()}`}>
              <a
                className={`${pathname === item.toLowerCase() || pathname.startsWith(`/${item.toLowerCase()}`)
                  ? 'font-extrabold text-text'
                  : ''
                } text-textnavbar text-xl text-center hover:underline hover:font-semibold`}
              >
                {item}
              </a>
            </Link>
          ))}
        </div>
        {menuOpen && (
          <button
            onClick={closeMenu}
            className="md:hidden text-bgicons2 text-3xl focus:outline-none"
          >
            ✕
          </button>
        )}
        {!menuOpen && (
          <button
            onClick={toggleMenu}
            className="md:hidden text-bgicons text-3xl focus:outline-none"
          >
            ☰
          </button>
        )}
      </div>
      {menuOpen && (
        <div className="md:hidden">
          {navItems.map((item, index) => (
            <Link legacyBehavior key={index} href={item.toLowerCase() === 'Home' ? '/' : `/${item.toLowerCase()}`}>
              <a
                className={`${pathname === item.toLowerCase() || pathname.startsWith(`/${item.toLowerCase()}`)
                  ? 'font-extrabold'
                  : ''
                } text-textnavbar text-xl text-center hover:underline hover:font-semibold block my-2`}
              >
                {item}
              </a>
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
