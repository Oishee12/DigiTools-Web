export default function Banner() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-12 items-center">
      <div>
        <span className="inline-flex items-center gap-2 bg-violet-100 text-brand text-xs font-semibold px-4 py-1.5 rounded-full mb-6">
          <span className="w-2 h-2 rounded-full bg-brand"></span>
          New: AI-Powered Tools Available
        </span>

        <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 leading-tight mb-6">
          Supercharge Your Digital Workflow
        </h1>

        <p className="text-gray-500 text-base leading-relaxed mb-8 max-w-md">
          Access premium AI tools, design assets, templates, and productivity software—all in
          one place. Start creating faster today.
        </p>

        <div className="flex flex-wrap items-center gap-4">
          <a href="#products" className="btn btn-primary rounded-full px-7 normal-case">
            Explore Products
          </a>
          <button className="btn btn-outline btn-primary rounded-full px-7 normal-case gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M8 5v14l11-7z" />
            </svg>
            Watch Demo
          </button>
        </div>
      </div>

      <div className="rounded-2xl overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1000&q=80"
          alt="Digital workflow technology"
          className="w-full h-full object-cover rounded-2xl"
        />
      </div>
    </section>
  )
}
