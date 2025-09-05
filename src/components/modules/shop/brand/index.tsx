"use client";

import { ColumnDef } from "@tanstack/react-table";
import CreateBrandModal from "./CreateBrandModal";
import { IBrand } from "@/types";
import Image from "next/image";
import { Trash } from "lucide-react";
import { NMTable } from "@/components/ui/core/NMTable";
import NMDeleteConfirmationModel from "@/components/ui/core/NMModal/NMDeleteConfirmationModel";
import { useState } from "react";
import { deleteBrand } from "@/services/brand";
import { toast } from "sonner";

export type TBrandsProps = {
  brands: IBrand[];
};

const ManageBrands = ({ brands }: TBrandsProps) => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [selectedItem, setSelectedItem] = useState<string | null>(null);

  const handleDelete = (data: IBrand) => {
    setSelectedId(data._id);
    setSelectedItem(data?.name);
    setModalOpen(true);
  };

  const handleDeleteConfirm = async () => {
    try {
      const res = await deleteBrand(selectedId as string);

      if (res.success) {
        toast.success(res.message);
      } else {
        toast.error(res.message);
      }
    } catch (error: any) {
      console.log(error.message);
    }
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
      <NMTable data={brands} columns={columns} />
      <NMDeleteConfirmationModel
        name={selectedItem}
        isOpen={isModalOpen}
        onOpenChange={setModalOpen}
        onConfirm={handleDeleteConfirm}
      />
    </div>
  );
};

export default ManageBrands;
