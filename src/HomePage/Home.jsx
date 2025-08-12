
import React, { useState } from 'react';
import Button from '../components/ui/Button';
import EditText from '../components/ui/EditText';

const HomePage = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [expandedService, setExpandedService] = useState('Flutter App Development');
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phoneNumber: ''
  });

  const handleInputChange = (field) => (e) => {
    setFormData(prev => ({
      ...prev,
      [field]: e?.target?.value
    }));
  };

  const handleSubmit = (e) => {
    e?.preventDefault();
    console.log('Form submitted:', formData);
  };

  const toggleService = (serviceName) => {
    setExpandedService(expandedService === serviceName ? null : serviceName);
  };

  const services = [
    {
      name: 'Flutter App Development',
      description: 'Unlock endless possibilities with Flutter App Development. Build beautiful, high-performance applications for any platform - faster and easier than ever before. Ready to revolutionize your app experience? Let us get started today!'
    },
    { name: 'UI/UX Design' },
    { name: 'Customization & integration' },
    { name: 'Testing & Quality Assurance' },
    { name: 'Maintenance & Support' },
    { name: 'Consulting & Training' },
    { name: 'Migration & Upgrades' }
  ];

  return (
    <>
      <style>{`
        /* Container */
        .container {
          width: 100%;
          background-color: #131313;
          color: white;
          min-height: 100vh;
          display: flex;
          flex-direction: column;
        }

         body {
  font-family: 'Quicksand', 'Inter', sans-serif;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

*, *::before, *::after {
  box-sizing: inherit;
}



        /* Layout */
        .layout {
          display: flex;
          flex-direction: column;
        }

        /* Sidebar */
        .sidebar {
          background-color: #131313;
          padding: 20px;
          display: flex;
          flex-direction: column;
          align-items: center;
          width: 100%;
          box-sizing: border-box;
        }
        .sidebar.hidden-mobile {
          display: none;
        }
        .sidebar img.logo {
          width: 130px;
          height: 30px;
          object-fit: contain;
        }
        .contact-button {
          border-radius: 24px;
          padding: 12px 30px;
          font-weight: bold;
          font-size: 16px;
          text-transform: uppercase;
          margin-top: 20px;
          cursor: pointer;
          background: linear-gradient(90deg, #08a7ce, #2cc8ef);
          border: none;
          color: white;
        }
        nav {
          width: 100%;
          margin-top: 20px;
        }
        nav div {
          padding: 8px 12px;
          border-radius: 6px;
          cursor: pointer;
          font-size: 15px;
          font-weight: 500;
          margin-top: 10px;
          user-select: none;
          transition: background-color 0.3s;
        }
        nav div:hover {
          background-color: #222222;
        }
        .sidebar img.dev-image {
          width: 164px;
          height: 100px;
          border-radius: 12px;
          margin-top: 168px;
          display: none;
        }
        .sidebar p.description {
          font-size: 14px;
          font-weight: 500;
          line-height: 17px;
          text-align: center;
          margin-top: 12px;
          width: 94%;
          display: none;
        }

        /* Hamburger */
        .hamburger {
          position: fixed;
          top: 16px;
          left: 16px;
          z-index: 50;
          padding: 8px;
          background-color: #333333;
          border-radius: 6px;
          cursor: pointer;
          display: block;
          border: none;
        }
        .hamburger div {
          width: 24px;
          height: 2px;
          background-color: white;
          margin-bottom: 4px;
        }

        /* Vertical Divider */
        .vertical-divider {
          width: 1px;
          background-color: rgba(255,255,255,0.2);
        }

        /* Main */
        main {
          flex: 1;
          padding: 24px;
        }

        header h1 {
          font-size: 16px;
          font-weight: 600;
          margin-left: 12px;
          margin-bottom: 8px;
        }
        header hr {
          height: 1px;
          background-color: rgba(255,255,255,0.2);
          border: none;
          margin: 0 0 24px 0;
        }

        /* Hero Section */
        .hero-section {
          margin-bottom: 64px;
          position: relative;
        }
        .hero-bg-img {
          position: absolute;
          right: 0;
          top: 0;
          width: 54%;
          height: 372px;
          border-radius: 12px;
          object-fit: cover;
          z-index: 0;
        }
        .hero-content {
          position: relative;
          z-index: 1;
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          gap: 24px;
          flex-wrap: wrap;
        }
        .hero-text {
          width: 100%;
          max-width: 480px;
          margin-bottom: 40px;
        }
        .hero-text h2 {
          font-size: 43px;
          font-weight: 500;
          line-height: 51px;
          font-family: 'Playfair Display', serif;
          margin-bottom: 24px;
        }
        .hero-text p {
          font-size: 20px;
          font-weight: 500;
          line-height: 28px;
        }
        .hero-button {
          margin-top: 16px;
        }
        .hero-button button {
          border-radius: 24px;
          padding: 12px 30px;
          font-weight: bold;
          font-size: 16px;
          text-transform: uppercase;
          cursor: pointer;
          background-color: #08a7ce;
          border: none;
          color: white;
          transition: transform 0.5s;
        }
        .hero-button button:hover {
          transform: translateX(40px);
        }

        /* Flutter Dawn Section */
        .flutter-dawn {
          margin-bottom: 64px;
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 24px;
          flex-wrap: wrap;
        }
        .flutter-dawn .title {
          font-size: 40px;
          font-weight: 500;
          line-height: 42px;
          font-family: 'Playfair Display', serif;
          margin-bottom: 8px;
          flex: 1 1 300px;
        }
        .flutter-dawn .subtitle {
          font-weight: 600;
          font-size: 16px;
          flex: 1 1 200px;
        }
        .flutter-dawn .description {
          font-size: 16px;
          font-weight: 600;
          line-height: 25px;
          color: rgba(255,255,255,0.8);
          flex: 2 1 400px;
        }
        .flutter-dawn .highlight {
          color: #08a7ce;
          font-weight: 600;
          cursor: pointer;
        }
        .flutter-dawn button {
          border-radius: 24px;
          padding: 12px 30px;
          font-weight: bold;
          font-size: 16px;
          text-transform: uppercase;
          cursor: pointer;
          background-color: #08a7ce;
          border: none;
          color: white;
          display: flex;
          align-items: center;
          gap: 12px;
          flex-shrink: 0;
        }
        .flutter-dawn button img {
          width: 18px;
          height: 24px;
        }

        /* Services Section */
        .services {
          margin-bottom: 64px;
          text-align: center;
        }
        .services-header {
          margin-bottom: 40px;
        }
        .services-header h2 {
          font-size: 40px;
          font-weight: normal;
          line-height: 54px;
          font-family: 'Playfair Display', serif;
          text-transform: capitalize;
          margin-bottom: 16px;
        }
        .services-header p.subtitle {
          font-size: 22px;
          font-weight: 500;
          line-height: 28px;
          color: rgba(255, 255, 255, 0.8);
          margin-bottom: 16px;
        }
        .services-header p.description {
          font-size: 14px;
          font-weight: 500;
          line-height: 17px;
          max-width: 64rem;
          margin: 0 auto;
          color: rgba(255, 255, 255, 0.8);
        }
        .services-wrapper {
          display: flex;
          justify-content: space-between;
          gap: 24px;
          flex-wrap: wrap;
        }
        .services-list {
          flex: 1 1 60%;
          max-width: 60%;
        }
        .service-item {
          border-bottom: 1px solid #444;
          padding-bottom: 16px;
          margin-bottom: 16px;
          cursor: pointer;
        }
        .service-item:hover h3 {
          color: #08a7ce;
        }
        .service-item h3 {
          font-size: 26px;
          font-weight: 500;
          text-transform: capitalize;
          color: rgba(255, 255, 255, 0.8);
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .service-desc {
          margin-top: 16px;
          font-size: 14px;
          font-weight: 500;
          color: rgba(255, 255, 255, 0.6);
          max-width: 82%;
        }
        .service-highlight {
          color: #08a7cecc;
          font-weight: 600;
        }
        .services-image-wrapper {
          flex: 1 1 35%;
          max-width: 35%;
          display: flex;
          justify-content: flex-end;
        }
        .services-image-wrapper img {
          width: 100%;
          max-width: 400px;
          height: auto;
          border-radius: 12px;
          margin-top: 32px;
          object-fit: cover;
        }

        /* Footer Navigation */
        .footer-section {
          margin-bottom: 32px;
        }
        .footer-top {
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          margin-bottom: 32px;
        }
        .footer-links {
          display: flex;
          flex-wrap: wrap;
          gap: 16px;
        }
        .footer-links span {
          font-size: 14px;
          font-weight: 500;
          cursor: pointer;
          line-height: 18px;
        }
        .footer-title {
          font-size: 75px;
          font-weight: 500;
          line-height: 1.15;
          width: 32%;
          text-align: right;
          font-family: 'Playfair Display', serif;
        }

        /* Contact Section */
        .contact-section {
          display: flex;
          justify-content: space-between;
          gap: 32px;
          flex-wrap: wrap;
          margin-bottom: 32px;
        }
        .contact-info {
          flex: 1 1 40%;
          max-width: 40%;
        }
        .contact-info p {
          margin: 0 0 12px 0;
        }
        .contact-info-title {
          font-size: 28px;
          font-weight: 600;
        }
        .contact-website {
          font-size: 30px;
          font-weight: 600;
        }
        form.contact-form {
          flex: 1 1 30%;
          max-width: 30%;
          display: flex;
          flex-direction: column;
          gap: 20px;
        }
        form.contact-form input {
          width: 100%;
          padding: 14px 12px;
          font-size: 14px;
          font-weight: 500;
          background-color: transparent;
          border: none;
          border-bottom: 1px solid white;
          color: rgba(255, 255, 255, 0.6);
          outline: none;
        }
        form.contact-form input:focus {
          border-color: white;
        }
        .submit-button-wrapper {
          display: flex;
          justify-content: flex-end;
          padding-top: 16px;
        }
        .submit-button {
          border-radius: 18px;
          padding: 8px 24px;
          font-size: 13px;
          font-weight: bold;
          text-transform: uppercase;
          border: 1px solid #39c0e2;
          background-color: rgba(44, 200, 239, 0.4);
          color: white;
          cursor: pointer;
          transition: background-color 0.2s ease;
          border: none;
        }
        .submit-button:hover {
          background-color: #08a7ce;
        }

        /* Responsive Styles */
        @media (min-width: 1024px) {
          .layout {
            flex-direction: row;
          }
          .sidebar {
            width: 14%;
            display: flex !important;
          }
          .sidebar img.dev-image,
          .sidebar p.description {
            display: block;
          }
          .hamburger {
            display: none;
          }
          main {
            padding: 32px;
          }
        }

        @media (max-width: 1023px) {
          .sidebar.hidden-mobile {
            display: none !important;
          }
        }
      `}
      </style>

      <div className="container">
        <div className="layout">
          {/* Sidebar */}
          <aside className={`sidebar ${menuOpen ? '' : 'hidden-mobile'}`}>
            <img src="/images/img_vayuz_logo_1.png" alt="VAYUZ Logo" className="logo" />

            <button className="contact-button">Contact Us</button>

            <nav>
              <div>App Development</div>
              <div>Challenges</div>
              <div>Hire Developer</div>
              <div>Community</div>
            </nav>

            <img src="/images/img_rectangle_143.png" alt="Development" className="dev-image" />
            <p className="description">
              Lorem ipsum dolor sit amet consectetur. Enim tempor posuere rutrum.
            </p>
          </aside>

          {/* Hamburger for mobile */}
          <button
            className="hamburger"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <div></div>
            <div></div>
            <div></div>
          </button>

          {/* Vertical divider */}
          <div className="vertical-divider" style={{ display: menuOpen ? 'none' : 'block' }} />

          {/* Main content */}
          <main>
            <header>
              <h1>Securing Your Flutter App: Best Practices and Techniques</h1>
              <hr />
            </header>

            {/* Hero Section */}
            <section className="hero-section">
              <img
                src="/images/img_rectangle_3.png"
                alt="Code Background"
                className="hero-bg-img"
              />
              <div className="hero-content">
                <div className="hero-text">
                  <h2>Unlock the Potential of Flutter</h2>
                  <p>Your Premier Partner for Cross-Platform App Excellence!</p>
                  <div className="hero-button">
                    <button>Upgrade Your Tech</button>
                  </div>
                </div>
                {/* You can add code snippet images here if you want */}
              </div>
            </section>

            {/* Flutter's Dawn Section */}
            <section className="flutter-dawn">
              <h3 className="title">Flutter's Dawn</h3>
              <p className="subtitle">History of flutter</p>
              <p className="description">
                Uncover the fascinating story of Flutter in 'Flutter's Dawn: History of Flutter.' From humble origins to global acclaim, delve into its captivating narrative. Explore milestones, triumphs, and challenges. Whether tech enthusiast or curious mind, join us on this captivating journey! <span className="highlight">Click to begin!</span>
              </p>
              <button>
                Begin
                <img src="/images/img_arrowupright_1.svg" alt="Arrow" />
              </button>
            </section>

            {/* Services Section */}
            <section className="services">
              <div className="services-header">
                <h2>Our Dynamic Services Suite!</h2>
                <p className="subtitle">Embrace Innovation: Let us Create Together!</p>
                <p className="description">
                  Step into innovation! Explore our range of services and let us create something extraordinary together. Your vision, our expertise. Let us begin!
                </p>
              </div>

              <div className="services-wrapper">
                <div className="services-list">
                  {services.map(service => (
                    <div
                      key={service.name}
                      className="service-item"
                      onClick={() => toggleService(service.name)}
                    >
                      <h3>
                        {service.name}
                        <img
                          src={expandedService === service.name ? "/images/img_minus_1.svg" : "/images/img_plus_1_1.svg"}
                          alt={expandedService === service.name ? "Collapse" : "Expand"}
                          style={{ width: 20, height: 24 }}
                        />
                      </h3>
                      {expandedService === service.name && service.description && (
                        <p className="service-desc">
                          <span>{service.description.split('Let us get started today!')[0]}</span>
                          <span className="service-highlight">Let us get started today!</span>
                        </p>
                      )}
                    </div>
                  ))}
                </div>
                <div className="services-image-wrapper">
                  <img
                    src="/images/img_rectangle_129.png"
                    alt="Services"
                  />
                </div>
              </div>
            </section>

            {/* Footer Navigation */}
            <section className="footer-section">
              <div className="footer-top">
                <div className="footer-links">
                  {['Events', 'Gen AI', 'Careers', 'Case study', 'SME Talks'].map((item, idx) => (
                    <span key={idx} style={{ fontWeight: '600', fontSize: 16, cursor: 'pointer' }}>{item}</span>
                  ))}
                </div>
                <h2 className="footer-title">Connect With Us</h2>
              </div>

              {/* Contact Form Section */}
              <div className="contact-section">
                <div className="contact-info">
                  <p className="contact-info-title">
                    For any collaborative projects or enquiries feel free to connect with us.
                  </p>
                  <p className="contact-website">vayuz.com</p>
                </div>
                <form onSubmit={handleSubmit} className="contact-form">
                  <EditText
                    placeholder="Full Name"
                    type="text"
                    value={formData.fullName}
                    onChange={handleInputChange('fullName')}
                  />
                  <EditText
                    placeholder="Email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange('email')}
                  />
                  <EditText
                    placeholder="Phone Number"
                    type="tel"
                    value={formData.phoneNumber}
                    onChange={handleInputChange('phoneNumber')}
                  />
                  <div className="submit-button-wrapper">
                    <Button
                      type="submit"
                      variant="secondary"
                      className="submit-button"
                    >
                      Submit
                    </Button>
                  </div>
                </form>
              </div>

              {/* Footer Links */}
              <div className="footer-links">
                {['About', 'Insights', 'Community', 'Privacy & Policies'].map((link, i) => (
                  <span key={i} style={{ fontWeight: 500, fontSize: 14, cursor: 'pointer' }}>{link}</span>
                ))}
              </div>
            </section>
          </main>
        </div>
      </div>
    </>
  );
};

export default HomePage;
