import React, { useState } from "react";
import MultiProgress, { IMultiProgressProps } from "react-multi-progress";

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
    </>
  );
};

export default ProgressBar;
