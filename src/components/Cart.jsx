import { useCart } from '../context/CartContext'

export default function Cart() {
  const { cartItems, removeFromCart, proceedToCheckout, cartTotal } = useCart()

  if (cartItems.length === 0) {
    return (
      <div className="max-w-2xl mx-auto bg-base-100 border border-base-200 rounded-2xl p-12 text-center">
        <div className="text-5xl mb-4">🛒</div>
        <h3 className="text-xl font-bold text-gray-900 mb-2">Your cart is empty</h3>
        <p className="text-gray-500 text-sm">
          Browse our products and add something you love.
        </p>
      </div>
    )
  }

  return (
    <div className="max-w-2xl mx-auto bg-base-100 border border-base-200 rounded-2xl p-6">
      <h3 className="text-lg font-bold text-gray-900 mb-4">Your Cart</h3>

      <div className="space-y-3 mb-6">
        {cartItems.map((item, index) => (
          <div
            key={`${item.id}-${index}`}
            className="flex items-center justify-between bg-base-200/50 rounded-xl px-4 py-3"
          >
            <div className="flex items-center gap-3">
              <span className="text-2xl">{item.icon}</span>
              <div>
                <p className="font-semibold text-gray-900 text-sm">{item.name}</p>
                <p className="text-gray-500 text-sm">${item.price}</p>
              </div>
            </div>
            <button
              onClick={() => removeFromCart(index, item.name)}
              className="text-red-500 text-sm font-medium hover:text-red-600 transition-colors"
            >
              Remove
            </button>
          </div>
        ))}
      </div>

      <div className="flex items-center justify-between mb-4">
        <span className="text-gray-500 text-sm">Total:</span>
        <span className="text-xl font-extrabold text-gray-900">${cartTotal}</span>
      </div>

      <button
        onClick={proceedToCheckout}
        className="btn btn-primary w-full rounded-full normal-case border-none"
      >
        Proceed To Checkout
      </button>
    </div>
  )
}
