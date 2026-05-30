import styles from "./experience.module.scss";

const experiences = [
  {
    company: "Interactive Avenues (Omnicom)",
    role: "Senior Designer",
    period: "2019-Current",
  },
  {
    company: "ProbizAdvisor LLP",
    role: "Intern",
    period: "2019",
  },
  {
    company: "Laqshya Outdoor",
    role: "Intern",
    period: "2017",
  },
];

const Experience = () => {
  return (
    <section className={styles.experienceSection}>
      <div className={`${styles.container} container`}>
        <div className={styles.topRow}>
          <p className={styles.intro}>
            Mumbai-based designer with 6+ years of experience across brand,
            digital, and UI/UX.
          </p>

          <h2>
            <span>Experience</span> so far
          </h2>
        </div>

        <div className={styles.list}>
          {experiences.map((item) => (
            <article className={styles.row} key={item.company}>
              <h3>{item.company}</h3>
              <p className={styles.role}>{item.role}</p>
              <span>{item.period}</span>
            </article>
          ))}
        </div>

        <div className={styles.resumeWrap}>
          <a href="/assets/Ganesh_Johare_Resume-2026.pdf" target="_blank" className="btn">
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
};

export default Experience;
