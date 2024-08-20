// import { extensionMountPoints, useExtensions } from "@dashboard/apps/hooks/useExtensions";
// import { AppPaths } from "@dashboard/apps/urls";
// import { useUser } from "@dashboard/auth";
// import { configurationMenuUrl } from "@dashboard/configuration";
// import { getConfigMenuItemsPermissions } from "@dashboard/configuration/utils";
// import { customerListUrl } from "@dashboard/customers/urls";

// import { PermissionEnum } from "@dashboard/graphql";
import { ConfigurationIcon } from "assets/icons/Configuration";
import { ContentsIcon } from "assets/icons/Contents";
import { CustomersIcon } from "assets/icons/Customers";
import { DiscountsIcon } from "assets/icons/Discounts";
import { HomeIcon } from "assets/icons/Home";
import { MarketplaceIcon } from "assets/icons/Marketplace";
import { OrdersIcon } from "assets/icons/Orders";
import { ProductsIcon } from "assets/icons/Products";
import { TranslationsIcon } from "assets/icons/Translations";
// import { commonMessages, sectionNames } from "";
// import { languageListUrl } from "@dashboard/translations/urls";
import { Box } from "@saleor/macaw-ui";
import isEmpty from "lodash/isEmpty";
import React from "react";
import { useIntl } from "react-intl";

import { SidebarMenuItem } from "../types";
// import { mapToExtensionsItems } from "../utils";
import { sectionNames } from "@/intl";

export function useMenuStructure() {
  // const extensions = useExtensions(extensionMountPoints.NAVIGATION_SIDEBAR);
  const intl = useIntl();
  // const { user } = useUser();
  const appExtensionsHeaderItem: SidebarMenuItem = {
    id: "extensions",
    label: intl.formatMessage(sectionNames.appExtensions),
    type: "divider",
    paddingY: 1.5,
  };

  const menuItems: SidebarMenuItem[] = [
    {
      icon: renderIcon(<HomeIcon />),
      label: intl.formatMessage(sectionNames.home),
      id: "home",
      url: "/",
      type: "item",
    },

    {
      children: undefined,
      icon: renderIcon(<ContentsIcon />),
      label: intl.formatMessage(sectionNames.tenants),
      permissions: [
        // PermissionEnum.MANAGE_USERS
      ],
      id: "tenants",
      url: "/tenants",
      type: "item",
    },

    {
      children: undefined,
      icon: renderIcon(<TranslationsIcon />),
      label: intl.formatMessage(sectionNames.translations),
      permissions: [
        // PermissionEnum.MANAGE_TRANSLATIONS
      ],
      id: "translations",
      url: "/languageListUrl",
      type: "item",
    },
    {
      icon: renderIcon(<ConfigurationIcon />),
      label: intl.formatMessage(sectionNames.configuration),
      permissions: [], // getConfigMenuItemsPermissions(intl),
      id: "configure",
      url: "/configuration",
      type: "item",
    },
  ];
  const isMenuItemPermitted = (menuItem: SidebarMenuItem) => {
    // const userPermissions = (user?.userPermissions || []).map(permission => permission.code);

    // if (!menuItem?.permissions || menuItem?.permissions?.length < 1) {
    //   return true;
    // }

    // return menuItem.permissions.some(permission => userPermissions.includes(permission));
    return true;
  };
  const getFilteredMenuItems = (menuItems: SidebarMenuItem[]) =>
    menuItems.filter(isMenuItemPermitted);

  return menuItems.reduce(
    (resultItems: SidebarMenuItem[], menuItem: SidebarMenuItem) => {
      if (!isMenuItemPermitted(menuItem)) {
        return resultItems;
      }

      const { children } = menuItem;
      const filteredChildren = children
        ? getFilteredMenuItems(children)
        : undefined;

      return [...resultItems, { ...menuItem, children: filteredChildren }];
    },
    []
  );
}

function renderIcon(icon: React.ReactNode) {
  return (
    <Box color="default2" __width={20} __height={20}>
      {icon}
    </Box>
  );
}
