import React from "react";
import SidebarWithHeader from "@/components/Layout";
import type { ReactElement } from "react";
import type { NextPageWithLayout } from "./_app";

const Leave: NextPageWithLayout = () => {
  return <p>hello leave</p>;
};
Leave.getLayout = function getLayout(page: ReactElement) {
  return <SidebarWithHeader>{page}</SidebarWithHeader>;
};

export default Leave;
