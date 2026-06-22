const stats = [
  { value: '50K+', label: 'Active Users' },
  { value: '200+', label: 'Premium Tools' },
  { value: '4.9', label: 'Rating' },
]

export default function Stats() {
  return (
    <section className="bg-brand-gradient">
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-3 divide-x divide-white/30 text-center">
        {stats.map((stat) => (
          <div key={stat.label} className="px-4">
            <p className="text-4xl md:text-5xl font-extrabold text-white mb-2">{stat.value}</p>
            <p className="text-white/80 text-sm md:text-base">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
