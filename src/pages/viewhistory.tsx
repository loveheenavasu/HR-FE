import SidebarWithHeader from "@/components/Layout";
import type { ReactElement } from "react";
import Table from "@/components/table";
import type { NextPageWithLayout } from "./_app";
import PageHeading from "@/components/pageHeading";
import { Select, Box } from "@chakra-ui/react";

const ViewHistory: NextPageWithLayout = () => {
  return (
    <Box
      background="#fff"
      p="2"
      border="1px"
      borderColor="lightgray"
      borderRadius="7px"
    >
      <PageHeading heading="Leave History" />
      <Table />
    </Box>
  );
};
ViewHistory.getLayout = function getLayout(page: ReactElement) {
  return <SidebarWithHeader>{page}</SidebarWithHeader>;
};

export default ViewHistory;
