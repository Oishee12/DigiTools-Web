import { useCart } from '../context/CartContext'

const navLinks = ['Products', 'Features', 'Pricing', 'Testimonials', 'FAQ']

export default function Navbar() {
  const { cartCount } = useCart()

  return (
    <header className="border-b border-base-200">
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        <div className="text-2xl font-extrabold text-brand">
          Dig<span className="text-gray-900">i</span>Tools
        </div>

        <ul className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-700">
          {navLinks.map((link) => (
            <li key={link}>
              <a href={`#${link.toLowerCase()}`} className="hover:text-brand transition-colors">
                {link}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-4">
          <div className="indicator hidden sm:flex">
            <span className="indicator-item badge badge-primary badge-sm">{cartCount}</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-gray-700"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
          </div>
          <button className="text-sm font-medium text-gray-700 hover:text-brand transition-colors">
            Login
          </button>
          <button className="btn btn-primary btn-sm rounded-full px-5 normal-case">
            Get Started
          </button>
        </div>
      </nav>
    </header>
  )
}
