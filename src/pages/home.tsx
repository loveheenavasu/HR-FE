import React from "react";
import SidebarWithHeader from "@/components/Layout";

import type { ReactElement } from "react";
import type { NextPageWithLayout } from "./_app";
import LeaveCard from "@/components/leaveCard";

const Home: NextPageWithLayout = () => {
  return (
    <div className="homeDashboard">
      <h1>General Dashboard</h1>
      <div className="leave-allCard">
        <LeaveCard heading="Upcoming Holiday" />
        <LeaveCard heading="Celebration" />
        <LeaveCard heading=" Company Links" />
        <LeaveCard heading=" New Hires" />
      </div>
    </div>
  );
};
Home.getLayout = function getLayout(page: ReactElement) {
  return <SidebarWithHeader>{page}</SidebarWithHeader>;
};

export default Home;
