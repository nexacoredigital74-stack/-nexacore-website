import { useState } from 'react'
import heroVideo from './assets/hero-bg.mp4'
import logo from './assets/Nexacore_Digital_Logo2.png'
import headerLogo from './assets/header-logo.png'
import './App.css'
import servicesBg from './assets/services-bg.png'
import portfolioBg from './assets/portfolio-bg.png'
import aboutBg from './assets/about-bg.png'
import founderReal from './assets/leader.png'
import designerReal from './assets/designer.png'
import leaderImg from './assets/leader.png'
import designerImg from './assets/designer.png'

// ===== GALLERY PHOTOS - OYA GE PHOTOS =====
import p1_1 from './assets/gallery/web_cover.jpg'
import p1_2 from './assets/gallery/website1.jpeg'
import p1_3 from './assets/gallery/website2.jpeg'
import p1_4 from './assets/gallery/website3.jpeg'

import p2_1 from './assets/gallery/pos_cover.jpg'
import p2_2 from './assets/gallery/pos1.png'
import p2_3 from './assets/gallery/pos2.png'
import p2_4 from './assets/gallery/pos3.png'

import p3_1 from './assets/gallery/clothing_cover.jpg'
import p3_2 from './assets/gallery/cloths1.jpg'
import p3_3 from './assets/gallery/cloths2.jpeg'
import p3_4 from './assets/gallery/cloths3.jpg'

import p4_1 from './assets/gallery/logo_cover.jpg'
import p4_2 from './assets/gallery/graphics1.jpeg'
import p4_3 from './assets/gallery/graphics2.jpeg'

import p5_1 from './assets/gallery/Automation_cover.jpg'
import p5_2 from './assets/gallery/business1.png'
import p5_3 from './assets/gallery/business2.png'

import p6_1 from './assets/gallery/product_cover.jpg'
import p6_2 from './assets/gallery/products1.jpeg'
import p6_3 from './assets/gallery/products2.jpeg'
import p6_4 from './assets/gallery/products3.jpeg'

const BG = {
  services: servicesBg,
  portfolio: portfolioBg,
  about: aboutBg,
  pricing: servicesBg,
  blog: servicesBg,
  contact: servicesBg,
}

