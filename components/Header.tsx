"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { navigation, site } from "@/lib/site-data";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="header">
      <Link className="wordmark" href="/" aria-label={`${site.name} home`} onClick={() => setMenuOpen(false)}>
        <span>VELORA</span>
        <small>{site.descriptor}</small>
      </Link>
      <nav className="desktop-nav" aria-label="Main navigation">
        {navigation.slice(1).map((item) => (
          <Link
            aria-current={pathname === item.href ? "page" : undefined}
            href={item.href}
            key={item.href}
          >
            {item.label}
          </Link>
        ))}
      </nav>
      <Link className="header-cta" href="/contact">
        Start a Project <span aria-hidden="true">↗</span>
      </Link>
      <button
        className={`menu-toggle${menuOpen ? " is-open" : ""}`}
        type="button"
        aria-expanded={menuOpen}
        aria-controls="mobile-navigation"
        aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span />
        <span />
      </button>
      <nav
        className={`mobile-nav${menuOpen ? " is-open" : ""}`}
        id="mobile-navigation"
        aria-label="Mobile navigation"
        aria-hidden={!menuOpen}
      >
        {navigation.map((item, index) => (
          <Link
            aria-current={pathname === item.href ? "page" : undefined}
            href={item.href}
            key={item.href}
            onClick={() => setMenuOpen(false)}
            tabIndex={menuOpen ? 0 : -1}
          >
            <span className="mobile-nav-number">0{index + 1}</span>
            {item.label}
            <span aria-hidden="true">↗</span>
          </Link>
        ))}
      </nav>
    </header>
  );
}
