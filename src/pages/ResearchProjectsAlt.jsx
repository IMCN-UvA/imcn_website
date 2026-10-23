import React from 'react'
import PageHeader from '../components/PageHeader'

const accents = ['from-purple-600 to-blue-600', 'from-blue-500 to-teal-500']

const statusColors = {
  Ongoing: 'bg-green-400',
  Completed: 'bg-blue-300',
  Upcoming: 'bg-yellow-400',
}

const formatNumber = (index) => String(index + 1).padStart(2, '0')

const StatusBadge = ({ status }) =>
  status ? (
    <span
      className={`${
        statusColors[status] || 'bg-gray-200'
      } text-gray-900 px-3 py-1 rounded-full text-xs font-bold uppercase whitespace-nowrap`}
    >
      {status}
    </span>
  ) : null

const ExternalIcon = () => (
  <svg
    className="w-3 h-3 flex-shrink-0"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
    />
  </svg>
)

const PaperLink = ({ url, label }) => (
  <a
    href={url}
    target="_blank"
    rel="noopener noreferrer"
    className="inline-flex items-center gap-1 font-semibold text-purple-600 dark:text-purple-400 hover:underline whitespace-nowrap"
  >
    {label || 'View paper'}
    <ExternalIcon />
  </a>
)

const Reference = ({ paper }) => {
  if (paper.text) {
    return (
      <p>
        {paper.text}
        {paper.url && (
          <>
            {' '}
            <PaperLink url={paper.url} label={paper.label} />
          </>
        )}
      </p>
    )
  }

  const authors = [].concat(paper.authors || []).join(', ')

  return (
    <div className="space-y-1">
      {paper.title && (
        <p className="font-semibold text-gray-800 dark:text-gray-200">
          {paper.title}
        </p>
      )}
      {authors && <p>{authors}</p>}
      {(paper.journal || paper.year || paper.url) && (
        <p className="flex flex-wrap items-center gap-x-3 gap-y-1">
          {(paper.journal || paper.year) && (
            <span className="text-gray-500 dark:text-gray-400">
              {paper.journal && <span className="italic">{paper.journal}</span>}
              {paper.journal && paper.year && ' · '}
              {paper.year}
            </span>
          )}
          {paper.url && <PaperLink url={paper.url} label={paper.label} />}
        </p>
      )}
    </div>
  )
}

const References = ({ references }) => (
  <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
    <h4 className="text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-4">
      Related publications
    </h4>
    <ol className="list-decimal pl-5 space-y-4 text-sm text-gray-600 dark:text-gray-400 marker:text-gray-400 marker:font-semibold">
      {references.map((paper, i) => (
        <li key={i} className="pl-1 leading-relaxed">
          <Reference paper={paper} />
        </li>
      ))}
    </ol>
  </div>
)

const ProjectCard = ({ project, index }) => {
  const [lead, ...rest] = [].concat(project.description)
  const references = (project.references || []).map((ref) =>
    typeof ref === 'string' ? { text: ref } : ref,
  )

  return (
    <article className="relative group bg-white dark:bg-gray-800 rounded-3xl shadow-xl hover:shadow-2xl transition-shadow duration-300 overflow-hidden border border-gray-200 dark:border-gray-700">
      <header
        className={`bg-gradient-to-r ${
          accents[index % accents.length]
        } px-8 py-6 lg:px-10 text-white flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4`}
      >
        <div>
          {/* <p className="text-sm font-bold tracking-widest text-white/70 mb-1">
            {formatNumber(index)}
          </p> */}
          <h4 className="text-2xl md:text-3xl font-bold">{project.title}</h4>
          {project.subtitle && (
            <p className="mt-1 text-white/90 font-semibold uppercase tracking-wider text-sm">
              {project.subtitle}
            </p>
          )}
        </div>
        <StatusBadge status={project.status} />
      </header>

      <div className="p-8 lg:p-10">
        <div className="space-y-4 leading-relaxed">
          <p className="text-lg text-gray-700 dark:text-gray-200">{lead}</p>
          {rest.map((text, i) => (
            <p key={i} className="text-gray-600 dark:text-gray-300">
              {text}
            </p>
          ))}
        </div>

        {references.length > 0 && <References references={references} />}
      </div>

      <div
        className={`absolute bottom-0 left-0 h-1 w-full bg-gradient-to-r ${
          accents[index % accents.length]
        } transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left`}
      ></div>
    </article>
  )
}

