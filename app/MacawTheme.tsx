"use client";

import Apollo from "@/context/ApolloPrivider";
import { ThemeProvider } from "@saleor/macaw-ui";

const MacawTheme = ({ children }: { children: React.ReactNode }) => {
  return <ThemeProvider defaultTheme="defaultLight">{children}</ThemeProvider>;
};

export default MacawTheme;
