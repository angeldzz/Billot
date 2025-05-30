import { Link } from "react-router-dom"
import "./Footer.css"

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section footer-brand">
            <h3 className="footer-logo">Billot</h3>
            <p className="footer-description">
              Texto breve sobre la empresa o el producto. Aquí puedes incluir una pequeña descripción que resuma la misión o visión de tu marca.
            </p>
            <div className="social-links">
              <a href="#" className="social-link" aria-label="Twitter">
                <span>🐦</span>
              </a>
              <a href="#" className="social-link" aria-label="LinkedIn">
                <span>💼</span>
              </a>
              <a href="#" className="social-link" aria-label="GitHub">
                <span>🐙</span>
              </a>
            </div>
          </div>

          <div className="footer-section">
            <h4 className="footer-title">Producto</h4>
            <ul className="footer-links">
              <li>
                <Link to="/pagina1" className="footer-link">
                  Pagina 1
                </Link>
              </li>
              <li>
                <Link to="/pagina2" className="footer-link">
                  Pagina 2
                </Link>
              </li>
              <li>
                <Link to="/pagina3" className="footer-link">
                  Pagina 3
                </Link>
              </li>
              <li>
                <Link to="/pagina4" className="footer-link">
                  Pagina 4
                </Link>
              </li>
            </ul>
          </div>

          <div className="footer-section">
            <h4 className="footer-title">Soporte</h4>
            <ul className="footer-links">
              <li>
                <Link to="/soporte" className="footer-link">
                  Centro de Ayuda
                </Link>
              </li>
              <li>
                <a href="#" className="footer-link">
                  Documentación
                </a>
              </li>
              <li>
                <a href="#" className="footer-link">
                  API
                </a>
              </li>
              <li>
                <a href="#" className="footer-link">
                  Estado del Servicio
                </a>
              </li>
            </ul>
          </div>

          <div className="footer-section">
            <h4 className="footer-title">Empresa</h4>
            <ul className="footer-links">
              <li>
                <Link to="/about" className="footer-link">
                  Acerca de
                </Link>
              </li>
              <li>
                <a href="#" className="footer-link">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="footer-link">
                  Carreras
                </a>
              </li>
              <li>
                <a href="#" className="footer-link">
                  Contacto
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <p className="copyright">© 2024 Billot. Todos los derechos reservados.</p>
            <div className="footer-bottom-links">
              <a href="#" className="footer-bottom-link">
                Privacidad
              </a>
              <a href="#" className="footer-bottom-link">
                Términos
              </a>
              <a href="#" className="footer-bottom-link">
                Cookies
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