const ResearchProjects = () => {
  const projects = [
    {
      id: 1,
      title:
        "What does Alzheimer's disease look like in the MRI and under the microscope?",
      subtitle: 'contact: j.m.alkemade@uva.nl',
      status: 'Ongoing',
      description: [
        'MRI is the leading modality in human brain imaging in vivo, and researchers from the field of clinical neuroscience use MRI to visualize brain neuropathological alterations including Alzheimer associated pathology. How much of the neuropathology that exists can we see on MRI? How is it distributed across the brain and across hemispheres? The goal of this project is to investigate what the most common procedures are, and how the field of neuroanatomy can contribute by providing an anatomical ground truth.',
        "You  will work on existing 3D reconstructions of whole brain neuroanatomy of brain donors with Alzheimer's disease. These studies will help us provide insight in the validity of images produced using advanced MRI scanning.",
        'Your work will consist of getting acquainted in detail with the human (subcortical) brain anatomy. You will create digital 3D accounts of various deep brain structures, and compare these data to observations across the adult lifespan.',
      ],
    },
    {
      id: 2,
      title: 'Can we trust what we see on brain MRI?',
      subtitle: 'contact: j.m.alkemade@uva.nl',
      status: 'Ongoing',
      description: [
        'MRI is the leading modality in human brain imaging in vivo. A major question is whether observations in MRI fully reflect the underlying shape and structure of the brain. This we will investigate using the reconstructions of post mortem brains of non-demented controls, which we will compare to in vivo results obtained using Ultra high field structural MRI. We are looking for students with an interest in human neuroanatomy to join our team.',
        'You will work on existing 3D reconstructions of whole brain neuroanatomy of brain donors without any neurodegenerative disease. These studies will help us provide insight in the validity of images produced using advanced MRI scanning.',
        'Your work will consist of getting acquainted in detail with the human (subcortical) brain anatomy. You will create digital 3D accounts of various deep brain structures, and compare these data to observations across the adult lifespan',
      ],
      references: [
        {
          title:
            'A unified 3D map of microscopic architecture and MRI of the human brain,',
          authors: [
            'A Alkemade',
            'P-L Bazin',
            'R Balesar',
            'K Pine',
            'E Kirilina',
            'HE Möller',
            'R Trampel',
            'JM Kros',
            'MC Keuken',
            'RLAW Bleijs',
            'DF Swaab',
            'A Herrler',
            'N Weiskopf',
            'BU Forstmann',
          ],
          journal: 'Science advances 8 (17),',
          year: 2022,
          url: 'https://doi.org/10.xxxx/xxxxx',
          label: 'DOI',
        },
        {
          title:
            'Automated parcellation and atlasing of the human subcortex with ultra-high resolution quantitative MRI.',
          authors: [
            'P-L Bazin',
            'JM Groot',
            'L Groenewegen',
            'AC Trutti',
            'S Miletic',
            'MJM Mulder',
            'BU Forstmann',
            'A Alkemade',
          ],
          journal: 'Imaging Neuroscience',
          year: 2025,
          url: 'https://doi.org/10.xxxx/xxxxx',
          label: 'DOI',
        },
        {
          title:
            'Charting human subcortical morphometry across the adult lifespan with in vivo 7 Tesla MRI',
          authors: [
            'S Miletic',
            'P-L Bazin',
            'SJS Isherwood',
            'MC keuken',
            'BU Forstmann',
            'A Alkemade',
          ],
          journal: 'Imaging Neuroscience',
          year: 2025,
          url: 'https://doi.org/10.xxxx/xxxxx',
          label: 'DOI',
        },
      ],
    },
    {
      id: 3,
      title: 'Reconstructing brain structures in 3D',
      subtitle: 'Short one-line summary',
      status: 'Ongoing',
      description: [
        'The human hypothalamus consists of approximately 20 individual nuclei that are currently beyond the reach of advanced MRI studies as a result of their close proximity and their small size. An important step towards the study of the hypothalamus using MRI is the creation of a 3D reconstruction that can form the basis for the creation of a probabilistic atlas of this deep brain structure.',
        'The goal of this project is to create these 3D reconstructions. This will be done using existing whole-brain 3D reconstructions. These studies will help us provide insight in the validity of images produced using advanced MRI scanning.',
        'Your work will consist of getting acquainted in detail with the human hypothalamic anatomy. You will create digital 3D accounts of structures involved in stress responses, feeding behavior etc. You will use the created reconstructions to provide insight on whether individual hypothalamic structures can be reliably targeted in vivo.',
      ],
      references: [
        {
          title:
            'A unified 3D map of microscopic architecture and MRI of the human brain,',
          authors: [
            'A Alkemade',
            'P-L Bazin',
            'E Kirilina',
            'A Herrler',
            'RLAW Bleys',
            'JM Kros',
            'L Groenewegen',
            'SMM Vermorgen',
            'L Jonkman',
            'DF Swaab',
            'R Balesar',
            'N Weiskopf',
            'BU Forstmann',
          ],
          journal: 'Science advances 8 (17),',
          year: 2022,
          url: 'https://doi.org/10.xxxx/xxxxx',
          label: 'DOI',
        },
        {
          title:
            'Mixed methodology in brain research: Integrating  MRI and Histology,',
          authors: ['A Alkemade', 'R Grossmann,', 'P-L Bazin', 'BU Forstmann'],
          journal: 'Imaging Neuroscience',
          year: 2025,
          url: 'https://doi.org/10.xxxx/xxxxx',
          label: 'DOI',
        },
        {
          title:
            'A unified 3D map of microscopic architecture and MRI of the human brain,',
          authors: [
            'A Alkemade',
            'P-L Bazin',
            'R Balesar',
            'K Pine',
            'E Kirilina',
            'HE Möller',
            'R Trampel',
            'JM Kros',
            'MC Keuken',
            'RLAW Bleijs',
            'DF Swaab',
            'A Herrler',
            'N Weiskopf',
            'BU Forstmann',
          ],
          journal: 'Science advances 8 (17),',
          year: 2022,
          url: 'https://doi.org/10.xxxx/xxxxx',
          label: 'DOI',
        },
      ],
    },
    {
      id: 4,
      title:
        'What do very small connections between the left and right brain hemisphere do?',
      subtitle: 'Short one-line summary',
      status: 'Ongoing',
      description: [
        'The interthalamic adhesion or massa intermedia, is a grey matter structure that connects the medial surfaces of the left and right hemisphere across the third ventricle. Reports of it presence vary, and it is only present in a minority of people. The exact function is unknown, but it may contribute to thalamic communication.',
        'The goal of this project will be to determine the occurrence as well as volume measures of the interthalamic adhesion, and to determine sex and age differences in the volume of the structure.',
        'Your work will consist of the analyses of existing 7Tesla MRI data. You will get aquainted with the structure of the thalamus, and the location and appearance of the interthalamic adhesion.',
      ],
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-gray-900 dark:to-gray-800">
      <div className="mx-auto">
        <PageHeader heading="Research Projects" />

        <div className="flex items-center justify-center my-6 max-w-7xl mx-auto px-4">
          {/* <div className="flex-grow h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-600 to-transparent"></div> */}
        </div>

        <div className="max-w-7xl mx-auto px-4 mb-16 space-y-10">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default ResearchProjects