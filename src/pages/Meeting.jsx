import React from 'react'
import { Link } from 'react-router-dom'

function Meeting() {
  return (
    <div className="min-h-screen flex items-start justify-center bg-gradient-to-br from-gray-900 via-blue-900 to-black dark:from-gray-900 dark:via-blue-900 dark:to-black bg-gray-50 overflow-hidden p-6 pt-12">
      <div className="bg-white dark:bg-gray-800 shadow-xl rounded-2xl p-8 max-w-5xl w-full text-gray-900 dark:text-white">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white leading-tight mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              Model-Based Neuroscience & Cognition
            </span>
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Choose your program
          </p>
        </div>

        {/* School Selection Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Summer School Card */}
          <Link to="/summer-school" className="block h-full">
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 transition-all duration-300 hover:shadow-xl hover:scale-105 border-t-4 border-purple-500 h-full flex flex-col cursor-pointer">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                    />
                  </svg>
                </div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                  Summer School
                </h2>
              </div>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4 flex-grow">
                Join our intensive summer program featuring advanced training in
                cognitive modeling and neuroscience methods.
              </p>
              <div className="pt-4 border-t border-gray-200 dark:border-gray-700 mt-auto">
                <p className="text-sm text-gray-500 dark:text-gray-400 font-medium mb-2">
                  12th Annual Program
                </p>
                <p className="text-sm text-blue-600 dark:text-blue-400 font-semibold">
                  Learn more →
                </p>
              </div>
            </div>
          </Link>

          {/* Spring School Card */}
          <Link to="/spring-school" className="block h-full">
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 transition-all duration-300 hover:shadow-xl hover:scale-105 border-t-4 border-purple-500 h-full flex flex-col cursor-pointer">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
                    />
                  </svg>
                </div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                  Spring School
                </h2>
              </div>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4 flex-grow">
                Explore our inaugural spring program with specialized training
                in model-based approaches to neuroscience and cognition.
              </p>
              <div className="pt-4 border-t border-gray-200 dark:border-gray-700 mt-auto">
                <p className="text-sm text-gray-500 dark:text-gray-400 font-medium mb-2">
                  1st Annual Program - Spring 2027
                </p>
                <p className="text-sm text-blue-600 dark:text-blue-400 font-semibold">
                  Learn more →
                </p>
              </div>
            </div>
          </Link>
        </div>

        {/* Additional Info */}
        <div className="mt-12 text-center">
          <p className="text-gray-600 dark:text-gray-300 text-sm">
            Hosted by the{' '}
            <span className="font-semibold">University of Amsterdam</span>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Meeting
