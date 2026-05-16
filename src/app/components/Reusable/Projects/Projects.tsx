import Link from "next/link";
import styles from "./projects.module.scss";

const projects = [
  { 
    id: 1,
    year: "2025",
    title: "Nerolac: Space design experience",
    type: "Landing page and visual direction",
    note: "Designed an immersive digital experience to showcase Nerolac’s color systems and product applications within real-world spaces.",
    image: "/assets/Nerolac-casestudy-cover.png",
    caseStudyLink: "/case-study/nerolac"
  },
  {
    id: 2,
    year: "2026",
    title: "Nova Commerce",
    type: "Product design and UX flow",
    note: "Redesigned key journeys to improve conversions and clarity.",
    image: "/assets/kyoorius-casestudy-cover.png",
    caseStudyLink: "/case-study/zee5kyoorius"
  },
  {
    id: 3,
    year: "2026",
    title: "Pulse Studio",
    type: "Portfolio and brand refresh",
    note: "Built a modular design system and motion-first storytelling.",
    image: "/assets/Vasmol-Casestudy-cover.png",
    caseStudyLink: "/case-study/vasmol"
  },
];

const Projects = () => {
  return (
    <section className={styles.projectsSection}>
      <div className={`${styles.container} container`}>
        <h2>Projects</h2>
        <div className={styles.stackArea}>
          {projects.map((project, index) => (
            <article
              key={project.title}
              className={styles.projectCard}
              style={{
                top: "8rem",
                zIndex: 10 + index,
              }}
            >
              <div
                className={styles.badges}
                style={{ right: `${1.6 + index * 4.8}rem` }}
              >
                <span className={styles.badge}>{String(project.id).padStart(2, "0")}</span>
              </div>

              <div className={styles.cardGrid}>
                <div className={styles.content}>
                  <p className={styles.year}>{project.year}</p>
                  <h3>{project.title}</h3>
                  <p className={styles.note}>{project.note}</p>

                  {/* <div className={styles.meta}>
                    <h4>Discipline</h4>
                    <p>{project.type}</p>
                  </div>

                  <div className={styles.meta}>
                    <h4>Timeline</h4>
                    <p>8-10 weeks</p>
                  </div> */}
                  <Link href={project.caseStudyLink} className={styles.caseStudyLink}>Case Study</Link>
                  </div>

                  <div className={styles.mediaWrap}>
                    <img
                      src={project.image || `https://picsum.photos/seed/project-${project.id}/1200/900`}
                      alt={`${project.title} preview`}
                    />
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    );
  };
export default Projects;
