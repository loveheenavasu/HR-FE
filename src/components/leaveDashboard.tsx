import Styles from "../styles/leaveDashboard.module.css";
import { FiHome, FiCalendar, FiGift } from "react-icons/fi";
const LeaveDashboard = (props: any) => {
  return (
    <div className={Styles.leaveBox}>
      <h3>{props.heading}</h3>
      {props.icon}
    </div>
  );
};

export default LeaveDashboard;
