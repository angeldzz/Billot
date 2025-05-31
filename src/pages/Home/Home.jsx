"use client"

import { useEffect, useState } from "react"
import { useLocation, Link } from "react-router-dom"

const Home = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [typedText, setTypedText] = useState("");
  const [currentStat, setCurrentStat] = useState({ vehicles: 0, services: 0, clients: 0, uptime: 0 });
  
  const fullText = "Tu taller mecánico digital";
  
  useEffect(() => {
    setIsVisible(true);
    
    // Efecto de escritura
    let i = 0;
    const typeWriter = () => {
      if (i < fullText.length) {
        setTypedText(prev => prev + fullText.charAt(i));
        i++;
        setTimeout(typeWriter, 100);
      }
    };
    
    setTimeout(typeWriter, 1000);
    
    // Animación de contadores
    const animateCounters = () => {
      const targets = { vehicles: 1250, services: 3400, clients: 890, uptime: 99.9 };
      const duration = 2000;
      const steps = 60;
      const increment = duration / steps;
      
      let step = 0;
      const timer = setInterval(() => {
        step++;
        const progress = step / steps;
        const easeOut = 1 - Math.pow(1 - progress, 3);
        
        setCurrentStat({
          vehicles: Math.floor(targets.vehicles * easeOut),
          services: Math.floor(targets.services * easeOut),
          clients: Math.floor(targets.clients * easeOut),
          uptime: Math.min(targets.uptime, (targets.uptime * easeOut).toFixed(1))
        });
        
        if (step >= steps) clearInterval(timer);
      }, increment);
    };
    
    setTimeout(animateCounters, 1500);
  }, []);
