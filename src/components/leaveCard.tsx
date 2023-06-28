import React,{ ReactElement } from "react";
import Styles from "../styles/leaveCard.module.css";


interface LeaveCardProps {
  heading: string;
  text?: string;
  children?: ReactElement;
}

const LeaveCard = ({ heading,text, children }: LeaveCardProps) => {
  
  return (
    <div className={Styles.leaveCard}>
      <h3>{heading}</h3>
      <p>{text}</p>
      <div>{children}</div>
    </div>
  );
};

export default LeaveCard;
