import styles from "./testimonials.module.scss";
import Image from "next/image";

const testimonials = [
  {
    quote:
      "Ganesh brings a clear, structured approach to design. He quickly understands the problem, simplifies it, and delivers solutions that are both practical and well-crafted.",
    author: "Product Manager, Interactive Services",
  },
  {
    quote:
      "Working with Ganesh is seamless. He communicates clearly, takes ownership, and always turns complexity into usable design.",
    author: "Creative Lead, Digital Agency",
  },
  {
    quote:
      "He balances visual craft with UX thinking, and that combination helped us ship faster without sacrificing quality.",
    author: "Founder, Startup Team",
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
