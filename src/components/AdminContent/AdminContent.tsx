import { DataInterface, columns } from "@/app/admin/columns";
import { DataTable } from "@/app/admin/data-table";
import { data } from "@/app/data/projects";
import Link from "next/link";

async function getData(): Promise<any[]> {
  // Fetch data from your API here.
  const res = await fetch("https://jsonplaceholder.typicode.com/users");

  const data = await res.json();
  return data;
}

export default async function AdminContent() {
  // const data = await getData();
  // console.log(data);

  return (
    <main>
      <div className="flex items-center justify-end mb-3">
        <Link
          href={"/admin/create"}
          className="bg-[#C30F08] inline-block text-white px-[35px] py-[15px] border-none outline-none rounded-[5px]"
        >
          New Project
        </Link>
      </div>
      <DataTable columns={columns} data={data} />
    </main>
  );
}
