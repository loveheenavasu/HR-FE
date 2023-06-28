import React, { useState } from "react";
import SidebarWithHeader from "@/components/Layout";
import type { ReactElement } from "react";
import type { NextPageWithLayout } from "./_app";
import Styles from "../styles/leaveDashboard.module.css";
import LeaveDashboard from "@/components/leaveDashboard";
import leaveDashboard from "../components/leaveDashboard";
import { FiHome, FiCalendar, FiGift } from "react-icons/fi";
import Link from "next/link";
import dayjs from "dayjs";
import "react-full-year-scheduler/dist/style.css";
import { Calendar, CalendarControls } from "react-yearly-calendar";
const Leave: NextPageWithLayout = () => {
  const customCSSclasses = {
    leavesTaken: [
      '2023-04-25',
      '2023-05-12',
      '2023-06-18',
      '2023-08-15',
      '2023-11-09'
    ],
    firstHalf: [
      '2023-05-24',
      '2023-07-21',
      '2023-06-30',
      '2023-08-11',
      '2023-11-21'
    ],
    secondHalf: [
      '2023-06-20',
      '2023-12-18',
    ],
    publicHoliday: [
      '2023-02-27',
      '2023-07-05',
      '2023-03-18',
      '2023-10-25',
      '2023-12-25'
    ],
    weekend: 'Sat,Sun',
  }
  return (
    <div>
      <div className={Styles.leaveDashboard}>
        <h1>Dashboard</h1>
        <p>check your leaves, leave balance or apply for one.</p>
      </div>
      <div className={Styles.leaveData}>
        <LeaveDashboard heading="Upcoming Leave" icon={<FiHome />} description="No Upcoming leaves"/>
        <LeaveDashboard heading="Last Leave Taken" icon={<FiCalendar />} description="1 Days" secondDescription="Annual" date="10/03/2023 AM - 10/03/23 PM"/>
        <LeaveDashboard heading="Next Public Holiday" icon={<FiGift />} description="Good Friday" date="On 07/04/2023"/>
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
        <Calendar year={2023} showWeekSeparators={false} firstDayOfWeek={1} forceFullWeeks={false} showDaysOfWeek={true} selectRange={false} customClasses={customCSSclasses}/>
      </div>
    </div>
  );
};
Leave.getLayout = function getLayout(page: ReactElement) {
  return <SidebarWithHeader>{page}</SidebarWithHeader>;
};

export default Leave;