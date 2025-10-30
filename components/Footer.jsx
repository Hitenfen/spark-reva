'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import styles from '../styles/Footer.module.css';

export default function Footer() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <footer className={styles.footer} id="contact">
      <div className={styles.container}>
        {/* Main Footer Content */}
        <div className={styles.mainContent}>
          {/* Brand Section */}
          <div className={styles.brandSection}>
            <div className={styles.brandHeader}>
              <div className={styles.logo}>
                <Image 
                  src="/images/reva-spark.png" 
                  alt="SPARK Reva University" 
                  width={60}
                  height={60}
                  className={styles.logoImage}
                />
                <div className={styles.logoText}>
                  <span className={styles.logoTitle}>SPARK</span>
                  <span className={styles.logoSubtitle}>Reva University</span>
                </div>
              </div>
            </div>
            <p className={styles.brandDescription}>
              Igniting Innovation, Securing the Future. A student-driven technical 
              community at Reva University.
            </p>
            <div className={styles.socialLinks}>
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className={styles.socialLink}
                aria-label="GitHub"
              >
                <FaGithub size={20} />
              </a>
              <a 
                href="https://www.linkedin.com/in/spark-club-reva-259744395" 
                target="_blank" 
                rel="noopener noreferrer" 
                className={styles.socialLink}
                aria-label="LinkedIn"
              >
                <FaLinkedin size={20} />
              </a>
              <a 
                href="https://www.instagram.com/sparkclubreva2025" 
                target="_blank" 
                rel="noopener noreferrer" 
                className={styles.socialLink}
                aria-label="Instagram"
              >
                <FaInstagram size={20} />
              </a>
            </div>
          </div>

          {/* Links Grid */}
          <div className={styles.linksGrid}>
            <div className={styles.linkGroup}>
              <h4 className={styles.groupTitle}>Navigation</h4>
              <nav className={styles.linkList}>
                <Link href="/#about" className={styles.navLink}>
                  <span className={styles.linkBullet}></span>
                  About Us
                </Link>
                <Link href="/team" className={styles.navLink}>
                  <span className={styles.linkBullet}></span>
                  Our Team
                </Link>
              </nav>
            </div>

            <div className={styles.linkGroup}>
              <h4 className={styles.groupTitle}>Focus Areas</h4>
              <div className={styles.skillTags}>
                <span className={styles.skillTag}>Software Dev</span>
                <span className={styles.skillTag}>Cybersecurity</span>
                <span className={styles.skillTag}>Open Source</span>
                <span className={styles.skillTag}>Cloud Computing</span>
                <span className={styles.skillTag}>AI & ML</span>
                <span className={styles.skillTag}>Web Development</span>
              </div>
            </div>

            <div className={styles.linkGroup}>
              <h4 className={styles.groupTitle}>Contact</h4>
              <div className={styles.contactInfo}>
                <div className={styles.contactItem}>
                  <FaMapMarkerAlt className={styles.contactIcon} />
                  <div>
                    <p className={styles.contactText}>Reva University</p>
                    <p className={styles.contactSubtext}>Bangalore, Karnataka</p>
                  </div>
                </div>
                <div className={styles.contactItem}>
                  <FaEnvelope className={styles.contactIcon} />
                  <div>
                    <a href="mailto:sparkclubreva@gmail.com" className={styles.contactLink}>
                      sparkclubreva@gmail.com
                    </a>
                    <p className={styles.contactSubtext}>Send us a message</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className={styles.bottomBar}>
          <div className={styles.copyright}>
            &copy; {new Date().getFullYear()} SPARK Community. All rights reserved.
          </div>
          <div className={styles.credit}>
            Built with passion by SPARK members
          </div>
        </div>
      </div>
    </footer>
  );
}