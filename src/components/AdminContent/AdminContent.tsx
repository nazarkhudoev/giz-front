"use client";

// import { DataInterface, columns } from "@/app/admin/columns";
import React from "react";
import { data } from "@/app/data/projects";
import Link from "next/link";

import { useTable } from "react-table";

import Table from "../Table/Table";

import { DataTable } from "@/app/admin/data-table";
import { DataInterface, columns } from "@/app/admin/columns";
import AdminTable from "../AdminTable/AdminTable";

async function getData(): Promise<DataInterface[]> {
  // Fetch data from your API here.
  return data;
  // return [
  //   {
  //     id: "728ed52f",
  //     amount: 100,
  //     status: "pending",
  //     email: "m@example.com",
  //   },
  //   // ...
  // ];
}

export default async function AdminContent() {
  const data = await getData();
  return (
    <main className="bg-[#D3D3D3] pt-12 pr-24 pl-24">
      <div className="flex items-center justify-end mb-3">
        <Link
          href={"/admin/create"}
          className="bg-[#C30F08] inline-block text-white px-[35px] py-[15px] border-none outline-none rounded-[5px]"
        >
          New Project
        </Link>
      </div>
      <AdminTable />

      {/* <DataTable columns={columns} data={data} /> */}
    </main>
  );
}
