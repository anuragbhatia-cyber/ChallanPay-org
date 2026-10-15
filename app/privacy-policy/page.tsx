import Link from "next/link";

export default function PrivacyPolicyPage() {
  return (
    <div className="mx-auto max-w-[760px] px-5 lg:px-10 pt-8 lg:pt-12 pb-16">
      <Link
        href="/"
        className="inline-flex items-center gap-2 h-9 pl-3 pr-4 mb-6 rounded-full border rule bg-bg-elev text-[13px] font-medium text-ink hover:bg-tag transition-colors"
      >
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M19 12H5" />
          <path d="M11 18l-6-6 6-6" />
        </svg>
        Back
      </Link>
      <h1 className="mb-6 font-serif text-[40px] lg:text-[56px] leading-[1.02] tracking-tight text-ink">
        Privacy Policy
      </h1>
      <div className="space-y-5 text-[16px] leading-[1.7] text-ink">
        <p>
          This is a placeholder privacy policy page. The final version will
          describe what information we collect, how we use it, and the choices
          you have.
        </p>
        <h2 className="font-serif text-[24px] text-ink pt-4">
          Information we collect
        </h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <h2 className="font-serif text-[24px] text-ink pt-4">How we use it</h2>
        <p>
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
          nisi ut aliquip ex ea commodo consequat.
        </p>
        <h2 className="font-serif text-[24px] text-ink pt-4">Your choices</h2>
        <p>
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur.
        </p>
      </div>
    </div>
  );
}
