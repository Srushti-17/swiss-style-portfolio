import { useState, useEffect, useRef } from 'react'
import './index.css'
import profile from './assets/profile.jpeg'
import profile2 from './assets/profile2.jpeg'
import resume from './assets/Srushti_Pillare_SDE.pdf'
import project1 from './assets/project1.png'
import project2 from './assets/project2.png'
import project3 from './assets/project3.png'

function useViewportWidth() {
  const [width, setWidth] = useState(() => window.innerWidth)

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth)
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return width
}

function Reveal({ children, delay = 0, className = '' }: { children: React.ReactNode; delay?: number; className?: string }) {
  const [visible, setVisible] = useState(false)
  const elementRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const element = elementRef.current
    if (!element) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.unobserve(element)
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px' },
    )

    observer.observe(element)
    return () => observer.disconnect()
  }, [])

  return (
    <div ref={elementRef} className={`reveal ${visible ? 'reveal-visible' : ''} ${className}`} style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </div>
  )
}

// ── SVG Doodles ──────────────────────────────────────────────────────────────

const CurvedArrow = ({ color = '#F5F5F2', size = 40, rotate = 0 }: { color?: string; size?: number; rotate?: number }) => (
  <svg width={size} height={size} viewBox="0 0 40 40" fill="none" style={{ transform: `rotate(${rotate}deg)` }}>
    <path d="M6 30 Q10 12 28 14" stroke={color} strokeWidth="2" strokeLinecap="round" fill="none" />
    <path d="M24 10 L28 14 L24 18" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
  </svg>
)

const Sparkle = ({ color = '#F5F5F2', size = 32 }: { color?: string; size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 32 32" fill="none">
    <path d="M16 4 L17.2 14 L28 16 L17.2 18 L16 28 L14.8 18 L4 16 L14.8 14 Z" stroke={color} strokeWidth="1.8" strokeLinejoin="round" fill="none" />
    <path d="M8 8 L9 11 L12 12 L9 13 L8 16 L7 13 L4 12 L7 11 Z" stroke={color} strokeWidth="1.5" strokeLinejoin="round" fill="none" opacity="0.6" />
  </svg>
)

const Lightbulb = ({ color = '#F5F5F2', size = 36 }: { color?: string; size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 36 36" fill="none">
    <circle cx="18" cy="14" r="7" stroke={color} strokeWidth="2" fill="none" />
    <path d="M14 21 L14 26 Q14 28 18 28 Q22 28 22 26 L22 21" stroke={color} strokeWidth="2" strokeLinecap="round" fill="none" />
    <line x1="15" y1="31" x2="21" y2="31" stroke={color} strokeWidth="2" strokeLinecap="round" />
    <line x1="18" y1="4" x2="18" y2="2" stroke={color} strokeWidth="2" strokeLinecap="round" />
    <line x1="26" y1="8" x2="27.5" y2="6.5" stroke={color} strokeWidth="2" strokeLinecap="round" />
    <line x1="10" y1="8" x2="8.5" y2="6.5" stroke={color} strokeWidth="2" strokeLinecap="round" />
  </svg>
)

const GraduationCap = ({ color = '#050505', size = 32 }: { color?: string; size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 32 32" fill="none">
    <polygon points="16,6 30,12 16,18 2,12" stroke={color} strokeWidth="2" strokeLinejoin="round" fill="none" />
    <path d="M6 14 L6 22 Q16 26 26 22 L26 14" stroke={color} strokeWidth="2" strokeLinecap="round" fill="none" />
    <line x1="30" y1="12" x2="30" y2="20" stroke={color} strokeWidth="2" strokeLinecap="round" />
    <circle cx="30" cy="21" r="1.5" stroke={color} strokeWidth="2" fill="none" />
  </svg>
)

const OpenBook = ({ color = '#050505', size = 28 }: { color?: string; size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 28 28" fill="none">
    <path d="M14 6 Q10 5 4 7 L4 22 Q10 20 14 22 Q18 20 24 22 L24 7 Q18 5 14 6 Z" stroke={color} strokeWidth="2" strokeLinejoin="round" fill="none" />
    <line x1="14" y1="6" x2="14" y2="22" stroke={color} strokeWidth="1.5" />
    <line x1="7" y1="10" x2="12" y2="9" stroke={color} strokeWidth="1.5" strokeLinecap="round" opacity="0.6" />
    <line x1="7" y1="13" x2="12" y2="12" stroke={color} strokeWidth="1.5" strokeLinecap="round" opacity="0.6" />
  </svg>
)

const PaperPlane = ({ color = '#050505', size = 36 }: { color?: string; size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 36 36" fill="none">
    <path d="M4 18 L32 6 L22 32 L16 22 Z" stroke={color} strokeWidth="2" strokeLinejoin="round" fill="none" />
    <line x1="16" y1="22" x2="32" y2="6" stroke={color} strokeWidth="1.5" />
    <path d="M8 26 Q12 24 14 28" stroke={color} strokeWidth="1.5" strokeLinecap="round" fill="none" strokeDasharray="2 2" />
    <path d="M12 30 Q16 28 18 32" stroke={color} strokeWidth="1.5" strokeLinecap="round" fill="none" strokeDasharray="2 2" />
  </svg>
)

const Staircase = ({ color = '#050505', size = 36 }: { color?: string; size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 36 36" fill="none">
    <polyline points="4,32 4,22 12,22 12,14 20,14 20,8 28,8 28,4" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    <line x1="4" y1="32" x2="28" y2="32" stroke={color} strokeWidth="2" strokeLinecap="round" />
  </svg>
)

const CursorArrow = ({ color = '#0A0A0A', size = 28 }: { color?: string; size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 28 28" fill="none">
    <path d="M4 4 L4 22 L10 16 L14 24 L17 23 L13 15 L22 15 Z" stroke={color} strokeWidth="2" strokeLinejoin="round" fill="none" />
  </svg>
)

const Gear = ({ color = '#0A0A0A', size = 28 }: { color?: string; size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 28 28" fill="none">
    <circle cx="14" cy="14" r="4" stroke={color} strokeWidth="2" fill="none" />
    <path d="M14 4 L15 7 L17 7 L18 4 Q16 3 14 3 Q12 3 10 4 L11 7 L13 7 Z" stroke={color} strokeWidth="1.5" fill="none" />
    <path d="M14 24 L15 21 L17 21 L18 24 Q16 25 14 25 Q12 25 10 24 L11 21 L13 21 Z" stroke={color} strokeWidth="1.5" fill="none" />
    <path d="M4 14 L7 13 L7 11 L4 10 Q3 12 3 14 Q3 16 4 18 L7 17 L7 15 Z" stroke={color} strokeWidth="1.5" fill="none" />
    <path d="M24 14 L21 13 L21 11 L24 10 Q25 12 25 14 Q25 16 24 18 L21 17 L21 15 Z" stroke={color} strokeWidth="1.5" fill="none" />
    <path d="M7 7 L9 9 L8 11 L5 10 Q5 8 7 7 Z" stroke={color} strokeWidth="1.5" fill="none" />
    <path d="M21 7 L19 9 L20 11 L23 10 Q23 8 21 7 Z" stroke={color} strokeWidth="1.5" fill="none" />
    <path d="M7 21 L9 19 L8 17 L5 18 Q5 20 7 21 Z" stroke={color} strokeWidth="1.5" fill="none" />
    <path d="M21 21 L19 19 L20 17 L23 18 Q23 20 21 21 Z" stroke={color} strokeWidth="1.5" fill="none" />
  </svg>
)

const DatabaseCylinder = ({ color = '#0A0A0A', size = 28 }: { color?: string; size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 28 28" fill="none">
    <ellipse cx="14" cy="7" rx="8" ry="3" stroke={color} strokeWidth="2" fill="none" />
    <line x1="6" y1="7" x2="6" y2="21" stroke={color} strokeWidth="2" />
    <line x1="22" y1="7" x2="22" y2="21" stroke={color} strokeWidth="2" />
    <ellipse cx="14" cy="21" rx="8" ry="3" stroke={color} strokeWidth="2" fill="none" />
    <ellipse cx="14" cy="14" rx="8" ry="3" stroke={color} strokeWidth="1.5" fill="none" />
  </svg>
)

const Asterisk = ({ color = '#F5F5F2', size = 16 }: { color?: string; size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 16 16" fill="none">
    <line x1="8" y1="2" x2="8" y2="14" stroke={color} strokeWidth="2" strokeLinecap="round" />
    <line x1="2" y1="5" x2="14" y2="11" stroke={color} strokeWidth="2" strokeLinecap="round" />
    <line x1="14" y1="5" x2="2" y2="11" stroke={color} strokeWidth="2" strokeLinecap="round" />
  </svg>
)

const DiagonalArrow = ({ color = '#F5F5F2', size = 24 }: { color?: string; size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <line x1="4" y1="20" x2="20" y2="4" stroke={color} strokeWidth="2" strokeLinecap="round" />
    <path d="M12 4 L20 4 L20 12" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
  </svg>
)

const EyeOutline = ({ color = '#F5F5F2', size = 32 }: { color?: string; size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 32 32" fill="none">
    <path d="M2 16 Q8 6 16 6 Q24 6 30 16 Q24 26 16 26 Q8 26 2 16 Z" stroke={color} strokeWidth="2" fill="none" />
    <circle cx="16" cy="16" r="4" stroke={color} strokeWidth="2" fill="none" />
  </svg>
)

const BrowserWindow = ({ color = '#F5F5F2', size = 40 }: { color?: string; size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 40 40" fill="none">
    <rect x="3" y="5" width="34" height="30" rx="2" stroke={color} strokeWidth="2" fill="none" />
    <line x1="3" y1="13" x2="37" y2="13" stroke={color} strokeWidth="1.5" />
    <circle cx="9" cy="9" r="2" stroke={color} strokeWidth="1.5" fill="none" />
    <circle cx="16" cy="9" r="2" stroke={color} strokeWidth="1.5" fill="none" />
    <line x1="22" y1="9" x2="33" y2="9" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
    <line x1="8" y1="19" x2="20" y2="19" stroke={color} strokeWidth="1.5" strokeLinecap="round" opacity="0.5" />
    <line x1="8" y1="23" x2="32" y2="23" stroke={color} strokeWidth="1.5" strokeLinecap="round" opacity="0.5" />
    <line x1="8" y1="27" x2="26" y2="27" stroke={color} strokeWidth="1.5" strokeLinecap="round" opacity="0.5" />
  </svg>
)

const Trophy = ({ color = '#F5F5F2', size = 28 }: { color?: string; size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 28 28" fill="none">
    <path d="M8 4 L20 4 L20 14 Q20 20 14 20 Q8 20 8 14 Z" stroke={color} strokeWidth="2" fill="none" />
    <path d="M8 8 Q4 8 4 12 Q4 16 8 16" stroke={color} strokeWidth="2" fill="none" />
    <path d="M20 8 Q24 8 24 12 Q24 16 20 16" stroke={color} strokeWidth="2" fill="none" />
    <line x1="14" y1="20" x2="14" y2="23" stroke={color} strokeWidth="2" />
    <line x1="9" y1="25" x2="19" y2="25" stroke={color} strokeWidth="2" strokeLinecap="round" />
  </svg>
)

const Badge = ({ color = '#F5F5F2', size = 28 }: { color?: string; size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 28 28" fill="none">
    <circle cx="14" cy="12" r="7" stroke={color} strokeWidth="2" fill="none" />
    <path d="M8 17 L6 25 L14 22 L22 25 L20 17" stroke={color} strokeWidth="2" strokeLinejoin="round" fill="none" />
    <path d="M11 11 L13 13 L17 9" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
  </svg>
)

const Ribbon = ({ color = '#F5F5F2', size = 28 }: { color?: string; size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 28 28" fill="none">
    <circle cx="14" cy="10" r="6" stroke={color} strokeWidth="2" fill="none" />
    <path d="M10 15 L6 26 L14 21 L22 26 L18 15" stroke={color} strokeWidth="2" strokeLinejoin="round" fill="none" />
  </svg>
)

const Starburst = ({ color = '#F5F5F2', size = 40 }: { color?: string; size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 40 40" fill="none">
    {[0, 36, 72, 108, 144, 180, 216, 252, 288, 324].map((angle, i) => {
      const r1 = 8, r2 = 18
      const a1 = (angle * Math.PI) / 180
      const x1 = 20 + r1 * Math.cos(a1), y1 = 20 + r1 * Math.sin(a1)
      const x2 = 20 + r2 * Math.cos(a1), y2 = 20 + r2 * Math.sin(a1)
      return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke={color} strokeWidth="2" strokeLinecap="round" />
    })}
  </svg>
)

const Envelope = ({ color = '#F5F5F2', size = 28 }: { color?: string; size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 28 28" fill="none">
    <rect x="3" y="7" width="22" height="16" rx="1" stroke={color} strokeWidth="2" fill="none" />
    <polyline points="3,7 14,16 25,7" stroke={color} strokeWidth="2" strokeLinejoin="round" fill="none" />
  </svg>
)

const SpeechBubble = ({ color = '#F5F5F2', size = 32 }: { color?: string; size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 32 32" fill="none">
    <path d="M4 4 Q4 2 6 2 L26 2 Q28 2 28 4 L28 20 Q28 22 26 22 L18 22 L12 28 L12 22 L6 22 Q4 22 4 20 Z" stroke={color} strokeWidth="2" strokeLinejoin="round" fill="none" />
    <line x1="9" y1="10" x2="22" y2="10" stroke={color} strokeWidth="1.5" strokeLinecap="round" opacity="0.5" />
    <line x1="9" y1="14" x2="18" y2="14" stroke={color} strokeWidth="1.5" strokeLinecap="round" opacity="0.5" />
  </svg>
)

const ExternalArrow = ({ color = '#F5F5F2', size = 28 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 28 28"
    fill="none"
  >
    <path
      d="M8 20L20 8"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
    />
    <path
      d="M12 8H20V16"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const CodeBrackets = ({ color = '#050505', size = 32 }: { color?: string; size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 32 32" fill="none">
    <path
      d="M11 7 L4 16 L11 25"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M21 7 L28 16 L21 25"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <line
      x1="18"
      y1="5"
      x2="14"
      y2="27"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
)

const Toolbox = ({ color = '#050505', size = 32 }: { color?: string; size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 32 32" fill="none">
    <rect
      x="4"
      y="10"
      width="24"
      height="17"
      rx="1"
      stroke={color}
      strokeWidth="2"
    />

    <path
      d="M11 10 V7 Q11 5 13 5 H19 Q21 5 21 7 V10"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
    />

    <line
      x1="4"
      y1="16"
      x2="28"
      y2="16"
      stroke={color}
      strokeWidth="2"
    />

    <line
      x1="13"
      y1="16"
      x2="13"
      y2="20"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
    />

    <line
      x1="19"
      y1="16"
      x2="19"
      y2="20"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
)

// ── Navigation ────────────────────────────────────────────────────────────────

function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
      if (window.innerWidth >= 768) {
        setMenuOpen(false)
      }
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const handleLinkClick = () => {
    setMenuOpen(false)
  }

  return (
    <>
      <nav
        className="nav-entrance"
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          backgroundColor: scrolled ? 'rgba(5,5,5,0.95)' : 'transparent',
          borderBottom: scrolled ? '1px solid #555555' : 'none',
          transition: 'background-color 0.3s, border-bottom 0.3s',
          padding: 'clamp(0px, 1vw, 16px) clamp(16px, 7%, 32px)',
          height: '64px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <span style={{ fontFamily: 'IBM Plex Mono', fontWeight: 600, fontSize: 'clamp(11px, 2vw, 14px)', letterSpacing: '0.08em', color: '#F5F5F2' }}>
          SRUSHTI PILLARE
        </span>

        {/* Desktop Navigation */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 'clamp(12px, 3vw, 32px)', transform: !isMobile ? 'translateX(-400px)' : 'none', position: 'relative' }}>
          <div style={{ position: 'absolute', left: '-36px', top: '-22px', opacity: 0.55, pointerEvents: 'none', display: !isMobile ? 'block' : 'none' }}>
            <CurvedArrow color="#B8B8B8" size={32} rotate={20} />
          </div>
          {['ABOUT', 'EXPERIENCE', 'SKILLS', 'WORK', 'CONTACT'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              style={{
                fontFamily: 'IBM Plex Mono',
                fontSize: 'clamp(8px, 1.5vw, 11px)',
                letterSpacing: '0.12em',
                color: '#F5F5F2',
                textDecoration: 'none',
                transition: 'color 0.2s',
                display: !isMobile ? 'block' : 'none',
              }}
              onMouseEnter={(e) => ((e.target as HTMLElement).style.color = '#F5F5F2')}
              onMouseLeave={(e) => ((e.target as HTMLElement).style.color = '#F5F5F2')}
            >
              {item}
            </a>
          ))}
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className={`mobile-menu-toggle ${menuOpen ? 'active' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          style={{ display: isMobile ? 'flex' : 'none' }}
          aria-label="Toggle navigation menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </nav>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${menuOpen ? 'active' : ''}`} style={{ display: isMobile && menuOpen ? 'flex' : 'none' }}>
        {['ABOUT', 'EXPERIENCE', 'SKILLS', 'WORK', 'CONTACT'].map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase()}`}
            onClick={handleLinkClick}
          >
            {item}
          </a>
        ))}
      </div>
    </>
  )
}

// ── Hero Section ──────────────────────────────────────────────────────────────

function Hero() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768)

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768)
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <section
      id="hero"
      style={{
        backgroundColor: '#050505',
        minHeight: isMobile ? 'auto' : '100vh',
        display: 'grid',
        gridTemplateColumns: !isMobile ? (window.innerWidth <= 1100 ? 'minmax(0, 1fr) 360px' : '1fr 420px') : '1fr',
        alignItems: isMobile ? 'start' : 'stretch',
        position: 'relative',
      }}
    >
      {/* Left vertical sidebar — lives outside the padded grid flow */}
      <div
        style={{
          position: 'absolute',
          left: '16px',
          top: '50%',
          transform: 'translateY(-50%)',
          display: window.innerWidth > 640 ? 'flex' : 'none',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '16px',
          zIndex: 2,
        }}
      >
        <span
          style={{
            fontFamily: 'IBM Plex Mono',
            fontSize: '12px',
            letterSpacing: '0.2em',
            color: '#868686',
            whiteSpace: 'nowrap',
            writingMode: 'vertical-rl',
            transform: 'rotate(180deg)',
          }}
        >
          LET'S CONNECT
        </span>
        <div style={{ width: '1px', height: '32px', backgroundColor: '#868686' }} />
        {[
          { label: 'GH', href: 'https://github.com/Srushti-17' },
          { label: 'LI', href: 'https://linkedin.com/in/srushti-pillare' },
          { label: 'EM', href: 'mailto:srushtipillare@gmail.com' },
        ].map(({ label, href }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            style={{
              fontFamily: 'IBM Plex Mono',
              fontSize: '9px',
              color: '#868686',
              textDecoration: 'none',
              border: '1px solid #868686',
              padding: '4px 5px',
              lineHeight: 1,
              transition: 'color 0.2s, border-color 0.2s',
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLElement
              el.style.color = '#F5F5F2'
              el.style.borderColor = '#F5F5F2'
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLElement
              el.style.color = '#868686'
              el.style.borderColor = '#868686'
            }}
          >
            {label}
          </a>
        ))}
      </div>

      {/* Left content */}
      <div style={{ padding: !isMobile ? (window.innerWidth <= 1100 ? '120px 32px 64px 7%' : '140px 4% 80px calc(7% + 48px)') : '96px clamp(16px, 5%, 32px) 56px', display: 'flex', flexDirection: 'column', justifyContent: 'center', minWidth: 0 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '32px' }}>
          <span style={{ fontFamily: 'IBM Plex Mono', fontSize: 'clamp(9px, 2vw, 11px)', letterSpacing: '0.15em', color: '#B8B8B8' }}>HELLO, I'M</span>
          <div style={{ flex: 1, height: '1px', backgroundColor: '#555555' }} />
        </div>

        <h1
          style={{
            fontFamily: 'Archivo Black',
            fontSize: !isMobile && window.innerWidth <= 1100 ? 'clamp(42px, 6vw, 72px)' : 'clamp(32px, 8vw, 96px)',
            lineHeight: 0.92,
            letterSpacing: '-0.02em',
            color: '#F5F5F2',
            textTransform: 'uppercase',
            marginBottom: '32px',
          }}
        >
          SOFTWARE
          <br />
          DEVELOPER &amp;
          <br />
          CREATIVE BUILDER
        </h1>

        <p style={{ fontFamily: 'Inter', fontSize: 'clamp(13px, 2.5vw, 15px)', lineHeight: 1.7, color: '#B8B8B8', maxWidth: '420px', marginBottom: '32px' }}>
          I turn concepts into scalable, well-crafted software.
          <br />
          Full-stack developer with a taste for clean architecture and thoughtful UI.
        </p>

        <div style={{ display: 'flex', flexDirection: window.innerWidth > 480 ? 'row' : 'column', alignItems: 'flex-start', gap: '16px', position: 'relative', flexWrap: 'wrap' }}>
          <a
            href={resume}
            target= {!isMobile ? '_blank' : '_self'}
            download={isMobile ? "Srushti-Pillare-Resume.pdf" : undefined}
            style={{
              fontFamily: 'IBM Plex Mono',
              fontSize: '11px',
              letterSpacing: '0.12em',
              color: '#F5F5F2',
              border: '0.1px solid #F5F5F2',
              padding: '2px 8px',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              whiteSpace: 'nowrap',
              textDecoration: 'none',
            }}
          >
            VIEW RESUME
          </a>
          <a
            href="#work"
            style={{
              fontFamily: 'IBM Plex Mono',
              fontSize: '11px',
              letterSpacing: '0.12em',
              color: '#F5F5F2',
              textDecoration: 'underline',
              textUnderlineOffset: '4px',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
            }}
          >
            EXPLORE MY WORK →
          </a>
          <div style={{ position: 'absolute', left: '-10px', bottom: window.innerWidth > 480 ? '-50px' : 'auto', top: window.innerWidth > 480 ? 'auto' : '100%', display: window.innerWidth > 640 ? 'block' : 'none' }}>
            <BrowserWindow color="#555555" size={36} />
          </div>
        </div>
      </div>

      {/* Right photo panel */}
      <div style={{ display: 'flex', flexDirection: 'column', height: !isMobile ? '100vh' : 'fit-content', order: 0, alignSelf: 'start', minHeight: 0, width: '100%' }}>
        <div style={{ flex: !isMobile ? 1 : 'none', position: 'relative', overflow: 'hidden', backgroundColor: '#111111', height: isMobile ? '280px' : 'auto' }}>
          <img
            src={profile2}
            alt="profile photo"
            style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 30%', filter: 'grayscale(100%) contrast(1.1)', display: 'block' }}
          />
        </div>
        <div
          style={{
            backgroundColor: '#F5F5F2',
            padding: '20px 24px',
            borderTop: '1px solid #555555',
          }}
        >
          <p style={{ fontFamily: 'Caveat', fontSize: '20px', color: '#050505', textDecoration: 'underline', marginBottom: '12px', fontWeight: 600 }}>
            building ideas into reality.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
            {[
              { label: 'FOCUS —', val: 'FULL-STACK & AI' },
              { label: 'DRIVEN BY —', val: 'CLEAN, THOUGHTFUL CODE' },
            ].map(({ label, val }) => (
              <div key={label} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Asterisk color="#050505" size={12} />
                <span style={{ fontFamily: 'IBM Plex Mono', fontSize: '10px', letterSpacing: '0.1em', color: '#050505' }}>
                  {label} <strong>{val}</strong>
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

// ── About Section ─────────────────────────────────────────────────────────────

function About() {
  return (
    <section
      id="about"
      style={{
        backgroundColor: '#050505',
        padding: window.innerWidth > 1100 ? '150px 7%' : 'clamp(60px, 15vw, 100px) clamp(16px, 5%, 32px)',
        display: 'grid',
        gridTemplateColumns: window.innerWidth > 1100 ? '1fr 360px' : '1fr',
        gap: window.innerWidth > 1100 ? '80px' : '48px',
        alignItems: 'start',
      }}
    >
      {/* Left */}
      <div>
        <div style={{ fontFamily: 'IBM Plex Mono', fontSize: 'clamp(9px, 2vw, 11px)', letterSpacing: '0.15em', color: '#555555', marginBottom: '24px' }}>
          01 / ABOUT
        </div>
        <h2
          style={{
            fontFamily: 'Archivo Black',
            fontSize: 'clamp(32px, 7vw, 72px)',
            lineHeight: 0.95,
            letterSpacing: '-0.02em',
            color: '#F5F5F2',
            textTransform: 'uppercase',
            marginBottom: '40px',
          }}
        >
          A BIT ABOUT
          <br />
          WHO I AM.
        </h2>
        <p style={{ fontFamily: 'Inter', fontSize: 'clamp(13px, 2.5vw, 15px)', lineHeight: 1.8, color: '#B8B8B8', maxWidth: '520px', marginBottom: '20px' }}>
          I'm a software developer who genuinely enjoys the process of making things. Whether it's
          a clean API, an intuitive UI, or a pipeline that hums, I care about the craft behind every layer.
        </p>
        <p style={{ fontFamily: 'Inter', fontSize: 'clamp(13px, 2.5vw, 15px)', lineHeight: 1.8, color: '#B8B8B8', maxWidth: '520px', marginBottom: '36px' }}>
          Recently graduated from B.Tech in AI, I've been building real products alongside my studies—
          shipping features, debugging edge cases, and growing through every collaboration.
        </p>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flexWrap: 'wrap' }}>
          <span style={{ fontFamily: 'Caveat', fontSize: 'clamp(16px, 3vw, 22px)', color: '#B8B8B8', fontWeight: 600 }}>
            still learning, always building
          </span>
          <CurvedArrow color="#B8B8B8" size={28} rotate={10} />
        </div>
      </div>

      {/* Right — rotated index card */}
      <div style={{ position: 'relative', gap: '24px', paddingTop: '24px', display: 'flex', flexDirection: 'column' }}>
        {/*first card*/}
        <div
        className="education-card education-card-left"
          style={{
            backgroundColor: '#F5F5F2',
            border: '1px solid #050505',
            padding: 'clamp(20px, 4vw, 32px)',
            position: 'relative',
          }}
        >
          {/* Stitching dots along left edge */}
          <div
            style={{
              position: 'absolute',
              left: '-1px',
              top: '8px',
              bottom: '8px',
              borderLeft: '2px dotted #B8B8B8',
            }}
          />
          {/* Doodles */}
          <div style={{ position: 'absolute', top: '16px', right: '12px', display: window.innerWidth > 640 ? 'block' : 'none' }}>
            <GraduationCap color="#050505" size={28} />
          </div>
          <div style={{ position: 'absolute', bottom: '-12px', left: '24px', display: window.innerWidth > 640 ? 'block' : 'none' }}>
            <OpenBook color="#050505" size={24} />
          </div>

          <div style={{ fontFamily: 'IBM Plex Mono', fontSize: '10px', letterSpacing: '0.2em', color: '#555555', marginBottom: '16px', borderBottom: '1px solid #B8B8B8', paddingBottom: '8px' }}>
            EDUCATION
          </div>
          <p style={{ fontFamily: 'Archivo Black', fontSize: 'clamp(12px, 2vw, 14px)', color: '#050505', lineHeight: 1.3, marginBottom: '10px', textTransform: 'uppercase' }}>
            Bachelor of Technology in Artificial Intelligence
          </p>
          <p style={{ fontFamily: 'Inter', fontSize: 'clamp(11px, 2vw, 13px)', color: '#050505', lineHeight: 1.6, marginBottom: '6px' }}>
            J D College of Engineering &amp; Management, Nagpur
          </p>
          <p style={{ fontFamily: 'IBM Plex Mono', fontSize: '11px', color: '#555555', letterSpacing: '0.08em' }}>
            2022 – 2026  |  CGPA: 8.93
          </p>
        </div>
        {/*second card*/}
        <div
        className="education-card education-card-right"
          style={{
            backgroundColor: '#F5F5F2',
            border: '1px solid #050505',
            padding: 'clamp(20px, 4vw, 32px)',
            position: 'relative',
          }}
        >
          {/* Stitching dots along left edge */}
          <div
            style={{
              position: 'absolute',
              left: '-1px',
              top: '8px',
              bottom: '8px',
              borderLeft: '2px dotted #B8B8B8',
            }}
          />
          {/* Doodles */}
          <div style={{ position: 'absolute', top: '16px', right: '12px', display: window.innerWidth > 640 ? 'block' : 'none' }}>
            <GraduationCap color="#050505" size={28} />
          </div>
          <div style={{ position: 'absolute', bottom: '-12px', left: '24px', display: window.innerWidth > 640 ? 'block' : 'none' }}>
            <OpenBook color="#050505" size={24} />
          </div>

          <div style={{ fontFamily: 'IBM Plex Mono', fontSize: '10px', letterSpacing: '0.2em', color: '#555555', marginBottom: '16px', borderBottom: '1px solid #B8B8B8', paddingBottom: '8px' }}>
            EDUCATION
          </div>
          <p style={{ fontFamily: 'Archivo Black', fontSize: 'clamp(12px, 2vw, 14px)', color: '#050505', lineHeight: 1.3, marginBottom: '10px', textTransform: 'uppercase' }}>
            Higher Secondary Certificate
          </p>
          <p style={{ fontFamily: 'Inter', fontSize: 'clamp(11px, 2vw, 13px)', color: '#050505', lineHeight: 1.6, marginBottom: '6px' }}>
            Shri. Mohanlal Raughwani Sindhi Hindi Jr. College, Nagpur
          </p>
          <p style={{ fontFamily: 'IBM Plex Mono', fontSize: '11px', color: '#555555', letterSpacing: '0.08em' }}>
            2020 – 2022  |  81%
          </p>
        </div>
      </div>
    </section>
  )
}

// ── Experience Section ────────────────────────────────────────────────────────

function Experience() {
  return (
    <section
      id="experience"
      style={{
        display: 'grid',
        gridTemplateColumns: window.innerWidth > 1100 ? '38% 62%' : '1fr',
        minHeight: window.innerWidth > 1100 ? '600px' : 'auto',
      }}
    >
      {/* Left black column */}
      <div style={{ backgroundColor: '#050505', padding: window.innerWidth > 1100 ? '120px 7% 120px 7%' : 'clamp(60px, 15vw, 100px) clamp(16px, 5%, 32px)', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        <div style={{ fontFamily: 'IBM Plex Mono', fontSize: 'clamp(9px, 2vw, 11px)', letterSpacing: '0.15em', color: '#555555', marginBottom: '24px' }}>
          02 / EXPERIENCE
        </div>
        <h2
          style={{
            fontFamily: 'Archivo Black',
            fontSize: 'clamp(28px, 6vw, 60px)',
            lineHeight: 0.95,
            letterSpacing: '-0.02em',
            color: '#F5F5F2',
            textTransform: 'uppercase',
            marginBottom: '36px',
          }}
        >
          WORK /
          <br />
          THAT /
          <br />
          TAUGHT ME.
        </h2>
        <p style={{ fontFamily: 'Inter', fontSize: 'clamp(12px, 2vw, 14px)', lineHeight: 1.8, color: '#B8B8B8', marginBottom: '16px' }}>
          Each role has pushed me to build faster, think deeper, and ship with more confidence.
        </p>
        <p style={{ fontFamily: 'Inter', fontSize: 'clamp(12px, 2vw, 14px)', lineHeight: 1.8, color: '#B8B8B8', marginBottom: '36px' }}>
          Real deadlines, real codebases, real accountability.
        </p>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '32px', flexWrap: 'wrap' }}>
          <span style={{ fontFamily: 'Caveat', fontSize: 'clamp(14px, 3vw, 18px)', color: '#B8B8B8', fontWeight: 600 }}>
            Every project leaves something behind.
          </span>
          <CurvedArrow color="#B8B8B8" size={24} rotate={-10} />
        </div>
      </div>

      {/* Right off-white column */}
      <div style={{ backgroundColor: '#F5F5F2', padding: window.innerWidth > 1100 ? '80px 48px' : 'clamp(40px, 10vw, 80px) clamp(16px, 5%, 48px)', margin: window.innerWidth > 1100 ? '20px 20px' : 0, position: 'relative' }}>
        {/* Header row */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '8px' }}>
          <span style={{ fontFamily: 'IBM Plex Mono', fontSize: 'clamp(9px, 2vw, 11px)', letterSpacing: '0.15em', color: '#555555' }}>EXPERIENCE LOG</span>
        </div>
        <div style={{ height: '1px', backgroundColor: '#0A0A0A', marginBottom: '48px' }} />

        {/* Timeline */}
        <div style={{ position: 'relative', paddingLeft: '32px' }}>
          {/* Spine */}
          <div style={{ position: 'absolute', left: '8px', top: '0', bottom: '0', width: '1px', backgroundColor: '#0A0A0A' }} />
          {/* Marker */}
          <div
            style={{
              position: 'absolute',
              left: '0',
              top: '4px',
              width: '18px',
              height: '18px',
              border: '2px solid #0A0A0A',
              borderRadius: '50%',
              backgroundColor: '#F5F5F2',
            }}
          />

          <div style={{ fontFamily: 'IBM Plex Mono', fontSize: 'clamp(9px, 2vw, 10px)', letterSpacing: '0.12em', color: '#555555', marginBottom: '12px' }}>
            DEC 2025 — JULY 2026
          </div>
          <h3 style={{ fontFamily: 'Archivo Black', fontSize: 'clamp(16px, 4vw, 22px)', color: '#0A0A0A', textTransform: 'uppercase', letterSpacing: '-0.01em', marginBottom: '4px' }}>
            SOFTWARE DEVELOPMENT INTERN
          </h3>
          <p style={{ fontFamily: 'IBM Plex Mono', fontSize: 'clamp(12px, 2vw, 16px)', color: '#050505', letterSpacing: '0.08em', marginBottom: '14px' }}>
            Willovate Private Limited
          </p>
          <li style={{ fontFamily: 'Inter', fontSize: 'clamp(12px, 2vw, 14px)', lineHeight: 1.7, color: '#333333', marginBottom: '20px', maxWidth: '800px' }}>
              <li>Implemented responsive layouts across 15+ pages using Tailwind's breakpoint utility classes, resolved UI defects 
                  including a broken modal overlay, and eliminated redundant API calls via TanStack Query's conditional fetching and 
                  background re-fetching. </li>
              <li>Designed and integrated 10+ ASP.NET Web API endpoints with authorization checks and DTOs built from scratch, 
                  implementing complete data flows and business logic for 4 to 5 product features on a production SaaS platform. </li>
              <li>Conducted code reviews on 20+ pull requests, catching inconsistent component structure, duplicate components, 
                  conflicting app-level routes, and missing database migrations before they reached production.</li>
              <li>Coordinated sprint planning and progress tracking across a four-developer team through daily standups and a sprint-management tool, aligning priorities to 
                  keep feature delivery on schedule.</li>
          </li>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
            {['.NET Web APIs', 'C#', 'React.js',  'PostgreSQL', 'TanStack Query', 'Swagger UI', 'REST APIs', 'GitHub'].map((tag) => (
              <span
                key={tag}
                style={{
                  fontFamily: 'IBM Plex Mono',
                  fontSize: 'clamp(8px, 1.5vw, 10px)',
                  letterSpacing: '0.1em',
                  color: '#0A0A0A',
                  border: '1px solid #0A0A0A',
                  padding: '3px 10px',
                }}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Doodles */}
        <div style={{ position: 'absolute', top: '16px', right: '24px', display: window.innerWidth > 640 ? 'block' : 'none' }}>
          <PaperPlane color="#B8B8B8" size={32} />
        </div>
        <div style={{ position: 'absolute', bottom: '24px', left: '24px', display: window.innerWidth > 640 ? 'block' : 'none' }}>
          <Staircase color="#B8B8B8" size={32} />
        </div>
      </div>
    </section>
  )
}

// ── Skills Section ────────────────────────────────────────────────────────────

const skillData = [
  {
    label: 'LANGUAGES',
    doodle: <CodeBrackets color="#0A0A0A" size={22} />,
    large: ['C#', 'JavaScript', 'Typescript', 'Python']
  },
  {
    label: 'FRONTEND',
    doodle: <CursorArrow color="#0A0A0A" size={22} />,
    large: ['React.js', 'Next.js', 'Tailwind CSS', 'TanStack Query', 'HTML5', 'CSS3']
  },
  {
    label: 'BACKEND',
    doodle: <Gear color="#0A0A0A" size={22} />,
    large: ['ASP .NET', '.NET Web APIs', 'Node.js', 'Express.js', 'REST APIs']
  },
  {
    label: 'DATABASES',
    doodle: <DatabaseCylinder color="#0A0A0A" size={22} />,
    large: ['SQL Server', 'PostgreSQL', 'MongoDB']
  },
  {
    label: 'TOOLS & OTHER',
    doodle: <Toolbox color="#0A0A0A" size={22} />,
    large: ['Git', 'GitHub', 'Postman', 'Swagger UI', 'GitHub Copilot']
  },
]

function Skills() {
  return (
    <section
      id="skills"
      style={{ backgroundColor: '#F5F5F2', padding: window.innerWidth > 768 ? '60px 7%' : 'clamp(40px, 10vw, 60px) clamp(16px, 5%, 32px)', position: 'relative', overflow: 'hidden' }}
    >
      {/* Giant ghost numeral */}
      <div
        style={{
          position: 'absolute',
          top: '-40px',
          right: window.innerWidth > 640 ? '5%' : '2%',
          fontFamily: 'Archivo Black',
          fontSize: 'clamp(120px, 30vw, 280px)',
          color: 'rgba(0,0,0,0.04)',
          lineHeight: 1,
          userSelect: 'none',
          pointerEvents: 'none',
        }}
      >
        03
      </div>

      <div style={{ fontFamily: 'IBM Plex Mono', fontSize: 'clamp(9px, 2vw, 11px)', letterSpacing: '0.15em', color: '#555555', marginBottom: '24px' }}>
        03 / SKILLS
      </div>
      <h2
        style={{
          fontFamily: 'Archivo Black',
          fontSize: 'clamp(32px, 7vw, 80px)',
          lineHeight: 0.95,
          letterSpacing: '-0.02em',
          color: '#0A0A0A',
          textTransform: 'uppercase',
          marginBottom: '50px',
        }}
      >
        THE TOOLS /
        <br />
        I THINK WITH.
      </h2>

      <div style={{ display: 'grid', gridTemplateColumns: window.innerWidth > 1024 ? 'repeat(3, 1fr)' : window.innerWidth > 640 ? 'repeat(2, 1fr)' : '1fr', gap: 'clamp(20px, 4vw, 30px)' }}>
        {skillData.map(({ label, doodle, large}) => (
          <div key={label}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
              {doodle}
              <span style={{ fontFamily: 'IBM Plex Mono', fontSize: 'clamp(9px, 2vw, 11px)', letterSpacing: '0.15em', color: '#555555' }}>{label}</span>
            </div>
            <div style={{ height: '1px', backgroundColor: '#0A0A0A', marginBottom: '24px', width: '100%' }} />
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {large.map((s) => (
                <span key={s} style={{ fontFamily: 'Archivo Black', fontSize: 'clamp(16px, 3vw, 20px)', color: '#0A0A0A', textTransform: 'uppercase', letterSpacing: '-0.01em' }}>
                  {s}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

// ── Work Section ──────────────────────────────────────────────────────────────

const projects = [
  {
    num: '01',
    name: 'DOCUMENT COLLABORATION APP',
    desc: `A full-stack collaborative document workspace supporting concurrent multi-user editing, backed by a rich-text 
          engine and integrated LLM-powered tools for summarization, translation, and content improvement — built end-to-end 
          from database schema to a responsive real-time frontend.`,
    tags: ['REACT.JS', 'NODE.JS', 'EXPRESS.JS', 'MONGODB'],
    image: project1,
    github: 'https://github.com/Srushti-17/Docolab',
  },
  {
    num: '02',
    name: 'MEDSAI',
    desc: `An AI-driven drug discovery platform orchestrating a crew of autonomous agents (via CrewAI) to analyze chemical 
          compound data and predict pharmacological effectiveness, paired with an interactive React frontend for exploring results.`,
    tags: ['REACT.JS', 'NODE.JS', 'CREWAI'],
    image: project2,
    github: 'https://github.com/Srushti-17/HackOn_CodeByte',
  },
  {
    num: '03',
    name: 'CODYCREW',
    desc: `An autonomous AI reviewer that scans GitHub repositories to flag bugs, security vulnerabilities, and missing test 
          coverage — built to cut down manual code-review overhead and speed up the path to a mergeable PR.`,
    tags: ['PYTHON', 'GOOGLE ADK'],
    image: project3,
    github: 'https://github.com/Srushti-17/CodyCrew',
  },
]

function Work() {
  const [hoveredProject, setHoveredProject] = useState<string | null>(null)

  return (
    <section
      id="work"
      style={{ backgroundColor: '#050505', padding: window.innerWidth > 768 ? '100px 7%' : 'clamp(60px, 15vw, 100px) clamp(16px, 5%, 32px)', position: 'relative' }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '24px', flexWrap: 'wrap' }}>
        <div style={{ fontFamily: 'IBM Plex Mono', fontSize: 'clamp(9px, 2vw, 11px)', letterSpacing: '0.15em', color: '#555555' }}>
          04 / SELECTED WORK
        </div>
        <div style={{ marginLeft: '8px', opacity: 0.6, display: window.innerWidth > 640 ? 'block' : 'none' }}>
          <EyeOutline color="#555555" size={24} />
        </div>
      </div>
      <h2
        style={{
          fontFamily: 'Archivo Black',
          fontSize: 'clamp(32px, 7vw, 80px)',
          lineHeight: 0.95,
          letterSpacing: '-0.02em',
          color: '#F5F5F2',
          textTransform: 'uppercase',
          marginBottom: '64px',
        }}
      >
        THINGS /
        <br />
        I'VE BUILT.
      </h2>

      <div>
        {projects.map(({ num, name, desc, tags, image, github }, i) => (
          <div key={num}>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: window.innerWidth > 1100 ? '80px minmax(0, 760px) 420px' : window.innerWidth > 768 ? '60px minmax(0, 1fr)' : '1fr',
                gap: window.innerWidth > 768 ? '32px' : '24px',
                padding: window.innerWidth > 640 ? '36px 0' : '24px 0',
                cursor: 'default',
                transition: 'opacity 0.2s',
                opacity: hoveredProject && hoveredProject !== num ? 0.4 : 1,
                flexDirection: window.innerWidth > 768 ? 'row' : 'column',
              }}
              onMouseEnter={() => setHoveredProject(num)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', paddingTop: '4px' }}>
                <span style={{ fontFamily: 'IBM Plex Mono', fontSize: 'clamp(12px, 2vw, 14px)', color: '#555555', letterSpacing: '0.08em' }}>{num}</span>
                <DiagonalArrow color="#555555" size={18} />
              </div>
              <div>
                <h3
                  style={{
                    fontFamily: 'Archivo Black',
                    fontSize: 'clamp(20px, 4vw, 28px)',
                    color: '#F5F5F2',
                    textTransform: 'uppercase',
                    letterSpacing: '-0.01em',
                    marginBottom: '12px',
                  }}
                >
                  {name}
                </h3>
                <p style={{ fontFamily: 'Inter', fontSize: 'clamp(12px, 2vw, 14px)', lineHeight: 1.7, color: '#B8B8B8', maxWidth: '600px', marginBottom: '16px' }}>
                  {desc}
                </p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '12px' }}>
                  {tags.map((tag) => (
                    <span
                      key={tag}
                      style={{
                        fontFamily: 'IBM Plex Mono',
                        fontSize: 'clamp(8px, 1.5vw, 10px)',
                        letterSpacing: '0.1em',
                        color: '#F5F5F2',
                        border: '1px solid #555555',
                        padding: '3px 10px',
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <a
                  href={github}
                  target='_blank'
                  rel="noopener noreferrer"
                  style={{
                    display: 'inline-flex',
                    fontFamily: 'IBM Plex Mono',
                    fontSize: 'clamp(10px, 1.5vw, 12px)',
                    letterSpacing: '0.12em',
                    color: '#F5F5F2',
                    textDecoration: 'underline',
                    textUnderlineOffset: '4px',
                    alignItems: 'center',
                  }}
                >
                  GITHUB
                  <ExternalArrow color="#F5F5F2" size={16} />
                </a>
              </div>
              {/* PROJECT IMAGE */}
              {image && window.innerWidth > 1100 && (
                <div
                  style={{
                    width: '100%',
                    height: '230px',
                    overflow: 'hidden',
                    border: '1px solid #555555',
                  }}
                >
                  <img
                    src={image}
                    alt={name}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      display: 'block',
                    }}
                  />
                </div>
              )}
            </div>
            {/* Mobile Image - show below on mobile */}
            {image && window.innerWidth <= 1100 && (
              <div
                style={{
                  width: '100%',
                  height: '200px',
                  overflow: 'hidden',
                  border: '1px solid #555555',
                  marginBottom: '24px',
                }}
              >
                <img
                  src={image}
                  alt={name}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    display: 'block',
                  }}
                />
              </div>
            )}
            {i < projects.length - 1 && (
              <div style={{ height: '1px', backgroundColor: '#555555' }} />
            )}
          </div>
        ))}
      </div>
    </section>
  )
}

// ── Recognition Section ───────────────────────────────────────────────────────

const achievements = [
  {
    doodle: <Trophy color="#F5F5F2" size={24} />,
    title: 'HACKORBIT 2025 FINALIST',
    sub: 'National Hackathon — EcoSwap',
    year: '2025',
    rotate: '-1deg',
  },
  {
    doodle: <Badge color="#F5F5F2" size={24} />,
    title: 'KAGGLE CONTRIBUTOR',
    sub: 'Notebooks spanning data analysis, AI agents, and competition entries.',
    year: '2025',
    rotate: '0deg',
  },
  {
    doodle: <Ribbon color="#F5F5F2" size={24} />,
    title: 'CODERSCAVE INTERNSHIP',
    sub: 'Virtual Web Development Program',
    year: '2025',
    rotate: '1deg',
  },
]

function Recognition() {
  return (
    <section
      id="recognition"
      style={{ backgroundColor: '#050505', padding: window.innerWidth > 768 ? '80px 7%' : 'clamp(60px, 15vw, 80px) clamp(16px, 5%, 32px)', position: 'relative', borderTop: '1px solid #111111' }}
    >
      <div style={{ position: 'absolute', top: '40px', right: window.innerWidth > 640 ? '12%' : '16px', opacity: 0.15, display: window.innerWidth > 768 ? 'block' : 'none' }}>
        <Starburst color="#F5F5F2" size={48} />
      </div>

      <div style={{ fontFamily: 'IBM Plex Mono', fontSize: 'clamp(9px, 2vw, 11px)', letterSpacing: '0.15em', color: '#555555', marginBottom: '40px' }}>
        05 / RECOGNITION
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: window.innerWidth > 1024 ? 'repeat(3, 1fr)' : window.innerWidth > 640 ? 'repeat(2, 1fr)' : '1fr', gap: 'clamp(16px, 3vw, 24px)' }}>
        {achievements.map(({ doodle, title, sub, year, rotate }) => (
          <div
            key={title}
            style={{
              border: '1px dashed #555555',
              padding: 'clamp(16px, 4vw, 28px)',
              transform: window.innerWidth > 768 ? `rotate(${rotate})` : 'rotate(0deg)',
              display: 'flex',
              flexDirection: 'column',
              gap: '12px',
              transition: 'border-color 0.2s, transform 0.2s',
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLElement
              el.style.borderColor = '#F5F5F2'
              el.style.transform = 'rotate(0deg)'
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLElement
              el.style.borderColor = '#555555'
              el.style.transform = window.innerWidth > 768 ? `rotate(${rotate})` : 'rotate(0deg)'
            }}
          >
            {doodle}
            <h4 style={{ fontFamily: 'Archivo Black', fontSize: 'clamp(13px, 2.5vw, 16px)', color: '#F5F5F2', textTransform: 'uppercase', letterSpacing: '0.02em' }}>
              {title}
            </h4>
            <p style={{ fontFamily: 'Inter', fontSize: 'clamp(11px, 2vw, 13px)', color: '#B8B8B8', lineHeight: 1.5 }}>{sub}</p>
            <span style={{ fontFamily: 'IBM Plex Mono', fontSize: '11px', letterSpacing: '0.1em', color: '#DBDBDB' }}>{year}</span>
          </div>
        ))}
      </div>
    </section>
  )
}

// ── Contact Section ───────────────────────────────────────────────────────────

function Contact() {
  return (
    <section
      id="contact"
      style={{ backgroundColor: '#050505', padding: window.innerWidth > 768 ? '120px 7% 100px' : 'clamp(60px, 15vw, 100px) clamp(16px, 5%, 32px)', borderTop: '1px solid #111111', position: 'relative' }}
    >
      <div style={{ position: 'absolute', top: '36px', left: window.innerWidth > 640 ? '7%' : '16px', opacity: 0.5, display: window.innerWidth > 768 ? 'block' : 'none' }}>
        <SpeechBubble color="#555555" size={28} />
      </div>

      <h2
        style={{
          fontFamily: 'Archivo Black',
          fontSize: 'clamp(36px, 10vw, 120px)',
          lineHeight: 0.92,
          letterSpacing: '-0.03em',
          color: '#F5F5F2',
          textTransform: 'uppercase',
          marginBottom: '60px',
        }}
      >
        LET'S BUILD
        <br />
        SOMETHING.
      </h2>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '0', borderTop: '1px solid #555555' }}>
        {[
          { label: 'EMAIL', val: 'srushtipillare@gmail.com', href: 'mailto:srushtipillare@gmail.com', doodle: <Envelope color="#555555" size={20} />, highlight: true },
          { label: 'GITHUB', val: 'github.com/Srushti-17', href: 'https://github.com/Srushti-17', doodle: null },
          { label: 'LINKEDIN', val: 'linkedin.com/in/srushti-pillare', href: 'https://linkedin.com/in/srushti-pillare', doodle: null },
        ].map(({ label, val, href, doodle, highlight }) => (
          <a
            key={label}
            href={href}
            target='_blank'
            style={{
              display: window.innerWidth > 768 ? 'grid' : 'flex',
              gridTemplateColumns: '160px 1fr auto',
              flexDirection: 'column',
              alignItems: window.innerWidth > 768 ? 'center' : 'flex-start',
              gap: window.innerWidth > 768 ? '24px' : '8px',
              padding: window.innerWidth > 768 ? '28px 0' : '20px 0',
              borderBottom: '1px solid #555555',
              textDecoration: 'none',
              transition: 'background-color 0.2s',
            }}
            onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.backgroundColor = window.innerWidth > 768 ? '#111111' : 'transparent')}
            onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.backgroundColor = 'transparent')}
          >
            <span style={{ fontFamily: 'IBM Plex Mono', fontSize: 'clamp(9px, 2vw, 11px)', letterSpacing: '0.15em', color: '#555555', display: 'flex', alignItems: 'center', gap: '8px' }}>
              {doodle}
              {label}
            </span>
            <span style={{ fontFamily: 'Inter', fontSize: 'clamp(14px, 3vw, 18px)', color: '#F5F5F2', wordBreak: 'break-all' }}>{val}</span>
            <DiagonalArrow color="#555555" size={20} />
          </a>
        ))}
      </div>

      {/* Caveat annotation */}
      <div style={{ position: 'absolute', right: window.innerWidth > 640 ? '7%' : '16px', top: window.innerWidth > 768 ? '240px' : 'auto', bottom: window.innerWidth > 768 ? 'auto' : '100px', display: 'flex', alignItems: 'center', gap: '8px' }}>
        <CurvedArrow color="#B8B8B8" size={window.innerWidth > 640 ? 56 : 32} rotate={30} />
        <span style={{ fontFamily: 'Caveat', fontSize: 'clamp(20px, 4vw, 36px)', color: '#B8B8B8', fontWeight: 700, transform: 'rotate(-4deg)', display: 'inline-block' }}>
          say hi
        </span>
      </div>
    </section>
  )
}

// ── Footer ────────────────────────────────────────────────────────────────────

function Footer() {
  return (
    <footer
      style={{
        backgroundColor: '#111111',
        borderTop: '1px solid #222222',
        minHeight: window.innerWidth > 768 ? '80px' : 'auto',
        padding: window.innerWidth > 768 ? '0 7%' : 'clamp(16px, 4vw, 24px) clamp(16px, 5%, 32px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: window.innerWidth > 768 ? 'space-between' : 'center',
        flexDirection: window.innerWidth > 768 ? 'row' : 'column',
        gap: window.innerWidth > 768 ? 0 : '16px',
        textAlign: window.innerWidth > 768 ? 'left' : 'center',
      }}
    >
      <span style={{ fontFamily: 'IBM Plex Mono', fontSize: 'clamp(9px, 2vw, 11px)', letterSpacing: '0.1em', color: '#555555', order: window.innerWidth > 768 ? 0 : 2 }}>
        SRUSHTI PILLARE
      </span>
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', order: window.innerWidth > 768 ? 0 : 1 }}>
        <a href="#hero" style={{ display: 'flex', alignItems: 'center' }}>
          <CurvedArrow color="#555555" size={20} rotate={180} />
        </a>
        <div style={{ display: 'flex', gap: window.innerWidth > 640 ? '20px' : '12px', flexWrap: 'wrap', justifyContent: window.innerWidth > 768 ? 'flex-start' : 'center' }}>
          {['ABOUT', 'EXPERIENCE', 'SKILLS', 'WORK', 'CONTACT'].map((item, i, arr) => (
            <span key={item}>
              <a
                href={`#${item.toLowerCase()}`}
                style={{ fontFamily: 'IBM Plex Mono', fontSize: 'clamp(8px, 1.5vw, 10px)', letterSpacing: '0.1em', color: '#555555', textDecoration: 'none' }}
              >
                {item}
              </a>
              {i < arr.length - 1 && <span style={{ color: '#333333', marginLeft: window.innerWidth > 640 ? '20px' : '8px' }}>·</span>}
            </span>
          ))}
        </div>
      </div>
      <span style={{ fontFamily: 'IBM Plex Mono', fontSize: 'clamp(9px, 1.5vw, 11px)', letterSpacing: '0.08em', color: '#555555', order: window.innerWidth > 768 ? 0 : 3 }}>
        © 2026
      </span>
    </footer>
  )
}

// ── App ───────────────────────────────────────────────────────────────────────

export default function App() {
  useViewportWidth()

  return (
    <div style={{ backgroundColor: '#050505', minHeight: '100vh' }}>
      <Nav />
      <Reveal><Hero /></Reveal>
      <Reveal delay={80}><About /></Reveal>
      <Reveal delay={80}><Experience /></Reveal>
      <Reveal><Skills /></Reveal>
      <Reveal delay={80}><Work /></Reveal>
      <Reveal><Recognition /></Reveal>
      <Reveal delay={80}><Contact /></Reveal>
      <Reveal><Footer /></Reveal>
    </div>
  )
}
