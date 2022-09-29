import { Children } from "react";
import {
  Avatar, Center, Checkbox,
  VStack
} from "@chakra-ui/react";
import { employees } from "../../static/employees";
import { Row } from "./Row";
import { MiniHeading } from "./MiniHeading";

export function Groups({
  group, handleSelectGroup, checkIsGroupSelected, handleSelect, checkIsSelected,
}: any) {
  return (
    <VStack
      borderTopWidth={1}
      borderBottomWidth={1}
      borderColor={"whiteAlpha.300"}
    >
      <Row>
        <MiniHeading color={"whiteAlpha.700"}>All {group}</MiniHeading>
        <Checkbox
          onChange={handleSelectGroup}
          value={group}
          isChecked={checkIsGroupSelected(group)}
          bg={"blackAlpha.300"} />
      </Row>
      {Children.toArray(
        employees[group].map((item: any) => (
          <Row>
            <Center>
              <Avatar size={"sm"} name={item.value} src={item.avatar} />
              <MiniHeading>{item.label}</MiniHeading>
            </Center>

            <Checkbox
              border={"none"}
              value={item.value}
              onChange={handleSelect}
              isChecked={checkIsSelected(item.value)}
              bg={"blackAlpha.300"} />
          </Row>
        ))
      )}
    </VStack>
  );
}
