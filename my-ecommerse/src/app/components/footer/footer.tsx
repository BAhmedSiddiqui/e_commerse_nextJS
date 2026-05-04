import Link from "next/link";

const FOOTER_LINKS = {
  Shop: [
    { label: "New Arrivals", href: "/new" },
    { label: "Collections", href: "/collections" },
    { label: "Sale", href: "/sale" },
    { label: "Gift Cards", href: "/gift-cards" },
  ],
  Support: [
    { label: "FAQ", href: "/faq" },
    { label: "Shipping & Returns", href: "/shipping" },
    { label: "Track Order", href: "/track" },
    { label: "Contact Us", href: "/contact" },
  ],
  Company: [
    { label: "About Us", href: "/about" },
    { label: "Blog", href: "/blog" },
    { label: "Careers", href: "/careers" },
    { label: "Press", href: "/press" },
  ],
};

const SOCIAL_LINKS = [
  {
    label: "Instagram",
    href: "https://instagram.com",
    icon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
      </svg>
    ),
  },
  {
    label: "Twitter / X",
    href: "https://twitter.com",
    icon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    label: "Pinterest",
    href: "https://pinterest.com",
    icon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 0C5.373 0 0 5.372 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 01.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.632-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0z" />
      </svg>
    ),
  },
  {
    label: "Facebook",
    href: "https://facebook.com",
    icon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
  },
];

const PAYMENT_ICONS = [
  "Visa",
  "Mastercard",
  "PayPal",
  "Apple Pay",
  "Google Pay",
];

export default function Footer() {
  return (
    <footer className="bg-gray-900 dark:bg-gray-950 text-gray-300">
      {/* ── NEWSLETTER BANNER ── */}
      <div className="border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            {/* Left */}
            <div>
              <p className="text-white font-semibold text-base">
                Get 10% off your first order
              </p>
              <p className="text-sm text-gray-400 mt-0.5">
                Subscribe to our newsletter for deals & updates.
              </p>
            </div>
            {/* Right — Email form */}
            <form className="flex w-full sm:w-auto gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                aria-label="Email address"
                className="
                  flex-1 sm:w-64 px-4 py-2 rounded-full text-sm
                  bg-gray-800 border border-gray-700
                  text-white placeholder-gray-500
                  focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20
                  transition-all
                "
              />
              <button
                type="submit"
                className="
                  px-5 py-2 rounded-full text-sm font-semibold shrink-0
                  bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-700
                  text-white transition-colors
                ">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* ── MAIN FOOTER GRID ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* ── LEFT: Brand ── */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link
              href="/"
              className="inline-flex items-center gap-2 mb-4 group"
              aria-label="Home">
              <span className="w-8 h-8 rounded-lg bg-indigo-600 flex items-center justify-center shrink-0">
                <svg
                  className="w-4 h-4 text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20">
                  <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
                </svg>
              </span>
              <span className="text-white font-bold text-lg tracking-tight group-hover:text-indigo-400 transition-colors">
                Shopify
              </span>
            </Link>
            <p className="text-sm text-gray-400 leading-relaxed mb-5">
              Premium products delivered fast. Shop smarter, live better.
            </p>
            {/* Social icons */}
            <div className="flex items-center gap-2">
              {SOCIAL_LINKS.map(({ label, href, icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-8 h-8 rounded-full flex items-center justify-center bg-gray-800 text-gray-400 hover:bg-indigo-600 hover:text-white transition-all">
                  {icon}
                </a>
              ))}
            </div>
          </div>

          {/* ── RIGHT: Link columns ── */}
          {Object.entries(FOOTER_LINKS).map(([title, links]) => (
            <div key={title}>
              <h3 className="text-white text-sm font-semibold uppercase tracking-widest mb-4">
                {title}
              </h3>
              <ul className="space-y-2">
                {links.map(({ label, href }) => (
                  <li key={href}>
                    <Link
                      href={href}
                      className="text-sm text-gray-400 hover:text-white transition-colors">
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* ── BOTTOM BAR ── */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
            {/* Left — copyright */}
            <p className="text-xs text-gray-500">
              © {new Date().getFullYear()} Shopify, Inc. All rights reserved.
            </p>

            {/* Right — payment icons + legal */}
            <div className="flex flex-wrap items-center justify-center gap-3">
              {/* Payment badges */}
              <div className="flex items-center gap-1.5">
                {PAYMENT_ICONS.map((method) => (
                  <span
                    key={method}
                    className="px-2 py-0.5 rounded bg-gray-800 border border-gray-700 text-[10px] text-gray-400 font-medium">
                    {method}
                  </span>
                ))}
              </div>
              {/* Legal links */}
              <div className="flex items-center gap-3">
                <Link
                  href="/privacy"
                  className="text-xs text-gray-500 hover:text-gray-300 transition-colors">
                  Privacy
                </Link>
                <Link
                  href="/terms"
                  className="text-xs text-gray-500 hover:text-gray-300 transition-colors">
                  Terms
                </Link>
                <Link
                  href="/cookies"
                  className="text-xs text-gray-500 hover:text-gray-300 transition-colors">
                  Cookies
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
