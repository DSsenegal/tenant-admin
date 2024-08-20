import { Avatar, Box, Text } from "@saleor/macaw-ui";
import Image from "next/image";
import React from "react";

export const MountingPoint = () => {
  return (
    <div className="flex gap-3 px-4 py-5 items-center">
      <div>
        <Image
          className="rounded-md"
          src={"/logo.svg"}
          alt="logo"
          width={125}
          height={65}
        />
      </div>
    </div>
  );
};
