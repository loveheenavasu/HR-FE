import React from "react";
import { LuCalendarDays } from "react-icons/lu";
import Styles from "../styles/upcomingHoliday.module.css";

const UpcomingHoliday = (props: any) => {
  return (
    <div className={Styles.MainWrapper}>
      <h3>{props.heading}</h3>
      <div className={Styles.holidayWrapper}>
        <div className={Styles.icon}><LuCalendarDays/></div>
        <div className={Styles.holidayNameWrapper}>
            <div className={Styles.holidayName}>{props.holidayName}</div>
            <div className={Styles.date}>{props.date}</div>
        </div>
      </div>
      
    </div>
  );
};

export default UpcomingHoliday;