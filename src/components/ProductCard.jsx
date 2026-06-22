import { useState } from 'react'
import { useCart } from '../context/CartContext'

const tagStyles = {
  'best-seller': 'bg-amber-100 text-amber-700',
  popular: 'bg-violet-100 text-brand',
  new: 'bg-emerald-100 text-emerald-700',
}

export default function ProductCard({ product }) {
  const { addToCart } = useCart()
  const [justAdded, setJustAdded] = useState(false)

  const periodLabel = {
    monthly: '/Mo',
    'one-time': '/One-Time',
    yearly: '/Yr',
  }[product.period]

  const handleBuyNow = () => {
    addToCart(product)
    setJustAdded(true)
    setTimeout(() => setJustAdded(false), 2000)
  }

  return (
    <div className="card bg-base-100 border border-base-200 rounded-2xl p-6 relative hover:shadow-lg transition-shadow">
      <span
        className={`absolute top-5 right-5 text-xs font-semibold px-3 py-1 rounded-full ${tagStyles[product.tagType]}`}
      >
        {product.tag}
      </span>

      <div className="text-3xl mb-4">{product.icon}</div>

      <h3 className="text-lg font-bold text-gray-900 mb-2">{product.name}</h3>
      <p className="text-sm text-gray-500 mb-4 leading-relaxed">{product.description}</p>

      <p className="mb-4">
        <span className="text-2xl font-extrabold text-gray-900">${product.price}</span>
        <span className="text-sm text-gray-400">{periodLabel}</span>
      </p>

      <ul className="space-y-2 mb-6">
        {product.features.map((feature) => (
          <li key={feature} className="flex items-center gap-2 text-sm text-gray-600">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 text-emerald-500 flex-shrink-0"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                clipRule="evenodd"
              />
            </svg>
            {feature}
          </li>
        ))}
      </ul>

      <button
        onClick={handleBuyNow}
        className={`btn w-full rounded-full normal-case border-none ${
          justAdded ? 'bg-emerald-500 hover:bg-emerald-500 text-white' : 'btn-primary'
        }`}
      >
        {justAdded ? 'Added to Cart ✓' : 'Buy Now'}
      </button>
    </div>
  )
}
