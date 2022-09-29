import { Center, Checkbox, Avatar } from "@chakra-ui/react";
import { Row } from "./Row";
import { MiniHeading } from "./MiniHeading";

export function SearchOutput({
  allEmployees, search, checkIsSelected, handleSelect,
}: any) {
  return (
    <>
      {allEmployees
        .filter((item: any) => item?.label?.toLowerCase()?.includes(search?.trim()?.toLowerCase())
        )
        .map((item: any) => {
          const { value, label, avatar } = item;
          const isSelected = checkIsSelected(value);
          return (
            <Row>
              <Center>
                <Avatar size={"sm"} name={label} src={avatar} />
                <MiniHeading>{label}</MiniHeading>
              </Center>
              <Checkbox
                key={value}
                value={value}
                isChecked={isSelected}
                onChange={handleSelect} />
            </Row>
          );
        })}
    </>
  );
}
