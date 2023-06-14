import React, { useState } from "react";
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
import dayjs from "dayjs";
import { ReactFullYearScheduler } from "react-full-year-scheduler";
import "react-full-year-scheduler/dist/style.css";
const Leave: NextPageWithLayout = () => {
  const [events, setEvents] = useState([
    {
      eventName: "Public Holiday",
      startDate: dayjs("2023-04-01"),
      endDate: dayjs("2023-04-30"),
      eventBgColor: "lightblue",
      eventTextColor: "white",
    },
    {
      eventName: "Your Holiday",
      startDate: dayjs("2023-05-01"),
      endDate: dayjs("2023-05-29"),

      eventBgColor: "lightgray",
      eventTextColor: "white",
    },
  ]);
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
      </div>
      <div className={Styles.fullCalendar}>
        <ReactFullYearScheduler
          events={events}
          locale="en"
          dateTooltipTheme="material"
          weekSeparatorWidth={5}
          weekSeparatorColor="lightgray"
          monthNameBackgroundColor="white"
          headerWeekDayBgColor="#fff"
          headerWeekendBgColor="#c1bebe77"
          weekendCellBackgroundColor="#c1bebe77"
          weekendCellTextColor="#837e88"
          headerTextColor="#3d3c3c"
          weekDayCellBackgroundColor="rgba(75, 68, 83, 0.69)"
          weekDayCellTextColor="white"
          selectionColor="black"
          selectionTextColor="white"

          readonlyCalendar={true}
          showWeekSeparator={true}
          showTodayButton={true}
          enableWeekendSelection={true}
          minCellWidth={30}
          showSeparatorInHeader={false}
          enableEventOverwriting={true}
        />
      </div>
    </div>
  );
};
Leave.getLayout = function getLayout(page: ReactElement) {
  return <SidebarWithHeader>{page}</SidebarWithHeader>;
};

export default Leave;
