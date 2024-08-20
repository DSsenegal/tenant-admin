import "@saleor/macaw-ui/style";

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import MacawTheme from "./MacawTheme";
import { Toaster } from "@/components/ui/toaster";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ayshei super admin",
  description: "Ayshei super admin",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <MacawTheme>{children}</MacawTheme>
        <Toaster />
      </body>
    </html>
  );
}
