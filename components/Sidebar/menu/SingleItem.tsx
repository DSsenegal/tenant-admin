// import { extensionMountPoints, useExtensions } from "@dashboard/apps/hooks/useExtensions";
"use client";
import { Box, List, sprinkles, Text } from "@saleor/macaw-ui";
import React from "react";

import { SidebarMenuItem } from "./types";
// import { getMenuItemExtension, isMenuActive } from "./utils";
import Link from "next/link";

interface Props {
  menuItem: SidebarMenuItem;
}

export const SingleItem: React.FC<Props> = ({ menuItem }) => {
  // const extensions = useExtensions(extensionMountPoints.NAVIGATION_SIDEBAR);
  const active = false; //isMenuActive(location.pathname, menuItem);
  const handleMenuItemClick = () => {
    // const extension = getMenuItemExtension(extensions, menuItem.id);
    // if (extension) {
    //   extension.open();
    // }
  };

  return (
    <List.Item
      borderRadius={3}
      paddingX={2}
      active={active}
      onClick={handleMenuItemClick}
      data-test-id={`menu-item-label-${menuItem.id}`}
    >
      <Link
        href={menuItem.url || ""}
        replace={active}
        // className={sprinkles({
        //   display: "block",
        //   width: "100%",
        // })}
        className="block w-full"
      >
        <Box
          // className={sprinkles({
          //   paddingY: 1.5,
          //   gap: 3,
          //   display: "flex",
          //   alignItems: "center",
          // })}
          className="py-1.5 gap-3 flex items-center"
        >
          {menuItem.icon}
          <Text size={3} fontWeight="medium" className="">
            {menuItem.label}
          </Text>
        </Box>
      </Link>
    </List.Item>
  );
};
