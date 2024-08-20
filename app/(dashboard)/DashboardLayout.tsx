"use client";

// import useAppState from "@dashboard/hooks/useAppState";
// import { LinearProgress } from "@material-ui/core";
import { Sidebar } from "@/components/Sidebar";
import { Box } from "@saleor/macaw-ui";
// import { Box } from "@saleor/macaw-ui";
import React from "react";
import { IntlProvider } from "react-intl";
// import { Sidebar } from "../Sidebar";
// import { useStyles } from "./styles";

interface AppLayoutProps {
  children: React.ReactNode;
  fullSize?: boolean;
}

const DashboardLayout: React.FC<AppLayoutProps> = ({ children }) => {
  //   const classes = useStyles();
  //   const { setAnchor } = useSavebarRef();
  //   const [appState] = useAppState();

  return (
    <IntlProvider locale="en">
      <div className="grid grid-cols-[auto,1fr]">
        {/* {appState.loading && <LinearProgress className={classes.appLoader} color="primary" />} */}
        <div className="sticky top-0 h-screen border-r border-default1 bg-default2">
          <Sidebar />
        </div>
        <div className="h-full w-full overflow-hidden">
          <main className="h-full w-full overflow-auto p-8">{children}</main>
          <div className="sticky bottom-0 left-0 right-0 bg-default1 border-t border-default1" />
        </div>
      </div>
    </IntlProvider>
  );
};

export default DashboardLayout;
