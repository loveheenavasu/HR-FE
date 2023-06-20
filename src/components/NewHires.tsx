import React from 'react'
import Image from "next/image";
import Styles from "../styles/companyLinks.module.css";


const NewHires = () => {
  return (
    <div className={Styles.MainWrapper}>
      <Image
              alt="hiring-img"
              width="130"
              height="130"
              src="/images/hiring.png"
            />
            <div className={Styles.heading}>Aww...</div>
            <div className={Styles.text}>No new hires today.</div>
    </div>
  )
}

export default NewHires;
