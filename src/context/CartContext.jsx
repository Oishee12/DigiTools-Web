import { createContext, useContext, useState } from 'react'
import { toast } from 'react-toastify'

const CartContext = createContext(null)

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([])

  const addToCart = (product) => {
    setCartItems((prev) => [...prev, product])
    toast.success(`${product.name} added to cart!`)
  }

  const removeFromCart = (cartIndex, productName) => {
    setCartItems((prev) => prev.filter((_, index) => index !== cartIndex))
    toast.info(`${productName} removed from cart`)
  }

  const proceedToCheckout = () => {
    if (cartItems.length === 0) {
      toast.warn('Your cart is empty!')
      return
    }
    setCartItems([])
    toast.success('Order placed successfully! Cart cleared.')
  }

  const cartTotal = cartItems.reduce((sum, item) => sum + item.price, 0)

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        proceedToCheckout,
        cartTotal,
        cartCount: cartItems.length,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const context = useContext(CartContext)
  if (!context) {
    throw new Error('useCart must be used within a CartProvider')
  }
  return context
}
