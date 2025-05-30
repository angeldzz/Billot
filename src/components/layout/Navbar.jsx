"use client"

import { useState, useEffect } from "react"
import { Link, useLocation } from "react-router-dom"
import "./Navbar.css"

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  const navigationItems = [
    {
      title: "Pagina 1",
      href: "/pagina1",
    },
    {
      title: "Pagina 2",
      href: "/pagina2",
    },
    {
      title: "Pagina 3",
      href: "/pagina3",
    },
    {
      title: "Pagina 4",
      href: "/pagina4",
    },
    {
      title: "Soporte",
      href: "/soporte",
    },
  ]

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50
      setScrolled(isScrolled)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    setIsMenuOpen(false)
  }, [ ])

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }

    return () => {
      document.body.style.overflow = "unset"
    }
  }, [isMenuOpen])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  return (
    <nav className={`navbar ${scrolled ? "navbar-scrolled" : ""}`}>
      <div className="navbar-container">
        {/* Logo */}
        <div className="navbar-brand">
          <Link to="/" className="navbar-logo-link" onClick={closeMenu}>
            <h1 className="navbar-logo">Billot</h1>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="navbar-menu">
          <ul className="navbar-nav">
            {navigationItems.map((item) => (
              <li key={item.title} className="navbar-item">
                <Link to={item.href} className={`navbar-link ${location.pathname === item.href ? "active" : ""}`}>
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>

          {/* Desktop Auth Buttons */}
          <div className="navbar-auth">
            <Link to="/login" className="btn-login">
              Iniciar Sesión
            </Link>
            <Link to="/register" className="btn-register">
              Registrarse
            </Link>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          className={`navbar-toggle ${isMenuOpen ? "active" : ""}`}
          onClick={toggleMenu}
          aria-label="Toggle menu"
          aria-expanded={isMenuOpen}
        >
          <span className="navbar-toggle-line"></span>
          <span className="navbar-toggle-line"></span>
          <span className="navbar-toggle-line"></span>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`navbar-mobile-overlay ${isMenuOpen ? "active" : ""}`} onClick={closeMenu}>
        <div className="navbar-mobile-menu" onClick={(e) => e.stopPropagation()}>
          <div className="navbar-mobile-header">
            <Link to="/" className="navbar-mobile-logo" onClick={closeMenu}>
              <h2 className="navbar-logo">Billot</h2>
            </Link>
            <button className="navbar-mobile-close" onClick={closeMenu} aria-label="Close menu">
              <span>×</span>
            </button>
          </div>

          <div className="navbar-mobile-nav">
            {navigationItems.map((item) => (
              <Link
                key={item.title}
                to={item.href}
                className={`navbar-mobile-link ${location.pathname === item.href ? "active" : ""}`}
                onClick={closeMenu}
              >
                {item.title}
              </Link>
            ))}
          </div>

          <div className="navbar-mobile-auth">
            <Link to="/login" className="navbar-mobile-btn-login" onClick={closeMenu}>
              Iniciar Sesión
            </Link>
            <Link to="/register" className="navbar-mobile-btn-register" onClick={closeMenu}>
              Registrarse
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
