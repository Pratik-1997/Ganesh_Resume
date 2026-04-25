import React from "react";
import style from "./footer.module.scss";

const Footer = () => {
  return (
    <footer className={style.footer}>
      <div className={`${style.container} container`}>
        <p className={style.small}>Still Here?</p>
        <h2 className={style.h2}>Work with me</h2>
        <a href="#" className={style.cta}>
          I Know you want to
        </a>

        <div className={style.links}>
          <a href="mailto:hello@example.com">Email</a>
          <a href="#" target="_blank" rel="noreferrer">
            LinkedIN
          </a>
          <a href="#" target="_blank" rel="noreferrer">
            Behance
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;