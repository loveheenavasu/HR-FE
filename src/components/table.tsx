/* eslint-disable react/jsx-key */
import React, { useMemo, useState } from "react";
import { useTable, useSortBy } from "react-table";
import MOCK_DATA from "../mockData/MOCK_DATA.json";
import { COLUMNS } from "./columns";
import { Button } from "@chakra-ui/react";
const Table = () => {
  const columns: any = useMemo(() => COLUMNS, []);
  const data: any = useMemo(() => MOCK_DATA, []);

  // Create an array of state objects for each row in the table
  const [remarks, setRemarks] = useState(data.map(() => ({ value: "" })));

  console.log(columns, "columns");
  const tableInstance = useTable({
    columns: columns,
    data: data,
  });
  useSortBy;
  const { getTableProps, getTableBodyProps, rows, prepareRow, headerGroups } =
    tableInstance;

  const handleRemarksChange = (e: any, index: number) => {
    // Update the state array with the new value for the corresponding row
    const newRemarks = [...remarks];
    newRemarks[index].value = e.target.value;
    setRemarks(newRemarks);
  };
  const bodyData = (cell: any, rowIndex: any) => {
    if (cell.column.id === "Cancallation_Remarks") {
      return (
        <input
          type="text"
          style={{ border: "1px solid lightgray", borderRadius: "7px" }}
          value={remarks[rowIndex].value}
          onChange={(e) => handleRemarksChange(e, rowIndex)}
        />
      );
    } else if (cell.column.id === "Action") {
      return (
        <div style={{ display: "flex", flexDirection: "row" }}>
          <Button>+</Button>
          <Button>-</Button>
        </div>
      );
    } else {
      return cell.render("Cell");
    }
  };

  return (
    <div>
      <table {...getTableProps()} style={{ border: "solid 1px blue" }}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th
                  {...column.getHeaderProps()}
                  style={{
                    borderBottom: "solid 3px lightgray",

                    color: "black",
                    fontWeight: "bold",
                  }}
                >
                  {column.render("Header")}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row, rowIndex) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()} key={rowIndex}>
                {row.cells.map((cell, cellIndex) => (
                  <td
                    {...cell.getCellProps()}
                    style={{
                      padding: "10px",
                      border: "solid 1px gray",
                    }}
                    key={cellIndex}
                  >
                    {bodyData(cell, rowIndex)}
                  </td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
