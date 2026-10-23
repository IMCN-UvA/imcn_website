import React from 'react'
import { Brain, Code, Activity, Clock, Utensils } from 'lucide-react'

const days = [
  {
    label: 'Day 1',
    date: 'Tuesday, April 20',
    theme: 'Neuroanatomy',
    icon: Brain,
    gradient: 'from-purple-600 to-indigo-600',
    blocks: [
      {
        time: '9:30 – 12:00',
        entries: [
          { type: 'Welcome', title: 'Welcome and introduction' },
          {
            type: 'Lecture',
            speakers: 'Anneke Alkemade, Birte Forstmann',
            title:
              'Lectures on human subcortical and cortical neuroanatomy relevant to high-resolution MRI',
          },
        ],
      },
      { time: '12:00 – 13:30', isBreak: true, title: 'Lunch' },
      {
        time: '13:30 – 16:00',
        entries: [
          {
            type: 'Practical',
            title:
              'Practical anatomy sessions: identifying structures on ultra-high-field MRI scans',
          },
        ],
      },
      {
        time: '16:00 – 17:00',
        entries: [{ type: 'Q&A', title: 'Revision and Q&A' }],
      },
    ],
  },
  {
    label: 'Day 2',
    date: 'Wednesday, April 21',
    theme: 'Open-source toolboxes',
    icon: Code,
    gradient: 'from-blue-500 to-purple-600',
    blocks: [
      {
        time: '9:30 – 12:00',
        entries: [
          {
            type: 'Lecture',
            speakers: 'Pierre-Louis Bazin',
            title:
              'Open toolbox development and use, based on the high-resolution neuroimaging toolboxes developed (e.g., Nighres), and their role in open, reproducible pipelines',
          },
          {
            type: 'Keynote',
            speakers: 'Evgeniya Kirilina',
            title: 'Quantitative MRI and open science toolboxes',
          },
        ],
      },
      { time: '12:00 – 13:30', isBreak: true, title: 'Lunch' },
      {
        time: '13:30 – 16:00',
        entries: [
          {
            type: 'Practical',
            title:
              'Hands-on practicals: installing and applying the toolboxes to example datasets',
          },
        ],
      },
      {
        time: '16:00 – 17:00',
        entries: [{ type: 'Q&A', title: 'Revision and Q&A' }],
      },
    ],
  },
  {
    label: 'Day 3',
    date: 'Thursday, April 22',
    theme: 'Joint modelling of brain and behaviour',
    icon: Activity,
    gradient: 'from-teal-500 to-blue-600',
    blocks: [
      {
        time: '9:30 – 12:00',
        entries: [
          {
            type: 'Lecture',
            speakers: 'Steven Miletić, Birte Forstmann',
            title:
              'Joint modelling approaches linking neuroimaging and behavioural/cognitive data',
          },
        ],
      },
      { time: '12:00 – 13:30', isBreak: true, title: 'Lunch' },
      {
        time: '13:30 – 16:00',
        entries: [
          {
            type: 'Practical',
            title:
              'Practical modelling session: fitting joint models to example brain-behaviour datasets',
          },
        ],
      },
      {
        time: '16:00 – 17:00',
        entries: [{ type: 'Closing', title: 'Closing remarks' }],
      },
    ],
  },
]

const typeStyles = {
  Lecture:
    'bg-purple-100 text-purple-700 dark:bg-purple-900/40 dark:text-purple-300',
  Keynote: 'bg-pink-100 text-pink-700 dark:bg-pink-900/40 dark:text-pink-300',
  Practical: 'bg-teal-100 text-teal-700 dark:bg-teal-900/40 dark:text-teal-300',
  'Q&A': 'bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300',
  Welcome: 'bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-200',
  Closing: 'bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-200',
}

const cardClass =
  'bg-white dark:bg-gray-800 rounded-2xl shadow-md border border-gray-200 dark:border-gray-700 transition-colors duration-300'

const Block = ({ block }) => (
  <li className="py-4 first:pt-0 last:pb-0 flex flex-col sm:flex-row sm:gap-6">
    <div className="sm:w-36 flex-shrink-0 flex items-center sm:items-start gap-2 text-sm font-semibold text-gray-900 dark:text-white mb-2 sm:mb-0 sm:pt-0.5">
      <Clock className="w-4 h-4 text-gray-400 flex-shrink-0 sm:mt-0.5" />
      <span className="whitespace-nowrap">{block.time}</span>
    </div>

    {block.isBreak ? (
      <p className="flex items-center gap-2 italic text-gray-500 dark:text-gray-400">
        <Utensils className="w-4 h-4 flex-shrink-0" />
        {block.title}
      </p>
    ) : (
      <div className="flex-1 space-y-4">
        {block.entries.map((entry) => (
          <div key={entry.title}>
            {(entry.type || entry.speakers) && (
              <div className="flex flex-wrap items-center gap-2 mb-1">
                {entry.type && (
                  <span
                    className={`px-2.5 py-0.5 rounded-full text-xs font-bold uppercase tracking-wide ${
                      typeStyles[entry.type] || typeStyles.Welcome
                    }`}
                  >
                    {entry.type}
                  </span>
                )}
                {entry.speakers && (
                  <span className="text-sm font-semibold text-gray-900 dark:text-white">
                    {entry.speakers}
                  </span>
                )}
              </div>
            )}
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              {entry.title}
            </p>
          </div>
        ))}
      </div>
    )}
  </li>
)

const DayCard = ({ day }) => {
  const Icon = day.icon

  return (
    <article className={`overflow-hidden ${cardClass}`}>
      <header
        className={`bg-gradient-to-r ${day.gradient} px-6 sm:px-8 py-5 text-white flex items-center gap-4`}
      >
        <div className="w-11 h-11 rounded-lg bg-white/20 flex items-center justify-center flex-shrink-0">
          <Icon className="w-6 h-6 text-white" />
        </div>
        <div>
          <p className="text-sm font-semibold uppercase tracking-wider text-white/80">
            {day.label}
            {day.date && ` · ${day.date}`}
          </p>
          <h3 className="text-xl sm:text-2xl font-bold">{day.theme}</h3>
        </div>
      </header>

      <ol className="p-6 sm:p-8 divide-y divide-gray-200 dark:divide-gray-700">
        {day.blocks.map((block) => (
          <Block key={block.time} block={block} />
        ))}
      </ol>
    </article>
  )
}

function Program() {
  return (
    <section className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-900 transition-colors duration-300">
      <div className="max-w-5xl mx-auto px-4 pt-8 pb-12 lg:pb-16">
        <h2 className="text-3xl sm:text-4xl font-bold leading-tight text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 mb-8 lg:mb-10">
          Provisional Program
        </h2>

        <div className="space-y-8">
          {days.map((day) => (
            <DayCard key={day.label} day={day} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Program
