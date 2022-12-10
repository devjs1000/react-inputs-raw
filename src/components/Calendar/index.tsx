import {
  Box,
  Button,
  Center,
  Flex,
  Grid,
  GridItem,
  Popover,
  Select,
} from "@chakra-ui/react";
import React from "react";

const Calendar = ({ date, prev = "<", next = ">" }: Props) => {
  const [parsedDate, setParsedDate] = React.useState(date);
  const month = parsedDate.getMonth();
  const year = parsedDate.getFullYear();
  const firstDayOfMonth = new Date(year, month, 1);
  const lastDayOfMonth = new Date(year, month + 1, 0);
  const daysInMonth = lastDayOfMonth.getDate();
  const extraDays = firstDayOfMonth.getDay();
  console.log({
    month,
    year,
    firstDayOfMonth: firstDayOfMonth.getDay(),
    lastDayOfMonth,
    daysInMonth,
  });

  const gradient = "linear(to-l, #7928CA, #FF0080)";

  const handlePrev = () => {
    const prevDate = new Date(year, month - 1, 1);
    setParsedDate(prevDate);
  };

  const handleNext = () => {
    const nextDate = new Date(year, month + 1, 1);
    setParsedDate(nextDate);
  };

  const years = Array.from(
    { length: 200 },
    (_, i) => i + year - 200 / 2
  ).reverse();

  const handleYear = (e: any) => {
    const newDate = new Date(parseInt(e.target.value), month, 1);
    setParsedDate(newDate);
  };

  const handleMonth = (e: any) => {
    const newDate = new Date(year, parseInt(e.target.value), 1);
    setParsedDate(newDate);
  };

  return (
    <Box pos={"relative"} w={"400px"}>
      <Box
       shadow={"lg"}
        m={4}
        userSelect={"none"}
        rounded={"lg"}
        p={4}
        w={"full"}
        bg={"white"}
      >
        <Flex
          justifyContent={"space-between"}
          alignItems={"center"}
          mb={4}
          p={0}
          bgGradient={gradient}
          rounded={"lg"}
        >
          <TButton onClick={handlePrev}>{prev}</TButton>
          <Center
            flexGrow={1}
            gap={4}
            _hover={{
              bg: "whiteAlpha.500",
            }}
            p={2}
            backdropFilter={"blur(100px)"}
            color={"white"}
          >
            <Select
              value={month}
              border={"none"}
              onChange={handleMonth}
              flexGrow={1}
              _placeholder={{ color: "white" }}
            >
              {months.map((month, index) => (
                <option
                  style={{ color: "gray" }}
                  key={index}
                  value={month.value}
                >
                  {month.label}
                </option>
              ))}
            </Select>
            <Select
              _placeholder={{ color: "white" }}
              border={"none"}
              value={year}
              onChange={handleYear}
            >
              {years.map((year, index) => (
                <option
                  style={{ color: "gray", accentColor: "red" }}
                  key={index}
                  value={year}
                >
                  {year}
                </option>
              ))}
            </Select>
          </Center>
          <TButton onClick={handleNext}>{next}</TButton>
        </Flex>
        <Grid templateColumns={"repeat(7, 1fr)"}>
          {days.map((day, index) => (
            <GridItem
              bg={"#FF0080"}
              cursor={"pointer"}
              color={"white"}
              p={1}
              roundedLeft={index == 0 ? "lg" : "none"}
              roundedRight={index == 6 ? "lg" : "none"}
              key={index}
              textAlign={"center"}
            >
              {day}
            </GridItem>
          ))}

          {firstDayOfMonth.getDay() > 0 &&
            Array.from({ length: firstDayOfMonth.getDay() }, (_, i) => (
              <GridItem key={i} textAlign={"center"} />
            ))}

          {Array(daysInMonth)
            .fill(0)
            .map((_, i) => {
              const day = i + 1;
              const date = new Date(year, month, day);
              const isToday = date.toDateString() === new Date().toDateString();
              return (
                <GridItem m={1}>
                  <Button
                    key={i}
                    p={2}
                    textAlign={"center"}
                    rounded={"full"}
                    color={isToday ? "white" : "#7928CA"}
                    bg={isToday ? "#FF0080" : "transparent"}
                    _hover={{
                      bg: "#FF0080",
                      color: "white",
                      opacity: 0.5,
                    }}
                  >
                    {day}
                  </Button>
                </GridItem>
              );
            })}
        </Grid>
      </Box>
      <Box
      zIndex={-1}
        pos={"absolute"}
        w={"400px"}
        h={"400px"}
        top={"10px"}
        left={"30px"}
        backdropFilter={"blur(100px)"}
        filter={"blur(10px)"}
        opacity={".1"}
        bgGradient={gradient}
      />
    </Box>
  );
};

interface Props {
  date: Date;
  prev?: any;
  next?: any;
}

const months = [
  { value: 0, label: "January" },
  { value: 1, label: "February" },
  { value: 2, label: "March" },
  { value: 3, label: "April" },
  { value: 4, label: "May" },
  { value: 5, label: "June" },
  { value: 6, label: "July" },
  { value: 7, label: "August" },
  { value: 8, label: "September" },
  { value: 9, label: "October" },
  { value: 10, label: "November" },
  { value: 11, label: "December" },
];

const days = ["S", "M", "T", "W", "T", "F", "S"];

const TButton = ({ children, onClick }: ButtonProps) => {
  return (
    <Button
      variant={"ghost"}
      onClick={onClick}
      cursor={"pointer"}
      fontWeight={"bolder"}
      color={"white"}
      h={"full"}
      minH={"60px"}
      rounded={"0"}
      m={0}
      _hover={{
        bg: "whiteAlpha.500",
      }}
      _active={{
        bg: "whiteAlpha.500",
      }}
    >
      {children}
    </Button>
  );
};

interface ButtonProps {
  children: any;
  onClick: any;
}

export default Calendar;
