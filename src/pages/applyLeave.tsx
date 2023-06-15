import React, { useState } from "react";
import SidebarWithHeader from "@/components/Layout";
import type { ReactElement } from "react";
import type { NextPageWithLayout } from "./_app";
import Styles from "../styles/applyLeave.module.css";
import { Box, Select, Textarea, Button } from "@chakra-ui/react";
import { DateRangePicker } from "rsuite";
import Image from "next/image";
import { FiTrash2, FiAlertCircle, FiPlus } from "react-icons/fi";
import "rsuite/dist/rsuite.min.css";
import ProgressBar from "@/components/progressBar";
import {
  List,
  ListItem,
  ListIcon,
  OrderedList,
  UnorderedList,
} from "@chakra-ui/react";

const LeaveApply: NextPageWithLayout = () => {

  const [dates_between, setDatesBetween] = useState([]);
  const [allDate, setAllDate] = useState([]);
  const [selectedOption, setSelectedOption] = useState<string>("full Day");
  
  const handleRangePicker = (value: any) => {
    const [startDate, endDate] = value;


    const dates: any = getDatesBetween(startDate, endDate);
    setDatesBetween(dates);
  };


  const getDatesBetween = (startdate: any, enddate: any) => {
    const dates: any = [];
    const current_date = new Date(startdate);
    const end = new Date(enddate);

    while (current_date <= end) {
      dates.push(current_date.toISOString().slice(0, 10));
      current_date.setDate(current_date.getDate() + 1);
    }
    setAllDate(dates);
    return dates;
  };
  const handleDelteClick = (item: String) => {
    const filterData = allDate.filter((date) => {
      return date != item;
    });
    setAllDate(filterData);
  };
  let leaves = 6;

  const handleChange = (event:React.ChangeEvent<HTMLSelectElement>,id:number,) => {
      setSelectedOption((prev:any)=>{
        return {...prev,[id]:event.target.value}
      });
    
  };
 
  return (
    <Box className={Styles.leaveApply}>
      <h1>Apply Leave</h1>
      <Box className="applyLeaveForm" display="flex">
        <Box className={Styles.leaveFormWrapper}>
          <Box className={Styles.leaveForm}>
            <Box className={Styles.leaveType}>
              <h3>Leave Type:Annual</h3>
              <Box className={Styles.leaveunit} style={{ display: "flex" }}>
                <Box className={Styles.leaveDays}>
                  <p>Leave Unit</p>

                  <Select placeholder="Days"></Select>
                </Box>
                <Box className={Styles.rangePicker}>
                  <p>Leave Period</p>
                  <DateRangePicker
                    appearance="subtle"
                    onChange={(e: any) => {
                      handleRangePicker(e);
                    }}
                  />
                </Box>
              </Box>
              <Box className={Styles.leaveDetail}>
                <p>Leave Detail</p>
                <Box className={Styles.leavedates}>
                  {allDate.length > leaves ? (
                    <p>
                      You do not have enough leave balance for your choosen
                      dates
                    </p>
                  ) : null}
                  {
                    allDate?.map((item: any, id: any) => {
                      return (
                        <Box key={id}>
                          <Box
                            alignItems="center"
                            className={Styles.leaveDateList}
                          >
                            <p>{item}</p>
                            <Select bg="white" w="25%" value={selectedOption[id] || 'full Day'} onChange={(e)=>handleChange(e,id)}>
                            <option value="AM">AM</option>
                              <option value="PM">PM</option>
                              <option value="full Day">Full Day</option>
                            </Select>
                            
                            {selectedOption[id]=="full Day" ? <p>1 day</p>:<p>half day</p>}
                            <Box onClick={() => handleDelteClick(item)}>
                              <FiTrash2 />
                            </Box>
                          </Box>
                        </Box>
                      );
                    })
                  }
                </Box>
                <Box display="flex" alignItems="center">
                  <FiAlertCircle /> This excludes Public Holidays, non-working
                  days and taken leaves.
                </Box>
              </Box>
              <Box>
                <p>Notify Person </p>
                <Select placeholder="Select">
                  <option value="option1">Full Day</option>
                  <option value="option2">AM</option>
                  <option value="option3">PM</option>
                </Select>
                <Textarea
                  size="sm"
                  mt="5"
                  placeholder="Here is a sample placeholder"
                />
              </Box>
            </Box>
            <Box p={"2"} className={Styles.AnnualBalance}>
              <Box>
                <Box>
                  <span>Annual Balance</span>
                  <p>5.5 days</p>
                </Box>
                <Box marginBottom="20px" marginTop="20px">
                  <p> Total leave days</p>
                  <span>{leaves} days</span>
                </Box>
              </Box>
              <Box>
                <Box
                  display="flex"
                  marginBottom="60px"
                  alignItems={"center"}
                  color="blue"
                >
                  <FiPlus />
                  Add person via emial
                </Box>
                <Box
                  marginBottom="20px"
                  marginTop="20px"
                  display="flex"
                  alignItems={"center"}
                >
                  <p>Notify(seperated by ;)</p>
                </Box>
              </Box>
            </Box>
          </Box>
          <Box mt="1">
            Remarks
            <Textarea size="sm" placeholder="Here is a sample placeholder" />
          </Box>
          <Box marginTop="20px" textAlign="center">
            <Box display="flex" justifyContent={"center"} alignItems="center">
              <Image
                alt="adminImage"
                width="70"
                height="70"
                src="/images/demo.jpeg"
              />
              <Box borderLeft="1px" marginLeft="10px" paddingLeft="10px">
                <h3>Ronak Kothari</h3>
                <p>Admin</p>
              </Box>
            </Box>
            <Button colorScheme="teal" className={Styles.leaveSubmitBtn}>
              Submit
            </Button>
          </Box>
        </Box>
        <Box className={Styles.annualLeaveCount}>
          <h3>Annual </h3>
          <ProgressBar />
          <Box className={Styles.leaveLists}>
            <UnorderedList>
              <ListItem display="flex" justifyContent={"space-between"}>
                Entitlement <span>28days</span>
              </ListItem>
              <ListItem display="flex" justifyContent={"space-between"}>
                {" "}
                Balance As At 01/01/2023 <span>28days</span>
              </ListItem>
              <ListItem display="flex" justifyContent={"space-between"}>
                {" "}
                Earned Leave Since 01/01/2023 <span>28days</span>
              </ListItem>
              <ListItem display="flex" justifyContent={"space-between"}>
                Taken Since 01/01/2023 <span>28days</span>
              </ListItem>
              <ListItem display="flex" justifyContent={"space-between"}>
                Leave Balance <span>28days</span>
              </ListItem>
              <ListItem display="flex" justifyContent={"space-between"}>
                Balance From Previous Year <span>28days</span>
              </ListItem>
              <ListItem display="flex" justifyContent={"space-between"}>
                Pending <span>28days</span>
              </ListItem>
            </UnorderedList>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
LeaveApply.getLayout = function getLayout(page: ReactElement) {
  return <SidebarWithHeader>{page}</SidebarWithHeader>;
};

export default LeaveApply;
