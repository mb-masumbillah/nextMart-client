import { ColumnDef } from "@tanstack/react-table";
import CreateBrandModal from "./CreateBrandModal";
import { IBrand } from "@/types";
import Image from "next/image";
import { Trash } from "lucide-react";
import { NMTable } from "@/components/ui/core/NMTable";

export type TBrandsProps = {
  brands: IBrand[];
};

export const data = [
  {
    _id: "1",
    name: "Apple",
    logo: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg",
    isActive: true,
    createdAt: "2025-09-01",
    updatedAt: "2025-09-01",
  }
];



const ManageBrands = () => {
  const handleDelete = (data: IBrand) => {
    console.log(data);
  };

  const columns: ColumnDef<IBrand>[] = [
    {
      accessorKey: "name",
      header: () => <div>Brand Name</div>,
      cell: ({ row }) => (
        <div>
          {row?.original?.logo && (
            <>
              <Image
                src={row?.original?.logo}
                alt={row?.original?.name}
                width={40}
                height={40}
                className="w-8 h-8 rounded-full"
              />
            </>
          )}
        </div>
      ),
    },
    {
      accessorKey: "isActive",
      header: () => <div>isActive</div>,
      cell: ({ row }) => (
        <div>
          {row.original.isActive ? (
            <p className="text-green-500 border bg-green-100 w-14 text-center px-1 rounded">
              True
            </p>
          ) : (
            <p className="text-red-500 border bg-red-100 w-14 text-center px-1 rounded">
              False
            </p>
          )}
        </div>
      ),
    },
    {
      accessorKey: "action",
      header: () => <div>Action</div>,
      cell: ({ row }) => (
        <button
          className="text-red-500"
          title="Delete"
          onClick={() => handleDelete(row.original)}
        >
          <Trash className="w-5 h-5" />
        </button>
      ),
    },
  ];

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-bold">Manage Brands</h1>
        <CreateBrandModal />
      </div>
      <NMTable data={data} columns={columns} />
    </div>
  );
};

export default ManageBrands;
