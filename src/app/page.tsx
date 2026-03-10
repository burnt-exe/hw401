import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";

export const metadata: Metadata = {
  title: "HW401 | Warfare in the Fifth Domain",
  description: "IP-safe course shell for HW401 using an IBM Carbon-inspired interface."
};

const nav = [
  { label: "Home", href: "/" },
  { label: "Modules", href: "/modules/week1" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Frameworks", href: "/frameworks" },
  { label: "Concepts", href: "/concepts" },
  { label: "Instructor", href: "/instructor" },
  { label: "Student", href: "/student" },
  { label: "References", href: "/references" }
];

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-carbon-theme="g100">
      <body>
        <a className="cds--skip-to-content" href="#main-content">
          Skip to content
        </a>

        <header className="cds--header app-header" aria-label="HW401 header">
          <Link href="/" className="cds--header__name brand">
            <span className="cds--header__name--prefix">HW</span>401
          </Link>

          <nav className="cds--header__nav desktop-nav" aria-label="Primary navigation">
            {nav.map((item) => (
              <Link key={item.href} href={item.href} className="cds--header__menu-item">
                {item.label}
              </Link>
            ))}
          </nav>
        </header>

        <main id="main-content" className="app-shell">
          {children}
        </main>
      </body>
    </html>
  );
}