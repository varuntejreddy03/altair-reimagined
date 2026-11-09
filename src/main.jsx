import { useEffect, useState } from 'react'
import { createRoot } from 'react-dom/client'
import './styles.css'

const servicesMenu = [
  {
    title: 'Software Development',
    items: [
      { label: 'Software Development', href: '/software-development', desc: 'Custom enterprise software solutions', icon: '💻' },
      { label: 'Artificial Intelligence (AI)', href: '/ai', desc: 'Predictive analytics, GenAI & MLOps', icon: '🤖' },
      { label: 'Cyber Security', href: '/cyber-security', desc: 'Zero-Trust defense & risk management', icon: '🛡️' },
      { label: 'Data Science & Engineering', href: '/data-sceinece', desc: 'Predictive intelligence & data lakes', icon: '📊' },
      { label: 'Full Stack Development', href: '/full-stack-development', desc: 'React, modern APIs & cloud microservices', icon: '⚡' },
    ]
  },
  {
    title: 'Talent & Innovation',
    items: [
      { label: 'IT Staffing & Consulting', href: '/it-staffing-and-consulting', desc: 'Strategic workforce & tech consulting', icon: '💼' },
      { label: 'IT Staffing', href: '/it-staffing', desc: 'Contract, permanent & team augmentation', icon: '👥' },
      { label: 'Training & Innovation', href: '/training-and-innovation', desc: 'Internal labs & next-gen prototypes', icon: '🚀' },
      { label: 'Altair Skills Lab', href: '/training', desc: 'Hands-on programs in Java, SQL & AI', icon: '💡' },
      { label: 'What we Do', href: '/what-we-do', desc: 'Complete capabilities overview', icon: '✨' },
    ]
  }
]

const Arrow = ({ small = false }) => <span className={small ? 'arrow arrow-small' : 'arrow'}>↗</span>

function ChevronDown({ rotated = false }) {
  return (
    <svg
      className={`chevron-icon ${rotated ? 'is-open' : ''}`}
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <polyline points="2.5 4.5 6 8 9.5 4.5" />
    </svg>
  )
}

function Logo({ variant = 'light' }) {
  const src = variant === 'dark' ? '/logo-horizontal-white.png' : '/logo-horizontal.png'
  return (
    <a href="/" className={`logo logo-${variant}`} aria-label="Altair Technologies home">
      <img src={src} alt="Altair Technologies Inc." />
      <span className="logo-fallback"><i />ALTAIR<span>TECHNOLOGIES INC.</span></span>
    </a>
  )
}

function Header({ currentPath }) {
  const [open, setOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)

  return (
    <header className="site-header">
      <div className="container nav-wrap">
        <Logo />
        <nav className={open ? 'main-nav is-open' : 'main-nav'}>
          <a
            href="/about-us"
            className={`nav-link ${currentPath === '/about-us' ? 'is-active' : ''}`}
            onClick={() => setOpen(false)}
          >
            About Us
          </a>

          <div
            className="nav-dropdown"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <button
              onClick={() => setServicesOpen(!servicesOpen)}
              className={`nav-link nav-button ${currentPath.startsWith('/services') || currentPath === '/what-we-do' || currentPath === '/ai' || currentPath === '/cyber-security' || currentPath === '/data-sceinece' || currentPath === '/full-stack-development' || currentPath === '/it-staffing' || currentPath === '/training' ? 'is-active' : ''}`}
            >
              Services <ChevronDown rotated={servicesOpen} />
            </button>
            <div className={`mega-dropdown ${servicesOpen ? 'visible' : ''}`}>
              {servicesMenu.map((cat) => (
                <div key={cat.title}>
                  <p className="eyebrow" style={{ marginBottom: '10px' }}>{cat.title}</p>
                  {cat.items.map((it) => (
                    <a
                      href={it.href}
                      key={it.href}
                      className="mega-item"
                      onClick={() => { setOpen(false); setServicesOpen(false); }}
                    >
                      <span className="mega-icon">{it.icon}</span>
                      <div className="mega-text">
                        <strong>{it.label}</strong>
                        <span>{it.desc}</span>
                      </div>
                    </a>
                  ))}
                </div>
              ))}
            </div>
          </div>

          <a
            href="/case-studies"
            className={`nav-link ${currentPath === '/case-studies' || currentPath.startsWith('/project-pages') ? 'is-active' : ''}`}
            onClick={() => setOpen(false)}
          >
            Case Studies
          </a>

          <a
            href="/careers"
            className={`nav-link ${currentPath === '/careers' ? 'is-active' : ''}`}
            onClick={() => setOpen(false)}
          >
            Careers
          </a>

          <a
            href="/contact"
            className={`nav-link ${currentPath === '/contact' ? 'is-active' : ''}`}
            onClick={() => setOpen(false)}
          >
            Contact
          </a>

          <a href="/contact" className="nav-cta" onClick={() => setOpen(false)}>
            Get in Touch <Arrow small />
          </a>
        </nav>
        <button
          className={`menu-toggle ${open ? 'is-open' : ''}`}
          onClick={() => setOpen(!open)}
          aria-label="Toggle navigation menu"
          aria-expanded={open}
        >
          <span /><span /><span />
        </button>
      </div>
      {open && <div className="nav-backdrop" onClick={() => setOpen(false)} />}
    </header>
  )
}

function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-top">
        <div>
          <Logo variant="dark" />
          <p className="footer-note">
            Empowering Talent. Building Innovation with high-quality software, cybersecurity, intelligent data systems, and strategic IT staffing.
          </p>
        </div>
        <div className="footer-links">
          <div className="footer-col">
            <p className="eyebrow">Explore</p>
            <a href="/about-us">About Us</a>
            <a href="/what-we-do">What we Do</a>
            <a href="/software-development">Software Development</a>
            <a href="/case-studies">Case Studies</a>
          </div>
          <div className="footer-col">
            <p className="eyebrow">Capabilities</p>
            <a href="/ai">Artificial Intelligence</a>
            <a href="/cyber-security">Cyber Security</a>
            <a href="/data-sceinece">Data Science</a>
            <a href="/full-stack-development">Full Stack</a>
          </div>
          <div className="footer-col">
            <p className="eyebrow">Talent & Lab</p>
            <a href="/it-staffing">IT Staffing</a>
            <a href="/training">Altair Skills Lab</a>
            <a href="/careers">Careers</a>
            <a href="/contact">Contact</a>
          </div>
        </div>
        <div className="footer-contact">
          <p className="eyebrow">Talk to our team</p>
          <a href="tel:+17206753656">+1 (720)-675-3656</a>
          <a href="mailto:admin@altairtechnologiesinc.com">admin@altairtechnologiesinc.com</a>
          <p>11675 Century Dr, Unit A<br />Alpharetta, Georgia 30009</p>
        </div>
      </div>
      <div className="container footer-bottom">
        <span>© {new Date().getFullYear()} Altair Technologies Inc. All rights reserved.</span>
        <span>Software · Talent · Training · Innovation</span>
      </div>
    </footer>
  )
}

function PageFrame({ children, label, title, intro, cta = true }) {
  return (
    <>
      <section className="page-hero">
        <div className="container page-hero-inner">
          <p className="eyebrow">{label}</p>
          <h1>{title}</h1>
          {intro && <p className="hero-intro">{intro}</p>}
        </div>
        <div className="hero-grid" />
      </section>
      {children}
      {cta && <CTA />}
    </>
  )
}

function SectionHeading({ kicker, title, copy }) {
  return (
    <div className="section-heading">
      <p className="eyebrow">{kicker}</p>
      <h2>{title}</h2>
      {copy && <p>{copy}</p>}
    </div>
  )
}

function Button({ href = '/contact', children = 'Get in Touch', outline = false }) {
  return (
    <a href={href} className={outline ? 'button button-outline' : 'button'}>
      {children} <Arrow />
    </a>
  )
}

function StatStrip() {
  return (
    <section className="stat-strip">
      <div className="container stats">
        <div className="stat">
          <strong>81+</strong>
          <span>Projects Completed</span>
          <p>Delivered over 81 technology solutions across 15+ states.</p>
        </div>
        <div className="stat">
          <strong>240+</strong>
          <span>IT Professionals</span>
          <p>Deployed across healthcare, finance, and enterprise systems.</p>
        </div>
        <div className="stat">
          <strong>15+</strong>
          <span>Enterprise Clients</span>
          <p>Partnered with Fortune 500 & mid-sized enterprise leaders.</p>
        </div>
        <div className="stat">
          <strong>10</strong>
          <span>Years Experience</span>
          <p>Deep domain expertise in consulting, development & staffing.</p>
        </div>
      </div>
    </section>
  )
}

