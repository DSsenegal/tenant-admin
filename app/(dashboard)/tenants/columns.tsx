"use client";

import { ColumnDef } from "@tanstack/react-table";

import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";

import { Tenant } from "@/types/core";
import { Settings } from "lucide-react";
import { formatDate } from "@/utils/date";
import Link from "next/link";
import { DataTableColumnHeader } from "@/components/Datatable/data-table-column-header";
import { DataTableRowActions } from "@/components/Datatable/data-table-row-actions";

export const columns: ColumnDef<Partial<Tenant>>[] = [
  {
    accessorKey: "id",
    header: ({ column }) => <DataTableColumnHeader column={column} title="#" />,
    cell: ({ row }) => (
      <div className="w-fit">{row.getValue<string>("id")}</div>
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "shopName",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Shop name" />
    ),
    cell: ({ row }) => {
      return (
        <div className="flex space-x-2">
          <span className="max-w-[100px]s w-fit truncate font-medium">
            {row.getValue("shopName")}
          </span>
        </div>
      );
    },
  },
  {
    accessorKey: "domain",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Domain Name" />
    ),
    cell: ({ row }) => {
      const domain: string = row.getValue("domain");
      return (
        <div className="flex w-[100px] items-center">
          <Link href={domain} className="whitespace-nowrap text-primary">
            {domain}
          </Link>
        </div>
      );
    },
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id));
    },
  },
  {
    accessorKey: "createdAt",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Creation Date" />
    ),
    cell: ({ row }) => {
      return (
        <div className="flex items-center">
          <span className="w-fit">{formatDate(row.getValue("createdAt"))}</span>
        </div>
      );
    },
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id));
    },
  },
  {
    accessorKey: "isApproved",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Status" />
    ),
    cell: ({ row }) => {
      const isApproved: boolean = row.getValue("isApproved");
      return (
        <div className="flex w-[100px] items-center">
          <Badge
            variant={isApproved ? "success" : "destructive"}
            className="w-fit"
          >
            {isApproved ? "active" : "disabled"}
          </Badge>
        </div>
      );
    },
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id));
    },
  },
  {
    id: "actions",
    header: ({ column }) => <Settings />,
    cell: ({ row }) => <DataTableRowActions row={row} />,
  },
];
