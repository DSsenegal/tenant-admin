// import { useUser } from "@dashboard/auth";
import { UserAvatar } from "@/components/UserAvatar";
// import { getUserInitials, getUserName } from "@dashboard/misc";
import { Box, Text } from "@saleor/macaw-ui";
import React from "react";
import { UserActions } from "./Actions";

// import { UserControls } from "./Controls";

export const UserInfo = () => {
  // const { user } = useUser();

  return (
    <Box
      display="flex"
      gap={3}
      paddingX={3}
      paddingY={4}
      alignItems="center"
      borderTopWidth={1}
      borderColor="default1"
      borderTopStyle="solid"
      justifyContent="space-between"
    >
      <Box display="flex" gap={3} alignItems="center">
        <UserAvatar initials={"BA"} url={undefined} />
        <Box __width={128} className="ellipsis">
          <Text size={3} fontWeight="bold">
            {"Issa Sow"}
          </Text>
        </Box>
      </Box>
      <UserActions />
      {/* <UserControls /> */}
    </Box>
  );
};