function CTA() {
  return (
    <section className="cta-section">
      <div className="container cta-inner">
        <div>
          <p className="eyebrow">Ready When You Are</p>
          <h2>Have queries or need assistance?<br /><em>Let’s connect today.</em></h2>
        </div>
        <Button href="/contact">Start a Conversation</Button>
      </div>
    </section>
  )
}

function ContactFormCard() {
  const [sent, setSent] = useState(false)
  return (
    <form className="contact-form" onSubmit={(e) => { e.preventDefault(); setSent(true); }}>
      <div className="form-row">
        <label>First Name *<input required name="firstName" placeholder="Jane" /></label>
        <label>Last Name *<input required name="lastName" placeholder="Doe" /></label>
      </div>
      <div className="form-row">
        <label>Email *<input required type="email" name="email" placeholder="jane@company.com" /></label>
        <label>Phone *<input required type="tel" name="phone" placeholder="+1 (555) 000-0000" /></label>
      </div>
      <div className="form-row">
        <label>Company Name<input name="company" placeholder="Acme Corp" /></label>
        <label>Position<input name="position" placeholder="VP of Engineering" /></label>
      </div>
      <label>How can we help?<textarea rows="4" name="message" placeholder="Tell us about your project, timeline, or staffing requirements..." /></label>
      <button className="button" type="submit">Send Message <Arrow /></button>
      {sent && <p className="form-success">Thank you! Your message has been sent. Our team will get back to you shortly.</p>}
    </form>
  )
}

/* =========================================================================
   PAGE 1: HOME (/)
   ========================================================================= */
function Home() {
  return (
    <>
      <section className="home-hero">
        <div className="container hero-layout">
          <div className="hero-copy">
            <p className="eyebrow"><span className="pulse" /> Comprehensive consulting services for your needs</p>
            <h1>Empowering Talent.<br />Building <em>Innovation.</em></h1>
            <p className="hero-sub">
              Altair Technologies Inc. is a U.S.-based software development, IT staffing, and consulting company committed to delivering end-to-end technology solutions. We specialize in building powerful software in Cybersecurity, AI, Data Science, and Full Stack development while connecting businesses with skilled IT professionals.
            </p>
            <div className="hero-actions">
              <Button href="/contact">Get in Touch</Button>
              <a href="/about-us" className="text-link">Who we are <Arrow small /></a>
            </div>
          </div>
          
          <div className="hero-art">
            <div className="hero-visual-frame">
              <img
                src="/hero-ai-tech.jpg"
                alt="Altair Technologies Enterprise AI and Cloud Architecture"
                className="hero-visual-img"
              />
              <div className="hero-badge-float badge-top-left">
                <span className="badge-icon">⚡</span>
                <div>
                  <div style={{ color: '#0f172a' }}>Enterprise AI & Cloud</div>
                  <div style={{ fontSize: '11px', color: '#64748b' }}>Neural & Autonomous Systems</div>
                </div>
              </div>
              <div className="hero-badge-float badge-bottom-right">
                <span className="badge-icon">🛡️</span>
                <div>
                  <div style={{ color: '#0f172a' }}>Zero-Trust Defense</div>
                  <div style={{ fontSize: '11px', color: '#64748b' }}>99.98% Enterprise Uptime</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <StatStrip />

      {/* Who We Are & Mission with Team Visual */}
      <section className="section container">
        <div className="media-split">
          <div>
            <SectionHeading
              kicker="Who We Are & Our Mission"
              title="Smart, scalable, and future-ready technology solutions."
              copy="Our mission is to empower businesses and individuals by creating smart, scalable, and future-ready technology solutions. We strive to deliver real-world impact by combining technical expertise with a passion for continuous improvement, helping our clients thrive in a rapidly evolving digital landscape."
            />
            <div className="checklist">
              {[
                'Delivering innovative, high-quality software tailored to client needs',
                'Bridging the IT talent gap with top-tier professionals and teams',
                'Equipping engineers with real-world skills through hands-on training',
                'Supporting digital transformation across critical industries',
                'Fostering long-term client partnerships built on trust and results',
                'Staying ahead of technology trends through continuous R&D and innovation',
              ].map((pt) => (
                <div className="check-item" key={pt}>
                  <span className="check-icon">✓</span>
                  <p>{pt}</p>
                </div>
              ))}
            </div>
            <div style={{ marginTop: '32px' }}>
              <Button href="/about-us">Meet Altair Technologies</Button>
            </div>
          </div>
          <div className="split-img-frame">
            <img
              src="/tech-team-collaboration.jpg"
              alt="Altair Technologies Collaborative Engineering Team"
              className="split-img"
            />
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section dark-section">
        <div className="container">
          <SectionHeading
            kicker="Our Services"
            title="Comprehensive consulting services designed for sustainable growth."
            copy="Explore our range of comprehensive consulting services designed to address your specific business needs and drive sustainable growth across the software lifecycle."
          />
          <div className="service-grid">
            <a href="/software-development" className="service-card">
              <span className="card-number">01</span>
              <h3>Software Development & Innovation</h3>
              <p>We design and build cutting-edge software solutions tailored to business needs, leveraging the latest technologies in AI, cloud computing, and full-stack development to drive innovation and efficiency.</p>
              <span className="card-link">Explore Software <Arrow small /></span>
            </a>
            <a href="/it-staffing-and-consulting" className="service-card">
              <span className="card-number">02</span>
              <h3>IT Staffing and Consulting</h3>
              <p>We deliver top-tier technology talent and strategic consulting services that empower businesses to streamline operations, accelerate innovation, and build long-term value through smarter, more agile solutions.</p>
              <span className="card-link">Explore Staffing <Arrow small /></span>
            </a>
            <a href="/training" className="service-card">
              <span className="card-number">03</span>
              <h3>Altair Skills Lab</h3>
              <p>Designed for working professionals, our training programs enhance skills through hands-on, project-driven learning focused on evolving technology trends, preparing participants to confidently meet modern industry requirements.</p>
              <span className="card-link">Explore Skills Lab <Arrow small /></span>
            </a>
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="section industries-section container">
        <SectionHeading
          kicker="Industries We Serve"
          title="Customized technology solutions addressing domain-specific challenges."
          copy="We serve a wide range of industries by delivering customized technology solutions that address unique challenges and opportunities across domains such as healthcare, banking, retail, telecom, and insurance. We empower organizations to innovate, scale, and stay competitive in a digital-first world."
        />
        <div className="industry-grid">
          <div className="industry">
            <span>01</span>
            <h3>Health Care</h3>
            <p>We implement IT systems that improve patient engagement, enhance clinical workflows, and ensure regulatory compliance. From digital health platforms to intelligent care coordination, our solutions support safer, more efficient, and data-driven healthcare delivery.</p>
          </div>
          <div className="industry">
            <span>02</span>
            <h3>Insurance</h3>
            <p>We modernize insurance platforms with automation, claims digitization, and data-driven underwriting tools. Our solutions improve customer interactions, reduce processing time, and ensure transparency while supporting regulatory compliance across the insurance lifecycle.</p>
          </div>
          <div className="industry">
            <span>03</span>
            <h3>Retail</h3>
            <p>Our IT implementations empower retailers to manage dynamic inventories, personalize customer journeys, and integrate omnichannel platforms, delivering seamless, data-driven experiences that adapt to shifting consumer demands.</p>
          </div>
          <div className="industry">
            <span>04</span>
            <h3>Telecom</h3>
            <p>We enable telecom providers to scale infrastructure, improve service uptime, and automate operations. Our solutions enhance user management, real-time analytics, and network monitoring to support modern, high-volume communication ecosystems.</p>
          </div>
          <div className="industry">
            <span>05</span>
            <h3>Banking & Financial</h3>
            <p>We support digital banking transformation with secure, scalable platforms that optimize operations, enhance customer experience, and meet strict compliance requirements, enabling smarter lending, faster transactions, and better risk management.</p>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section light-tint">
        <div className="container">
          <SectionHeading
            kicker="Why Choose Us"
            title="Expertise, Quality, and Innovation at every touchpoint."
            copy="Altair Technologies provides expert consulting services to help businesses thrive and succeed in today's competitive market. Our team provides tailored solutions to enhance business performance, drive growth, and achieve strategic goals."
          />
          <div className="pillar-grid">
            <div className="pillar-card">
              <h3>Industry Leading Expertise</h3>
              <p>With years of experience in IT consulting, staffing, and software development, we deliver tailored solutions that drive business success across critical domains.</p>
            </div>
            <div className="pillar-card">
              <h3>Quality Driven Approach</h3>
              <p>We prioritize excellence in everything we do, from sourcing top-tier talent to building innovative, scalable technology solutions that pass strict audits.</p>
            </div>
            <div className="pillar-card">
              <h3>Commitment to Innovation</h3>
              <p>We stay ahead of industry trends, integrating the latest advancements in AI, cloud computing, and cybersecurity to future-proof your business operations.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Client Stories */}
      <section className="section container">
        <SectionHeading
          kicker="Client Stories"
          title="Profound impact through trusted IT consultancy."
          copy="Discover how our clients have benefited from the expertise and support of Altair Technologies. Their success stories reflect the profound impact of our IT consultancy services on their businesses."
        />
        <div className="case-grid">
          <div className="case-card">
            <span>01</span>
            <div>
              <p className="eyebrow">AHD · CTO</p>
              <h2>Digital Transformation in Healthcare</h2>
              <p>“Altair’s software development capabilities have been instrumental in driving our digital transformation journey, enabling us to deliver innovative solutions to our customers.”</p>
              <a href="/project-pages/ahd" className="card-link">View Project Story <Arrow small /></a>
            </div>
          </div>
          <div className="case-card">
            <span>02</span>
            <div>
              <p className="eyebrow">DX UTILITY · HR Director</p>
              <h2>High-Impact IT Staffing & Sourcing</h2>
              <p>“The IT staffing and consulting services provided by Altair have been invaluable in sourcing top talent and optimizing our technology strategies for business growth.”</p>
              <a href="/it-staffing" className="card-link">Explore Staffing <Arrow small /></a>
            </div>
          </div>
          <div className="case-card">
            <span>03</span>
            <div>
              <p className="eyebrow">RX GUID · CIO</p>
              <h2>Training & Operational Excellence</h2>
              <p>“The training and innovation programs offered by Altair have empowered our teams to embrace emerging technologies and drive operational excellence.”</p>
              <a href="/training" className="card-link">Explore Training <Arrow small /></a>
            </div>
          </div>
        </div>
      </section>

      {/* Quote */}
      <section className="quote-section">
        <div className="container quote-layout">
          <p className="eyebrow">A Better Way Forward</p>
          <blockquote>“Innovation distinguishes between a leader and a follower.”</blockquote>
          <cite>— Steve Jobs</cite>
          <Button href="/contact">Start a Conversation</Button>
        </div>
      </section>

      {/* Home Contact Section */}
      <section className="section container contact-grid">
        <div>
          <SectionHeading
            kicker="Contact Us"
            title="Have queries or need assistance? Connect with our team today."
            copy="We are dedicated to helping you harness the full potential of our IT consultancy services. Send us a message and we’ll get back to you shortly."
          />
          <div className="contact-details">
            <div className="contact-item">
              <span className="contact-item-icon">📍</span>
              <div>
                <strong>Office Address</strong>
                <p>11675 Century Dr, Unit A<br />Alpharetta, Georgia 30009</p>
              </div>
            </div>
            <div className="contact-item">
              <span className="contact-item-icon">📞</span>
              <div>
                <strong>Call Us</strong>
                <p><a href="tel:+17206753656">+1 (720)-675-3656</a></p>
              </div>
            </div>
            <div className="contact-item">
              <span className="contact-item-icon">✉️</span>
              <div>
                <strong>Email Us</strong>
                <p><a href="mailto:admin@altairtechnologiesinc.com">admin@altairtechnologiesinc.com</a></p>
              </div>
            </div>
          </div>
        </div>
        <ContactFormCard />
      </section>
    </>
  )
}

