'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import styles from '../styles/Hero.module.css';

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    
    const handleMouseMove = (e) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 40;
      const y = (e.clientY / window.innerHeight - 0.5) * 40;
      setMousePosition({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section className={styles.hero}>
      {/* Background Elements */}
      <div className={styles.background}>
        <div 
          className={styles.orb1}
          style={{
            transform: `translate(${mousePosition.x * 0.5}px, ${mousePosition.y * 0.5}px)`
          }}
        ></div>
        <div 
          className={styles.orb2}
          style={{
            transform: `translate(${-mousePosition.x * 0.3}px, ${-mousePosition.y * 0.3}px)`
          }}
        ></div>
        <div className={styles.circuit}></div>
      </div>

      {/* Animated Elements */}
      <div className={styles.floatingElements}>
        <div className={styles.floatingElement1}>⚡</div>
        <div className={styles.floatingElement2}>🔒</div>
        <div className={styles.floatingElement3}>💻</div>
        <div className={styles.floatingElement4}>🚀</div>
      </div>

      <div className={styles.container}>
        <div className={`${styles.content} ${isVisible ? styles.visible : ''}`}>
          
          {/* Welcome Badge */}
          <div className={styles.welcomeBadge}>
            <div className={styles.badgePulse}></div>
            <span className={styles.badgeText}>Reva University Technical Community</span>
          </div>

          {/* Main Heading */}
          <div className={styles.headingGroup}>
            <h1 className={styles.mainTitle}>
              Welcome to
            </h1>
            <div className={styles.sparkContainer}>
              <span className={styles.sparkText}>SPARK</span>
              <div className={styles.sparkTrail}></div>
            </div>
          </div>

          {/* Motto with accent */}
          <div className={styles.mottoWrapper}>
            <div className={styles.mottoLine}></div>
            <p className={styles.motto}>
              Igniting Innovation, Securing the Future
            </p>
            <div className={styles.mottoLine}></div>
          </div>

          {/* Description */}
          <div className={styles.descriptionWrapper}>
            <p className={styles.description}>
              A student-driven platform at the intersection of software development, 
              open-source innovation, and cybersecurity. We build, learn, and secure 
              the digital future together.
            </p>
          </div>

          {/* Stats with improved layout */}
          {/* <div className={styles.statsGrid}>
            <div className={styles.statItem}>
              <div className={styles.statNumberWrapper}>
                <span className={styles.statNumber}>50+</span>
                <div className={styles.statGlow}></div>
              </div>
              <span className={styles.statLabel}>Active Members</span>
            </div>
            <div className={styles.statDivider}></div>
            <div className={styles.statItem}>
              <div className={styles.statNumberWrapper}>
                <span className={styles.statNumber}>5+</span>
                <div className={styles.statGlow}></div>
              </div>
              <span className={styles.statLabel}>Events Hosted</span>
            </div>
            <div className={styles.statDivider}></div>
            <div className={styles.statItem}>
              <div className={styles.statNumberWrapper}>
                <span className={styles.statNumber}>10+</span>
                <div className={styles.statGlow}></div>
              </div>
              <span className={styles.statLabel}>Projects Built</span>
            </div>
          </div> */}

          {/* CTA Buttons */}
          <div className={styles.ctaGroup}>
            <Link href="#about" className={styles.ctaPrimary}>
              <span className={styles.ctaText}>Explore SPARK</span>
              <div className={styles.ctaHover}></div>
            </Link>
            <Link href="/events" className={styles.ctaSecondary}>
              <span className={styles.ctaText}>View Events</span>
              <div className={styles.ctaBorder}></div>
            </Link>
          </div>

          {/* Scroll Indicator */}
          <div className={styles.scrollIndicator}>
            <div className={styles.scrollLine}></div>
            <span className={styles.scrollText}>Discover More</span>
          </div>
        </div>
      </div>
    </section>
  );
}