const bgStyle = (img) => ({
  backgroundImage: `linear-gradient(rgba(0,0,0,0.85), rgba(0,0,0,0.85)), url(${img})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundAttachment: 'fixed',
})

function App() {
  const [selected, setSelected] = useState(null)
  const [highlight, setHighlight] = useState(null)
  const [selectedMember, setSelectedMember] = useState(null)
  const [expertFilter, setExpertFilter] = useState("All")
  const whatsapp = "https://wa.me/94762646816?text=Hi%20NexaCore%20Digital!%20Mata%20website%20ekak%20hadaganna%20one."

  const goToService = (id) => {
    setHighlight(id)
    setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'center' })
    }, 50)
  }

  const teamMembers = [
    {
      name: "Hiruka Nethvin",
      role: "Development & Operations Lead",
      roleShort: "Websites • Software • POS Systems • Client Strategy • AI Integrations",
      img: leaderImg,
      profileImg: founderReal,
      emoji: "💻",
      bio: "Co-Founder of NexaCore Digital, bringing years of practical experience in websites, POS systems, and software development started back in school.",
      skills: ["React / Web Development", "POS System", "E-Commerce", "UI / UX","Project Management","API Integrations","AI Automation"],
      qual: ["Diploma in Information & Technology","HNC Diploma in Software Engineering","BSc (Hons) Artificial Intelligence - Anglia Ruskin University,UK (UG)", "Full Stack Development", "3+ Years Experience"],
      projects: "50+ Projects Done",
      whatsapp: "https://wa.me/94701204020"
    },
    {
      name: "Chanuka Bandara",
      role: "Marketing & Creative Lead",
      roleShort: "Logo • Branding • Social Media Design & Content • UI / UX",
      img: designerImg,
      profileImg: designerReal,
      emoji: "🎨",
      bio: "Co-Founder of NexaCore Digital,The creative mind giving brands a premium look—handling everything from logo design and branding to social media visuals.",
      skills: ["Graphic Design", "Branding", "Photography", "Videography","Motion Graphics","Creative Direction","Digital Marketing"],
      qual: ["Diploma in ICT & Computing", "Diploma in Hardware Engineering", "3+ Years in Creative Media & Digital Production"],
      projects: "100+ Designs Done",
      whatsapp: "https://wa.me/94704657025"
    },
  ]

  const experts = [
    { initials: "HN", name: "Hiruka Nethwin", role: "Founder & Lead Developer", cat: "Development" },
    { initials: "CB", name: "Chanuka Bandara", role: "Main Graphic Designer", cat: "Creative" },
   // { initials: "MM", name: "Add Expert Name", role: "Marketing Manager", cat: "Marketing" },
    //{ initials: "PH", name: "Add Expert Name", role: "Photographer", cat: "Creative" },
    //{ initials: "BS", name: "Add Expert Name", role: "Branding Specialist", cat: "Creative" },
  ]
  const filteredExperts = expertFilter === "All" ? experts : experts.filter(e => e.cat === expertFilter)

  return (
    <div className="site">
      <nav>
        <div className="logo">
          <img src={headerLogo} alt="NexaCore Digital" className="header-logo-img" />
        </div>
        <div className="nav-center">
          <div className="nav-dropdown">
            <a href="#services" className="nav-link">Services ▾</a>
            <div className="dropdown-menu">
              <a onClick={() => goToService('service-website')}>🌐 Website Development</a>
              <a onClick={() => goToService('service-pos')}>🧾 POS System</a>
              <a onClick={() => goToService('service-branding')}>✒️ Logo & Branding</a>
              <a onClick={() => goToService('service-social')}>📱 Social Media</a>
              <a onClick={() => goToService('service-graphic')}>🎨 Graphic & Creative Design</a>
              <a onClick={() => goToService('service-marketing')}>📈 Digital Marketing & Social Media</a>
              <a onClick={() => goToService('service-photo')}>🎬 Photography & Video Production</a>
              <a onClick={() => goToService('service-ai')}>🤖 AI & Business Automation</a>
            </div>
          </div>
          <a href="#portfolio">Portfolio</a>
          <a href="#pricing">Pricing</a>
          <a href="#about">About</a>
          <a href="#blog">Blog</a>
        </div>
        <div className="header-right">
          <a className="btn-small" href={whatsapp} target="_blank">
          <svg className="wa-icon" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
          WhatsApp
        </a>
        </div>
      </nav>
      
      <header className="hero">
        <video className="hero-video" autoPlay muted loop playsInline src={heroVideo} />
        <div className="hero-overlay"></div>
        <img src={logo} className="hero-logo" alt="NexaCore Digital" />
        <p className="tag">DESIGN / DIGITAL MARKKETING / BRANDING / DEVELOPMENT / AUTOMATION </p>
        <h1>Your Business.<br/><span>Next Level.</span></h1>
        <p className="sub">We build stunning, high-selling digital solutions through Design, Branding, Development, Digital Marketing and AI Automation to grow your business.</p>
        <div className="hero-btns">
          <a className="btn-white" href={whatsapp} target="_blank">Get Free Quote →</a>
          <a className="btn-outline" href="#services">Our Services</a>
        </div>
      </header>

      <section id="services" style={bgStyle(BG.services)}>
        <h2>What We Do ? </h2>
        <div className="grid">
          <div className={highlight === 'service-website' ? 'card card-active' : 'card'} id="service-website"><div className="icon">🌐</div><h3>Website Development</h3><p>Business, Shop, Portfolio, E-commerce website.</p><span>From Rs. 25,000</span></div>
          <div className={highlight === 'service-pos' ? 'card card-active' : 'card'} id="service-pos"><div className="icon">🧾</div><h3>POS System</h3><p>Billing, Stock, Credit, Report thiyena POS system.</p><span>From Rs. 35,000</span></div>
          <div className={highlight === 'service-branding' ? 'card card-active' : 'card'} id="service-branding"><div className="icon">✒️</div><h3>Logo & Branding</h3><p>Logo, Business Card, Banner - brand eka premium karanna.</p><span>From Rs. 8,000</span></div>
          <div className={highlight === 'service-social' ? 'card card-active' : 'card'} id="service-social"><div className="icon">📱</div><h3>Social Media</h3><p>Facebook / Instagram Post Design + Page Setup.</p><span>From Rs. 15,000 / month</span></div>
          <div className={highlight === 'service-graphic' ? 'card card-active' : 'card'} id="service-graphic"><div className="icon">🎨</div><h3>Graphic & Creative Design</h3><p>Promotional Posters, Banners, Menus, Catalogues & Presentations.</p><span>From Rs. 1500</span></div>
          <div className={highlight === 'service-marketing' ? 'card card-active' : 'card'} id="service-marketing"><div className="icon">📈</div><h3>Digital Marketing & Social Media</h3><p>Social Media Management, Content Strategy, Meta Ads, Google Ads, SEO, Email & Campaigns.</p><span>From Rs. 10,000 / month</span></div>
          <div className={highlight === 'service-photo' ? 'card card-active' : 'card'} id="service-photo"><div className="icon">🎬</div><h3>Photography & Video Production</h3><p>Product & Corporate Photography, Event Photography & Videography, Promotional & Brand Videos.</p><span>From Rs. 5,000</span></div>
          <div className={highlight === 'service-ai' ? 'card card-active' : 'card'} id="service-ai"><div className="icon">🤖</div><h3>AI & Business Automation</h3><p>AI Chatbot Development, WhatsApp Business Automation, Workflow & Process Automation & Third-party Software Integration.</p><span>From Rs. 10,000</span></div>
        </div>
      </section>

      <section className="section portfolio" id="portfolio" style={bgStyle(BG.portfolio)}>
        <h2>Projects We've Accomplished</h2>
        <p className="section-sub">Click on a project to view photos</p>
        <div className="portfolio-grid">
          {[
            {title:"Website & Development", cat:"Website • Online Booking • Gallery", img:p1_1, gallery:[p1_2,p1_3,p1_4], desc:"Modern, high-converting websites built for businesses—featuring responsive layouts, online booking or ordering, product catalogs, and seamless WhatsApp integration."},
            {title:"POS System & Softwares", cat:"Software • Billing", img:p2_1, gallery:[p2_2,p2_3,p2_4], desc:"A complete POS and billing system for retail shops with live stock tracking, WhatsApp receipts, and sales analytics."},
            {title:"Clothing Branding & Photography", cat:"Designing • Branding • Promoting", img:p3_1, gallery:[p3_2,p3_3,p3_4], desc:"Complete brand identity systems crafted to give businesses a premium look—combining custom logo design, typography, packaging mockups, and cohesive social media visuals."},
            {title:"Logo & Graphic Design", cat:"Logo • Branding • Graphics", img:p4_1, gallery:[p4_2,p4_3], desc:"BMemorable custom logos, brand marks, and high-converting social media graphics designed to elevate your business."},
            {title:"Business Automation", cat:"Software • Admin Panel", img:p5_1, gallery:[p5_2,p5_3], desc:"Smart workflow automation connecting your tools, customer messaging, and daily tasks to save time and scale operations."},
            {title:"Product Branding", cat:"Adds • Packaging", img:p6_1, gallery:[p6_2,p6_3,p6_4], desc:"Complete product branding, custom packaging, label design, and cohesive visual identity systems built to elevate your brand."},
          ].map((p, i) => (
            <div key={i} className="portfolio-card" onClick={() => setSelected(p)}>
              <img src={p.img} alt={p.title} />
              <div className="portfolio-info"><h3>{p.title}</h3><p>{p.cat}</p><span>View Project →</span></div>
            </div>
          ))}
        </div>
      </section>

      <section className="section about" id="about" style={bgStyle(BG.about)}>
        <h2>About NexaCore Digital</h2>
        <p className="section-sub">Who are we? What do we do?</p>
        <div className="about-grid">
          <div className="about-card"><h3>🎯 Our Vision</h3><p>Every small business in Sri Lanka to go digital with a world-class website, software & branding - at an affordable price.</p></div>
          <div className="about-card"><h3>🚀 Our Aim</h3><p>To bring our client's business online and increase sales. Fast delivery, clean design, honest pricing — that is what we aim for.</p></div>
          <div className="about-card"><h3>👑 Owned By</h3><p><b>NexaCore Digital</b> - Founded & Owned by our Founder. A passionate team who loves to build digital products for real businesses.</p></div>
        </div>
        <div className="team-header-main">
          <p className="team-eyebrow">OUR TEAM</p>
          <h2>The Minds Behind <span>Nexacore.</span></h2>
          <p className="team-main-sub">A team of specialists led by two co-founders, bringing together creativity, technology and strategy to build exceptional digital experiences.</p>
          <div className="team-line"></div>
        </div>
        <div className="founders-grid">
          {teamMembers.slice(0,2).map((m, i) => (
            <div key={i} className={i === 0 ? "founder-card founder-blue" : "founder-card founder-purple"} onClick={() => setSelectedMember(m)}>
              <img src={m.img} alt={m.name} className="founder-img" />
              <div className="founder-info">
                <span className={i === 0 ? "founder-badge" : "founder-badge purple"}>{m.role}</span>
                <h3>{m.name}</h3>
                <p className="founder-desc">{m.bio}</p>
                <div className="founder-tags">{m.skills.map((s, idx) => <span key={idx}>{s}</span>)}</div>
                <p className={i === 0 ? "founder-view blue-text" : "founder-view purple-text"}>View profile ↗</p>
              </div>
            </div>
          ))}
        </div>
        <div className="experts-section">
          <p className="experts-label">THE PEOPLE & THEIR CRAFT</p>
          <h2 className="experts-title">Meet Our <span>Experts.</span></h2>
          <p className="experts-sub">Specialists across individual disciplines, each bringing their own expertise to every project.</p>
          <div className="expert-filters">
            {["All", "Creative", "Development", "Marketing", "Design"].map(f => (
              <button key={f} className={expertFilter === f ? "filter-btn active" : "filter-btn"} onClick={() => setExpertFilter(f)}>
                {f === "All" ? "All Experts" : f}
              </button>
            ))}
          </div>
          <div className="experts-grid">
            {filteredExperts.map((ex, i) => (
              <div key={i} className="expert-card">
                <div className="expert-top">
                  <div className={`expert-avatar ${ex.cat === "Development" || ex.cat === "Design" ? "blue" : "purple"}`}>{ex.initials}</div>
                  <span className="expert-badge">{ex.cat}</span>
                </div>
                <h3>{ex.name}</h3>
                <p>{ex.role}</p>
                <span className="expert-arrow">↗</span>
              </div>
            ))}
            <div className="expert-card join-card">
              <div className="join-plus">+</div>
              <h3>Join Our Team</h3>
              <p>Have a skill that could make a difference? Let's talk.</p>
              <a href={whatsapp} className="join-btn">Apply Now</a>
            </div>
          </div>
        </div>
      </section>

      <section className="section contact-social" id="contact" style={bgStyle(BG.contact)}>
        <h2>Contact Us & Follow Us</h2>
        <p className="section-sub">Want to do a project? Talk to us!</p>
        <div className="social-grid">
          <a href="https://wa.me/94762646816" target="_blank" className="social-card">
            <svg className="social-icon wa" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
            <b>WhatsApp</b><span>+94 76 264 6816</span>
          </a>
          <a href="mailto:nexacoredigital74@gmail.com" className="social-card">
            <svg className="social-icon gmail" viewBox="0 0 24 24"><path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z"/></svg>
            <b>Gmail</b><span>nexacoredigital74@gmail.com</span>
          </a>
          <a href="tel:+94762646816" className="social-card">
            <svg className="social-icon call" viewBox="0 0 24 24"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg>
            <b>Call Us</b><span>+94 76 264 6816</span>
          </a>
          <a href="https://m.facebook.com/profile.php?id=61596666652815&mibextid=wwXIfr" target="_blank" className="social-card">
            <svg className="social-icon fb" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
            <b>Facebook</b><span>NexaCore Digital</span>
          </a>
          <a href="https://www.instagram.com/nexa.coredigital?rpxt=b3hzd25jbDE5cWJ3&utm_source=qr" target="_blank" className="social-card">
            <svg className="social-icon ig" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/></svg>
            <b>Instagram</b><span>@nexa.coredigital</span>
          </a>
          <a href="https://www.tiktok.com/@nexacore.digital1?_r=1&_t=ZS-9BPAx2STLID" target="_blank" className="social-card">
            <svg className="social-icon tiktok" viewBox="0 0 24 24"><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02 1.08 2.27 2.97 3.73 5.35 3.94.01.78.02 1.57.02 2.34 0 0-2.1-.01-3.49-.46.01 3.11-.01 6.37-.02 9.41-.01 2.9-1.91 5.33-4.58 5.76-1.86.3-3.83-.31-5.06-1.83-1.24-1.53-1.48-3.76-.74-5.58.72-1.78 2.37-2.97 4.29-3.11.19-.01.38-.01.57-.01v-3.5c-.23-.01-.45-.02-.68-.02-1.2.02-2.37.28-3.42.78-.04-1.98-.03-3.96-.04-5.94z"/></svg>
            <b>TikTok</b><span>@nexacore.digital1</span>
          </a>
        </div>
      </section>

      {selected && (
        <div className="modal-overlay" onClick={() => setSelected(null)}>
          <div className="modal-box" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setSelected(null)}>✕</button>
            <h2>{selected.title}</h2>
            <p className="modal-cat">{selected.cat}</p>
            <p className="modal-desc">{selected.desc}</p>
            <div className="modal-gallery">
              {selected.gallery.map((g, idx) => (
                <img key={idx} src={g} alt="work" />
              ))}
            </div>
            <button className="btn-primary" onClick={() => setSelected(null)}>Close</button>
          </div>
        </div>
      )}

      {selectedMember && (
        <div className="modal-overlay" onClick={() => setSelectedMember(null)}>
          <div className="modal-box team-modal" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setSelectedMember(null)}>✕</button>
            <img src={selectedMember.profileImg} className="team-popup-img team-real-photo" alt={selectedMember.name} />
            <h2>{selectedMember.name}</h2>
            <p className="modal-cat">{selectedMember.role}</p>
            <p className="modal-desc">{selectedMember.bio}</p>
            <h3 style={{textAlign:'left', marginTop:'18px'}}>🎓 Qualifications</h3>
            <ul style={{textAlign:'left', lineHeight:'1.8'}}>
              {selectedMember.qual.map((q, idx) => <li key={idx}>✔ {q}</li>)}
            </ul>
            <h3 style={{textAlign:'left'}}>💪 Skills</h3>
            <div className="skill-tags">
              {selectedMember.skills.map((s, idx) => <span key={idx}>{s}</span>)}
            </div>
            <p style={{marginTop:'14px'}}><b>🏆 {selectedMember.projects}</b></p>
            <a className="btn-white" href={selectedMember.whatsapp} target="_blank" style={{display:'inline-block', marginTop:'10px', textDecoration:'none'}}>Chat on WhatsApp →</a>
            <br/>
            <button className="btn-primary" onClick={() => setSelectedMember(null)} style={{marginTop:'12px'}}>Close</button>
          </div>
        </div>
      )}

      <section id="pricing" style={bgStyle(BG.pricing)}>
        <h2>Sample Pricing</h2>
        <div className="grid">
          <div className="price-card"><h3>STARTER</h3><h2>Rs. 25,000</h2><p>✔ 1 Page Website<br/>✔ 8 Posts<br/>✔ Reels<br/>✔ Basic Management<br/>✔ Monthly Report</p><a className="btn-outline" href={whatsapp} target="_blank">Choose Starter</a></div>
          <div className="price-card hot"><span className="badge">MOST POPULAR</span><h3>BUSINESS</h3><h2>Rs. 50,000</h2><p>✔ 5 Social Media Management<br/>✔ Content Creation<br/>✔ Reels<br/>✔ Meta ads management<br/>✔ Google Business management<br/>✔ Analytics</p><a className="btn-white" href={whatsapp} target="_blank">Choose Business</a></div>
          <div className="price-card"><h3>PREMIUM</h3><h2>Rs. 90,000+</h2><p>✔ Complete Digital marketing<br/>✔ Content Creation<br/>✔ Advertising<br/>✔ Website Maintainence<br/>✔ SEO<br/>✔ Automation<br/>✔ Monthly Strategy</p><a className="btn-outline" href={whatsapp} target="_blank">Choose Premium</a></div>
        </div>
      </section>

      <section id="blog" className="section blog" style={bgStyle(BG.blog)}>
        <h2>Our Blog</h2>
        <p className="section-sub">Tips & Ideas to Grow Your Business</p>
        <div className="grid">
          <div className="card"><div className="icon">💡</div><h3>How Does a Website Help Your Business Grow?</h3><p>Online inne nathi business ekak customers la godak nathi wenawa. Website ekakin trust, sales okkoma wadi wenawa.</p><span>Read More →</span></div>
          <div className="card"><div className="icon">🧾</div><h3>Simplify Your Shop Operations with a POS System</h3><p>Billing, Stock, Credit okkoma ekama thanakin - poth wala liyanna one na.</p><span>Read More →</span></div>
          <div className="card"><div className="icon">🎨</div><h3>A Good Logo Makes Your Brand Look Premium</h3><p>Customer ta mathakayen thiyena logo ekak thamai brand eka.</p><span>Read More →</span></div>
        </div>
      </section>

      <section className="cta">
        <h2>Let's Build Something Great</h2>
        <p>Message us now to get a free quote.</p>
        <a href="https://wa.me/94762646816" target="_blank" rel="noreferrer" className="btn-whatsapp">
          <svg viewBox="0 0 24 24" fill="#fff"><path d="M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.64.07-.3-.15-1.26-.46-2.4-1.47-.88-.79-1.48-1.76-1.65-2.06-.17-.3-.02-.46.13-.6.13-.14.3-.35.44-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.5 0 1.47 1.07 2.89 1.22 3.09.15.2 2.1 3.2 5.08 4.49.71.3 1.26.49 1.7.63.71.22 1.36.19 1.87.11.57-.08 1.76-.72 2-1.41.25-.7.25-1.29.18-1.42-.08-.12-.28-.2-.57-.34zM12.05 21.79h-.01a9.87 9.87 0 0 1-5.03-1.38l-.36-.21-3.74.98 1-3.65-.24-.37a9.86 9.86 0 0 1-1.51-5.26c0-5.45 4.44-9.88 9.9-9.88a9.83 9.83 0 0 1 9.88 9.89c0 5.45-4.44 9.88-9.89 9.88zm8.42-18.3A11.82 11.82 0 0 0 12.05 0C5.5 0 .16 5.34.16 11.9c0 2.1.55 4.14 1.59 5.95L.06 24l6.3-1.65a11.9 11.9 0 0 0 5.68 1.45h.01c6.55 0 11.89-5.34 11.89-11.9 0-3.18-1.24-6.16-3.47-8.41z"/></svg>
          WhatsApp
        </a>
        <div className="footer-socials">
          <a href="https://m.facebook.com/profile.php?id=61596666652815&mibextid=wwXIfr" target="_blank" rel="noreferrer" aria-label="Facebook">
            <svg viewBox="0 0 24 24" fill="#1877F2"><path d="M24 12.07C24 5.4 18.63 0 12 0S0 5.4 0 12.07C0 18.1 4.39 23.09 10.13 24v-8.44H7.08v-3.49h3.04V9.41c0-3.02 1.8-4.7 4.54-4.7 1.31 0 2.68.24 2.68.24v2.97h-1.51c-1.49 0-1.95.93-1.95 1.89v2.26h3.32l-.53 3.49h-2.79V24C19.61 23.09 24 18.1 24 12.07z"/></svg>
          </a>
          <a href="https://www.instagram.com/nexa.coredigital?rpxt=b3hzd25jbDE5cWJ3&utm_source=qr" target="_blank" rel="noreferrer" aria-label="Instagram">
            <svg viewBox="0 0 24 24" fill="#E1306C"><path d="M12 2.16c3.2 0 3.58.01 4.85.07 3.25.15 4.77 1.69 4.92 4.92.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.15 3.23-1.66 4.77-4.92 4.92-1.27.06-1.64.07-4.85.07s-3.58-.01-4.85-.07c-3.26-.15-4.77-1.7-4.92-4.92C2.17 15.58 2.16 15.2 2.16 12s.01-3.58.07-4.85C2.38 3.92 3.9 2.38 7.15 2.23 8.42 2.17 8.8 2.16 12 2.16zM12 0C8.74 0 8.33.01 7.05.07 2.7.27.27 2.69.07 7.05.01 8.33 0 8.74 0 12s.01 3.67.07 4.95c.2 4.36 2.62 6.78 6.98 6.98C8.33 23.99 8.74 24 12 24s3.67-.01 4.95-.07c4.35-.2 6.78-2.62 6.98-6.98.06-1.28.07-1.69.07-4.95s-.01-3.67-.07-4.95C23.73 2.7 21.31.27 16.95.07 15.67.01 15.26 0 12 0zm0 5.84A6.16 6.16 0 1 0 18.16 12 6.16 6.16 0 0 0 12 5.84zm0 10.15A4 4 0 1 1 16 12a4 4 0 0 1-4 3.99zm6.4-11.85a1.44 1.44 0 1 0 1.44 1.44 1.44 1.44 0 0 0-1.44-1.44z"/></svg>
          </a>
          <a href="https://www.tiktok.com/@nexacore.digital1?_r=1&_t=ZS-9BPAx2STLID" target="_blank" rel="noreferrer" aria-label="TikTok">
            <svg viewBox="0 0 24 24" fill="#fff"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/></svg>
          </a>
        </div>
        <p className="copyright">© 2026 NexaCore Digital - Colombo, Sri Lanka</p>
      </section>
    </div>
  )
}
export default App
