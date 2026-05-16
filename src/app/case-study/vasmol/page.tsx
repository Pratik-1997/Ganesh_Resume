'use client'
import React from 'react'
import styles from '../style.module.scss'
import Link from 'next/link'

const nerolac = () => {
  const handleScrollToTop = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault()
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleScrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId)
    if (!section) return

    section.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <div className={styles.page} id="top">
        <div className={styles.header}>
          <Link href="/" className={styles.backButton}> &lt; Back</Link>
        </div>
        <div className={styles.body}>
          <div className={styles.left}>
            <ul>
              <li>
                <button type="button" onClick={() => handleScrollToSection('problem')}>
                  The Problem
                </button>
              </li>
              <li>
                <button type="button" onClick={() => handleScrollToSection('solution')}>
                  Solution
                </button>
              </li>
              <li>
                <button type="button" onClick={() => handleScrollToSection('impact')}>
                  Impact
                </button>
              </li>
              <li>
                <button type="button" onClick={() => handleScrollToSection('learning')}>
                  My Learning
                </button>
              </li>
            </ul>
          </div>
          <div className={styles.right}>
            <h2 className={styles.slate}>Slate</h2>
            <h3 className={styles.heading}><span>Vasmol</span>: Bringing a herbal brand into a modern digital experience</h3>
            <div className={`${styles.image} mb-4`}>
              <img src="/assets/Vasmol-casestudy-inside-01.png" alt="Nerolac"  className="img-fluid" />
            </div>
            <div id="problem" className={`${styles.textPart} mb-6`}>
              <div className={styles.leftBlock}><h4>The Problem</h4></div>
              <div className={styles.rightBlock}>
                <p>Vasmol is a legacy herbal hair care brand, but its digital presence did not reflect that strength. The website felt outdated, visually cluttered, and disconnected from its natural positioning. Users found it difficult to quickly understand product benefits, navigate across categories, and build trust through the interface. Despite having a strong brand recall offline, the digital experience failed to communicate credibility and clarity effectively.</p>
              </div>
            </div>
            <div className={`${styles.image} mb-4`}>
              <img src="/assets/Vasmol-casestudy-inside-02.png" alt="Nerolac"  className="img-fluid" />
            </div>
            <div id="solution" className={`${styles.textPart} mb-6`}>
              <div className={styles.leftBlock}><h4>Solution</h4></div>
              <div className={styles.rightBlock}>
                <p>I redesigned the website with a focus on clarity, trust, and natural storytelling. The approach was to translate Vasmol’s herbal identity into a modern, structured interface that improves usability without losing its essence. A clean layout and clear hierarchy were introduced to simplify navigation, while a nature-led visual system through earthy tones, product imagery, and subtle illustrations reinforced the brand’s authenticity. Product discovery was streamlined with consistent categorisation, and elements like testimonials and brand legacy were highlighted to strengthen trust. The experience balances content and commerce, making it easy for users to explore and take action.</p>
              </div>
            </div>
            <div className={`${styles.image} mb-4`}>
              <img src="/assets/Vasmol-casestudy-inside-03.png" alt="Nerolac"  className="img-fluid" />
            </div>
            <div id="impact" className={`${styles.textPart} mb-6` }>
              <div className={styles.leftBlock}><h4>Impact</h4></div>
              <div className={styles.rightBlock}>
                <p>The redesigned experience brings Vasmol closer to its core identity while making it more accessible for modern users. It improves clarity in communication, enhances product discoverability, and builds stronger visual trust. The platform now feels more aligned with user expectations, positioning Vasmol as a credible and contemporary brand in the digital space.</p>
              </div>
            </div>
            <div id="learning" className={styles.uniqueDesign}>
              <div className={styles.uniqueDesignLeftBlock}>
              <h4>Things I learned</h4>
              </div>
              <div className={styles.uniqueDesignRightBlock}>
                <p>This project helped me understand the nuances of designing for legacy brands, where trust and familiarity are as important as usability. I learned how to translate a traditionally positioned brand into a modern interface without losing its authenticity. It reinforced the importance of visual hierarchy, content balance, and consistency in building user confidence. Most importantly, it strengthened my ability to design experiences that connect brand perception with practical usability.</p>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.bottomNav}>
          <Link href="/" className={styles.bottomNavBack}>
            &larr; Back to portfolio
          </Link>
          <a href="#top" className={styles.bottomNavTop} onClick={handleScrollToTop}>
            &uarr; Top
          </a>
        </div>
    </div>
  )
}
export default nerolac