/* =========================================================================
   PAGE 2: ABOUT US (/about-us)
   ========================================================================= */
function About() {
  return (
    <PageFrame
      label="About Altair Technologies Inc."
      title={<>A technology solutions company<br /><em>with purpose and vision.</em></>}
      intro="With a passion for innovation and a commitment to excellence, we help businesses across industries accelerate growth, enhance performance, and stay ahead in a fast-evolving digital world."
    >
      <section className="section container">
        <div className="media-split">
          <div>
            <SectionHeading
              kicker="Who We Are"
              title="Scalable, future-ready solutions that solve real-world challenges."
              copy="Altair Technologies Inc. is a technology solutions company specializing in software development, IT staffing, consulting, and technical training. Our team of expert engineers, strategists, and innovators work closely with clients to deliver scalable, future-ready solutions that solve real-world challenges."
            />
            <p>
              We take a client-first, agile approach that focuses on deep collaboration, rapid iteration, and scalable solutions. Our process combines domain knowledge with emerging technologies to deliver measurable results while forming lasting partnerships built on trust and shared success.
            </p>
          </div>
          <div className="split-img-frame">
            <img
              src="/tech-team-collaboration.jpg"
              alt="Engineering Collaboration at Altair Technologies"
              className="split-img"
            />
          </div>
        </div>

        <div style={{ marginTop: '40px' }} className="dark-card">
          <p className="eyebrow">Our Mission & Vision</p>
          <h3>Empower businesses and individuals through technology that’s not just smart—but transformational.</h3>
          <p>We aim to be a trusted partner for organizations seeking to build cutting-edge software, access top tech talent, and embrace digital transformation.</p>
          <p style={{ marginTop: '16px' }}><strong>Our Vision:</strong> To create a world where innovation is accessible, scalable, and deeply impactful—driven by people who are passionate about solving problems and building what’s next.</p>
        </div>
      </section>

      <section className="section light-tint">
        <div className="container">
          <SectionHeading
            kicker="What Sets Us Apart"
            title="Partnerships rooted in transparency, agility, and results."
            copy="At Altair, we combine technical depth with business understanding. We deliver more than just services, we deliver partnerships rooted in transparency, agility, and results."
          />
          <div className="values-grid">
            <div className="value">
              <span>01</span>
              <h3>Technical Depth & Business Acumen</h3>
              <p>We bridge the divide between technology execution and business objectives to generate genuine ROI.</p>
            </div>
            <div className="value">
              <span>02</span>
              <h3>Hands-On Innovation</h3>
              <p>Our commitment to continuous learning and internal R&D ensures solutions remain modern and future-proof.</p>
            </div>
            <div className="value">
              <span>03</span>
              <h3>Ethical Practices & Integrity</h3>
              <p>We believe in doing the right thing, building lasting trust, and designing scalable solutions with transparency.</p>
            </div>
            <div className="value">
              <span>04</span>
              <h3>Exceeding Expectations</h3>
              <p>Whether we’re coding, consulting, or training, we do it with purpose and a drive to make technology work better for everyone.</p>
            </div>
          </div>
        </div>
      </section>
    </PageFrame>
  )
}

/* =========================================================================
   PAGE 3: WHAT WE DO (/what-we-do)
   ========================================================================= */
function WhatWeDo() {
  return (
    <PageFrame
      label="Capabilities & Offerings"
      title={<>What We Do:<br /><em>End-to-End Technology Solutions.</em></>}
      intro="At Altair Technologies Inc., we deliver end-to-end technology solutions through software development, IT staffing, and innovation-driven training—empowering businesses with smart tech, skilled talent, and future-ready engineering capabilities."
    >
      <section className="section container">
        <div className="large-card-grid">
          <div className="large-card">
            <span className="card-number">01</span>
            <h2>Software Development</h2>
            <p>We build scalable, secure, and high-performance software solutions tailored to your business goals. From AI to cybersecurity and full-stack systems, our development teams use the latest technologies to drive innovation, efficiency, and digital transformation across a wide range of industries.</p>
            <a href="/software-development" className="card-link">Explore Software Development <Arrow small /></a>
          </div>
          <div className="large-card">
            <span className="card-number">02</span>
            <h2>IT Staffing & Consulting</h2>
            <p>Our IT staffing and consulting services connect businesses with top-tier tech professionals, ensuring the right talent for every project. We provide flexible staffing models—contract, full-time, and project-based—so clients can scale quickly while maintaining quality and meeting critical deadlines.</p>
            <a href="/it-staffing-and-consulting" className="card-link">Explore Staffing & Consulting <Arrow small /></a>
          </div>
          <div className="large-card">
            <span className="card-number">03</span>
            <h2>Training & Innovation</h2>
            <p>We cultivate engineering talent through hands-on training, mentorship, and real-world innovation labs. Our programs focus on emerging technologies and problem-solving, empowering professionals to stay ahead in a competitive tech landscape and helping businesses build agile, skilled, and future-ready teams.</p>
            <a href="/training-and-innovation" className="card-link">Explore Training & Innovation <Arrow small /></a>
          </div>
        </div>
      </section>
    </PageFrame>
  )
}

/* =========================================================================
   PAGE 4: SOFTWARE DEVELOPMENT (/software-development)
   ========================================================================= */
function SoftwareDevelopment() {
  return (
    <PageFrame
      label="Engineering & Development"
      title={<>Software Development<br /><em>Built for Speed, Scale & Security.</em></>}
      intro="We design and build cutting-edge software solutions tailored to business needs, leveraging the latest technologies in AI, cloud computing, and full-stack development to drive innovation and efficiency."
    >
      <section className="section container">
        <div className="large-card-grid">
          <div className="large-card">
            <span className="card-number">01</span>
            <h2>Artificial Intelligence (AI)</h2>
            <p>We craft intelligent AI solutions that automate decisions, predict outcomes, and personalize user experiences. From machine learning to NLP, we help businesses unlock deeper insights and smarter operations through custom-built, future-focused AI systems.</p>
            <a href="/ai" className="card-link">Explore AI Capabilities <Arrow small /></a>
          </div>
          <div className="large-card">
            <span className="card-number">02</span>
            <h2>Cyber Security</h2>
            <p>Our cybersecurity solutions protect your digital assets with proactive defense strategies, threat detection, and risk mitigation. We build secure, compliant systems that safeguard data and infrastructure ensuring business continuity and peace of mind.</p>
            <a href="/cyber-security" className="card-link">Explore Cyber Security <Arrow small /></a>
          </div>
          <div className="large-card">
            <span className="card-number">03</span>
            <h2>Data Science & Engineering</h2>
            <p>We turn raw data into actionable intelligence with end-to-end data science and engineering solutions. From data pipelines to predictive modeling, we help businesses make confident, data-driven decisions that fuel growth and innovation.</p>
            <a href="/data-sceinece" className="card-link">Explore Data Science <Arrow small /></a>
          </div>
        </div>
        <div style={{ marginTop: '20px' }}>
          <div className="large-card" style={{ maxWidth: '600px' }}>
            <span className="card-number">04</span>
            <h2>Full Stack Development</h2>
            <p>Our full stack development services bring ideas to life with robust front-end experiences and powerful back-end systems. We build scalable web and mobile applications using modern frameworks that deliver performance, flexibility, and seamless user engagement.</p>
            <a href="/full-stack-development" className="card-link">Explore Full Stack <Arrow small /></a>
          </div>
        </div>
      </section>
    </PageFrame>
  )
}

/* =========================================================================
   PAGE 5: AI (/ai)
   ========================================================================= */
function AIPage() {
  return (
    <PageFrame
      label="Software Development / AI"
      title={<>Transforming Ideas into<br /><em>Intelligent Solutions.</em></>}
      intro="We design, build, and deploy impactful AI systems. Our scopes include predictive analytics, natural language processing, intelligent automation, and computer vision. Our goal is not a shiny object—our goal is to make real solutions, create value, and ultimately drive business success with pragmatic and robust AI."
    >
      <section className="section container">
        <div className="media-split reverse">
          <div>
            <SectionHeading
              kicker="Our AI Capabilities"
              title="Pragmatic AI for actionable business intent."
              copy="At Altair, we are not treating AI like a one-size-fits-all tool. We are building solutions that meet your business intent; whether that's predicting outcomes, automating decisions or enabling different possibilities for work. Every solution is actionable, scalable and secure."
            />
          </div>
          <div className="split-img-frame">
            <img
              src="/hero-ai-tech.jpg"
              alt="Altair AI & Machine Learning Systems"
              className="split-img"
            />
          </div>
        </div>

        <div className="feature-list" style={{ marginTop: '40px' }}>
          {[
            ['01', 'Predictive Analytics', 'Forecasting, risk modeling, and decision support with feedback loops to keep models accurate.'],
            ['02', 'Computer Vision', 'Image recognition, inspection, and OCR with edge-ready deployments.'],
            ['03', 'Natural Language Processing', 'Chatbots, search, and document analysis using LLMs with guardrails and auditing.'],
            ['04', 'Security & Governance', 'Access controls, data masking, and compliance-first AI deployments.'],
            ['05', 'AI Agents', 'Digital teammates that learn, decide, and act, freeing people for meaningful work.'],
            ['06', 'MLOps', 'CI/CD for models, monitoring for drift, latency, cost, and safe rollbacks.'],
          ].map(([num, title, copy]) => (
            <div className="feature-row" key={title}>
              <span className="feature-num">{num}</span>
              <h3>{title}</h3>
              <p>{copy}</p>
              <Arrow small />
            </div>
          ))}
        </div>
      </section>

      {/* Why AI With Us */}
      <section className="section light-tint">
        <div className="container">
          <SectionHeading
            kicker="Why AI With Us"
            title="Practical, people-first artificial intelligence."
            copy="Our systems help you decide faster, automate routine work, and uncover insights that matter, securely and at scale."
          />
          <div className="pillar-grid">
            <div className="pillar-card">
              <h3>1. Human-Centered Design</h3>
              <p>We don't just create models, we develop AI that is trusted and utilized by people. Each solution is designed for real-world workflows, so it feels organic and seamless, not forced.</p>
            </div>
            <div className="pillar-card">
              <h3>2. Scalable Intelligence</h3>
              <p>Our AI is built to scale with your business. From proof-of-concept to enterprise scale, we make sure that performance, security, and cost are factored in at each stage.</p>
            </div>
            <div className="pillar-card">
              <h3>3. Trusted & Responsible AI</h3>
              <p>We incorporate fairness, transparency, and compliance into every deployment. Your data is secured, and AI decisions are explainable.</p>
            </div>
            <div className="pillar-card">
              <h3>4. Rapid Business Impact</h3>
              <p>We focus on generating measurable results quickly. Whether we are automating tasks or generating insights, we produce meaningful outcomes using AI.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Real-World Intelligence Delivered */}
      <section className="section container">
        <SectionHeading
          kicker="🚀 Real-World Intelligence, Delivered"
          title="Battle-tested AI deployments with proven results."
          copy="At Altair Technologies Inc., we’ve transformed ambitious ideas into AI-powered realities designing and deploying intelligent systems that solve complex challenges across industries. Our AI expertise isn't theoretical; it’s rooted in real-world deployments that have delivered measurable value."
        />
        <div className="showcase-grid">
          <div className="showcase-card">
            <h3>Generative AI Assistants</h3>
            <p>Developed custom GenAI chatbots for an insurance provider to automate claims processing and improve customer response times by 70%.</p>
          </div>
          <div className="showcase-card">
            <h3>Predictive Healthcare Models</h3>
            <p>Engineered deep learning models to forecast patient readmissions and improve care planning, reducing avoidable hospitalizations in a major health network.</p>
          </div>
          <div className="showcase-card">
            <h3>Retail Recommendation Engines</h3>
            <p>Implemented real-time product recommendation systems for e-commerce clients, boosting average cart value and customer retention.</p>
          </div>
          <div className="showcase-card">
            <h3>Financial Fraud Detection</h3>
            <p>Built anomaly detection algorithms for a banking client to flag high-risk transactions in real-time, enhancing fraud prevention with 90% accuracy.</p>
          </div>
          <div className="showcase-card">
            <h3>NLP for Legal & Compliance</h3>
            <p>Automated document classification and policy extraction using NLP for a legal services firm, cutting manual processing time by over 60%.</p>
          </div>
          <div className="showcase-card">
            <h3>AI-Driven Demand Forecasting</h3>
            <p>Deployed forecasting engines for a telecom company to anticipate user demand spikes and optimize infrastructure scaling.</p>
          </div>
        </div>
      </section>
    </PageFrame>
  )
}

/* =========================================================================
   PAGE 6: CYBER SECURITY (/cyber-security)
   ========================================================================= */
