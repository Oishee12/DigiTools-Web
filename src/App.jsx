import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import { CartProvider } from './context/CartContext'
import Navbar from './components/Navbar'
import Banner from './components/Banner'
import Stats from './components/Stats'
import ProductsSection from './components/ProductsSection'
import Steps from './components/Steps'
import Pricing from './components/Pricing'
import CTA from './components/CTA'
import Footer from './components/Footer'

function App() {
  return (
    <CartProvider>
      <div className="min-h-screen bg-white" data-theme="digitools">
        <Navbar />
        <Banner />
        <Stats />
        <ProductsSection />
        <Steps />
        <Pricing />
        <CTA />
        <Footer />
      </div>

      <ToastContainer
        position="top-right"
        autoClose={2500}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        pauseOnHover
      />
    </CartProvider>
  )
}

export default App
