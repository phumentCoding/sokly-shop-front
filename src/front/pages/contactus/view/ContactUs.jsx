import ContactBreadcrumb from "../components/ContactBreadcrumb"
import ContactHeader from "../components/ContactHeader"
import ContactInfo from "../components/ContactInfo"
import ContactForm from "../components/ContactForm"

const ContactUs = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <ContactBreadcrumb />
        <ContactHeader />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Column - Contact Information */}
          <div>
            <ContactInfo />
          </div>

          {/* Right Column - Contact Form */}
          <div>
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactUs
