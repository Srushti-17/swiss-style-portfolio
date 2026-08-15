import { useState, useEffect } from 'react'
import './index.css'
import profile from './assets/hero section.jpeg'
import resume from './assets/Srushti_Pillare_SDE.pdf'
import profile2 from './assets/hero5.jpeg'

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

// ── Navigation ────────────────────────────────────────────────────────────────

function Nav() {
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        backgroundColor: scrolled ? 'rgba(5,5,5,0.95)' : 'transparent',
        borderBottom: scrolled ? '1px solid #555555' : 'none',
        transition: 'background-color 0.3s, border-bottom 0.3s',
        padding: '0 7%',
        height: '64px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}
    >
      <span style={{ fontFamily: 'IBM Plex Mono', fontWeight: 600, fontSize: '14px', letterSpacing: '0.08em', color: '#F5F5F2' }}>
        SRUSHTI PILLARE
      </span>
      <div style={{ display: 'flex', alignItems: 'center', gap: '32px', marginRight: '350px', position: 'relative' }}>
        {/* Curved arrow doodle pointing toward ABOUT — first link */}
        <div style={{ position: 'absolute', left: '-36px', top: '-22px', opacity: 0.55, pointerEvents: 'none' }}>
          <CurvedArrow color="#B8B8B8" size={32} rotate={20} />
        </div>
        {['ABOUT', 'EXPERIENCE', 'SKILLS', 'WORK', 'CONTACT'].map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase()}`}
            style={{
              fontFamily: 'IBM Plex Mono',
              fontSize: '11px',
              letterSpacing: '0.12em',
              // color: '#B8B8B8',
              color: '#F5F5F2',
              textDecoration: 'none',
              transition: 'color 0.2s',
            }}
            onMouseEnter={(e) => ((e.target as HTMLElement).style.color = '#F5F5F2')}
            onMouseLeave={(e) => ((e.target as HTMLElement).style.color = '#F5F5F2')}
          >
            {item}
          </a>
        ))}
      </div>
    </nav>
  )
}

// ── Hero Section ──────────────────────────────────────────────────────────────

function Hero() {
  return (
    <section
      id="hero"
      style={{
        backgroundColor: '#050505',
        minHeight: '100vh',
        display: 'grid',
        gridTemplateColumns: '1fr 420px',
        alignItems: 'stretch',
        position: 'relative',
      }}
    >
      {/* Vol tag
      <div
        style={{
          position: 'absolute',
          top: '20px',
          left: 'calc(7% + 48px)',
          fontFamily: 'IBM Plex Mono',
          fontSize: '10px',
          letterSpacing: '0.15em',
          color: '#555555',
          zIndex: 2,
        }}
      >
        VOL. 01 / 2026
      </div> */}

      {/* Left vertical sidebar — lives outside the padded grid flow */}
      <div
        style={{
          position: 'absolute',
          left: '16px',
          top: '50%',
          transform: 'translateY(-50%)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '16px',
          zIndex: 2,
        }}
      >
        <span
          style={{
            fontFamily: 'IBM Plex Mono',
            fontSize: '9px',
            letterSpacing: '0.2em',
            color: '#555555',
            whiteSpace: 'nowrap',
            writingMode: 'vertical-rl',
            transform: 'rotate(180deg)',
          }}
        >
          LET'S CONNECT
        </span>
        <div style={{ width: '1px', height: '32px', backgroundColor: '#555555' }} />
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
              color: '#555555',
              textDecoration: 'none',
              border: '1px solid #555555',
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
              el.style.color = '#555555'
              el.style.borderColor = '#555555'
            }}
          >
            {label}
          </a>
        ))}
      </div>

      {/* Left content */}
      <div style={{ padding: '140px 4% 80px calc(7% + 48px)', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '32px' }}>
          <span style={{ fontFamily: 'IBM Plex Mono', fontSize: '11px', letterSpacing: '0.15em', color: '#B8B8B8' }}>HELLO, I'M</span>
          <div style={{ flex: 1, height: '1px', backgroundColor: '#555555' }} />
        </div>

        <h1
          style={{
            fontFamily: 'Archivo Black',
            fontSize: 'clamp(48px, 6.5vw, 96px)',
            lineHeight: 0.92,
            letterSpacing: '-0.02em',
            color: '#F5F5F2',
            textTransform: 'uppercase',
            marginBottom: '36px',
          }}
        >
          SOFTWARE
          <br />
          DEVELOPER &amp;
          <br />
          CREATIVE BUILDER
        </h1>

        <p style={{ fontFamily: 'Inter', fontSize: '15px', lineHeight: 1.7, color: '#B8B8B8', maxWidth: '420px', marginBottom: '40px' }}>
          I turn concepts into scalable, well-crafted software.
          <br />
          Full-stack developer with a taste for clean architecture and thoughtful UI.
        </p>

        <div style={{ display: 'flex', alignItems: 'center', gap: '16px', position: 'relative' }}>
          <a
            href={resume}
            target='_blank'
            style={{
              fontFamily: 'IBM Plex Mono',
              fontSize: '12px',
              letterSpacing: '0.12em',
              color: '#F5F5F2',
              border: '0.1px solid #F5F5F2',
              padding: '2px 8px',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
            }}
          >
            DOWNLOAD RESUME
          </a>
          <a
            href="#work"
            style={{
              fontFamily: 'IBM Plex Mono',
              fontSize: '12px',
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
          <div style={{ position: 'absolute', left: '-10px', bottom: '-50px' }}>
            <BrowserWindow color="#555555" size={36} />
          </div>
        </div>
      </div>

      {/* Right photo panel */}
      <div style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
        <div style={{ flex: 1, position: 'relative', overflow: 'hidden', backgroundColor: '#111111' }}>
          <img
            // src="https://images.unsplash.com/photo-1527576539890-dfa815648363?w=600&h=700&fit=crop&auto=format&grayscale"
            src={profile}
            alt="Architectural structure, black and white"
            style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'grayscale(100%) contrast(1.1)', display: 'block' }}
          />
          {/* <div style={{ position: 'absolute', top: '16px', right: '16px' }}>
            <Lightbulb color="#F5F5F2" size={32} />
          </div> */}
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
              { label: 'BASED IN —', val: 'NAGPUR, INDIA' },
              { label: 'AVAILABLE FOR —', val: 'OPPORTUNITIES' },
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
        padding: '100px 7%',
        display: 'grid',
        gridTemplateColumns: '1fr 360px',
        gap: '80px',
        alignItems: 'start',
      }}
    >
      {/* Left */}
      <div>
        <div style={{ fontFamily: 'IBM Plex Mono', fontSize: '11px', letterSpacing: '0.15em', color: '#555555', marginBottom: '24px' }}>
          01 / ABOUT
        </div>
        <h2
          style={{
            fontFamily: 'Archivo Black',
            fontSize: 'clamp(40px, 5vw, 72px)',
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
        <p style={{ fontFamily: 'Inter', fontSize: '15px', lineHeight: 1.8, color: '#B8B8B8', maxWidth: '520px', marginBottom: '20px' }}>
          I'm a software developer who genuinely enjoys the process of making things. Whether it's
          a clean API, an intuitive UI, or a pipeline that hums, I care about the craft behind every layer.
        </p>
        <p style={{ fontFamily: 'Inter', fontSize: '15px', lineHeight: 1.8, color: '#B8B8B8', maxWidth: '520px', marginBottom: '36px' }}>
          Recently graduated from B.Tech in AI, I've been building real products alongside my studies—
          shipping features, debugging edge cases, and growing through every collaboration.
        </p>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <span style={{ fontFamily: 'Caveat', fontSize: '22px', color: '#B8B8B8', fontWeight: 600 }}>
            still learning, always building
          </span>
          <CurvedArrow color="#B8B8B8" size={28} rotate={10} />
        </div>
      </div>

      {/* Right — rotated index card */}
      <div style={{ position: 'relative', gap: '24px', paddingTop: '24px' }}>
        {/*first card*/}
        <div
        className="education-card education-card-left"
          style={{
            backgroundColor: '#F5F5F2',
            border: '1px solid #050505',
            padding: '32px',
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
          <div style={{ position: 'absolute', top: '16px', right: '12px' }}>
            <GraduationCap color="#050505" size={28} />
          </div>
          <div style={{ position: 'absolute', bottom: '-12px', left: '24px' }}>
            <OpenBook color="#050505" size={24} />
          </div>

          <div style={{ fontFamily: 'IBM Plex Mono', fontSize: '10px', letterSpacing: '0.2em', color: '#555555', marginBottom: '16px', borderBottom: '1px solid #B8B8B8', paddingBottom: '8px' }}>
            EDUCATION
          </div>
          <p style={{ fontFamily: 'Archivo Black', fontSize: '14px', color: '#050505', lineHeight: 1.3, marginBottom: '10px', textTransform: 'uppercase' }}>
            Bachelor of Technology in Artificial Intelligence
          </p>
          <p style={{ fontFamily: 'Inter', fontSize: '13px', color: '#050505', lineHeight: 1.6, marginBottom: '6px' }}>
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
            padding: '32px',
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
          <div style={{ position: 'absolute', top: '16px', right: '12px' }}>
            <GraduationCap color="#050505" size={28} />
          </div>
          <div style={{ position: 'absolute', bottom: '-12px', left: '24px' }}>
            <OpenBook color="#050505" size={24} />
          </div>

          <div style={{ fontFamily: 'IBM Plex Mono', fontSize: '10px', letterSpacing: '0.2em', color: '#555555', marginBottom: '16px', borderBottom: '1px solid #B8B8B8', paddingBottom: '8px' }}>
            EDUCATION
          </div>
          <p style={{ fontFamily: 'Archivo Black', fontSize: '14px', color: '#050505', lineHeight: 1.3, marginBottom: '10px', textTransform: 'uppercase' }}>
            Higher Secondary Certificate
          </p>
          <p style={{ fontFamily: 'Inter', fontSize: '13px', color: '#050505', lineHeight: 1.6, marginBottom: '6px' }}>
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
        gridTemplateColumns: '38% 62%',
        minHeight: '600px',
      }}
    >
      {/* Left black column */}
      <div style={{ backgroundColor: '#050505', padding: '80px 7% 80px 7%', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        <div style={{ fontFamily: 'IBM Plex Mono', fontSize: '11px', letterSpacing: '0.15em', color: '#555555', marginBottom: '24px' }}>
          02 / EXPERIENCE
        </div>
        <h2
          style={{
            fontFamily: 'Archivo Black',
            fontSize: 'clamp(36px, 4vw, 60px)',
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
        <p style={{ fontFamily: 'Inter', fontSize: '14px', lineHeight: 1.8, color: '#B8B8B8', marginBottom: '16px' }}>
          Each role has pushed me to build faster, think deeper, and ship with more confidence.
        </p>
        <p style={{ fontFamily: 'Inter', fontSize: '14px', lineHeight: 1.8, color: '#B8B8B8', marginBottom: '36px' }}>
          Real deadlines, real codebases, real accountability.
        </p>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '32px' }}>
          <span style={{ fontFamily: 'Caveat', fontSize: '18px', color: '#B8B8B8', fontWeight: 600 }}>
            Every project leaves something behind.
          </span>
          <CurvedArrow color="#B8B8B8" size={24} rotate={-10} />
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', borderTop: '1px solid #555555', paddingTop: '20px' }}>
          {['01  PRODUCT DEVELOPMENT', '02  FRONTEND', '03  FULL-STACK'].map((item) => (
            <span key={item} style={{ fontFamily: 'IBM Plex Mono', fontSize: '11px', letterSpacing: '0.1em', color: '#555555' }}>
              {item}
            </span>
          ))}
        </div>
      </div>

      {/* Right off-white column */}
      <div style={{ backgroundColor: '#F5F5F2', padding: '80px 48px', position: 'relative' }}>
        {/* Header row */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '8px' }}>
          <span style={{ fontFamily: 'IBM Plex Mono', fontSize: '11px', letterSpacing: '0.15em', color: '#555555' }}>EXPERIENCE LOG</span>
          <span style={{ fontFamily: 'IBM Plex Mono', fontSize: '11px', letterSpacing: '0.15em', color: '#B8B8B8' }}>PORTFOLIO / 2026</span>
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

          <div style={{ fontFamily: 'IBM Plex Mono', fontSize: '10px', letterSpacing: '0.12em', color: '#555555', marginBottom: '12px' }}>
            DEC 2025 — PRESENT
          </div>
          <h3 style={{ fontFamily: 'Archivo Black', fontSize: '22px', color: '#0A0A0A', textTransform: 'uppercase', letterSpacing: '-0.01em', marginBottom: '4px' }}>
            SOFTWARE DEVELOPMENT INTERN
          </h3>
          <p style={{ fontFamily: 'IBM Plex Mono', fontSize: '12px', color: '#555555', letterSpacing: '0.08em', marginBottom: '16px' }}>
            Willovate Private Limited
          </p>
          <p style={{ fontFamily: 'Inter', fontSize: '14px', lineHeight: 1.7, color: '#333333', marginBottom: '20px', maxWidth: '460px' }}>
              "Built and integrated 10+ REST API endpoints across 4–5 product features using .NET and C#",
              "Implemented responsive UI across 15+ pages and modal components using React.js and TanStack Query",
              "Reviewed 20+ pull requests, flagging UI inconsistencies and logic issues before production",
              "Managed data using PostgreSQL — wrote queries and ran migrations independently",
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
            {['.NET Web APIs', 'C#', 'React.js', 'REST APIs'].map((tag) => (
              <span
                key={tag}
                style={{
                  fontFamily: 'IBM Plex Mono',
                  fontSize: '10px',
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
        <div style={{ position: 'absolute', top: '16px', right: '24px' }}>
          <PaperPlane color="#B8B8B8" size={32} />
        </div>
        <div style={{ position: 'absolute', bottom: '24px', left: '24px' }}>
          <Staircase color="#B8B8B8" size={32} />
        </div>
      </div>
    </section>
  )
}

// ── Skills Section ────────────────────────────────────────────────────────────

const skillData = [
  {
    label: 'FRONTEND',
    doodle: <CursorArrow color="#0A0A0A" size={22} />,
    large: ['React.js', 'Next.js', 'JavaScript'],
    small: ['TypeScript', 'Tailwind CSS', 'HTML5', 'CSS3', 'TanStack Query'],
  },
  {
    label: 'BACKEND',
    doodle: <Gear color="#0A0A0A" size={22} />,
    large: ['.NET Web APIs', 'C#', 'Node.js', 'REST APIs'],
    small: ['Express.js', 'Python'],
  },
  {
    label: 'TOOLS & DATA',
    doodle: <DatabaseCylinder color="#0A0A0A" size={22} />,
    large: ['Git', 'GitHub'],
    small: ['PostgreSQL', 'MongoDB', 'SQL Server', 'Postman', 'Swagger UI', 'GitHub Copilot'],
  },
]

function Skills() {
  return (
    <section
      id="skills"
      style={{ backgroundColor: '#F5F5F2', padding: '100px 7%', position: 'relative', overflow: 'hidden' }}
    >
      {/* Giant ghost numeral */}
      <div
        style={{
          position: 'absolute',
          top: '-40px',
          right: '5%',
          fontFamily: 'Archivo Black',
          fontSize: '280px',
          color: 'rgba(0,0,0,0.04)',
          lineHeight: 1,
          userSelect: 'none',
          pointerEvents: 'none',
        }}
      >
        03
      </div>

      <div style={{ fontFamily: 'IBM Plex Mono', fontSize: '11px', letterSpacing: '0.15em', color: '#555555', marginBottom: '24px' }}>
        03 / SKILLS
      </div>
      <h2
        style={{
          fontFamily: 'Archivo Black',
          fontSize: 'clamp(40px, 5.5vw, 80px)',
          lineHeight: 0.95,
          letterSpacing: '-0.02em',
          color: '#0A0A0A',
          textTransform: 'uppercase',
          marginBottom: '72px',
        }}
      >
        THE TOOLS /
        <br />
        I THINK WITH.
      </h2>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '48px' }}>
        {skillData.map(({ label, doodle, large, small }) => (
          <div key={label}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
              {doodle}
              <span style={{ fontFamily: 'IBM Plex Mono', fontSize: '11px', letterSpacing: '0.15em', color: '#555555' }}>{label}</span>
            </div>
            <div style={{ height: '1px', backgroundColor: '#0A0A0A', marginBottom: '24px', width: '100%' }} />
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {large.map((s) => (
                <span key={s} style={{ fontFamily: 'Archivo Black', fontSize: '20px', color: '#0A0A0A', textTransform: 'uppercase', letterSpacing: '-0.01em' }}>
                  {s}
                </span>
              ))}
              {small.map((s) => (
                <span key={s} style={{ fontFamily: 'Inter', fontSize: '14px', color: '#B8B8B8' }}>{s}</span>
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
    desc: 'Real-time document collaboration app with AI summarization, translation, and a rich-text editor for teams.',
    tags: ['REACT.JS', 'NODE.JS', 'EXPRESS.JS', 'MONGODB'],
  },
  {
    num: '02',
    name: 'MEDSAI',
    desc: 'AI-driven drug discovery platform using CrewAI agents to analyze chemical compounds and predict effectiveness.',
    tags: ['REACT.JS', 'NODE.JS', 'CREWAI'],
  },
  {
    num: '03',
    name: 'CODYCREW',
    desc: 'AI system that reviews GitHub repositories for bugs, security issues, and testing gaps to speed up review workflows.',
    tags: ['PYTHON', 'GOOGLE ADK'],
  },
]

function Work() {
  const [hoveredProject, setHoveredProject] = useState<string | null>(null)

  return (
    <section
      id="work"
      style={{ backgroundColor: '#050505', padding: '100px 7%', position: 'relative' }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '24px' }}>
        <div style={{ fontFamily: 'IBM Plex Mono', fontSize: '11px', letterSpacing: '0.15em', color: '#555555' }}>
          04 / SELECTED WORK
        </div>
        <div style={{ marginLeft: '8px', opacity: 0.6 }}>
          <EyeOutline color="#555555" size={24} />
        </div>
      </div>
      <h2
        style={{
          fontFamily: 'Archivo Black',
          fontSize: 'clamp(40px, 5.5vw, 80px)',
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
        {projects.map(({ num, name, desc, tags }, i) => (
          <div key={num}>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: '80px 1fr',
                gap: '32px',
                padding: '36px 0',
                cursor: 'default',
                transition: 'opacity 0.2s',
                opacity: hoveredProject && hoveredProject !== num ? 0.4 : 1,
              }}
              onMouseEnter={() => setHoveredProject(num)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', paddingTop: '4px' }}>
                <span style={{ fontFamily: 'IBM Plex Mono', fontSize: '14px', color: '#555555', letterSpacing: '0.08em' }}>{num}</span>
                <DiagonalArrow color="#555555" size={18} />
              </div>
              <div>
                <h3
                  style={{
                    fontFamily: 'Archivo Black',
                    fontSize: '28px',
                    color: '#F5F5F2',
                    textTransform: 'uppercase',
                    letterSpacing: '-0.01em',
                    marginBottom: '12px',
                  }}
                >
                  {name}
                </h3>
                <p style={{ fontFamily: 'Inter', fontSize: '14px', lineHeight: 1.7, color: '#B8B8B8', maxWidth: '600px', marginBottom: '16px' }}>
                  {desc}
                </p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                  {tags.map((tag) => (
                    <span
                      key={tag}
                      style={{
                        fontFamily: 'IBM Plex Mono',
                        fontSize: '10px',
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
              </div>
            </div>
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
    title: 'CODELENS',
    sub: 'Chrome Built-in AI Challenge',
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
      style={{ backgroundColor: '#050505', padding: '80px 7%', position: 'relative', borderTop: '1px solid #111111' }}
    >
      <div style={{ position: 'absolute', top: '40px', right: '12%', opacity: 0.15 }}>
        <Starburst color="#F5F5F2" size={48} />
      </div>

      <div style={{ fontFamily: 'IBM Plex Mono', fontSize: '11px', letterSpacing: '0.15em', color: '#555555', marginBottom: '40px' }}>
        05 / RECOGNITION
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px' }}>
        {achievements.map(({ doodle, title, sub, year, rotate }) => (
          <div
            key={title}
            style={{
              border: '1px dashed #555555',
              padding: '28px',
              transform: `rotate(${rotate})`,
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
              el.style.transform = `rotate(${rotate})`
            }}
          >
            {doodle}
            <h4 style={{ fontFamily: 'Archivo Black', fontSize: '14px', color: '#F5F5F2', textTransform: 'uppercase', letterSpacing: '0.02em' }}>
              {title}
            </h4>
            <p style={{ fontFamily: 'Inter', fontSize: '13px', color: '#B8B8B8', lineHeight: 1.5 }}>{sub}</p>
            <span style={{ fontFamily: 'IBM Plex Mono', fontSize: '11px', letterSpacing: '0.1em', color: '#555555' }}>{year}</span>
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
      style={{ backgroundColor: '#050505', padding: '120px 7% 100px', borderTop: '1px solid #111111', position: 'relative' }}
    >
      <div style={{ position: 'absolute', top: '36px', left: '7%', opacity: 0.5 }}>
        <SpeechBubble color="#555555" size={28} />
      </div>

      <h2
        style={{
          fontFamily: 'Archivo Black',
          fontSize: 'clamp(52px, 8vw, 120px)',
          lineHeight: 0.92,
          letterSpacing: '-0.03em',
          color: '#F5F5F2',
          textTransform: 'uppercase',
          marginBottom: '80px',
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
            style={{
              display: 'grid',
              gridTemplateColumns: '160px 1fr auto',
              alignItems: 'center',
              gap: '24px',
              padding: '28px 0',
              borderBottom: '1px solid #555555',
              textDecoration: 'none',
              transition: 'background-color 0.2s',
            }}
            onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.backgroundColor = '#111111')}
            onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.backgroundColor = 'transparent')}
          >
            <span style={{ fontFamily: 'IBM Plex Mono', fontSize: '11px', letterSpacing: '0.15em', color: '#555555', display: 'flex', alignItems: 'center', gap: '8px' }}>
              {doodle}
              {label}
            </span>
            <span style={{ fontFamily: 'Inter', fontSize: '18px', color: '#F5F5F2' }}>{val}</span>
            <DiagonalArrow color="#555555" size={20} />
          </a>
        ))}
      </div>

      {/* Caveat annotation */}
      <div style={{ position: 'absolute', right: '7%', top: '240px', display: 'flex', alignItems: 'center', gap: '8px' }}>
        <CurvedArrow color="#B8B8B8" size={56} rotate={30} />
        <span style={{ fontFamily: 'Caveat', fontSize: '36px', color: '#B8B8B8', fontWeight: 700, transform: 'rotate(-4deg)', display: 'inline-block' }}>
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
        height: '80px',
        padding: '0 7%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}
    >
      <span style={{ fontFamily: 'IBM Plex Mono', fontSize: '11px', letterSpacing: '0.1em', color: '#555555' }}>
        SRUSHTI PILLARE
      </span>
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
        <a href="#hero" style={{ display: 'flex', alignItems: 'center' }}>
          <CurvedArrow color="#555555" size={20} rotate={180} />
        </a>
        <div style={{ display: 'flex', gap: '20px' }}>
          {['ABOUT', 'EXPERIENCE', 'SKILLS', 'WORK', 'CONTACT'].map((item, i, arr) => (
            <span key={item}>
              <a
                href={`#${item.toLowerCase()}`}
                style={{ fontFamily: 'IBM Plex Mono', fontSize: '10px', letterSpacing: '0.1em', color: '#555555', textDecoration: 'none' }}
              >
                {item}
              </a>
              {i < arr.length - 1 && <span style={{ color: '#333333', marginLeft: '20px' }}>·</span>}
            </span>
          ))}
        </div>
      </div>
      <span style={{ fontFamily: 'IBM Plex Mono', fontSize: '11px', letterSpacing: '0.08em', color: '#555555' }}>
        © 2026
      </span>
    </footer>
  )
}

// ── App ───────────────────────────────────────────────────────────────────────

export default function App() {
  return (
    <div style={{ backgroundColor: '#050505', minHeight: '100vh' }}>
      <Nav />
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Work />
      <Recognition />
      <Contact />
      <Footer />
    </div>
  )
}
