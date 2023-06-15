import Styles from "../styles/leaveSummary.module.css";
const LeaveDataCard = (props: any) => {
  return (
    <div className={Styles.dataCard}>
      <h3>{props.heading}</h3>
      <div className="leaveData">
        <h2>
          5.5 Days <span>balance</span>
        </h2>
      </div>
    </div>
  );
};

export default LeaveDataCard;
