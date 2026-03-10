"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, Close } from "@carbon/icons-react";
import { siteConfig } from "@/data/config/site";

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header
      aria-label="Site header"
      className="cds--header"
      style={{ borderBottom: "1px solid var(--cds-border-subtle)" }}
    >
      <a className="cds--skip-to-content" href="#main-content">
        Skip to content
      </a>

      <Link href="/" className="cds--header__name" style={{ paddingLeft: "1rem" }}>
        <span className="cds--header__name--prefix">HW</span>401
      </Link>

      <nav className="cds--header__nav hw-desktop-nav" aria-label="Primary navigation">
        {siteConfig.nav.map((item) => (
          <Link key={item.href} href={item.href} className="cds--header__menu-item">
            {item.label}
          </Link>
        ))}
      </nav>

      <button
        type="button"
        aria-label="Toggle navigation"
        onClick={() => setOpen(!open)}
        className="cds--header__action hw-mobile-nav"
        style={{ marginLeft: "auto" }}
      >
        {open ? <Close size={20} /> : <Menu size={20} />}
      </button>

      {open && (
        <div
          style={{
            position: "absolute",
            top: "3rem",
            left: 0,
            right: 0,
            background: "var(--cds-layer)",
            borderBottom: "1px solid var(--cds-border-subtle)",
            padding: "1rem",
            zIndex: 999
          }}
        >
          <nav
            aria-label="Mobile navigation"
            style={{ display: "grid", gap: "0.5rem" }}
          >
            {siteConfig.nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="cds--header__menu-item"
                style={{ padding: "0.75rem 1rem" }}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}