"use client"

const Footer = () => {
  const quickLinks = [
    [
      { name: "Mobile Phone", href: "/mobile-phone" },
      { name: "Tablet", href: "/tablet" },
      { name: "Smart Watch", href: "/smart-watch" },
      { name: "Accessories", href: "/accessories" },
    ],
    [
      { name: "Laptop", href: "/laptop" },
      { name: "Earphone", href: "/earphone" },
      { name: "Power Bank", href: "/power-bank" },
      { name: "Adapter", href: "/adapter" },
    ],
    [
      { name: "Play Station", href: "/play-station" },
      { name: "Connector", href: "/connector" },
      { name: "Router Wireless", href: "/router-wireless" },
      { name: "Case", href: "/case" },
    ],
    [
      { name: "Bluetooth Speaker", href: "/bluetooth-speaker" },
      { name: "Keyboard", href: "/keyboard" },
      { name: "News", href: "/news" },
      { name: "Contact us", href: "/contact" },
    ],
  ]

  const socialLinks = [
    {
      name: "Sokly Phone Shosp",
      platform: "Facebook",
      href: "https://facebook.com/soklyphoneshop",
      icon: (
        <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
        </svg>
      ),
    },
    {
      name: "Sokly Phone Cambodia",
      platform: "Instagram",
      href: "https://instagram.com/soklyphonecambodia",
      icon: (
        <svg className="w-5 h-5 text-pink-600" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987 6.62 0 11.987-5.367 11.987-11.987C24.014 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.323-1.297C4.198 14.895 3.708 13.744 3.708 12.447s.49-2.448 1.297-3.323C5.902 8.198 7.053 7.708 8.35 7.708s2.448.49 3.323 1.297c.897.875 1.387 2.026 1.387 3.323s-.49 2.448-1.297 3.323c-.875.897-2.026 1.387-3.323 1.387zm7.718 0c-1.297 0-2.448-.49-3.323-1.297-.897-.875-1.387-2.026-1.387-3.323s.49-2.448 1.297-3.323c.875-.897 2.026-1.387 3.323-1.387s2.448.49 3.323 1.297c.897.875 1.387 2.026 1.387 3.323s-.49 2.448-1.297 3.323c-.875.897-2.026 1.387-3.323 1.387z" />
        </svg>
      ),
    },
    {
      name: "Sokly Phone",
      platform: "Telegram",
      href: "https://t.me/soklyphoneshop",
      icon: (
        <svg className="w-5 h-5 text-blue-500" fill="currentColor" viewBox="0 0 24 24">
          <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
        </svg>
      ),
    },
  ]

  return (
    <footer className="bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-6 gap-16">
          {/* Quick Links Section - Takes 4 columns */}
          <div className="lg:col-span-4">
            <h3 className="text-lg font-bold text-gray-900 mb-6">QUICKLINKS</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {quickLinks.map((column, columnIndex) => (
                <div key={columnIndex}>
                  <ul className="space-y-3">
                    {column.map((link, linkIndex) => (
                      <li key={linkIndex}>
                        <a
                          href={link.href}
                          className="text-gray-600 hover:text-blue-600 transition-colors duration-300 text-sm"
                        >
                          {link.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Follow Us Section - Takes 2 columns */}
          <div className="lg:col-span-2">
            <h3 className="text-lg font-bold text-gray-900 mb-6">FOLLOW US</h3>
            <div className="space-y-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="flex items-center gap-3 text-gray-600 hover:text-blue-600 transition-colors duration-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {social.icon}
                  <span className="text-sm">{social.name}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
         

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <p className="text-center text-gray-600 text-sm">Sokly Phone Shop © 2020. All Rights Reserved</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
