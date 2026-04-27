"use client";

import React, { useEffect, useRef } from "react";
import style from "./about.module.scss";

const About = () => {
  const aboutRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    let rafId = 0;

    const updateBubble = () => {
      const element = aboutRef.current;
      if (!element) return;

      const rect = element.getBoundingClientRect();
      const viewportHeight = window.innerHeight;

      const progress = Math.min(
        1,
        Math.max(0, (viewportHeight - rect.top) / (rect.height + viewportHeight))
      );
      const opacity = Math.max(0.2, 1 - progress * 0.9);
      const blur = 3 + progress * 15;
      const scale = 1 + progress * 0.12;

      element.style.setProperty("--bubble-opacity", opacity.toFixed(3));
      element.style.setProperty("--bubble-blur", `${blur.toFixed(2)}px`);
      element.style.setProperty("--bubble-scale", scale.toFixed(3));
    };

    const onScroll = () => {
      window.cancelAnimationFrame(rafId);
      rafId = window.requestAnimationFrame(updateBubble);
    };

    updateBubble();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      window.cancelAnimationFrame(rafId);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <section ref={aboutRef} className={`${style.about} bg-primary`}>
      <div className={style.bubble} aria-hidden="true" />
      <div className={`${style.container_about} container`}>
        <p>
         <i>I&apos;m Ganesh.</i> &nbsp; Designer by profession, problem-solver by instinct. I&apos;ve spent years crafting visuals for brands, understanding what catches attention. But I wanted to go deeper into how things work, not just how they look.
        </p>
        <p className="mb-4">
          UI/UX is where that shift happened. Where visuals meet logic, and ideas turn into usable experiences. I&apos;m still exploring that space—learning, building, improving.
        </p>
        <div className="d jc-c ai-c">
        <a href="#" className="btn">About</a>
        </div>
      </div>
    </section>
  )
};

export default About;