import type { Metadata } from "next";
import { Inter, Fraunces, JetBrains_Mono } from "next/font/google";
import Link from "next/link";
import "./globals.css";
import { ThemeToggle } from "@/components/ThemeToggle";
import { SearchBar } from "@/components/SearchBar";
import { ChatBot } from "@/components/ChatBot";

const themeInitScript = `(function(){try{var s=localStorage.getItem('theme');if(s==='light'||s==='dark'){document.documentElement.setAttribute('data-theme',s);}}catch(e){}})();`;

const sans = Inter({
  variable: "--font-sans-stack",
  subsets: ["latin"],
  display: "swap",
});

const serif = Fraunces({
  variable: "--font-serif-stack",
  subsets: ["latin"],
  display: "swap",
  axes: ["opsz", "SOFT"],
});

const mono = JetBrains_Mono({
  variable: "--font-mono-stack",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Challan Times — News, Opinion, Road Safety",
  description:
    "An opinionated news reader. Infinite stories, every angle, no spin.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${sans.variable} ${serif.variable} ${mono.variable} antialiased`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body className="min-h-screen flex flex-col bg-bg text-ink pt-14">
        <header className="fixed inset-x-0 top-0 z-50 border-b rule bg-bg-elev">
          <div className="mx-auto max-w-[1360px] px-4 lg:px-10">
            <div className="flex items-center justify-between h-14 gap-3">
              <Link
                href="/"
                aria-label="Challan Times — Home"
                className="min-w-0 truncate text-[11px] sm:text-[14px] font-medium uppercase tracking-[0.12em] sm:tracking-[0.16em] text-ink-muted hover:text-ink transition-colors"
              >
                <span className="hidden sm:inline">Thursday · </span>05 Oct 2026
              </Link>
              <div className="flex items-center gap-2 shrink-0">
                <ThemeToggle />
                <button className="group h-9 px-4 sm:pl-6 sm:pr-5 bg-ink text-bg rounded-full text-[13px] font-medium flex items-center gap-2 sm:gap-3 whitespace-nowrap">
                  Check Challans
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                    className="hidden sm:block transition-transform duration-200 group-hover:translate-x-0.5"
                  >
                    <path d="M5 12h14" />
                    <path d="M13 6l6 6-6 6" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </header>
        <main className="flex-1">{children}</main>
        <ChatBot />
        <footer className="bg-[#0e1a33] text-white mt-16">
          <div className="mx-auto max-w-[1360px] px-5 lg:px-10 py-8">
            <div className="flex items-center justify-between flex-wrap gap-4">
              <p className="text-[13px] text-white/55">
                © 2026. All rights reserved.
              </p>
              <div className="flex items-center gap-5 flex-wrap">
                <Link
                  href="/editorial-policy"
                  className="text-[13px] text-white/55 underline underline-offset-4 hover:text-white transition-colors"
                >
                  Editorial Policy
                </Link>
                <Link
                  href="/privacy-policy"
                  className="text-[13px] text-white/55 underline underline-offset-4 hover:text-white transition-colors"
                >
                  Privacy Policy
                </Link>
                <Link
                  href="/terms-conditions"
                  className="text-[13px] text-white/55 underline underline-offset-4 hover:text-white transition-colors"
                >
                  Terms & Conditions
                </Link>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
