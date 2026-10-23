import React from 'react'
import {
  Plane,
  TrainFront,
  MapPin,
  Phone,
  Mail,
  ExternalLink,
  AlertTriangle,
} from 'lucide-react'

const venue = {
  room: 'TBA',
  building: 'TBA',
  campus: 'Roeterseilandcampus (REC)',
  directions:
    'Take metro line 51, 53, or 54. Get off at Weesperplein and walk to Nieuwe Achtergracht 166.',
  url: 'https://www.uva.nl/locaties/roeterseiland/rec-e.html',
}

const hotels = [
  {
    name: 'Hotel Le Coin',
    distance: '15 min walk',
    address: 'Nieuwe Doelenstraat 5, 1012 CP Amsterdam',
    phone: '+31 20 524 6800',
    email: 'hotel@lecoin.nl',
  },
  {
    name: 'Eden Hotel Amsterdam',
    distance: '10 min walk',
    address: 'Amstel 144, 1017 AE Amsterdam',
    phone: '+31 20 530 78 78',
    email: 'info.edenhotel@edenhotels.nl',
  },
  {
    name: 'Hotel Arena',
    distance: '5 min walk',
    address: "'s-Gravesandestraat 51, 1092 AA Amsterdam",
    phone: '+31 20 850 24 00',
    email: 'reservations@hotelarena.nl',
    note: 'Hotel Arena is a hip place that organises loud parties until about 4 am. So unless you want to party along, this might not be the best choice.',
  },
  {
    name: 'Hotel Park Plantage',
    distance: '5 min walk',
    address: 'Plantage Middenlaan 26, 1018 DE Amsterdam',
    phone: '+31 20 623 57 83',
    email: 'info@hotelparkplantage.com',
  },
]

const hostels = [
  {
    name: 'Generator Amsterdam',
    address: 'Mauritskade 57, 1092 AD Amsterdam',
    phone: '+31 20 708 56 00',
    website: 'https://staygenerator.com/hostels/amsterdam',
  },
  {
    name: 'Stayokay Hostel',
    address: 'At various locations in Amsterdam',
    phone:
      '+31 20 624 68 32 (Amsterdam Stadsdoelen), +31 20 589 89 96 (Amsterdam Vondelpark), or +31 20 551 31 90 (Amsterdam Oost)',
    email:
      'stadsdoelen@stayokay.com, vondelpark@stayokay.com, or amsterdamoost@stayokay.com',
    website: 'https://www.stayokay.com',
  },
]

const cardClass =
  'bg-white dark:bg-gray-800 rounded-2xl shadow-md border border-gray-200 dark:border-gray-700 transition-colors duration-300'

const SectionTitle = ({ children, className = '' }) => (
  <h2
    className={`text-3xl sm:text-4xl font-bold leading-tight text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 ${className}`}
  >
    {children}
  </h2>
)

const CardTitle = ({ icon: Icon, children }) => (
  <div className="flex items-center gap-3 mb-4">
    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center flex-shrink-0">
      <Icon className="w-5 h-5 text-white" />
    </div>
    <h3 className="text-lg font-bold text-gray-900 dark:text-white">
      {children}
    </h3>
  </div>
)

const TextLink = ({ href, children }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="inline-flex items-center gap-1 font-semibold text-purple-600 dark:text-purple-400 hover:underline"
  >
    {children}
    <ExternalLink className="w-3.5 h-3.5" />
  </a>
)

const TBA = ({ value }) =>
  value === 'TBA' ? (
    <span className="px-2 py-0.5 rounded-full text-xs font-bold bg-amber-100 text-amber-700 dark:bg-amber-900/40 dark:text-amber-300">
      TBA
    </span>
  ) : (
    value
  )

