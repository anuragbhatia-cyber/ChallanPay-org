import type { Metadata } from "next";
import { Inter, Fraunces, JetBrains_Mono } from "next/font/google";
import Image from "next/image";
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
      <body className="min-h-screen flex flex-col bg-bg text-ink pt-20">
        <header className="fixed inset-x-0 top-0 z-50 border-b rule bg-bg-elev">
          <div className="mx-auto max-w-[1360px] px-5 lg:px-10">
            <div className="flex items-center justify-between h-20 gap-4">
              <Link
                href="/"
                aria-label="Challan Times — Home"
                className="text-[14px] font-medium uppercase tracking-[0.16em] text-ink-muted hover:text-ink transition-colors"
              >
                Thursday · 05 Oct 2026
              </Link>
              <div className="flex items-center gap-2">
                <ThemeToggle />
                <button className="group h-9 pl-6 pr-5 bg-ink text-bg rounded-full text-[13px] font-medium flex items-center gap-3">
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
                    className="transition-transform duration-200 group-hover:translate-x-0.5"
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
        <footer className="bg-black text-white mt-16">
          <div className="mx-auto max-w-[1360px] px-5 lg:px-10 pt-16 pb-10">
            <div>
              <div className="relative block h-12 md:h-16 w-[147px] md:w-[196px] select-none">
                <Image
                  src="/logo-challanpay-dark.png"
                  alt="ChallanPay"
                  fill
                  sizes="196px"
                  className="object-contain"
                />
              </div>
              <p className="mt-6 text-[15px] text-white/85 max-w-[480px]">
                India&apos;s most trusted platform for fast &amp; secure
                challan payments.
              </p>
              <p className="mt-6 text-[13px] text-white/55">
                Sproutech Solutions Private Limited
              </p>
              <p className="mt-2 text-[13px] text-white/55 max-w-[480px]">
                India Accelerator Coworking, Lower Ground Floor, LG-007-02,
                MGF Metropolis Mall, MG Road, Gurugram, Haryana, 122002
              </p>
            </div>

            <div className="mt-12 pt-6 border-t border-white/10 flex items-center justify-between flex-wrap gap-4">
              <p className="text-[13px] text-white/55">
                © 2026 ChallanPay. All rights reserved.
              </p>
              <div className="flex items-center gap-4 text-white/60">
                <a
                  href="#"
                  aria-label="Twitter"
                  className="hover:text-white"
                >
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M18.244 2H21l-6.52 7.45L22 22h-6.07l-4.75-6.21L5.73 22H3l6.98-7.98L2 2h6.21l4.28 5.66L18.244 2zm-1.07 18.26h1.63L7.9 3.63H6.17l11.004 16.63z" />
                  </svg>
                </a>
                <a
                  href="#"
                  aria-label="Instagram"
                  className="hover:text-white"
                >
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    aria-hidden="true"
                  >
                    <rect x="3" y="3" width="18" height="18" rx="5" />
                    <circle cx="12" cy="12" r="4" />
                    <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
                  </svg>
                </a>
                <a
                  href="#"
                  aria-label="Facebook"
                  className="hover:text-white"
                >
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M13.5 22v-8h2.7l.4-3.2h-3.1V8.7c0-.9.3-1.6 1.6-1.6h1.6V4.2c-.3 0-1.2-.1-2.3-.1-2.3 0-3.8 1.4-3.8 3.9v2.8H8v3.2h2.6V22h2.9z" />
                  </svg>
                </a>
                <a
                  href="#"
                  aria-label="LinkedIn"
                  className="hover:text-white"
                >
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM3 9h4v12H3V9zm7 0h3.8v1.7h.05c.53-1 1.84-2.05 3.78-2.05 4.04 0 4.79 2.66 4.79 6.12V21h-4v-5.5c0-1.3-.02-3-1.83-3-1.83 0-2.1 1.43-2.1 2.9V21h-4V9z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
