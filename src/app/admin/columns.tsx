"use client";

import { ColumnDef } from "@tanstack/react-table";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.

export type DataInterface = {
  id: number;
  title: string;
  subtitle: string;
  image: any;
  district: string;
};

export const columns: ColumnDef<DataInterface>[] = [
  {
    accessorKey: "project",
    header: "Project name",
  },
  {
    accessorKey: "date",
    header: "Implemented",
  },
  {
    accessorKey: "place",
    header: "District | Town/Village",
  },
  {
    accessorKey: "status",
    header: "Status",
  },
  {
    accessorKey: "action",
    header: "Action",
  },
];