// Values listing several options (e.g. "a, b, or c") are shown as text instead of a single link
const ContactLine = ({ icon: Icon, value, href }) => (
  <li className="flex items-start gap-2">
    <Icon className="w-4 h-4 mt-0.5 text-gray-400 flex-shrink-0" />
    {href && !value.includes(',') ? (
      <a
        href={href}
        className="hover:text-purple-600 dark:hover:text-purple-400 break-words"
      >
        {value}
      </a>
    ) : (
      <span className="break-words">{value}</span>
    )}
  </li>
)

const PlaceCard = ({ place }) => (
  <div className={`p-6 flex flex-col ${cardClass}`}>
    <div className="flex items-start justify-between gap-3 mb-3">
      <h4 className="text-lg font-bold text-gray-900 dark:text-white">
        {place.name}
      </h4>
      {place.distance && (
        <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold whitespace-nowrap bg-purple-100 text-purple-700 dark:bg-purple-900/40 dark:text-purple-300">
          {place.distance}
        </span>
      )}
    </div>

    <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
      <ContactLine icon={MapPin} value={place.address} />
      {place.phone && (
        <ContactLine
          icon={Phone}
          value={place.phone}
          href={`tel:${place.phone.replace(/\s/g, '')}`}
        />
      )}
      {place.email && (
        <ContactLine
          icon={Mail}
          value={place.email}
          href={`mailto:${place.email}`}
        />
      )}
    </ul>

    {place.note && (
      <p className="mt-4 flex items-start gap-2 rounded-lg bg-amber-50 dark:bg-amber-900/20 p-3 text-xs text-amber-700 dark:text-amber-300">
        <AlertTriangle className="w-4 h-4 flex-shrink-0" />
        {place.note}
      </p>
    )}

    {place.website && (
      <div className="mt-4 text-sm">
        <TextLink href={place.website}>Visit website</TextLink>
      </div>
    )}
  </div>
)

function PracticalInfo() {
  return (
    <section className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-900 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 pt-8 pb-12 lg:pb-16 space-y-12 lg:space-y-16">
        {/* Getting There */}
        <div>
          <SectionTitle className="mb-8">Getting There</SectionTitle>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className={`p-6 ${cardClass}`}>
              <CardTitle icon={Plane}>
                Schiphol Airport → Amsterdam Central Station
              </CardTitle>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                Take a train from platforms 1/2. Trains depart every 10–15
                minutes. The trip takes 19 minutes.
              </p>
            </div>

            <div className={`p-6 ${cardClass}`}>
              <CardTitle icon={TrainFront}>
                Amsterdam Central Station → Venue
              </CardTitle>

              <dl className="grid grid-cols-[auto_1fr] gap-x-4 gap-y-2 mb-4 text-sm">
                <dt className="font-semibold text-gray-900 dark:text-white">
                  Room
                </dt>
                <dd className="text-gray-600 dark:text-gray-300">
                  <TBA value={venue.room} />
                </dd>
                <dt className="font-semibold text-gray-900 dark:text-white">
                  Building
                </dt>
                <dd className="text-gray-600 dark:text-gray-300">
                  <TBA value={venue.building} />
                </dd>
                <dt className="font-semibold text-gray-900 dark:text-white">
                  Campus
                </dt>
                <dd className="text-gray-600 dark:text-gray-300">
                  {venue.campus}
                </dd>
              </dl>

              <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                {venue.directions}
              </p>

              <TextLink href={venue.url}>View location details</TextLink>
            </div>
          </div>
        </div>

        {/* Places to Stay */}
        <div>
          <SectionTitle className="mb-4">Places to Stay</SectionTitle>
          <p className="max-w-2xl mx-auto text-center text-gray-600 dark:text-gray-300 mb-10">
            Below are some hotel and student hostel recommendations. Additional
            options are available through Airbnb or couch surfing.
          </p>

          <div className="space-y-10">
            <div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                Hotels
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {hotels.map((hotel) => (
                  <PlaceCard key={hotel.name} place={hotel} />
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                Student Hostels
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {hostels.map((hostel) => (
                  <PlaceCard key={hostel.name} place={hostel} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PracticalInfo
