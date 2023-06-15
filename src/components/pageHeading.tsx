import { Select, Box } from "@chakra-ui/react";
const PageHeading = (props: any) => {
  interface ScreenProps {
    heading: "string";
  }
  return (
    <Box>
      <Box m="2">{props.heading}</Box>
      <hr style={{ color: "lightgray" }} />
      <Box m="3">
        <label>Year:</label>
        <Select w={"20%"} placeholder="Select option">
          <option value="option1">2023</option>
          <option value="option2">2022</option>
          <option value="option3">2021</option>
        </Select>
      </Box>
    </Box>
  );
};

export default PageHeading;