function CyberSecurity() {
  return (
    <PageFrame
      label="Software Development / Cyber Security"
      title={<>Cybersecurity & Privacy:<br /><em>Resilience by Design.</em></>}
      intro="Our strategic, intelligence-driven approach helps organizations navigate cybersecurity and privacy risks while safeguarding people, operations, and reputation worldwide."
    >
      <section className="section container">
        <div className="media-split">
          <div>
            <SectionHeading
              kicker="Strengthen Resilience"
              title="Cybersecurity Consulting & Expert Services."
              copy="We help organizations move from reactive defense to proactive cyber resilience through comprehensive assessment, strategic roadmap planning, and tailored remediation."
            />
          </div>
          <div className="split-img-frame">
            <img
              src="/cybersecurity-shield.jpg"
              alt="Altair Cybersecurity Operations Center"
              className="split-img"
            />
          </div>
        </div>

        <div className="feature-list" style={{ marginTop: '40px' }}>
          {[
            ['01', 'Cyber Strategy & Planning', 'Develop a comprehensive cybersecurity strategy and roadmap that bridges current and future states. Actionable plans aligned with industry best practices and regulatory requirements.'],
            ['02', 'Security Assessment Services', 'Evaluate your security posture across cloud platforms, network infrastructure, and operational controls. Measure Zero Trust maturity, firewall configurations, and architecture design.'],
            ['03', 'Compliance Management Services', 'Transform security posture from reactive into proactive. Align programs with business objectives while navigating HIPAA, SOC 2, and GDPR standards.'],
            ['04', 'Design & Implementation Services', 'Enhance security posture through customized operational tools, automated monitoring, and seamless integration with existing architecture.'],
            ['05', 'Cyber Risk Management', 'Analyze your risk landscape, prioritize vulnerabilities based on business impact, and develop tailored remediation strategies that balance security with operations.'],
            ['06', 'Transformation Services (SASE & Zero Trust)', 'Specialized expertise guiding organizations transforming from traditional environments into next-gen application-aware SASE and Zero Trust architectures.'],
          ].map(([num, title, copy]) => (
            <div className="feature-row" key={title}>
              <span className="feature-num">{num}</span>
              <h3>{title}</h3>
              <p>{copy}</p>
              <Arrow small />
            </div>
          ))}
        </div>
      </section>

      {/* Battle-Tested Security in Action */}
      <section className="section light-tint">
        <div className="container">
          <SectionHeading
            kicker="🛡️ Battle-Tested Security in Action"
            title="Real-world complexity, proven outcomes."
            copy="At Altair Technologies Inc., we’ve gone beyond theory—we’ve implemented advanced cybersecurity solutions in high-stakes environments where failure isn’t an option. From safeguarding healthcare systems to securing millions in banking transactions."
          />
          <div className="showcase-grid">
            <div className="showcase-card">
              <h3>Zero Trust Frameworks</h3>
              <p>Designed and deployed Zero Trust architectures for enterprise clients to eliminate lateral threats and enhance access control across hybrid environments.</p>
            </div>
            <div className="showcase-card">
              <h3>Threat Detection & Response</h3>
              <p>Implemented real-time monitoring systems for a retail giant, reducing threat response time by 60% using AI-powered analytics.</p>
            </div>
            <div className="showcase-card">
              <h3>Cloud Security Hardening</h3>
              <p>Secured multi-cloud infrastructure for a telecom provider by enforcing identity-based policies, encryption protocols, and automated compliance alerts.</p>
            </div>
            <div className="showcase-card">
              <h3>Ransomware Protection</h3>
              <p>Built early-warning and containment systems for insurance and fintech clients, preventing breaches and minimizing recovery downtime.</p>
            </div>
            <div className="showcase-card">
              <h3>Pen Testing & Red Teaming</h3>
              <p>Conducted simulated attacks for healthcare networks to reveal vulnerabilities, leading to a 40% improvement in security posture.</p>
            </div>
            <div className="showcase-card">
              <h3>Compliance-Driven Implementations</h3>
              <p>Helped clients pass HIPAA, SOC 2, and GDPR audits by integrating real-time security dashboards, automated logs, and governance policies.</p>
            </div>
          </div>
        </div>
      </section>
    </PageFrame>
  )
}

/* =========================================================================
   PAGE 7: DATA SCIENCE & ENGINEERING (/data-sceinece)
   ========================================================================= */
function DataScience() {
  return (
    <PageFrame
      label="Software Development / Data Science"
      title={<>Data Science & Engineering:<br /><em>Powering Smarter Decisions.</em></>}
      intro="We help organizations turn data into clarity and action. At Altair Technologies Inc., our data science and engineering solutions unlock insights, drive strategy, and fuel intelligent decision-making across industries."
    >
      <section className="section container">
        <div className="media-split reverse">
          <div>
            <SectionHeading
              kicker="📊 Data That Drove the Difference"
              title="From scattered and static to strategic and actionable."
              copy="At Altair Technologies Inc., we’ve successfully implemented data-driven solutions that go beyond dashboards and dive deep into predictive intelligence. Our work spans industries, solving high-impact challenges using scalable data engineering, machine learning, and advanced analytics."
            />
          </div>
          <div className="split-img-frame">
            <img
              src="/data-science-analytics.jpg"
              alt="Altair Holographic Data Science Ecosystem"
              className="split-img"
            />
          </div>
        </div>

        <div className="showcase-grid" style={{ marginTop: '40px' }}>
          <div className="showcase-card">
            <h3>Healthcare Predictive Analytics</h3>
            <p>Developed ML models to predict patient readmissions and detect care gaps, helping hospitals improve treatment planning and resource allocation.</p>
          </div>
          <div className="showcase-card">
            <h3>Customer Behavior Modeling</h3>
            <p>Built clustering and segmentation models for a retail client to personalize product offerings, increasing user engagement and campaign ROI.</p>
          </div>
          <div className="showcase-card">
            <h3>Telecom Churn Forecasting</h3>
            <p>Implemented a real-time churn prediction system using historical usage data, enabling proactive customer retention and reducing churn rates significantly.</p>
          </div>
          <div className="showcase-card">
            <h3>Financial KPI Dashboards</h3>
            <p>Created executive-level dashboards for a banking client using Power BI, delivering real-time visibility into financial performance, risk indicators, and compliance.</p>
          </div>
          <div className="showcase-card">
            <h3>Data Lake Architecture</h3>
            <p>Designed and deployed a cloud-based data lake for an insurance provider, centralizing scattered datasets for better governance and advanced analytics.</p>
          </div>
          <div className="showcase-card">
            <h3>Inventory Optimization</h3>
            <p>Engineered demand forecasting models and supply chain analytics for a global retailer, reducing overstock and improving logistics efficiency.</p>
          </div>
        </div>
      </section>
    </PageFrame>
  )
}

/* =========================================================================
   PAGE 8: FULL STACK DEVELOPMENT (/full-stack-development)
   ========================================================================= */
function FullStack() {
  return (
    <PageFrame
      label="Software Development / Full Stack"
      title={<>Robust Full Stack Solutions<br /><em>Built for Performance, Scale, and Speed.</em></>}
      intro="From front-end brilliance to back-end muscle, we build full stack applications using modern frameworks, scalable architectures, and high-performance systems tailored to power complex, data-intensive, real-world operations."
    >
      <section className="section container">
        <div className="media-split">
          <div>
            <SectionHeading
              kicker="💻 Systems We’ve Built, Stacks We’ve Mastered"
              title="Architecting applications for millions of users and massive datasets."
              copy="At Altair Technologies Inc., we’ve architected and delivered full stack applications that support millions of users, massive datasets, and real-time performance needs. Whether it's a fintech dashboard, a healthcare portal, or a high-traffic e-commerce system."
            />
          </div>
          <div className="split-img-frame">
            <img
              src="/fullstack-architecture.jpg"
              alt="Altair Technologies Full Stack Cloud Architecture"
              className="split-img"
            />
          </div>
        </div>
        <div className="showcase-grid" style={{ marginTop: '40px' }}>
          <div className="showcase-card">
            <h3>Enterprise Web Platforms</h3>
            <p>Developed end-to-end applications using Java, .NET, and Python and integrated with secure APIs, background jobs, and role-based access for banking and insurance clients.</p>
          </div>
          <div className="showcase-card">
            <h3>Interactive Front Ends</h3>
            <p>Built responsive, dynamic UIs with React, Angular, and Vue.js that deliver fast, intuitive user experiences across devices and browsers.</p>
          </div>
          <div className="showcase-card">
            <h3>Data-Heavy Applications</h3>
            <p>Engineered systems with PostgreSQL, MongoDB, SQL Server, and NoSQL solutions to handle millions of records with optimized queries and indexing strategies.</p>
          </div>
          <div className="showcase-card">
            <h3>Microservices & Event-Driven</h3>
            <p>Implemented scalable backend infrastructures using Docker, Kubernetes, and Kafka for asynchronous processing, real-time data sync, and high availability.</p>
          </div>
          <div className="showcase-card">
            <h3>Distributed Processing</h3>
            <p>Built custom job queues and worker-based processing to handle large volumes of concurrent transactions for telecom and retail operations.</p>
          </div>
          <div className="showcase-card">
            <h3>CI/CD & DevOps Pipelines</h3>
            <p>Deployed robust CI/CD workflows ensuring seamless updates, rollbacks, and version control across staging and production environments.</p>
          </div>
        </div>
      </section>
    </PageFrame>
  )
}

