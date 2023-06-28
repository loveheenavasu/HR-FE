import React from 'react'
import Styles from "../styles/CelebrationEvent.module.css";

const CelebrationEvent = (props: any) => {
  return (
    <div className={Styles.MainWrapper}>
      <div className={Styles.IconWrapper}>{props.icon}</div>
      <div className={Styles.InfoWrapper}>
        <div className={Styles.date}>{props.date}</div>
        <div className={Styles.name}>{props.name}</div>
        <div className={Styles.event}>{props.event}</div>
      </div>
    </div>
  )
}

export default CelebrationEvent;
