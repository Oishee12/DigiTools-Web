const columns = [
  {
    title: 'Product',
    links: ['Features', 'Pricing', 'Templates', 'Integrations'],
  },
  {
    title: 'Company',
    links: ['About', 'Blog', 'Careers', 'Press'],
  },
  {
    title: 'Resources',
    links: ['Documentation', 'Help Center', 'Community', 'Contact'],
  },
]

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-[2fr_1fr_1fr_1fr_1fr] gap-10 mb-12">
          <div>
            <h3 className="text-xl font-extrabold text-white mb-3">
              Dig<span className="text-brand-light">i</span>Tools
            </h3>
            <p className="text-sm text-gray-400 max-w-xs leading-relaxed">
              Premium digital tools for creators, professionals, and businesses. Work smarter
              with our suite of powerful tools.
            </p>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <h4 className="font-semibold text-white mb-4">{col.title}</h4>
              <ul className="space-y-3 text-sm">
                {col.links.map((link) => (
                  <li key={link}>
                    <a href="#" className="hover:text-white transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h4 className="font-semibold text-white mb-4">Social Links</h4>
            <div className="flex gap-3">
              {['📷', 'f', '✕'].map((icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-9 h-9 rounded-full bg-gray-800 flex items-center justify-center text-sm hover:bg-gray-700 transition-colors"
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-6 flex flex-wrap justify-between gap-4 text-xs text-gray-500">
          <p>© 2026 Digitools. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-gray-300">Privacy Policy</a>
            <a href="#" className="hover:text-gray-300">Terms of Service</a>
            <a href="#" className="hover:text-gray-300">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
