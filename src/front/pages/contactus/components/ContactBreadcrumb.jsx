import { ChevronRight } from "lucide-react"

const ContactBreadcrumb = () => {
  return (
    <nav className="flex items-center space-x-2 text-sm text-gray-600 mb-6">
      <a href="/" className="hover:text-blue-600 transition-colors">
        Home
      </a>
      <ChevronRight className="w-4 h-4" />
      <span className="text-gray-900">Contact Us</span>
    </nav>
  )
}

export default ContactBreadcrumb
