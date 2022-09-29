import { Children, useState } from "react";
import {
  Input,
  FormControl,
  Center,
  InputGroup,
  InputLeftAddon,
  Checkbox,
  Button,
  Icon,
} from "@chakra-ui/react";
import { FaChevronDown, FaChevronUp, FaSearch } from "react-icons/fa";
import { employees } from "../../static/employees";
import { Row } from "./Row";
import { MiniHeading } from "./MiniHeading";
import { Avatars } from "./Avatars";
import { Groups } from "./Groups";
import { SearchOutput } from "./SearchOutput";

const App = ({}) => {
  const dataSetName = "employee";
  const [selected, setSelected] = useState([] as any);
  const [search, setSearch] = useState("");
  const [active, setActive] = useState(false);
  const allEmployees: any = [];
  const allGroups: any = Object.keys(employees);

  allGroups.forEach((group: any) => {
    const groupEmployees = employees[group];
    groupEmployees.forEach((employee: any) => {
      allEmployees.push(employee);
    });
  });

  const handleSearch = (e: any) => {
    setSearch(e.target.value);
  };

  const handleSelect = (e: any) => {
    const { checked, value } = e.target;
    const selectedItem = allEmployees.find((item: any) => item.value === value);
    const newSelect: any[] = checked
      ? [...selected, selectedItem]
      : selected.filter((item: any) => item.value !== value);
    setSelected(
      newSelect.filter(
        (item: any, i: number) =>
          newSelect.findIndex((item2: any) => item2.value === item.value) === i
      )
    );
  };

  const handleSelectAll = (e: any) => {
    const { checked } = e.target;
    checked ? setSelected(allEmployees) : setSelected([]);
  };

  const handleSelectGroup = (e: any) => {
    const { checked, value } = e.target;
    const groupEmployees = employees[value];
    const newSelect: any[] = checked
      ? [...selected, ...groupEmployees]
      : selected.filter((item: any) => !groupEmployees.includes(item));
    setSelected(
      newSelect.filter(
        (item: any, i: number) =>
          newSelect.findIndex((item2: any) => item2.value === item.value) === i
      )
    );
  };

  const checkIsSelected = (value: any) => {
    return selected.findIndex((item: any) => item.value === value) > -1;
  };

  const checkIsGroupSelected = (group: any) => {
    const groupEmployees = employees[group];
    return groupEmployees.every((item: any) => checkIsSelected(item.value));
  };

  const toggleActive = (e: any) => {
    const { id } = e.target;
    if (id === "close") {
      setActive(false);
    }
  };

  return (
    <Center
      id="close"
      onClick={toggleActive}
      position={"relative"}
      h={active ? "100vh" : "auto"}
    >
      <FormControl
        overflow={"auto"}
        p={active ? "5px" : "0"}
        maxH={"500px"}
        borderRadius={"10px"}
        bg={"blue.900"}
        w={400}
      >
        {active ? (
          <>
            <InputGroup
              zIndex={"100"}
              bg={"blue.900"}
              pos={"sticky"}
              top={"0"}
              variant={"filled"}
              onChange={handleSearch}
            >
              <InputLeftAddon color={"whiteAlpha.300"} bg={"blue.800"}>
                <FaSearch />
              </InputLeftAddon>
              <Input
                onKeyPress={(e) => {
                  e.key == "Enter" && setActive(false);
                }}
                placeholder={`Search ${dataSetName}...`}
                bg={"blue.800"}
                variant={"filled"}
                color={"whiteAlpha.700"}
              />
            </InputGroup>

            <Row>
              <Center>
                <Avatars selected={allEmployees} />
                <MiniHeading>All {dataSetName}</MiniHeading>
              </Center>
              <Checkbox
                onChange={handleSelectAll}
                isChecked={selected.length >= allEmployees.length}
                bg={"blackAlpha.300"}
              />
            </Row>
            
            <SearchOutput
              {...{ allEmployees, search, checkIsSelected, handleSelect }}
            />

            {Children.toArray(
              allGroups.map((group: any) => (
                <Groups
                  {...{
                    group,
                    handleSelectGroup,
                    checkIsGroupSelected,
                    handleSelect,
                    checkIsSelected,
                  }}
                />
              ))
            )}
          </>
        ) : (
          <InputGroup
            px={4}
            py={2}
            zIndex={"100"}
            bg={"gray.100"}
            variant={"filled"}
            cursor={"pointer"}
          >
            <Avatars selected={selected} />
            <Button w={"full"} px={4} onClick={() => setActive(!active)}>
              {selected.length} {dataSetName} Selected{" "}
              <Icon ml={"20"} as={active ? FaChevronUp : FaChevronDown} />
            </Button>
          </InputGroup>
        )}
      </FormControl>
    </Center>
  );
};

export default App;


