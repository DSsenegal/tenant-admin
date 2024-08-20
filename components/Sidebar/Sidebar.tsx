import { Box, Drawer, MenuIcon } from "@saleor/macaw-ui";
import React from "react";

import { SidebarContent } from "./Content";
import { IntlProvider } from "react-intl";

export const Sidebar = () => (
  <>
    <div className="hidden md:block h-full">
      <SidebarContent />
    </div>
    <div className="md:hidden">
      <Drawer>
        <Drawer.Trigger>
          <Box
            as="button"
            borderWidth={0}
            backgroundColor="default1"
            cursor="pointer"
            data-test-id="sidebar-drawer-open"
          >
            <MenuIcon />
          </Box>
        </Drawer.Trigger>
        <Drawer.Content
          backgroundColor="default2"
          data-test-id="sidebar-drawer-content"
          paddingTop={0}
        >
          <SidebarContent />
        </Drawer.Content>
      </Drawer>
    </div>
  </>
);
