const plans = [
  {
    name: 'Starter',
    description: 'Perfect for getting started',
    price: 0,
    cta: 'Get Started Free',
    highlighted: false,
    features: ['Access to 10 free tools', 'Basic templates', 'Community support', '1 project per month'],
  },
  {
    name: 'Pro',
    description: 'Best for professionals',
    price: 29,
    cta: 'Start Pro Trial',
    highlighted: true,
    badge: 'Most Popular',
    features: [
      'Access to all premium tools',
      'Unlimited templates',
      'Priority support',
      'Unlimited projects',
      'Cloud sync',
      'Advanced analytics',
    ],
  },
  {
    name: 'Enterprise',
    description: 'For teams and businesses',
    price: 99,
    cta: 'Contact Sales',
    highlighted: false,
    features: [
      'Everything in Pro',
      'Team collaboration',
      'Custom integrations',
      'Dedicated support',
      'SLA guarantee',
      'Custom branding',
    ],
  },
]

export default function Pricing() {
  return (
    <section id="pricing" className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-gray-900 mb-4">Simple, Transparent Pricing</h2>
          <p className="text-gray-500">Choose the plan that fits your needs. Upgrade or downgrade anytime.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 items-start">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-2xl p-8 ${
                plan.highlighted
                  ? 'bg-brand-gradient text-white shadow-xl md:-translate-y-3'
                  : 'bg-base-200/40 text-gray-900'
              }`}
            >
              {plan.badge && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-amber-200 text-amber-800 text-xs font-semibold px-3 py-1 rounded-full">
                  {plan.badge}
                </span>
              )}

              <h3 className="font-bold text-lg mb-1">{plan.name}</h3>
              <p className={`text-sm mb-6 ${plan.highlighted ? 'text-white/80' : 'text-gray-500'}`}>
                {plan.description}
              </p>

              <p className="mb-6">
                <span className="text-4xl font-extrabold">${plan.price}</span>
                <span className={plan.highlighted ? 'text-white/80' : 'text-gray-400'}>/Month</span>
              </p>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-sm">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className={`h-4 w-4 flex-shrink-0 ${
                        plan.highlighted ? 'text-white' : 'text-emerald-500'
                      }`}
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
                className={`btn w-full rounded-full normal-case border-none ${
                  plan.highlighted ? 'bg-white text-brand hover:bg-white/90' : 'btn-primary'
                }`}
              >
                {plan.cta}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
