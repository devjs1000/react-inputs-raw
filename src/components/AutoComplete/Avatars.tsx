import { Children } from "react";
import {
  Avatar,
  AvatarGroup
} from "@chakra-ui/react";

export function Avatars({ selected }: any) {
  return (
    <AvatarGroup w={"100"} size="sm" max={2}>
      {Children.toArray(
        selected.map((item: any) => (
          <Avatar name={item.label} src={item.avatar} />
        ))
      )}
    </AvatarGroup>
  );
}
