import React from "react";
import SidebarWithHeader from "@/components/Layout";
import type { ReactElement } from "react";
import type { NextPageWithLayout } from "./_app";
import Styles from "../styles/leaveDashboard.module.css";
import LeaveDashboard from "@/components/leaveDashboard";
import leaveDashboard from "../components/leaveDashboard";
import { FiHome, FiCalendar, FiGift } from "react-icons/fi";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import Link from "next/link";
import interactionPlugin from "@fullcalendar/interaction";
import timeGridPlugin from "@fullcalendar/timegrid";
import multiMonthPlugin from "@fullcalendar/multimonth";
import { background } from "@chakra-ui/react";

const Leave: NextPageWithLayout = () => {
  return (
    <div>
      <div className={Styles.leaveDashboard}>
        <h1>Dashboard</h1>
        <p>check your leaves, leave balance or apply for one.</p>
      </div>
      <div className={Styles.leaveData}>
        <LeaveDashboard heading="Upcoming Leave" icon={<FiHome />} />
        <LeaveDashboard heading="Last Leave Taken" icon={<FiCalendar />} />
        <LeaveDashboard heading="Next Public Holiday" icon={<FiGift />} />
      </div>
      <div className={Styles.leaveSummary}>
        <Link href="/applyLeave">
          <div className={Styles.leaveSummaryBox}>
            <FiCalendar />
            <p>Apply Leave</p>
          </div>
        </Link>
        <Link href="/leaveSummary">
          <div className={Styles.leaveSummaryBox}>
            <FiCalendar />
            <p> Leave Summary</p>
          </div>{" "}
        </Link>
        <Link href="/leaveAdjustment">
          <div className={Styles.leaveSummaryBox}>
            <FiCalendar />
            <p> Leave Adjustment</p>
          </div>
        </Link>
      </div>
      <div className={Styles.fullCalendar}>
        <FullCalendar
          plugins={[multiMonthPlugin]}
          initialView="dayGridYear"
          views={{
            // Configure custom views
            dayGridYear: {
              // Define dayGridYear view
              type: "multiMonthYear",
              multiMonthMaxColumns: 3, // Set duration to 1 year
            },
          }}
          events={[
            {
              title: "Event 1",
              start: "2023-04-15T10:00:00", // Start date and time in ISO format
              end: "2023-04-15T12:00:00", // End date and time in ISO format
            },
            {
              title: "Event 2",
              start: "2023-04-17T14:00:00",
              end: "2023-04-17T16:00:00",
            },
            // Add events here
          ]}

          // Add more options here
        />
      </div>
    </div>
  );
};
Leave.getLayout = function getLayout(page: ReactElement) {
  return <SidebarWithHeader>{page}</SidebarWithHeader>;
};

export default Leave;
