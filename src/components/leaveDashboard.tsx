import Styles from "../styles/leaveDashboard.module.css";
import { FiHome, FiCalendar, FiGift } from "react-icons/fi";
const LeaveDashboard = (props: any) => {
  return (
    <div className={Styles.MainWrapper}>
      <div className={Styles.leaveBox}>
      <h3>{props.heading}</h3>
      {props.icon}
      </div>
      <div className={Styles.description}>{props.description}</div>
      <div className={Styles.secondDescription}>{props.secondDescription}</div>
      <div className={Styles.date}>{props.date}</div>
    </div>
  );
};

export default LeaveDashboard;
