'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import styles from '../styles/Header.module.css';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}>
      <div className={styles.container}>
        <Link href="/" className={styles.logo}>
          <Image 
            src="/images/reva-spark.png" 
            alt="SPARK Reva University" 
            width={40}
            height={40}
            className={styles.logoImage}
          />
          <span className={styles.logoText}>SPARK</span>
        </Link>

        <nav className={`${styles.nav} ${isMobileMenuOpen ? styles.mobileMenuOpen : ''}`}>
          <Link href="/" className={styles.navLink}>Home</Link>
          <Link href="/#about" className={styles.navLink}>About</Link>
          {/* <Link href="/events" className={styles.navLink}>Events</Link>
          <Link href="/gallery" className={styles.navLink}>Gallery</Link> */}
          <Link href="/team" className={styles.navLink}>Team</Link>
          {/* <Link href="/achievements" className={styles.navLink}>Achievements</Link>
          <Link href="/#contact" className={styles.navLink}>Contact</Link> */}
        </nav>

        <button
          className={styles.mobileMenuButton}
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          <span className={styles.menuIcon}></span>
          <span className={styles.menuIcon}></span>
          <span className={styles.menuIcon}></span>
        </button>
      </div>
    </header>
  );
}