import React from "react";
import Styles from "../styles/leaveCard.module.css";

const LeaveCard = (props: any) => {
  return (
    <div className={Styles.leaveCard}>
      <h3>{props.heading}</h3>
    </div>
  );
};

export default LeaveCard;
