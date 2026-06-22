export default function CTA() {
  return (
    <section className="bg-brand-gradient py-16">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
          Ready To Transform Your Workflow?
        </h2>
        <p className="text-white/80 mb-8">
          Join thousands of professionals who are already using Digtools to work smarter. Start
          your free trial today.
        </p>

        <div className="flex flex-wrap justify-center gap-4 mb-4">
          <a href="#products" className="btn bg-white text-brand hover:bg-white/90 rounded-full px-7 normal-case border-none">
            Explore Products
          </a>
          <a href="#pricing" className="btn btn-outline text-white border-white hover:bg-white/10 rounded-full px-7 normal-case">
            View Pricing
          </a>
        </div>

        <p className="text-white/70 text-sm">
          14-day free trial • No credit card required • Cancel anytime
        </p>
      </div>
    </section>
  )
}
