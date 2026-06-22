import { useState } from 'react'
import { useCart } from '../context/CartContext'
import Products from './Products'
import Cart from './Cart'

export default function ProductsSection() {
  const [activeView, setActiveView] = useState('products')
  const { cartCount } = useCart()

  return (
    <section id="products" className="max-w-7xl mx-auto px-6 py-20">
      <div className="text-center mb-10">
        <h2 className="text-4xl font-extrabold text-gray-900 mb-4">Premium Digital Tools</h2>
        <p className="text-gray-500 max-w-xl mx-auto">
          Choose from our curated collection of premium digital products designed to boost your
          productivity and creativity.
        </p>
      </div>

      <div className="flex justify-center mb-12">
        <div className="inline-flex bg-base-200 rounded-full p-1">
          <button
            onClick={() => setActiveView('products')}
            className={`px-6 py-2 rounded-full text-sm font-semibold normal-case transition-colors ${
              activeView === 'products'
                ? 'bg-brand text-white'
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            Products
          </button>
          <button
            onClick={() => setActiveView('cart')}
            className={`px-6 py-2 rounded-full text-sm font-semibold normal-case transition-colors ${
              activeView === 'cart' ? 'bg-brand text-white' : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            Cart ({cartCount})
          </button>
        </div>
      </div>

      {activeView === 'products' ? <Products /> : <Cart />}
    </section>
  )
}
