import React, { useState } from "react";
import MultiProgress, { IMultiProgressProps } from "react-multi-progress";
import Styles from "../styles/leaveSummary.module.css";
import { Box } from "@chakra-ui/react";

const ProgressBar = () => {
  const [balance, setBalance] = useState(80);
  const [taken, setTaken] = useState(0);

  const elements = [
    {
      value: taken,
      color: "blue",
      showPercentage: true,
    },
    {
      value: balance,
      color: "red",
      showPercentage: true,
    },
    {
      value: 20,
      color: "lightgreen",
      showPercentage: true,
    },
  ];

  return (
    <>
      <MultiProgress elements={elements} height={"30px"} />
      <Box mt="5px" marginBottom="10px" display="flex">
        <Box
          className={Styles.nameRow}
          style={{ display: "flex", alignItems: "center", marginRight: "15px" }}
        >
          <Box
            className={Styles.colorIndicator}
            style={{ background: "#e5bc10" }}
          ></Box>
          <p>Pending</p>
        </Box>
        <Box
          className={Styles.nameRow}
          style={{ display: "flex", alignItems: "center", marginRight: "15px" }}
        >
          <Box
            className={Styles.colorIndicator}
            style={{ background: "purple" }}
          ></Box>
          <p>Taken</p>
        </Box>
        <Box
          className={Styles.nameRow}
          style={{ display: "flex", alignItems: "center", marginRight: "15px" }}
        >
          <Box
            className={Styles.colorIndicator}
            style={{ background: "#8cc33f" }}
          ></Box>
          <p>Balance</p>
        </Box>
        <Box
          className={Styles.nameRow}
          style={{ display: "flex", alignItems: "center", marginRight: "15px" }}
        >
          <Box
            className={Styles.colorIndicator}
            style={{ background: "red" }}
          ></Box>
          <p>Negative Balance</p>
        </Box>
      </Box>
    </>
  );
};

export default ProgressBar;
