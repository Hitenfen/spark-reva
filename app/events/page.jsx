export const metadata = {
  title: 'Events - SPARK',
};

export default function EventsPage() {
  return (
    <main style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '2rem',
      background: 'linear-gradient(180deg, hsl(var(--background)) 0%, hsl(var(--background)) 100%)',
      color: 'hsl(var(--foreground))',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Decorative floating sticker (uses existing public image) */}
      <img
        src="/images/newlogo.png"
        alt="sticker"
        aria-hidden="true"
        style={{
          position: 'absolute',
          right: 40,
          top: 40,
          width: 120,
          opacity: 0.08,
          transform: 'rotate(-12deg)'
        }}
      />

      <div style={{ textAlign: 'center', maxWidth: 900 }}>
        <div style={{ marginBottom: 20 }} aria-hidden>
          {/* Emoji banner */}
          <span style={{ fontSize: 36, margin: '0 8px' }}>🎉</span>
          <span style={{ fontSize: 36, margin: '0 8px' }}>🎀</span>
          <span style={{ fontSize: 36, margin: '0 8px' }}>🎤</span>
          <span style={{ fontSize: 36, margin: '0 8px' }}>🎊</span>
        </div>

        <h1 style={{ fontSize: 'clamp(1.5rem, 4vw, 2.5rem)', marginBottom: '1rem' }}>
          Welcome to our first event
        </h1>
        <p style={{ fontSize: '3.5rem', fontWeight: 700, marginBottom: 8 }}>
          "Inauguration Ceremony"
        </p>

        <p style={{ fontSize: '1.5rem', marginBottom: 6 }}>
          <span style={{ marginRight: 8 }}>📅</span>
          Date: 6-11-2025
        </p>

        <p style={{ fontSize: '1.5rem', marginBottom: 12 }}>
          <span style={{ marginRight: 8 }}>📍</span>
          Venue: Library Seminar hall
        </p>

        
      </div>
    </main>
  );
}
