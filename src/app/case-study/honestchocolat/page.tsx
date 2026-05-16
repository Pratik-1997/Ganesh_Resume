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
            <h3 className={styles.heading}>A premium e-commerce website for <span>Honest Chocolat,</span> crafted to showcase handcrafted chocolates through warm visuals, storytelling, and intuitive browsing.</h3>
            <div className={`${styles.image} mb-4`}>
              <img src="/assets/Honest-casestudy-inside-01.png" alt="Nerolac"  className="img-fluid" />
            </div>
            <div id="problem" className={`${styles.textPart} mb-6`}>
              <div className={styles.leftBlock}><h4>The Problem</h4></div>
              <div className={styles.rightBlock}>
                <p>Honest Chocolat, a New Zealand-based premium chocolate brand, needed a digital experience that matched the richness and craftsmanship of its products. The challenge was not just selling chocolates, but conveying quality, indulgence, and trust through the interface. Typical e-commerce patterns felt too generic and transactional, failing to capture the sensory and premium nature of the brand. There was a gap between the physical product experience and how it was presented digitally.</p>
              </div>
            </div>
            <div className={`${styles.image} mb-4`}>
              <img src="/assets/Honest-casestudy-inside-02.png" alt="Nerolac"  className="img-fluid" />
            </div>
            <div id="solution" className={`${styles.textPart} mb-6`}>
              <div className={styles.leftBlock}><h4>Solution</h4></div>
              <div className={styles.rightBlock}>
                <p>I designed a product-first e-commerce experience that focuses on warmth, clarity, and storytelling. The interface uses rich, earthy tones and minimal layouts to create a sense of indulgence without overwhelming the user. Content is structured to guide users naturally from brand introduction to product discovery and purchase while maintaining a strong visual hierarchy. Product cards, category sections, and promotional banners are designed to highlight textures, ingredients, and craftsmanship. The overall experience balances aesthetic appeal with usability, ensuring that browsing feels intuitive while still reflecting the brand’s premium positioning.</p>
              </div>
            </div>
            <div className={`${styles.image} mb-4`}>
              <img src="/assets/Honest-casestudy-inside-03.png" alt="Nerolac"  className="img-fluid" />
            </div>
            <div id="impact" className={`${styles.textPart} mb-6` }>
              <div className={styles.leftBlock}><h4>Impact</h4></div>
              <div className={styles.rightBlock}>
                <p>The redesigned experience brings the brand closer to its intended premium perception by aligning visuals, content, and interaction. It improves product discoverability, creates a more engaging browsing flow, and strengthens trust through consistent design language. The platform feels less like a generic store and more like a curated chocolate experience, making it easier for users to explore and make purchase decisions.</p>
              </div>
            </div>
            <div id="learning" className={styles.uniqueDesign}>
              <div className={styles.uniqueDesignLeftBlock}>
              <h4>Things I learned</h4>
              </div>
              <div className={styles.uniqueDesignRightBlock}>
                <p>This project helped me understand how to design for sensory-driven products in a digital environment. I learned the importance of restraint using minimal layouts and strong visual hierarchy to let the product stand out. It also reinforced how storytelling, spacing, and imagery can influence perception, especially for premium brands. Most importantly, I learned how to balance e-commerce functionality with brand experience, ensuring the design is both beautiful and usable.</p>
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

