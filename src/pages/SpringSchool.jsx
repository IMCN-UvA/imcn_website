import React from 'react'

function SpringSchool() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 dark:text-white transition-colors duration-300">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-900 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 py-16">
          <div className="text-center space-y-8">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-tight">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                Model-Based Neuroscience and Cognition
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-900 dark:text-gray-300 font-bold leading-relaxed max-w-3xl mx-auto">
              Spring School 2026
            </p>
          </div>
        </div>
      </section>

      {/* Coming Soon Section */}
      <section className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-900 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-12 text-center transition-colors duration-300">
              {/* Icon */}
              <div className="mb-8">
                <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto">
                  <svg
                    className="w-12 h-12 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
              </div>

              {/* Main Message */}
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                Details to be Announced Soon
              </h2>

              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                We're excited to bring you the inaugural Spring School in 2027!
                Program details, registration information, and schedule will be
                available soon.
              </p>

              {/* Additional Info */}
              <div className="border-t border-gray-200 dark:border-gray-700 pt-8 mt-8">
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  <strong className="text-gray-900 dark:text-white">
                    What we know so far:
                  </strong>
                </p>
                <div className="space-y-3 text-left max-w-2xl mx-auto">
                  <div className="flex items-start gap-3">
                    <svg
                      className="w-6 h-6 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-0.5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <p className="text-gray-700 dark:text-gray-300">
                      <strong>When:</strong> Spring 2026 (exact dates TBA)
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <svg
                      className="w-6 h-6 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-0.5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <p className="text-gray-700 dark:text-gray-300">
                      <strong>Where:</strong> University of Amsterdam
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <svg
                      className="w-6 h-6 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-0.5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <p className="text-gray-700 dark:text-gray-300">
                      <strong>Focus:</strong> Model-based approaches to
                      neuroscience and cognition
                    </p>
                  </div>
                </div>
              </div>

              {/* Call to Action */}
              <div className="mt-10 pt-8 border-t border-gray-200 dark:border-gray-700">
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  Check back soon for updates or visit our{' '}
                  <a
                    href="/summer-school"
                    className="text-blue-600 dark:text-blue-400 hover:underline font-semibold"
                  >
                    Summer School page
                  </a>{' '}
                  to learn more about our programs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default SpringSchool
