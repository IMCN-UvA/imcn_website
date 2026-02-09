import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  Mail,
  Phone,
  MapPin,
  GraduationCap,
  BookOpen,
  ChevronDown,
  ChevronUp,
} from 'lucide-react'

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })

  const [showResearch, setShowResearch] = useState(true)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null) // 'success' or 'error'

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus(null)

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          access_key: '5efe001f-805e-4e0b-ae06-964b7592ffd8', 
          name: formData.name,
          email: formData.email,
          message: formData.message,
          subject: `New Contact Form Message from ${formData.name}`,
          from_name: 'IMBNC Website Contact Form',
          replyto: formData.email,
        }),
      })

      const result = await response.json()

      if (result.success) {
        setSubmitStatus('success')
        setFormData({ name: '', email: '', message: '' })

        // Auto-hide success message after 5 seconds
        setTimeout(() => setSubmitStatus(null), 5000)
      } else {
        setSubmitStatus('error')
      }
    } catch (error) {
      console.error('Form submission error:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen flex items-start justify-center bg-gradient-to-br from-gray-900 via-blue-900 to-black dark:from-gray-900 dark:via-blue-900 dark:to-black bg-gray-50 overflow-hidden p-6 pt-12">
      <div className="bg-white dark:bg-gray-800 shadow-xl rounded-2xl p-8 max-w-5xl w-full text-gray-900 dark:text-white">
        {/* Research Opportunities - Collapsible Banner */}
        <div className="mb-8 bg-gradient-to-r from-blue-100 to-blue-50 dark:from-blue-900 dark:to-blue-800 rounded-xl p-6 border border-blue-200 dark:border-blue-600/30">
          <button
            onClick={() => setShowResearch(!showResearch)}
            className="w-full flex items-center justify-between text-left hover:opacity-80 transition-opacity"
          >
            <div className="flex items-center gap-3">
              <GraduationCap
                className="text-blue-600 dark:text-blue-300"
                size={32}
              />
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                Research Opportunities for Students
              </h2>
            </div>
            {showResearch ? (
              <ChevronUp
                size={28}
                className="text-gray-700 dark:text-gray-200"
              />
            ) : (
              <ChevronDown
                size={28}
                className="text-gray-700 dark:text-gray-200"
              />
            )}
          </button>

          {showResearch && (
            <div className="mt-6 pt-6 border-t border-blue-200 dark:border-blue-600/30 space-y-6">
              <p className="text-gray-700 dark:text-gray-100 leading-relaxed text-xl font-bold">
                We are always looking for motivated Master's students interested
                in contributing to our scientific projects or writing a
                literature thesis. Check our recent publications to learn about
                our current work.
              </p>

              <div className="grid md:grid-cols-3 gap-4">
                <Link to="/team" className="block h-full">
                  <div className="bg-white dark:bg-blue-800/50 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow border border-blue-200 dark:border-blue-600/30 text-center cursor-pointer group h-full flex flex-col justify-between min-h-[160px]">
                    <div>
                      <BookOpen
                        className="text-blue-600 dark:text-blue-300 mx-auto mb-3 group-hover:scale-110 transition-transform"
                        size={32}
                      />
                      <h3 className="font-semibold text-lg mb-2 text-gray-900 dark:text-white">
                        Anatomy
                      </h3>
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      with Anneke Alkemade
                    </p>
                  </div>
                </Link>

                <Link to="/team" className="block h-full">
                  <div className="bg-white dark:bg-blue-800/50 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow border border-blue-200 dark:border-blue-600/30 text-center cursor-pointer group h-full flex flex-col justify-between min-h-[160px]">
                    <div>
                      <BookOpen
                        className="text-blue-600 dark:text-blue-300 mx-auto mb-3 group-hover:scale-110 transition-transform"
                        size={32}
                      />
                      <h3 className="font-semibold text-lg mb-2 text-gray-900 dark:text-white">
                        MRI Research
                      </h3>
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      Low-field or ultra-high field with Birte Forstmann
                    </p>
                  </div>
                </Link>

                <Link to="/team" className="block h-full">
                  <div className="bg-white dark:bg-blue-800/50 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow border border-blue-200 dark:border-blue-600/30 text-center cursor-pointer group h-full flex flex-col justify-between min-h-[160px]">
                    <div>
                      <BookOpen
                        className="text-blue-600 dark:text-blue-300 mx-auto mb-3 group-hover:scale-110 transition-transform"
                        size={32}
                      />
                      <h3 className="font-semibold text-lg mb-2 text-gray-900 dark:text-white">
                        Cognitive Modelling
                      </h3>
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      with Steven Miletić
                    </p>
                  </div>
                </Link>
              </div>

              <div className="bg-blue-50 dark:bg-blue-950/50 rounded-lg p-5 border-l-4 border-blue-500">
                <p className="text-gray-700 dark:text-gray-200 mb-2 text-sm">
                  <strong className="text-blue-700 dark:text-blue-300">
                    To Apply:
                  </strong>{' '}
                  Send us an email with your experience and project interests.
                </p>
                <p className="text-xs text-gray-600 dark:text-gray-300 italic">
                  Note: Positions are limited. Students from our teaching
                  programs receive preference.
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Contact Section */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Left side - Contact Info */}
          <div>
            <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
              Get in Touch
            </h2>
            <div className="space-y-5 text-gray-700 dark:text-gray-200">
              <div className="flex items-start gap-3">
                <MapPin
                  className="text-blue-600 dark:text-blue-400 mt-1 flex-shrink-0"
                  size={22}
                />
                <p>
                  University of Amsterdam, Nieuwe Achtergracht 129B | Room G0.13
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Mail
                  className="text-blue-600 dark:text-blue-400 flex-shrink-0"
                  size={22}
                />
                <p>buforstmann@gmail.com</p>
              </div>
            </div>
          </div>

          {/* Right side - Contact Form */}
          <div>
            <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
              Send us a Message
            </h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-900 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-shadow"
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-900 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-shadow"
              />
              <textarea
                name="message"
                placeholder="Your Message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-900 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-shadow"
              ></textarea>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed text-white p-3 rounded-lg font-semibold transition-colors shadow-md hover:shadow-lg"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>

              {/* Success/Error Messages */}
              {submitStatus === 'success' && (
                <div className="mt-4 p-4 bg-green-100 dark:bg-green-900/30 border border-green-400 dark:border-green-600 text-green-800 dark:text-green-200 rounded-lg">
                  ✅ Message sent successfully! We'll get back to you soon.
                </div>
              )}
              {submitStatus === 'error' && (
                <div className="mt-4 p-4 bg-red-100 dark:bg-red-900/30 border border-red-400 dark:border-red-600 text-red-800 dark:text-red-200 rounded-lg">
                  ❌ Failed to send message. Please try again or email us
                  directly.
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
