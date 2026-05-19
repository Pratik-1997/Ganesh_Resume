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
            <h3 className={styles.heading}><span>A Kyoorius Young Blood-winning</span> ZEE5 TV app concept, designed to make content discovery more intuitive through remote, voice, and VR-based interactions.</h3>
            <div className={`${styles.image} mb-4`}>
              <img src="/assets/kyoorius-image-01.png" alt="Nerolac"  className="img-fluid" />
            </div>
            <div id="problem" className={`${styles.textPart} mb-6`}>
              <div className={styles.leftBlock}><h4>The Problem</h4></div>
              <div className={styles.rightBlock}>
                <p>OTT platforms on TV are built for passive consumption, but not for exploration. Navigation is slow, content discovery is repetitive, and interaction is limited to basic remote inputs.</p>
                <p>For a platform like ZEE5—with diverse content across languages and formats—this creates friction:users spend more time searching than actually watching.</p>
                <p>There’s also a missed opportunity to leverage emerging interaction models like voice and immersive viewing.</p>
              </div>
            </div>
            <div className={`${styles.image} mb-4`}>
              <img src="/assets/Kyoorius-internal-02.gif" alt="Nerolac"  className="img-fluid" />
            </div>
            <div id="solution" className={`${styles.textPart} mb-6`}>
              <div className={styles.leftBlock}><h4>Solution</h4></div>
              <div className={styles.rightBlock}>
                <p>I reimagined the ZEE5 TV experience as a hybrid interaction system that blends traditional remote navigation with more intuitive and immersive inputs. The idea was to make content discovery faster, clearer, and more engaging through a structured homepage, quick access to languages and categories, expanded previews, voice and typed search, simplified onboarding, and real-time sports/content pages. I also explored subtle monetisation touchpoints like contextual banners and pop-ups, along with a VR-enabled exploration layer to make viewing feel more immersive. Overall, the goal was to reduce user effort and increase engagement..</p>
              </div>
            </div>
            <div className={`${styles.image} mb-4`}>
              <img src="/assets/Kyoorius-casestudy-inside-03.png" alt="Nerolac"  className="img-fluid" />
            </div>
            <div id="impact" className={`${styles.textPart} mb-6` }>
              <div className={styles.leftBlock}><h4>Impact</h4></div>
              <div className={styles.rightBlock}>
                <p>The project was recognized with the Kyoorius Young Blood Award, which strengthened the value of the idea and its execution. More than just an award-winning concept, the design presents a scalable TV interface system, a more engaging way to discover content, and new interaction possibilities for OTT platforms. It helps position ZEE5 not only as a streaming platform, but as a more interactive and immersive entertainment experience.</p>
              </div>
            </div>
            <div id="learning" className={styles.uniqueDesign}>
              <div className={styles.uniqueDesignLeftBlock}>
              <h4>Things I learned</h4>
              </div>
              <div className={styles.uniqueDesignRightBlock}>
                <p>Designing for TV is fundamentally different from mobile or web because distance, input limitations, and user attention change the way people interact with content. This project helped me understand how to design for lean-back experiences while still giving users control, how to create strong hierarchy and focus for large screens, and how to balance innovation like VR and voice with practical usability. It also taught me how to design systems that connect content, interaction, and business goals. Most importantly, I learned to think beyond UI and move deeper into experience design, where interaction, content, and context work together.</p>
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