/* =========================================================================
   PAGE 9: IT STAFFING & CONSULTING (/it-staffing-and-consulting)
   ========================================================================= */
function StaffingConsulting() {
  return (
    <PageFrame
      label="Talent & Strategy"
      title={<>IT Staffing & Consulting:<br /><em>Move Faster, Innovate Smarter.</em></>}
      intro="At Altair Technologies Inc., we connect businesses with top-tier tech talent and strategic consulting expertise. Whether you're scaling a development team or navigating digital transformation, our staffing and consulting services are tailored to help you move faster, innovate smarter, and deliver with confidence."
    >
      <section className="section container">
        <div className="media-split" style={{ marginBottom: '40px' }}>
          <div>
            <SectionHeading
              kicker="Expertise on Demand"
              title="Tailored workforce models to scale without compromise."
              copy="Our consultants go beyond mere advice; they integrate seamlessly into your teams to execute and enhance your technical roadmap from strategic planning to delivery."
            />
          </div>
          <div className="split-img-frame">
            <img
              src="/tech-team-collaboration.jpg"
              alt="Engineering Team Augmentation"
              className="split-img"
            />
          </div>
        </div>

        <div className="split-cards">
          <div className="dark-card">
            <p className="eyebrow">IT Staffing Division</p>
            <h2>Speed & Precision in Talent Acquisition</h2>
            <p>At Altair, our IT staffing services are crafted to address your specific talent needs with speed and precision. We offer contract, full-time, and remote-ready professionals, all meticulously vetted for technical expertise and cultural fit.</p>
            <p style={{ marginTop: '14px' }}>Whether you require a complete development team or a specialized engineer, we provide access to top-tier talent across software developers, data scientists, DevOps engineers, and system architects.</p>
            <div style={{ marginTop: '24px' }}>
              <Button href="/it-staffing">Explore IT Staffing</Button>
            </div>
          </div>
          <div className="outline-card">
            <p className="eyebrow">Consulting Practice</p>
            <h2>Bridging Business Goals & Tech Execution</h2>
            <p>Our consulting services bridge the divide between your business objectives and technology execution. We provide hands-on expertise in digital transformation, cloud migration, architecture planning, and enterprise system design.</p>
            <p style={{ marginTop: '14px' }}>Our consultants go beyond mere advice; they integrate seamlessly into your teams to execute and enhance your technical roadmap from strategic planning to delivery.</p>
            <div style={{ marginTop: '24px' }}>
              <Button href="/contact">Talk with a Consultant</Button>
            </div>
          </div>
        </div>
      </section>
    </PageFrame>
  )
}

/* =========================================================================
   PAGE 10: IT STAFFING (/it-staffing)
   ========================================================================= */
function ITStaffing() {
  return (
    <PageFrame
      label="IT Staffing"
      title={<>Tech Talent That Delivers<br /><em>from Day One.</em></>}
      intro="At Altair Technologies Inc., we provide flexible, high-performance IT staffing solutions. From niche experts to full development teams, we match businesses with talent that integrates fast and delivers real results."
    >
      <section className="section container">
        <SectionHeading
          kicker="Services We Offer"
          title="Fast, flexible, and future-proof staffing models."
          copy="We understand that technology teams thrive on the right people. That’s why our IT staffing services are designed to help you scale without compromise. Whether tackling a tight deadline or building a long-term team."
        />
        <div className="feature-list">
          {[
            ['01', 'Contract Staffing', 'Access skilled professionals for short-term or project-based roles in software engineering, DevOps, cloud, data, and more, without long-term commitments.'],
            ['02', 'Permanent Placement', 'Hire full-time tech talent matched to your company culture and technical requirements, with rigorous vetting and onboarding support.'],
            ['03', 'Remote & Hybrid Staffing', 'Tap into a global talent pool with secure, remote-ready professionals equipped to work across time zones and tech stacks.'],
            ['04', 'Team Augmentation', 'Quickly scale your in-house team with engineers and specialists who can integrate seamlessly into your workflows and deliver immediately.'],
            ['05', 'Tech-Specific Talent', 'From Java and Python developers to full stack engineers, data scientists, and security analysts—we find talent that fits your unique ecosystem.'],
          ].map(([num, title, copy]) => (
            <div className="feature-row" key={title}>
              <span className="feature-num">{num}</span>
              <h3>{title}</h3>
              <p>{copy}</p>
              <Arrow small />
            </div>
          ))}
        </div>
      </section>
    </PageFrame>
  )
}

/* =========================================================================
   PAGE 11: TRAINING & INNOVATION (/training-and-innovation)
   ========================================================================= */
function TrainingInnovation() {
  return (
    <PageFrame
      label="Training & Innovation"
      title={<>Bridging Knowledge &<br /><em>Real-World Application.</em></>}
      intro="At Altair Technologies Inc., our Training & Innovation division bridges knowledge and real-world application. We equip professionals with in-demand tech skills while nurturing groundbreaking internal projects in AI and cybersecurity—fueling both individual growth and organizational transformation."
    >
      <section className="section container split-cards">
        <div className="dark-card">
          <p className="eyebrow">Training Programs</p>
          <h2>Transform Passionate Learners into Confident Engineers</h2>
          <p>Covering Java, SQL, AI, and full stack development, we go beyond classroom learning with real-world projects, one-on-one mentorship, and continuous hands-on practice.</p>
          <p style={{ marginTop: '14px' }}>Whether you're upskilling or just starting out, our immersive approach ensures you graduate with the technical expertise and practical experience needed to thrive.</p>
          <div style={{ marginTop: '24px' }}>
            <Button href="/training">View Training Programs</Button>
          </div>
        </div>
        <div className="outline-card">
          <p className="eyebrow">Innovation Lab</p>
          <h2>Engineering What’s Next</h2>
          <p>In our internal innovation lab, we conceptualize ideas, challenge boundaries, and initiate new technologies. From building AI-driven knowledge assistants to advanced cybersecurity detection tools, we develop prototypes to provide value now and explore future possibilities.</p>
          <div style={{ marginTop: '24px' }}>
            <Button href="/contact">Partner With Innovation Lab</Button>
          </div>
        </div>
      </section>
    </PageFrame>
  )
}

/* =========================================================================
   PAGE 12: TRAINING / SKILLS LAB (/training)
   ========================================================================= */
function TrainingPage() {
  return (
    <PageFrame
      label="Altair Skills Lab"
      title={<>Training Programs That<br /><em>Build Bold Engineers.</em></>}
      intro="At Altair Technologies Inc., we empower tech talent through immersive, real-world training. Our programs are designed to upskill aspiring developers and professionals with the tools to build, lead, and innovate."
    >
      <section className="section container">
        <div className="media-split">
          <div>
            <SectionHeading
              kicker="💡 Learn. Build. Excel."
              title="Connecting theory with practice through hands-on mentoring."
              copy="Our training programs do more than teach technology—they prepare you for a career. Each course is designed to connect theory with practice by providing both hands-on experience and real-world mentoring by industry professionals."
            />
          </div>
          <div className="split-img-frame">
            <img
              src="/skills-lab-training.jpg"
              alt="Altair Skills Lab Hands-On Engineering Workshop"
              className="split-img"
            />
          </div>
        </div>
        <div className="feature-list" style={{ marginTop: '40px' }}>
          {[
            ['01', 'Java Development', 'Develop skills in object-oriented programming, multithreading, Spring Boot, and APIs through real backend projects.'],
            ['02', 'SQL & Database Design', 'Learn to write complex queries, performance tuning, administering relational and NoSQL databases, and applying database design theory in enterprise projects.'],
            ['03', 'Artificial Intelligence (AI)', 'Learn all aspects of ML, deep-learning, and model deployment through hands-on, real-world projects while using TensorFlow, Python, and real datasets.'],
            ['04', 'Full Stack Development', 'Combine front-end frameworks such as React or Angular and backend logic using Java, Python, or .NET, and then deploy your application using DevOps tools.'],
          ].map(([num, title, copy]) => (
            <div className="feature-row" key={title}>
              <span className="feature-num">{num}</span>
              <h3>{title}</h3>
              <p>{copy}</p>
              <Arrow small />
            </div>
          ))}
        </div>
      </section>
    </PageFrame>
  )
}

