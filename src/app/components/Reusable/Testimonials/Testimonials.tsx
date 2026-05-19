import styles from "./testimonials.module.scss";
import Image from "next/image";

const testimonials = [
  {
    quote:
      "Ganesh has a clear and structured way of approaching design. He understands the problem quickly and knows how to simplify it. His solutions are practical, thoughtful, and visually well-crafted. He brings a good balance of speed, clarity, and quality to every project.",
    author: "Apurva Shirke, Senior Designer",
  },
  {
    quote:
      "What stands out about Ganesh is his ability to balance aesthetics with function. His work is visually strong, but it also solves the problem in a simple and usable way.",
    author: "Vishal Wagh, Associate Creative Director",
  },
  {
    quote:
      "Ganesh helped us bring structure to our ideas and move faster without compromising on quality. His graphic design background added a strong visual layer, while his UX thinking kept the experience simple and purposeful. The process felt collaborative, focused, and easy from start to finish.",
    author: "Frenny Shah, Creative Director",
  },
];

const Testimonials = () => {
  return (
    <section className={styles.testimonialsSection}>
      <div className={`${styles.container} container`}>
        <h2>
          Apparently, I make work <span>feel easy</span>
        </h2>
          <div className={styles.stickyQuotes} aria-hidden="true">
            <span className={styles.quoteMark}><img src="/assets/left-colon.svg" alt="quote mark" width={100} height={100} /></span>
            <span className={styles.quoteMark}><img src="/assets/right-colon.svg" alt="quote mark" width={100} height={100} /></span>
          </div>
        <div className={styles.body}>


          <div className={styles.items}>
            {testimonials.map((item) => (
              <article className={styles.item} key={item.author}>
                <p>{item.quote}</p>
                <span>{item.author}</span>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
