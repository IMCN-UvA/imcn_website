import React, { useState, useEffect, useRef } from 'react'
import { Menu, X, Sun, Moon } from 'lucide-react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import logo from '../assets/logo.png'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [darkMode, setDarkMode] = useState(false)
  const [isHidden, setIsHidden] = useState(false)
  const lastScrollYRef = useRef(0)
  const location = useLocation()
  const scrollPositionRef = useRef(0)

  // Close menu when route changes
  useEffect(() => {
    setIsMenuOpen(false)
    setIsHidden(false)
  }, [location.pathname])

  // Apply/remove 'dark' class on <html>
  useEffect(() => {
    const root = window.document.documentElement
    if (darkMode) root.classList.add('dark')
    else root.classList.remove('dark')
  }, [darkMode])

  // Store scroll position when menu opens
  useEffect(() => {
    if (isMenuOpen) {
      scrollPositionRef.current = window.scrollY
    }
  }, [isMenuOpen])

  // Close menu when scrolling with threshold
  useEffect(() => {
    const handleScroll = () => {
      if (isMenuOpen) {
        const currentScroll = window.scrollY
        const scrollDifference = Math.abs(
          currentScroll - scrollPositionRef.current,
        )

        // Only close if scrolled more than 50 pixels
        if (scrollDifference > 50) {
          setIsMenuOpen(false)
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [isMenuOpen])

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY
      const delta = currentY - lastScrollYRef.current
      if (Math.abs(delta) < 5) return
      setIsHidden(delta > 0 && currentY > 80)
      lastScrollYRef.current = currentY
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`w-full bg-gray-900 dark:bg-gray-800 shadow-sm sticky top-0 z-50 transition-all duration-300 motion-reduce:transition-none ${
        isHidden && !isMenuOpen ? '-translate-y-full' : 'translate-y-0'
      }`}
    >
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center invert flex-shrink-0">
            <img
              src={logo}
              alt="IMCN Logo"
              className="h-12 xl:h-14 w-auto rounded-lg object-contain cursor-pointer"
            />
          </Link>

          {/* Desktop Navigation */}
          <Navigation />

          <div className="flex items-center space-x-2">
            {/* Dark Mode Toggle */}
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
              aria-label="Toggle dark mode"
            >
              {darkMode ? (
                <Sun className="w-5 h-5 text-yellow-400" />
              ) : (
                <Moon className="w-5 h-5 text-gray-800 dark:text-gray-200" />
              )}
            </button>

            {/* Mobile Menu Button */}
            <button
              type="button"
              onClick={() => setIsMenuOpen((s) => !s)}
              aria-label="Toggle navigation menu"
              aria-expanded={isMenuOpen}
              aria-controls="mobile-nav"
              className="lg:hidden p-2 rounded-md text-white hover:bg-gray-700 transition-colors"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <MobileNavigation closeMenu={() => setIsMenuOpen(false)} />
        )}
      </div>
    </header>
  )
}

const navItems = [
  { to: '/', label: 'Home' },
  { to: '/team', label: 'Team' },
  { to: '/publications', label: 'Publications' },
  { to: '/projects', label: 'Research Projects' },
  { to: '/code-and-data', label: 'Code & Data' },
  { to: '/app', label: 'App' },
  { to: '/contact', label: 'Contact' },
  { to: '/meeting', label: 'Meeting' },
]

const Navigation = () => (
  <nav
    className="hidden lg:flex items-center gap-1 ml-auto mr-3"
    role="navigation"
    aria-label="Primary"
  >
    {navItems.map((item) => (
      <NavLink
        key={item.to}
        to={item.to}
        className={({ isActive }) =>
          `whitespace-nowrap px-3 py-2 rounded-md font-medium transition-colors ${
            isActive
              ? 'text-blue-600 bg-blue-50 dark:bg-gray-700 dark:text-blue-400'
              : 'text-white dark:text-gray-200 hover:text-gray-600 hover:bg-white dark:hover:text-gray-300 dark:hover:bg-gray-700'
          }`
        }
      >
        {item.label}
      </NavLink>
    ))}
  </nav>
)

const MobileNavigation = ({ closeMenu }) => (
  <div
    id="mobile-nav"
    className="lg:hidden py-4 border-t border-gray-200 dark:border-gray-700 w-full"
    role="navigation"
    aria-label="Mobile"
  >
    <nav className="flex flex-col space-y-4 px-2">
      {navItems.map((item) => (
        <Link
          key={item.to}
          to={item.to}
          onClick={closeMenu}
          className="text-white dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors px-2 py-2 rounded"
        >
          {item.label}
        </Link>
      ))}
    </nav>
  </div>
)

export default Header
