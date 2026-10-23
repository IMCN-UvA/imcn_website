import { Link } from 'react-router-dom'

const baseClass =
  'inline-flex items-center justify-center px-4 py-2 bg-gradient-to-r text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 text-sm'

const gradients = {
  team: 'from-blue-500 to-teal-500 hover:from-blue-600 hover:to-teal-600',
  leadership:
    'from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700',
}
const ArrowIcon = () => (
  <svg
    className="ml-2 w-4 h-4 flex-shrink-0"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M9 5l7 7-7 7"
    />
  </svg>
)

const ExternalIcon = () => (
  <svg
    className="ml-2 w-4 h-4 flex-shrink-0"
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

const LinkButton = ({ label, url, variant = 'team' }) => {
  const buttonClass = `${baseClass} ${gradients[variant]}`
  if (url.startsWith('/')) {
    return (
      <Link to={url} className={buttonClass}>
        <span className="truncate">{label}</span>
        <ArrowIcon />
      </Link>
    )
  }

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={buttonClass}
    >
      <span className="truncate">{label}</span>
      <ExternalIcon />
    </a>
  )
}

export default LinkButton
