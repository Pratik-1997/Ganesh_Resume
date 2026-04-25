"use client";

import { ReactNode, useEffect } from "react";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

type SmoothScrollProps = {
  children: ReactNode;
};

const SmoothScroll = ({ children }: SmoothScrollProps) => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const speedTween = gsap.to("[data-speed]", {
      y: (_, el) =>
        (1 - parseFloat((el as HTMLElement).getAttribute("data-speed") || "1")) *
        ScrollTrigger.maxScroll(window),
      ease: "none",
      scrollTrigger: {
        start: 0,
        end: "max",
        invalidateOnRefresh: true,
        scrub: 0,
      },
    });

    const lenis = new Lenis({
      lerp: 0.04,
      duration: 1.2,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      syncTouch: true,
    });

    lenis.on("scroll", ScrollTrigger.update);

    let rafId = 0;

    const raf = (time: number) => {
      lenis.raf(time);
      rafId = window.requestAnimationFrame(raf);
    };

    rafId = window.requestAnimationFrame(raf);

    return () => {
      window.cancelAnimationFrame(rafId);
      lenis.off("scroll", ScrollTrigger.update);
      lenis.destroy();
      speedTween.scrollTrigger?.kill();
      speedTween.kill();
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return <>{children}</>;
};

export default SmoothScroll;
