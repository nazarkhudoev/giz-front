"use client";

import { ColumnDef } from "@tanstack/react-table";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type DataInterface = {
  id: string;
  title: string;
  subtitle: string;
  district: string;
};

export const columns: ColumnDef<DataInterface>[] = [
  // {
  //   accessorKey: "status",
  //   header: "Status",
  // },
  // {
  //   accessorKey: "email",
  //   header: "Email",
  // },
  // {
  //   accessorKey: "amount",
  //   header: "Amount",
  // },
  {
    header: "ID",
    accessorKey: "id",
    footer: "ID",
  },
  {
    header: "Project name",
    accessorKey: "title",
    footer: "TITLE",
  },
  {
    header: "Description",
    accessorKey: "subtitle",
    footer: "SUBTITLE",
  },
  {
    header: "District | Town/Village",
    accessorKey: "district",
    footer: "DISTRICT",
  },
  {
    header: "Status",
    accessorKey: "status",
    footer: "DISTRICT",
  },
];
