const steps = [
  {
    number: '01',
    icon: '👤',
    title: 'Create Account',
    description: 'Sign up for free in seconds. No credit card required to get started.',
  },
  {
    number: '02',
    icon: '📦',
    title: 'Choose Products',
    description: 'Browse our catalog and select the tools that fit your needs.',
  },
  {
    number: '03',
    icon: '🚀',
    title: 'Start Creating',
    description: 'Download and start using your premium tools immediately.',
  },
]

export default function Steps() {
  return (
    <section className="bg-base-200/50 py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-gray-900 mb-4">Get Started In 3 Steps</h2>
          <p className="text-gray-500">Start using premium digital tools in minutes, not hours.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {steps.map((step) => (
            <div
              key={step.number}
              className="relative bg-base-100 rounded-2xl p-8 text-center border border-base-200"
            >
              <span className="absolute top-4 right-4 w-7 h-7 rounded-full bg-brand text-white text-xs font-bold flex items-center justify-center">
                {step.number}
              </span>
              <div className="w-16 h-16 rounded-full bg-violet-100 text-3xl flex items-center justify-center mx-auto mb-4">
                {step.icon}
              </div>
              <h3 className="font-bold text-gray-900 mb-2">{step.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
