import React from "react";
import style from "./footer.module.scss";

const Footer = () => {
  return (
    <footer className={style.footer}>
      <div className={`${style.container} container`}>
        <p className={style.small}>Still Here?</p>
        <h2 className={style.h2}>Work with me</h2>
        <a href="javascript:void(0)" className={style.cta}>
          I Know you want to
        </a>

        <div className={style.links}>
          <a href="mailto:ganeshjohare36@gmail.com">Email</a>
          <a href="https://www.linkedin.com/in/ganeshjohare36" target="_blank" rel="noreferrer">
            LinkedIN
          </a>
          <a href="https://www.behance.net/ganeshjohare36" target="_blank" rel="noreferrer">
            Behance
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;