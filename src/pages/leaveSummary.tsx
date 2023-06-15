import React from "react";
import SidebarWithHeader from "@/components/Layout";
import type { ReactElement } from "react";
import type { NextPageWithLayout } from "./_app";
import { Select } from "@chakra-ui/react";
import PageHeading from "@/components/pageHeading";
import LeaveDashboard from "@/components/leaveDashboard";
import leaveDashboard from "../components/leaveDashboard";
import Styles from "../styles/leaveSummary.module.css";
import LeaveDataCard from "@/components/leaveDataCard";
import { Button } from "@chakra-ui/react";
import Link from "next/link";

const LeaveApply: NextPageWithLayout = () => {
  return (
    <div className={Styles.leaveSummary}>
      <PageHeading heading="Leave Summary" />
      <hr style={{ color: "lightgray" }} />
      <div className={Styles.leaveDataCard}>
        <LeaveDataCard heading="Annual Leave" />
      </div>
      <hr style={{ height: "4px", background: "lightgray" }} />
      <div className={Styles.leaveName}>
        <div
          className="nameRow "
          style={{ display: "flex", alignItems: "center", marginRight: "15px" }}
        >
          <div
            className={Styles.colorIndicator}
            style={{ background: "#e5bc10" }}
          ></div>
          <p>Pending</p>
        </div>
        <div
          className="nameRow "
          style={{ display: "flex", alignItems: "center", marginRight: "15px" }}
        >
          <div
            className={Styles.colorIndicator}
            style={{ background: "purple" }}
          ></div>
          <p>Taken</p>
        </div>
        <div
          className="nameRow "
          style={{ display: "flex", alignItems: "center", marginRight: "15px" }}
        >
          <div
            className={Styles.colorIndicator}
            style={{ background: "#8cc33f" }}
          ></div>
          <p>Balance</p>
        </div>
        <div
          className="nameRow "
          style={{ display: "flex", alignItems: "center", marginRight: "15px" }}
        >
          <div
            className={Styles.colorIndicator}
            style={{ background: "red" }}
          ></div>
          <p>Negative Balance</p>
        </div>
      </div>
      <hr style={{ color: "lightgray" }} />
      <Link href="/leave">
        <Button variant="outline" style={{ marginTop: "15px" }}>
          Back
        </Button>
      </Link>
    </div>
  );
};
LeaveApply.getLayout = function getLayout(page: ReactElement) {
  return <SidebarWithHeader>{page}</SidebarWithHeader>;
};

export default LeaveApply;
