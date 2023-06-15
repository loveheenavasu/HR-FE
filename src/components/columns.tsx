interface Column {
  Header: string;
  accessor: keyof DataObject;
}

interface DataObject {
  Leave_Type: number;
  from: string;
  To: string;
  Duration: number;
  Status: boolean;
  Remarks: string;
  Cancallation_Remarks: string;
  Action: string;
}

export const COLUMNS: Column[] = [
  {
    Header: "Leave Type",
    accessor: "Leave_Type",
  },
  {
    Header: "From",
    accessor: "from",
  },
  {
    Header: "To",
    accessor: "To",
  },
  {
    Header: "Duration",
    accessor: "Duration",
  },
  {
    Header: "Status",
    accessor: "Status",
  },
  {
    Header: "Remarks",
    accessor: "Remarks",
  },
  {
    Header: "Cancellation Remarks",
    accessor: "Cancallation_Remarks",
  },
  {
    Header: "Action",
    accessor: "Action",
  },
];
