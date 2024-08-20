// import { PermissionEnum } from "@dashboard/graphql";
import { Sprinkles } from "@saleor/macaw-ui";

export interface SidebarMenuItem {
  label?: string;
  id: string;
  url?: string;
  permissions?: any[]; //PermissionEnum[];
  type: "item" | "itemGroup" | "divider";
  icon?: React.ReactNode;
  onClick?: () => void;
  children?: SidebarMenuItem[];
  paddingY?: Sprinkles["paddingY"];
}
