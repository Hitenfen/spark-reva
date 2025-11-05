'use client';

import { useState, useEffect } from 'react';
import { FaLinkedin, FaGithub, FaUser, FaGraduationCap, FaCalendarAlt } from 'react-icons/fa';
import styles from '../../styles/Team.module.css';
import teamData from '../../data/team.json';

export default function TeamPage() {
  const [activeMember, setActiveMember] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === 'Escape') setSelectedImage(null);
    };
    if (selectedImage) {
      document.addEventListener('keydown', handleKey);
      // prevent background scroll while modal open
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.removeEventListener('keydown', handleKey);
      document.body.style.overflow = '';
    };
  }, [selectedImage]);

  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.container}>
          <div className={styles.heroContent}>
            <div className={styles.titleSection}>
              <h1 className={`${styles.title} ${styles.halloweenTitle}`}>
                <span aria-hidden="true">🎃</span> Our Team
              </h1>
              <div className={styles.titleUnderline}></div>
            </div>
            <p className={`${styles.subtitle} ${styles.halloweenSubtitle}`}>
              The passionate students driving SPARK forward at Reva University — a little spooky, a lot of creativity
            </p>
          </div>

      {/* Background decorations removed as requested */}
        </div>
      </section>

      <section className={styles.teamSection}>
        <div className={styles.container}>
          <div className={styles.teamGrid}>
            {teamData.team.map((member, index) => (
              <div
                key={member.id}
                className={styles.memberCard}
                onMouseEnter={() => setActiveMember(member.id)}
                onMouseLeave={() => setActiveMember(null)}
              >
                <div className={styles.cardHeader}>
                  <div
                    className={styles.memberImage}
                    role="button"
                    tabIndex={0}
                    onClick={() => setSelectedImage({ src: member.image, name: member.name })}
                    onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') setSelectedImage({ src: member.image, name: member.name }); }}
                  >
                    <img src={member.image} alt={member.name} />
                    <div className={styles.imageOverlay}></div>
                  </div>
                  <div className={styles.memberRole}>{member.role}</div>
                </div>

                <div className={styles.cardBody}>
                  <h3 className={styles.memberName}>{member.name}</h3>
                  
                  <div className={styles.memberDetails}>
                    <div className={styles.detailItem}>
                      <FaGraduationCap className={styles.detailIcon} />
                      <span>{member.department}</span>
                    </div>
                    <div className={styles.detailItem}>
                      <FaCalendarAlt className={styles.detailIcon} />
                      <span>Batch {member.year}</span>
                    </div>
                  </div>

                  <div className={styles.memberSocial}>
                    {member.linkedin && (
                      <a
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.socialLink}
                        aria-label={`${member.name} LinkedIn`}
                      >
                        <FaLinkedin className={styles.socialIcon} />
                      </a>
                    )}
                    {member.github && (
                      <a
                        href={member.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.socialLink}
                        aria-label={`${member.name} GitHub`}
                      >
                        <FaGithub className={styles.socialIcon} />
                      </a>
                    )}
                    {!member.linkedin && !member.github && (
                      <div className={styles.noSocial}>
                        <FaUser className={styles.noSocialIcon} />
                      </div>
                    )}
                  </div>
                </div>

                <div className={styles.cardHoverEffect}></div>
              </div>
            ))}
          </div>

          <div className={styles.joinSection}>
            <div className={styles.joinCard}>
              <h2 className={styles.joinTitle}>Want to Join Our Team?</h2>
              <p className={styles.joinDescription}>
                We're always looking for passionate individuals who want to make a difference.
                Join SPARK and be part of something amazing!
              </p>
              <a
                className={styles.joinButton}
                href="https://form.typeform.com/to/YBaYfdHS"
                target="_blank"
                rel="noopener noreferrer"
              >
                Apply Now
                <span className={styles.arrow}>→</span>
              </a>
            </div>
          </div>
        </div>

        {/* Image Modal */}
        {selectedImage && (
          <div className={styles.modalOverlay} onClick={() => setSelectedImage(null)}>
            <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
              <div className={styles.modalHeader}>
                <h3 className={styles.modalTitle}>{selectedImage.name}</h3>
                <button className={styles.modalClose} onClick={() => setSelectedImage(null)} aria-label="Close image">×</button>
              </div>
              <div className={styles.modalBody}>
                <img src={selectedImage.src} alt={selectedImage.name} style={{ width: '100%', borderRadius: 8 }} />
              </div>
            </div>
          </div>
        )}
      </section>
    </div>
  );
}