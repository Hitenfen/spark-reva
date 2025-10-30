'use client';

import { useState } from 'react';
import { FaLinkedin, FaGithub, FaUser, FaGraduationCap, FaCalendarAlt } from 'react-icons/fa';
import styles from '../../styles/Team.module.css';
import teamData from '../../data/team.json';

export default function TeamPage() {
  const [activeMember, setActiveMember] = useState(null);

  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.container}>
          <div className={styles.heroContent}>
            <div className={styles.titleSection}>
              <h1 className={styles.title}>Our Team</h1>
              <div className={styles.titleUnderline}></div>
            </div>
            <p className={styles.subtitle}>
              The passionate students driving SPARK forward at Reva University
            </p>
          </div>
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
                  <div className={styles.memberImage}>
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
              <button className={styles.joinButton}>
                Apply Now
                <span className={styles.arrow}>→</span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}