import Link from "next/link";
import { siteConfig } from "@/data/config/site";
import { MobileMenu } from "@/components/navigation/mobile-menu";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/85 backdrop-blur">
      <div className="relative mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <div>
          <Link href="/" className="text-lg font-bold tracking-tight text-white">
            {siteConfig.title}
          </Link>
          <p className="hidden text-sm text-slate-400 sm:block">
            {siteConfig.subtitle}
          </p>
        </div>

        <nav className="hidden gap-5 md:flex">
          {siteConfig.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm text-slate-300 transition hover:text-white"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <MobileMenu />
      </div>
    </header>
  );
}