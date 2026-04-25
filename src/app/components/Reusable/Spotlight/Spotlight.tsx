import React from 'react'
import style from './spotlight.module.scss'


const Spotlight = () => {
  return (
    <div>
      <div className={`${style.container_spotlight} container`}>
        <h1>I want design to <span className={style.block}>feel <span className={style.fun}>fun</span> again.</span></h1>
        <p>I design digital experiences that balance aesthetics with usability.</p>
      </div>
    </div>
  )
}

export default Spotlight
