'use client';

import { useEffect } from 'react';
import styles from '../styles/About.module.css';
import aboutData from '../data/about.json';

export default function About() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.animateIn);
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll(`.${styles.scrollAnimate}`);
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section className={styles.about} id="about">
      <div className={styles.container}>
        {/* Header with asymmetric design */}
        <div className={`${styles.header} ${styles.scrollAnimate}`}>
          <div className={styles.titleWrapper}>
            <h2 className={styles.title}>About SPARK</h2>
            <div className={styles.titleUnderline}></div>
          </div>
          <p className={styles.tagline}>{aboutData.tagline}</p>
        </div>

        {/* Description with offset layout */}
        <div className={`${styles.descriptionSection} ${styles.scrollAnimate}`}>
          <div className={styles.descriptionContent}>
            <p>{aboutData.description}</p>
          </div>
          <div className={styles.descriptionAccent}></div>
        </div>

        {/* Motto with emphasis design */}
        <div className={`${styles.mottoSection} ${styles.scrollAnimate}`}>
          <div className={styles.mottoContainer}>
            <div className={styles.mottoQuoteMark}>"</div>
            <p className={styles.mottoText}>{aboutData.motto}</p>
            <div className={styles.mottoLabel}>Our Motto</div>
          </div>
        </div>

        {/* Explanation cards with staggered layout */}
        <div className={styles.explanationSection}>
          {aboutData.mottoExplanation.map((item, index) => (
            <div
              key={index}
              className={`${styles.explanationCard} ${styles.scrollAnimate}`}
            >
              <div className={styles.cardHeader}>
                <div className={styles.cardNumber}>0{index + 1}</div>
                <h3 className={styles.cardTitle}>{item.title}</h3>
              </div>
              <ul className={styles.cardList}>
                {item.points.map((point, idx) => (
                  <li key={idx} className={styles.cardItem}>
                    <span className={styles.bullet}></span>
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Mission with timeline style */}
        <div className={styles.missionSection}>
          <div className={styles.sectionHeader}>
            <h3 className={styles.sectionTitle}>Our Mission</h3>
            <div className={styles.sectionSubtitle}>What drives us forward</div>
          </div>
          <div className={styles.missionTimeline}>
            {aboutData.mission.map((item, index) => (
              <div key={index} className={`${styles.missionItem} ${styles.scrollAnimate}`}>
                <div className={styles.timelineDot}></div>
                <div className={styles.timelineContent}>
                  <span className={styles.missionStep}>Step {index + 1}</span>
                  <p>{item}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Goals with modern card grid */}
        <div className={styles.goalsSection}>
          <div className={styles.sectionHeader}>
            <h3 className={styles.sectionTitle}>Our Goals</h3>
            <div className={styles.sectionSubtitle}>Where we're headed</div>
          </div>
          <div className={styles.goalsGrid}>
            {aboutData.goals.map((goal, index) => (
              <div
                key={index}
                className={`${styles.goalCard} ${styles.scrollAnimate}`}
              >
                <div className={styles.goalIconWrapper}>
                  <div className={styles.goalIcon}>{index + 1}</div>
                </div>
                <div className={styles.goalContent}>
                  <h4 className={styles.goalTitle}>{goal.title}</h4>
                  <p className={styles.goalDescription}>{goal.description}</p>
                </div>
                <div className={styles.goalHoverEffect}></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}