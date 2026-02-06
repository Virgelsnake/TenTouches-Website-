import Image from "next/image";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-white/5 bg-tt-navy">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div className="flex items-center gap-3">
            <Image
              src="/app-icon.png"
              alt="Ten Touches app icon"
              width={32}
              height={32}
              className="rounded-[8px]"
            />
            <span className="text-base font-bold text-white">Ten Touches</span>
          </div>

          <nav aria-label="Footer navigation">
            <ul className="flex flex-wrap items-center gap-6 text-sm text-white/50">
              <li>
                <Link href="/#features" className="hover:text-white transition-colors">
                  Features
                </Link>
              </li>
              <li>
                <Link href="/#how-it-works" className="hover:text-white transition-colors">
                  How It Works
                </Link>
              </li>
              <li>
                <Link href="/#use-cases" className="hover:text-white transition-colors">
                  Optimise
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/privacy/beta" className="hover:text-white transition-colors">
                  Beta Privacy
                </Link>
              </li>
              <li>
                <Link href="/support" className="hover:text-white transition-colors">
                  Support
                </Link>
              </li>
            </ul>
          </nav>
        </div>

        <div className="mt-8 pt-8 border-t border-white/5 text-center">
          <p className="text-xs text-white/30">
            &copy; {new Date().getFullYear()} Ten Touches. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
