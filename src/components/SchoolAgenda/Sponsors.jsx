import React from 'react'
import { asset } from '../../utils/assets'

// Logos live in public/images/sponsors/; url is optional
const sponsors = [
  {
    name: 'Open Science NL',
    logo: asset('/images/logos/OSNL.png'),
    url: 'https://www.openscience.nl',
  },
]

const SponsorLogo = ({ sponsor }) => (
  <img
    src={sponsor.logo}
    alt={sponsor.name}
    loading="lazy"
    className="max-h-16 max-w-full object-contain"
  />
)

const Sponsors = () => {
  if (sponsors.length === 0) return null

  return (
    <div>
      {/* <h2 className="text-3xl sm:text-4xl font-bold leading-tight text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 mb-8">
        Sponsors
      </h2> */}
      <p className="text-center text-sm font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-4">
        Supported by
      </p>

      <ul className="flex flex-wrap justify-center gap-4 sm:gap-6">
        {sponsors.map((sponsor) => (
          <li
            key={sponsor.name}
            className="w-56 sm:w-64 h-28 bg-white rounded-2xl shadow-md border border-gray-200 dark:border-gray-700"
          >
            {sponsor.url ? (
              <a
                href={sponsor.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={sponsor.name}
                className="w-full h-full p-4 flex items-center justify-center transition-transform duration-300 hover:scale-105"
              >
                <SponsorLogo sponsor={sponsor} />
              </a>
            ) : (
              <div className="w-full h-full p-4 flex items-center justify-center">
                <SponsorLogo sponsor={sponsor} />
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Sponsors