/* =========================================================================
   PAGE 13: CASE STUDIES (/case-studies)
   ========================================================================= */
function CaseStudies() {
  return (
    <PageFrame
      label="Client Stories & Impact"
      title={<>Proof in the Progress:<br /><em>Case Studies & Testimonials.</em></>}
      intro="Discover how our clients have benefited from the expertise and support of Altair Technologies Inc. Their success stories reflect the profound impact of our IT consultancy services on their businesses."
    >
      <section className="section container">
        <div className="media-split reverse" style={{ marginBottom: '50px' }}>
          <div>
            <SectionHeading
              kicker="Proven Enterprise Impact"
              title="Transforming complex requirements into scalable digital systems."
              copy="Explore real-world engagements where Altair engineered mission-critical software, placed elite technical talent, and upskilled enterprise teams to achieve sustainable technological advantage."
            />
          </div>
          <div className="split-img-frame">
            <img
              src="/enterprise-case-study.jpg"
              alt="Altair Enterprise Solutions Case Study Impact"
              className="split-img"
            />
          </div>
        </div>
        <div className="case-grid">
          <div className="case-card">
            <span>01</span>
            <div>
              <p className="eyebrow">Healthcare Technology</p>
              <h2>AHD — Automated Digital Platform</h2>
              <p>Altair partnered with AHD to translate a complex healthcare business need into a clear, scalable software experience with automated clinical workflows and patient scheduling.</p>
              <a href="/project-pages/ahd" className="card-link">Read Full Case Study <Arrow small /></a>
            </div>
          </div>
          <div className="case-card">
            <span>02</span>
            <div>
              <p className="eyebrow">Enterprise IT Staffing</p>
              <h2>DX Utility — Workforce Optimization</h2>
              <p>“The IT staffing and consulting services provided by Altair have been invaluable in sourcing top talent and optimizing our technology strategies for business growth.” — HR Director</p>
              <a href="/it-staffing" className="card-link">Explore Staffing Solutions <Arrow small /></a>
            </div>
          </div>
          <div className="case-card">
            <span>03</span>
            <div>
              <p className="eyebrow">Training & Upskilling</p>
              <h2>Carelon Rx / RX Guid — Skills Lab</h2>
              <p>“The training and innovation programs offered by Altair have empowered our teams to embrace emerging technologies and drive operational excellence.” — CIO</p>
              <a href="/training" className="card-link">Explore Skills Lab <Arrow small /></a>
            </div>
          </div>
        </div>
      </section>

      <section className="section dark-section">
        <div className="container testimonial">
          <p className="eyebrow">Client Testimonial</p>
          <blockquote>“Altair’s software development capabilities have been instrumental in driving our digital transformation journey, enabling us to deliver innovative solutions to our customers.”</blockquote>
          <cite>— CTO · AHD</cite>
        </div>
      </section>
    </PageFrame>
  )
}

/* =========================================================================
   PAGE 14: AHD PROJECT PAGE (/project-pages/ahd)
   ========================================================================= */
function AHD() {
  return (
    <PageFrame
      label="Case Study / Healthcare"
      title={<>AHD Platform:<br /><em>Digital Transformation in Motion.</em></>}
      intro="A comprehensive look at the challenge, technical architecture, and measurable outcomes delivered for AHD."
    >
      <section className="section container">
        <div className="media-split" style={{ marginBottom: '40px' }}>
          <div>
            <SectionHeading
              kicker="The Challenge"
              title="Modernizing clinical workflows and patient engagement."
              copy="Altair partnered with AHD to translate a complex business need into a clear, scalable software experience. The client needed to bridge fragmented legacy records, streamline provider communications, and meet stringent HIPAA standards with zero downtime."
            />
          </div>
          <div className="split-img-frame">
            <img
              src="/enterprise-case-study.jpg"
              alt="Altair AHD Healthcare Platform Telemetry"
              className="split-img"
            />
          </div>
        </div>
        <div className="dark-card" style={{ maxWidth: '800px', margin: '0 auto' }}>
          <p className="eyebrow">The Solution</p>
          <h3>Modular, HIPAA-compliant microservices architecture.</h3>
          <p>We engineered an end-to-end web platform using modern React front ends, secure Java/Spring Boot microservices, and automated CI/CD pipelines.</p>
        </div>
      </section>

      <section className="section light-tint">
        <div className="container">
          <SectionHeading kicker="Key Features" title="Engineered for high reliability and clinical precision." />
          <div className="pillar-grid">
            <div className="pillar-card">
              <span className="card-number">01</span>
              <h3>Clear Product Direction</h3>
              <p>Actionable roadmaps aligned with regulatory requirements, reducing operational latency and improving staff efficiency.</p>
            </div>
            <div className="pillar-card">
              <span className="card-number">02</span>
              <h3>Scalable Technical Foundation</h3>
              <p>High-availability cloud infrastructure with automated database indexing for millions of healthcare records.</p>
            </div>
            <div className="pillar-card">
              <span className="card-number">03</span>
              <h3>Built Around the User</h3>
              <p>Intuitive clinician and patient dashboards designed for rapid adoption across mobile and desktop devices.</p>
            </div>
          </div>
        </div>
      </section>
    </PageFrame>
  )
}

/* =========================================================================
   PAGE 15: CAREERS (/careers)
   ========================================================================= */
