import Link from "next/link";
import React from "react";
import styles from "./style.module.scss";
import Experience from "../components/Reusable/Experience/Experience";
import Footer from "../components/Non-Reusable/Footer/Footer";

const page = () => {
  return (
    <div className={styles.page}>
      <div className={styles.header}>
        <Link href="/" className={styles.backButton}>
          {" "}
          &lt; Back
        </Link>
        <div className={styles.open_to_work}>
          <span className={styles.circle}></span>
          <span>Open to work</span>
        </div>
      </div>
      <div className={styles.section}>
        <div className={styles.container}>
          <h1 className={styles.heading}>
            <span className={styles.fun}>How</span> I got here
          </h1>
        </div>
        <div className={styles.content}>
          <p>
            I didn’t start out thinking I’d be a UI/UX designer. My journey
            began with a background in advertising, where I was drawn to{" "}
            <span className="text-white">visual storytelling</span> and how
            ideas come to life.
          </p>
          <p>
            Over the years, working in an agency environment shaped how I think
            about design. I worked across multiple brands and industries,
            learning how to{" "}
            <span className="text-white">
              balance aesthetics with communication
            </span>{" "}
            and design with intent, not just decoration.
          </p>
          <p>
            But at some point, I wanted more than just making things look good.
            I became curious about how products{" "}
            <span className="text-white">
              actually work—how users think, interact, and navigate experiences.
            </span>{" "}
            That curiosity slowly pulled me into UI/UX.
          </p>

          <p>
            I started learning, experimenting, and applying those principles to
            real projects. Moving from static visuals to interactive systems
            changed my approach completely—it became less about output and more
            about <span className="text-white">solving real problems.</span>
          </p>

          <p>
            Today, I focus on building thoughtful,{" "}
            <span className="text-white">user-centric experiences</span>,
            combining my foundation in visual design with a growing
            understanding of product thinking. I’m still refining my craft, but
            now with a much clearer sense of direction.
          </p>
        </div>
      </div>
      <Experience />
      <Footer />
    </div>
  );
};

export default page;
