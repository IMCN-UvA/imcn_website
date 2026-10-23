import React from 'react'
import {
  Brain,
  Code,
  Activity,
  Calendar,
  MapPin,
  Clock,
  Euro,
  GraduationCap,
  Users,
} from 'lucide-react'

const eventDetails = [
  { icon: Calendar, label: 'Dates', value: 'April 20 – April 22, 2027' },
  { icon: MapPin, label: 'Location', value: 'University of Amsterdam' },
  { icon: Clock, label: 'Application deadline', value: '1st of March 2027' },
  {
    icon: Euro,
    label: 'Costs',
    value:
      '€200 (includes registration, snacks and coffee/tea; lunch is not included)',
  },
]

const tracks = [
  {
    icon: Brain,
    title: 'Neuroanatomy',
    description:
      'Subcortical and cortical anatomy relevant to high-resolution MRI, including identification of structures on ultra-high-field scans.',
    accent: 'border-purple-500',
    iconBg: 'from-purple-500 to-indigo-600',
  },
  {
    icon: Code,
    title: 'Open-source toolboxes',
    description:
      'Covering the development and use of open tools for high-resolution neuroimaging (e.g., Nighres), with applications to example datasets.',
    accent: 'border-blue-500',
    iconBg: 'from-blue-500 to-purple-600',
  },
  {
    icon: Activity,
    title: 'Joint modelling of brain and behaviour',
    description:
      'Linking neuroimaging and behavioural data and fitting joint models to example datasets.',
    accent: 'border-teal-500',
    iconBg: 'from-teal-500 to-blue-600',
  },
]

const instructors = [
  'Birte Forstmann',
  'Anneke Alkemade',
  'Pierre-Louis Bazin',
  'Steven Miletić',
  'Evgeniya Kirilina',
]

const organizers = [
  { name: 'Birte Forstmann', affiliation: 'University of Amsterdam, NL' },
  { name: 'Steven Miletić', affiliation: 'Leiden University, NL' },
  { name: 'Anneke Alkemade', affiliation: 'University of Amsterdam, NL' },
]

const cardClass =
  'bg-white dark:bg-gray-800 rounded-2xl shadow-md border border-gray-200 dark:border-gray-700 transition-colors duration-300'

const SectionTitle = ({ children, as: Tag = 'h2', className = '' }) => (
  <Tag
    className={`font-bold leading-tight text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 ${className}`}
  >
    {children}
  </Tag>
)

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

function Overview() {
  return (
    <section className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-900 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 pt-8 pb-12 lg:pb-16 space-y-10 lg:space-y-12">
        {/* Welcome + Event Details */}
        <div
          className={`grid grid-cols-1 lg:grid-cols-5 overflow-hidden ${cardClass}`}
        >
          <div className="lg:col-span-3 p-6 sm:p-8 lg:p-10 flex flex-col justify-center text-center lg:text-left">
            <h2 className="text-3xl sm:text-4xl font-bold leading-tight text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 mb-4">
              Welcome
            </h2>
            <div className="space-y-4">
              <p className="text-lg lg:text-xl text-gray-700 dark:text-gray-200 leading-relaxed">
                The 1st Model-Based Cognition and Neuroscience Spring School,
                hosted by the University of Amsterdam, will be held in spring
                2027!
              </p>
              <p className="text-base lg:text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                The University of Amsterdam will host the 1st annual Model-Based
                Cognition and Neuroscience Spring School: From Neuroanatomy to
                Joint Modelling of Brain and Behaviour.
              </p>
            </div>
          </div>

          <div className="lg:col-span-2 p-6 sm:p-8 bg-gray-50 dark:bg-gray-900/40 border-t lg:border-t-0 lg:border-l border-gray-200 dark:border-gray-700">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
              Event Details
            </h3>
            <dl className="divide-y divide-gray-200 dark:divide-gray-700">
              {eventDetails.map(({ icon: Icon, label, value }) => (
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

        {/* Program Overview */}
        <div className={`p-6 sm:p-10 lg:p-12 ${cardClass}`}>
          <SectionTitle as="h2" className="text-3xl sm:text-4xl mb-6">
            Program Overview
          </SectionTitle>
          <p className="max-w-3xl mx-auto text-center text-base lg:text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-10">
            The Spring School programme combines three areas: neuroanatomy,
            open-source toolboxes for processing high-resolution neuroimaging
            data, and joint modelling of brain and behaviour. These areas
            support work with ultra-high-field (7T) MRI and modern computational
            pipelines, enabling detailed, individual-level analysis of brain
            anatomy and the link between neural and behavioural measures. Each
            day combines lectures with hands-on practical sessions. Participants
            are guided through and instructed on the following:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {tracks.map(
              ({ icon: Icon, title, description, accent, iconBg }, index) => (
                <div
                  key={title}
                  className={`relative bg-gray-50 dark:bg-gray-900/40 rounded-xl p-6 border-t-4 ${accent} shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col`}
                >
                  <div className="flex items-center justify-between mb-4">
                    <div
                      className={`w-12 h-12 rounded-lg bg-gradient-to-br ${iconBg} flex items-center justify-center`}
                    >
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <span className="text-3xl font-bold text-gray-200 dark:text-gray-700">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                  </div>
                  <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                    {title}
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    {description}
                  </p>
                </div>
              ),
            )}
          </div>
        </div>

        {/* Instructors + Who Should Attend */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className={`p-6 ${cardClass}`}>
            <CardTitle icon={GraduationCap}>Expert Instructors</CardTitle>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Lectures from leading experts including:
            </p>
            <ul className="flex flex-wrap gap-2">
              {instructors.map((name) => (
                <li
                  key={name}
                  className="px-3 py-1 rounded-full text-sm font-semibold bg-purple-100 text-purple-700 dark:bg-purple-900/40 dark:text-purple-300"
                >
                  {name}
                </li>
              ))}
            </ul>
          </div>

          <div className={`p-6 ${cardClass}`}>
            <CardTitle icon={Users}>Who Should Attend?</CardTitle>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              The Spring School is aimed at PhD students and early-career
              postdocs in cognitive, clinical and computational neuroscience who
              want to work with high-resolution neuroimaging data and link it to
              behaviour.
            </p>
          </div>
        </div>

        {/* Organization */}
        <div>
          <SectionTitle className="text-3xl sm:text-4xl mb-8">
            Organization
          </SectionTitle>
          <ul
            className={`max-w-4xl mx-auto p-6 grid grid-cols-1 sm:grid-cols-3 gap-6 text-center ${cardClass}`}
          >
            {organizers.map(({ name, affiliation }) => (
              <li key={name}>
                <p className="font-semibold text-gray-900 dark:text-white">
                  {name}
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {affiliation}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Overview
