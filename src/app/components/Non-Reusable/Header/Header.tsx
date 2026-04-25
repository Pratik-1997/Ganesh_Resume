import React from 'react';
import style from './header.module.scss';

const Header = () => {
  return (
    <header>
        <div className={`${style.container_header} container`}>
          <div className={style.logo}>GANESH JOHARE</div>
          <div className={style.open_to_work}>
            <span className={style.circle}></span>
            <span>Open to work</span>
          </div>
        </div>
    </header>
  )
}

export default Header