const services = [
  {
    title: "Mantenimientos Programados",
    description: "Organiza y visualiza mantenimientos esenciales de cada vehículo",
    icon: "🔧",
    features: ["Registro por fecha y km", "Notificaciones automáticas", "Historial exportable"]
  },
  {
    title: "Registro de Gastos",
    description: "Lleva un control claro y simple de los gastos por vehículo",
    icon: "🧾",
    features: ["Categorías de gasto", "Resumen mensual", "Filtros por fechas"]
  },
  {
    title: "Control de Repuestos",
    description: "Guarda qué piezas has cambiado, cuándo y su duración esperada",
    icon: "🧰",
    features: ["Registro de piezas", "Alertas por tiempo o km", "Notas y adjuntos"]
  },
  {
    title: "Acceso Multiusuario",
    description: "Comparte el control del vehículo con otros usuarios",
    icon: "👥",
    features: ["Roles simples", "Colaboración en registros", "Ideal para flotas pequeñas"]
  },
  {
    title: "Calendario de Eventos",
    description: "Visualiza tus mantenimientos y vencimientos en un solo lugar",
    icon: "📅",
    features: ["Vista mensual", "Eventos con colores", "Enlace rápido a detalles"]
  },
  {
    title: "Documentos del Vehículo",
    description: "Guarda y accede fácilmente a documentos importantes",
    icon: "📂",
    features: ["ITV, seguros, facturas", "Subida de archivos", "Descarga rápida"]
  }
];


  const testimonials = [
    {
      name: "Carlos Mendoza",
      role: "Propietario de Taller Mendoza",
      text: "Desde que uso Billot, he aumentado mi eficiencia en un 40%. La gestión de citas y el control de inventario son increíbles.",
      rating: 5
    },
    {
      name: "María González",
      role: "Gerente de AutoService Plus",
      text: "La mejor inversión que hemos hecho. Nuestros clientes están más satisfechos y nosotros más organizados.",
      rating: 5
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-bg-pattern"></div>
        <div className="hero-content">
          <div className={`fade-in-left ${isVisible ? 'visible' : ''}`}>
            <h1 className="hero-title">
              Revoluciona tu 
              <span className="gradient-text"> Taller Mecánico</span>
            </h1>
            <div className="hero-subtitle">
              <span className="typing-text">{typedText}</span>
            </div>
            <p className="hero-description">
              Gestiona mantenimientos, inventario, clientes y facturación desde una plataforma integral. 
              Optimiza tu taller con tecnología de vanguardia y aumenta tu rentabilidad.
            </p>
            <div className="hero-buttons">
              <Link to="/registrarse" className="btn-primary enhanced-hover ripple">
                Comenzar Gratis
              </Link>
              <Link to="/about" className="btn-secondary enhanced-hover">
                Ver Demo
              </Link>
            </div>
            <div className="hero-stats">
              <div className="stat-item">
                <span className="stat-number">+{currentStat.vehicles}</span>
                <span className="stat-label">Vehículos Gestionados</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">+{currentStat.services}</span>
                <span className="stat-label">Servicios Completados</span>
              </div>
            </div>
          </div>
          
          <div className={`fade-in-right ${isVisible ? 'visible' : ''}`}>
            <div className="dashboard-mockup energy-border scan-lines">
              <div className="mockup-header">
                <div className="mockup-dots">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
                <div className="mockup-title">Panel de Control - Taller Mecánico</div>
              </div>
              <div className="mockup-content">
                <div className="dashboard-row">
                  <div className="dashboard-card">
                    <div className="card-icon">🚗</div>
                    <div className="card-info">
                      <h4>Vehículos Hoy</h4>
                      <p className="card-number">23</p>
                    </div>
                  </div>
                  <div className="dashboard-card">
                    <div className="card-icon">⚙️</div>
                    <div className="card-info">
                      <h4>En Servicio</h4>
                      <p className="card-number">8</p>
                    </div>
                  </div>
                </div>
                
                <div className="service-list">
                  <div className="service-item">
                    <div className="service-car">Honda Civic - ABC123</div>
                    <div className="service-type">Cambio de aceite</div>
                    <div className="service-status pending">En proceso</div>
                  </div>
                  <div className="service-item">
                    <div className="service-car">Toyota Corolla - XYZ789</div>
                    <div className="service-type">Revisión general</div>
                    <div className="service-status completed">Completado</div>
                  </div>
                  <div className="service-item">
                    <div className="service-car">Ford Focus - DEF456</div>
                    <div className="service-type">Reparación frenos</div>
                    <div className="service-status urgent">Urgente</div>
                  </div>
                </div>
                
                <div className="revenue-chart">
                  <h4>Ingresos del Mes</h4>
                  <div className="chart-bars">
                    <div className="chart-bar" style={{height: '60%'}}></div>
                    <div className="chart-bar" style={{height: '80%'}}></div>
                    <div className="chart-bar" style={{height: '45%'}}></div>
                    <div className="chart-bar" style={{height: '90%'}}></div>
                    <div className="chart-bar" style={{height: '70%'}}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <div className="container">
          <h2 className="section-title holographic">Características Principales</h2>
          <div className="features-grid">
            {services.map((service, index) => (
              <div key={index} className={`feature-card enhanced-hover fade-in-up ${isVisible ? 'visible' : ''}`} 
                   style={{animationDelay: `${index * 0.2}s`}}>
                <div className="feature-icon neon-pulse">
                  <span style={{fontSize: '2rem', zIndex: 1}}>{service.icon}</span>
                </div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <ul className="feature-list">
                  {service.features.map((feature, idx) => (
                    <li key={idx}>✓ {feature}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats">
        <div className="container">
          <div className="stats-grid">
            <div className={`stat-item fade-in-up ${isVisible ? 'visible' : ''}`} style={{animationDelay: '0.2s'}}>
              <div className="stat-number counter">{currentStat.vehicles}+</div>
              <div className="stat-label">Vehículos Gestionados</div>
            </div>
            <div className={`stat-item fade-in-up ${isVisible ? 'visible' : ''}`} style={{animationDelay: '0.4s'}}>
              <div className="stat-number counter">{currentStat.services}+</div>
              <div className="stat-label">Servicios Completados</div>
            </div>
            <div className={`stat-item fade-in-up ${isVisible ? 'visible' : ''}`} style={{animationDelay: '0.6s'}}>
              <div className="stat-number counter">{currentStat.clients}+</div>
              <div className="stat-label">Clientes Satisfechos</div>
            </div>
            <div className={`stat-item fade-in-up ${isVisible ? 'visible' : ''}`} style={{animationDelay: '0.8s'}}>
              <div className="stat-number counter">{currentStat.uptime}%</div>
              <div className="stat-label">Tiempo de Actividad</div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials">
        <div className="container">
          <h2 className="section-title">Lo que dicen nuestros clientes</h2>
          <div className="testimonials-grid">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="testimonial-card enhanced-hover">
                <div className="testimonial-rating">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="star">⭐</span>
                  ))}
                </div>
                <p className="testimonial-text">"{testimonial.text}"</p>
                <div className="testimonial-author">
                  <strong>{testimonial.name}</strong>
                  <span>{testimonial.role}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta">
        <div className="container">
          <div className="cta-content">
            <h2 className="glitch" data-text="¿Listo para transformar tu taller?">
              ¿Listo para transformar tu taller?
            </h2>
            <p>
              Únete a cientos de talleres que ya han revolucionado su forma de trabajar. 
              Comienza tu prueba gratuita hoy mismo.
            </p>
            <div className="cta-buttons">
              <Link to="/registrarse" className="btn-cta enhanced-hover ripple">
                Prueba Gratuita 30 Días
              </Link>
              <Link to="/soporte" className="btn-secondary">
                Hablar con Ventas
              </Link>
            </div>
            <div className="cta-guarantee">
              <p>✓ Sin compromiso inicial • ✓ Configuración gratuita • ✓ Soporte 24/7</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home