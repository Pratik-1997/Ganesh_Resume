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
            <h3 className={styles.heading}>A campaign landing page for <span>Kansai Nerolac</span> showcasing the durability of its Excel Everlast exterior paint through a high-altitude stratospheric experiment.</h3>
            <div className={`${styles.image} mb-4`}>
              <img src="/assets/kyoorius-image-01.png" alt="Nerolac"  className="img-fluid" />
            </div>
            <div id="problem" className={`${styles.textPart} mb-6`}>
              <div className={styles.leftBlock}><h4>The Problem</h4></div>
              <div className={styles.rightBlock}>
                <p>While the concept is strong, the experience leans more toward storytelling than usability. The page presents a lot of information, but without a clear hierarchy, making it harder to scan and understand quickly. More importantly, the connection between the experiment and the actual product benefits isn’t communicated clearly enough. Users are shown impressive data points, but they are not guided on what those mean for their everyday needs.</p>
                <p>Another gap is the lack of a strong conversion journey. The page captures attention but doesn’t effectively transition users toward exploring or purchasing the product. As a result, it feels more like a campaign showcase than a product-driven experience.</p>
              </div>
            </div>
            <div className={`${styles.image} mb-4`}>
              <img src="/assets/nerolac-slate.png" alt="Nerolac"  className="img-fluid" />
            </div>
            <div id="solution" className={`${styles.textPart} mb-6`}>
              <div className={styles.leftBlock}><h4>Solution</h4></div>
              <div className={styles.rightBlock}>
                <p>While the concept is strong, the experience leans more toward storytelling than usability. The page presents a lot of information, but without a clear hierarchy, making it harder to scan and understand quickly. More importantly, the connection between the experiment and the actual product benefits isn’t communicated clearly enough. Users are shown impressive data points, but they are not guided on what those mean for their everyday needs.</p>
                <p>Another gap is the lack of a strong conversion journey. The page captures attention but doesn’t effectively transition users toward exploring or purchasing the product. As a result, it feels more like a campaign showcase than a product-driven experience.</p>
              </div>
            </div>
            <div className={`${styles.image} mb-4`}>
              <img src="/assets/nerolac-slate.png" alt="Nerolac"  className="img-fluid" />
            </div>
            <div id="impact" className={`${styles.textPart} mb-6` }>
              <div className={styles.leftBlock}><h4>Impact</h4></div>
              <div className={styles.rightBlock}>
                <p>While the concept is strong, the experience leans more toward storytelling than usability. The page presents a lot of information, but without a clear hierarchy, making it harder to scan and understand quickly. More importantly, the connection between the experiment and the actual product benefits isn’t communicated clearly enough. Users are shown impressive data points, but they are not guided on what those mean for their everyday needs.</p>
                <p>Another gap is the lack of a strong conversion journey. The page captures attention but doesn’t effectively transition users toward exploring or purchasing the product. As a result, it feels more like a campaign showcase than a product-driven experience.</p>
              </div>
            </div>
            <div id="learning" className={styles.uniqueDesign}>
              <div className={styles.uniqueDesignLeftBlock}>
              <h4>Things I learned</h4>
              </div>
              <div className={styles.uniqueDesignRightBlock}>
                <p>The page is designed to be a campaign showcase, with a focus on storytelling and the experiment. The design is minimalistic and clean, with a focus on the content and the images.</p>
                <p>I learned the importance of structuring content so that users don’t just experience the story, but also see its relevance to their needs. Simplifying information, improving hierarchy, and bringing the product into focus earlier made a significant difference in clarity and intent.</p>
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

