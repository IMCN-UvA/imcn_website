import React from 'react'
import {
  FileText,
  Send,
  Mail,
  Euro,
  Clock,
  Target,
  Home,
  Check,
} from 'lucide-react'

// Fill these in once available; empty values show a "coming soon" state instead of a broken link
const applicationFormUrl = ''
const contactEmail = ''

const details = [
  { icon: Euro, label: 'Registration fee', value: '€200' },
  { icon: Clock, label: 'Application deadline', value: '1st of March 2027' },
  {
    icon: Target,
    label: 'Selection',
    value: 'Based on the relevance of the Spring School to your work',
  },
  {
    icon: Home,
    label: 'Housing',
    value: 'Participants make their own housing arrangements',
  },
]

const statementItems = [
  'Your scientific background',
  'Relevant skills',
  'How you plan to use the knowledge from the Spring School in future research',
  'Which programming languages and software packages you typically use',
]

const cardClass =
  'bg-white dark:bg-gray-800 rounded-2xl shadow-md border border-gray-200 dark:border-gray-700 transition-colors duration-300'

const CardTitle = ({ icon: Icon, children }) => (
  <div className="flex items-center gap-3 mb-4">
    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center flex-shrink-0">
      <Icon className="w-5 h-5 text-white" />
    </div>
    <h3 className="text-xl font-bold text-gray-900 dark:text-white">
      {children}
    </h3>
  </div>
)

const Chip = ({ children }) => (
  <span className="px-3 py-1 rounded-full text-xs font-semibold bg-purple-100 text-purple-700 dark:bg-purple-900/40 dark:text-purple-300">
    {children}
  </span>
)

function Application() {
  return (
    <section className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-900 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 pt-8 pb-12 lg:pb-16 space-y-10 lg:space-y-12">
        {/* Intro */}
        <div>
          <h2 className="text-3xl sm:text-4xl font-bold leading-tight text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 mb-6">
            Application
          </h2>
          <p className="max-w-3xl mx-auto text-center text-base lg:text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
            Space is limited, therefore we ask applicants to provide a short
            statement of interest describing their research and how the Spring
            School relates to it. We will select participants based on the
            relevance of the Spring School to their work.
          </p>
        </div>

        {/* Statement of Interest + Details */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
          <div className={`lg:col-span-3 p-6 sm:p-8 ${cardClass}`}>
            <CardTitle icon={FileText}>Statement of Interest</CardTitle>

            <div className="flex flex-wrap gap-2 mb-5">
              <Chip>Max 150 words</Chip>
              <Chip>Aim for ~100 words</Chip>
            </div>

            <p className="text-gray-600 dark:text-gray-300 mb-3">
              Please describe:
            </p>
            <ul className="space-y-2 mb-6">
              {statementItems.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-gray-700 dark:text-gray-200"
                >
                  <span className="mt-0.5 w-5 h-5 rounded-full bg-teal-100 dark:bg-teal-900/40 flex items-center justify-center flex-shrink-0">
                    <Check className="w-3.5 h-3.5 text-teal-600 dark:text-teal-300" />
                  </span>
                  {item}
                </li>
              ))}
            </ul>

            <div className="rounded-xl bg-gray-50 dark:bg-gray-900/40 p-4 text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
              Participants should be familiar with general programming concepts.
              Familiarity with{' '}
              <strong className="text-gray-900 dark:text-white">Python</strong>{' '}
              and <strong className="text-gray-900 dark:text-white">R</strong>{' '}
              is particularly recommended.
            </div>
          </div>

          <div className={`lg:col-span-2 p-6 sm:p-8 ${cardClass}`}>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
              Application Details
            </h3>
            <dl className="divide-y divide-gray-200 dark:divide-gray-700">
              {details.map(({ icon: Icon, label, value }) => (
                <div
                  key={label}
                  className="flex gap-3 py-3 first:pt-0 last:pb-0"
                >
                  <Icon className="w-5 h-5 mt-0.5 text-purple-600 dark:text-purple-400 flex-shrink-0" />
                  <div>
                    <dt className="text-sm font-semibold text-gray-900 dark:text-white">
                      {label}
                    </dt>
                    <dd className="text-gray-600 dark:text-gray-300">
                      {value}
                    </dd>
                  </div>
                </div>
              ))}
            </dl>
          </div>
        </div>

        {/* Call to action */}
        <div className="rounded-2xl bg-gradient-to-r from-blue-600 to-purple-600 p-8 sm:p-10 text-white shadow-lg flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-lg bg-white/20 flex items-center justify-center flex-shrink-0">
              <Send className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-2xl font-bold">Ready to apply?</h3>
              <p className="text-white/90 mt-1">
                Fill in the application form before 1st of March 2027.
              </p>
            </div>
          </div>

          {applicationFormUrl ? (
            <a
              href={applicationFormUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-white text-purple-700 font-semibold px-8 py-3 rounded-lg hover:shadow-xl hover:scale-105 transition-all duration-300 whitespace-nowrap"
            >
              Apply now
            </a>
          ) : (
            <span className="inline-flex items-center justify-center bg-white/20 text-white font-semibold px-8 py-3 rounded-lg whitespace-nowrap cursor-not-allowed">
              Form opens soon
            </span>
          )}
        </div>

        {/* Help */}
        <div className={`max-w-2xl mx-auto p-6 text-center ${cardClass}`}>
          <Mail className="w-7 h-7 text-purple-600 dark:text-purple-400 mx-auto mb-3" />
          <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
            Need help?
          </h3>
          <p className="text-gray-600 dark:text-gray-300">
            If you experience any difficulties, please email us
            {contactEmail ? (
              <>
                {' '}
                at{' '}
                <a
                  href={`mailto:${contactEmail}`}
                  className="font-semibold text-purple-600 dark:text-purple-400 hover:underline break-all"
                >
                  {contactEmail}
                </a>
              </>
            ) : (
              '. The contact address will be published here soon.'
            )}
          </p>
        </div>
      </div>
    </section>
  )
}

export default Application
