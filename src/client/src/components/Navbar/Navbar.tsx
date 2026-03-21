import React, { useState, useEffect } from 'react';
import './Navbar.css';

const NAV_LINKS = [
  { label: 'Послуги', href: '#services' },
  { label: 'Про нас', href: '#why-us' },
  { label: 'Контакти', href: '#contact' },
];

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  return (
    <header className={`nf-navbar ${scrolled ? 'nf-navbar--scrolled' : ''}`}>
      <div className="container">
        <div className="nf-navbar__inner">

          {/* Logo */}
          <a href="#" className="nf-navbar__logo">
            <span className="nf-navbar__logo-icon">
              <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
                <path d="M13 2L24 13L13 24L2 13Z" stroke="currentColor" strokeWidth="1.5" fill="none"/>
                <path d="M13 7L19 13L13 19L7 13Z" fill="currentColor" opacity="0.35"/>
                <circle cx="13" cy="13" r="2.5" fill="currentColor"/>
              </svg>
            </span>
            Net<span>Fix</span>
          </a>

          {/* Desktop Nav */}
          <nav className="nf-navbar__nav d-none d-lg-flex">
            {NAV_LINKS.map((l) => (
              <a key={l.href} href={l.href} className="nf-navbar__link">
                {l.label}
              </a>
            ))}
            <a href="#contact" className="btn-nf-primary ms-3">
              Замовити
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
            </a>
          </nav>

          {/* Mobile Burger */}
          <button
            className={`nf-navbar__burger d-lg-none ${menuOpen ? 'open' : ''}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Відкрити меню"
          >
            <span /><span /><span />
          </button>
        </div>
      </div>

      {/* Mobile Overlay Menu */}
      <div className={`nf-navbar__mobile ${menuOpen ? 'open' : ''}`}>
        {NAV_LINKS.map((l, i) => (
          <a
            key={l.href}
            href={l.href}
            className="nf-navbar__mobile-link"
            style={{ animationDelay: `${i * 0.08}s` }}
            onClick={() => setMenuOpen(false)}
          >
            {l.label}
          </a>
        ))}
        <a
          href="#contact"
          className="btn-nf-primary mt-4"
          onClick={() => setMenuOpen(false)}
        >
          Замовити послугу
        </a>
      </div>
    </header>
  );
};

export default Navbar;