function Careers() {
  return (
    <PageFrame
      label="Careers at Altair"
      title={<>Do work that<br /><em>moves things forward.</em></>}
      intro="Join a team of engineers, strategists, and innovators building what’s next. Altair Technologies, Inc. has job openings for talented professionals across software, data, quality, and technology consulting."
    >
      <section className="section container">
        <SectionHeading
          kicker="Current Job Openings"
          title="Bring your curiosity. We’ll bring the challenge."
          copy="Positions are located in Alpharetta, GA and various unanticipated locations throughout the U.S. All positions are eligible for a referral bonus through our employee referral program."
        />
        <div className="jobs">
          {/* Job 1 */}
          <div className="job-card">
            <div className="job-header">
              <div>
                <p className="eyebrow">Job ID: 24ATI01 · Full Time</p>
                <h2>Software Engineer</h2>
                <div className="job-meta-pills">
                  <span className="pill">Alpharetta, GA & Nationwide</span>
                  <span className="pill pill-salary">Offered Salary: $127,504.00 – $130,000.00 / year</span>
                  <span className="pill">EOE</span>
                </div>
              </div>
              <a href="mailto:immigration@altairtechnologiesinc.com?subject=Application for Software Engineer (Job 24ATI01)" className="button">
                Apply Now <Arrow small />
              </a>
            </div>
            <p className="job-desc">
              Design, develop, implement, test and deploy software applications. Analyze systems to ensure proper database architectures, coding standards, and that quality assurance policies and procedures are met. Research, analyze and determine information needs and dataflow requirements. Gather and evaluate user requirements and procedures. Review/analyze functional requirements and mapping documents, and write test cases and scenarios. Assist in problem solving and troubleshooting, and perform production support and maintenance of applications. Work with various technologies such as Java, Oracle, PL/SQL, Linux, ETL, Informatica, J2EE, and HTML. Travel/relocate to various unanticipated locations throughout the U.S. for long and short term assignments at client sites.
            </p>
            <p className="job-desc">
              <strong>Requirements:</strong> Requires Master’s degree or foreign equivalent in Computer Science, Engineering (any) or related and 6 months of experience in the job offered or as a Computer Software Professional.
            </p>
            <div className="job-bonus">
              ***This position is eligible for a referral bonus through our employee referral program***
            </div>
          </div>

          {/* Job 2 */}
          <div className="job-card">
            <div className="job-header">
              <div>
                <p className="eyebrow">Job ID: 24ATI02 · Full Time</p>
                <h2>Quality Assurance Engineer</h2>
                <div className="job-meta-pills">
                  <span className="pill">Alpharetta, GA & Nationwide</span>
                  <span className="pill pill-salary">Offered Salary: $100,984.00 – $110,000.00 / year</span>
                  <span className="pill">EOE</span>
                </div>
              </div>
              <a href="mailto:immigration@altairtechnologiesinc.com?subject=Application for QA Engineer (Job 24ATI02)" className="button">
                Apply Now <Arrow small />
              </a>
            </div>
            <p className="job-desc">
              Review, evaluate and test client/server and web applications. Gather and evaluate user requirements and procedures. Automate test cases and test plans for functional and regression testing of applications. Work in Cloud Environment and Agile testing. Work with various technologies such as Java programming, RestAssured Automation Framework, Selenium, Cucumber framework, API testing, Git, Jenkins for CI/CD, MongoDB and Python. Travel/relocate to various unanticipated locations throughout the U.S. for long and short term assignments at client sites.
            </p>
            <p className="job-desc">
              <strong>Requirements:</strong> Requires Master’s degree or foreign equivalent in Computer Science, Engineering (any) or related and 6 months of experience in the job offered or as a Computer Software Professional.
            </p>
            <div className="job-bonus">
              ***This position is eligible for a referral bonus through our employee referral program***
            </div>
          </div>

          {/* Job 3 */}
          <div className="job-card">
            <div className="job-header">
              <div>
                <p className="eyebrow">Engineering Practice · Remote / Hybrid</p>
                <h2>Full Stack Developer</h2>
                <div className="job-meta-pills">
                  <span className="pill">Remote / GA</span>
                  <span className="pill">Full-Time / Contract</span>
                </div>
              </div>
              <a href="mailto:admin@altairtechnologiesinc.com?subject=Application for Full Stack Developer" className="button">
                Apply Now <Arrow small />
              </a>
            </div>
            <p className="job-desc">
              Fluent knowledge of latest HTML/CSS standards and best practices. Working knowledge of JavaScript, AngularJS, ReactJS, ElectronJS, ThreeJs, Node.js, Express, and MongoDB. Solid understanding of HTTP protocols, front-end optimization, and performance techniques. Cross-browser development and troubleshooting for responsive enterprise web apps.
            </p>
          </div>

          {/* Job 4 */}
          <div className="job-card">
            <div className="job-header">
              <div>
                <p className="eyebrow">Front-End Practice · GA / Hybrid</p>
                <h2>React Developer</h2>
                <div className="job-meta-pills">
                  <span className="pill">Georgia</span>
                  <span className="pill">Full-Time</span>
                </div>
              </div>
              <a href="mailto:admin@altairtechnologiesinc.com?subject=Application for React Developer" className="button">
                Apply Now <Arrow small />
              </a>
            </div>
            <p className="job-desc">
              Hands-on expertise with React, modern component architectures, state management, and responsive CSS. Strong collaboration with UX designers and backend API engineers to build accessible, fluid interfaces for web, tablet, and mobile.
            </p>
          </div>

          {/* Job 5 */}
          <div className="job-card">
            <div className="job-header">
              <div>
                <p className="eyebrow">Data Practice · GA / Nationwide</p>
                <h2>SQL Engineer</h2>
                <div className="job-meta-pills">
                  <span className="pill">Georgia / Nationwide</span>
                  <span className="pill">Full-Time</span>
                </div>
              </div>
              <a href="mailto:admin@altairtechnologiesinc.com?subject=Application for SQL Engineer" className="button">
                Apply Now <Arrow small />
              </a>
            </div>
            <p className="job-desc">
              Expertise in relational database schema design, complex query optimization, ETL pipelines, and performance tuning across PostgreSQL, Oracle, and SQL Server. Good understanding of data warehousing and enterprise data flow requirements.
            </p>
          </div>
        </div>
      </section>
    </PageFrame>
  )
}

/* =========================================================================
   PAGE 16: CONTACT (/contact)
   ========================================================================= */
function Contact() {
  return (
    <PageFrame
      label="Contact Us"
      title={<>Let’s Make the<br /><em>Next Move Together.</em></>}
      intro="Have queries or need assistance? Connect with our team today. We are dedicated to helping you harness the full potential of our IT consultancy, staffing, and development services."
      cta={false}
    >
      <section className="section container contact-grid">
        <div>
          <SectionHeading
            kicker="Start a Conversation"
            title="Tell us where you want to go."
            copy="Send us a message and we’ll get back to you shortly. Whether you are looking to build a complex software system, augment your engineering staff, or train your team."
          />
          <div className="contact-details">
            <div className="contact-item">
              <span className="contact-item-icon">📍</span>
              <div>
                <strong>Headquarters</strong>
                <p>11675 Century Dr, Unit A<br />Alpharetta, Georgia 30009</p>
              </div>
            </div>
            <div className="contact-item">
              <span className="contact-item-icon">📞</span>
              <div>
                <strong>Phone Number</strong>
                <p><a href="tel:+17206753656">+1 (720)-675-3656</a></p>
              </div>
            </div>
            <div className="contact-item">
              <span className="contact-item-icon">✉️</span>
              <div>
                <strong>Email Address</strong>
                <p><a href="mailto:admin@altairtechnologiesinc.com">admin@altairtechnologiesinc.com</a></p>
              </div>
            </div>
            <div className="contact-item">
              <span className="contact-item-icon">💼</span>
              <div>
                <strong>Careers & Immigration</strong>
                <p><a href="mailto:immigration@altairtechnologiesinc.com">immigration@altairtechnologiesinc.com</a></p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <ContactFormCard />
        </div>
      </section>
    </PageFrame>
  )
}

/* =========================================================================
   ROUTER & APP ROOT
   ========================================================================= */
function App() {
  const [path, setPath] = useState(window.location.pathname.replace(/\/$/, '') || '/')

  useEffect(() => {
    const onPop = () => setPath(window.location.pathname.replace(/\/$/, '') || '/')
    window.addEventListener('popstate', onPop)
    return () => window.removeEventListener('popstate', onPop)
  }, [])

  useEffect(() => {
    const titles = {
      '/': 'Altair Technologies Inc. | Comprehensive IT Consulting & Software Development',
      '/about-us': 'About Us | Altair Technologies Inc.',
      '/what-we-do': 'What we Do | Altair Technologies Inc.',
      '/software-development': 'Software Development | Altair Technologies Inc.',
      '/ai': 'AI Solutions & Capabilities | Altair Technologies Inc.',
      '/cyber-security': 'Cyber Security & Resilience | Altair Technologies Inc.',
      '/data-sceinece': 'Data Science & Engineering | Altair Technologies Inc.',
      '/full-stack-development': 'Full Stack Development | Altair Technologies Inc.',
      '/it-staffing-and-consulting': 'IT Staffing and Consulting | Altair Technologies Inc.',
      '/it-staffing': 'IT Staffing Services | Altair Technologies Inc.',
      '/training-and-innovation': 'Training and Innovation | Altair Technologies Inc.',
      '/training': 'Training & Altair Skills Lab | Altair Technologies Inc.',
      '/case-studies': 'Case Studies & Testimonials | Altair Technologies Inc.',
      '/project-pages/ahd': 'AHD Healthcare Case Study | Altair Technologies Inc.',
      '/careers': 'Careers & Job Openings | Altair Technologies Inc.',
      '/contact': 'Contact Us | Altair Technologies Inc.',
    }
    document.title = titles[path] || 'Altair Technologies Inc.'
  }, [path])

  useEffect(() => {
    const click = (e) => {
      const a = e.target.closest('a')
      if (a && a.origin === window.location.origin && a.getAttribute('href')?.startsWith('/')) {
        e.preventDefault()
        window.history.pushState({}, '', a.href)
        setPath(new URL(a.href).pathname.replace(/\/$/, '') || '/')
        window.scrollTo({ top: 0, behavior: 'smooth' })
      }
    }
    document.addEventListener('click', click)
    return () => document.removeEventListener('click', click)
  }, [])

  const renderPage = () => {
    switch (path) {
      case '/':
        return <Home />
      case '/about-us':
        return <About />
      case '/what-we-do':
        return <WhatWeDo />
      case '/software-development':
        return <SoftwareDevelopment />
      case '/ai':
        return <AIPage />
      case '/cyber-security':
        return <CyberSecurity />
      case '/data-sceinece':
        return <DataScience />
      case '/full-stack-development':
        return <FullStack />
      case '/it-staffing-and-consulting':
        return <StaffingConsulting />
      case '/it-staffing':
        return <ITStaffing />
      case '/training-and-innovation':
        return <TrainingInnovation />
      case '/training':
        return <TrainingPage />
      case '/case-studies':
        return <CaseStudies />
      case '/project-pages/ahd':
        return <AHD />
      case '/careers':
        return <Careers />
      case '/contact':
        return <Contact />
      default:
        return <Home />
    }
  }

  return (
    <>
      <Header currentPath={path} />
      <main>{renderPage()}</main>
      <Footer />
    </>
  )
}

const rootEl = document.getElementById('root')
if (rootEl) {
  createRoot(rootEl).render(<App />)
}

export default App
