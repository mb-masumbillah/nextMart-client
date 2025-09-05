"use client";

import { ColumnDef } from "@tanstack/react-table";
import { Trash } from "lucide-react";
import Image from "next/image";
import CreateCategoryModal from "./CreateCategoryModal";
import { NMTable } from "@/components/ui/core/NMTable";
import { ICategory } from "@/types";
import NMDeleteConfirmationModel from "@/components/ui/core/NMModal/NMDeleteConfirmationModel";
import { useState } from "react";
import { deleteCategory } from "@/services/category";
import { toast } from "sonner";

type TCategoriesProps = {
  categories: ICategory[];
};

const ManageCategories = ({ categories }: TCategoriesProps) => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [selectedItem, setSelectedItem] = useState<string | null>(null);

  const handleDelete = (data: ICategory) => {
    setSelectedId(data?._id);
    setSelectedItem(data?.name);
    setModalOpen(true);
  };

  const handleDeleteConfirm = async () => {
    try {
      if (selectedId) {
        const res = await deleteCategory(selectedId);
        console.log(res);

        if (res.success) {
          toast.success(res?.message);
        } else {
          toast.error(res?.message);
        }
      }
    } catch (error: any) {
      console.log(error.message);
    }
  };

  const columns: ColumnDef<ICategory>[] = [
    {
      accessorKey: "name",
      header: () => <div>Category Name</div>,
      cell: ({ row }) => (
        <div className="flex items-center space-x-3">
          {row.original.icon && (
            <>
              <Image
                src={row?.original?.icon}
                alt={row?.original?.name}
                width={40}
                height={40}
                className="w-8 h-8 rounded-full"
              />
              <span className="truncate">{row?.original?.name}</span>
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
        <h1 className="text-xl font-bold">Manage Categories</h1>
        <CreateCategoryModal />
      </div>
      <NMTable data={categories} columns={columns} />
      <NMDeleteConfirmationModel
        name={selectedItem}
        isOpen={isModalOpen}
        onOpenChange={setModalOpen}
        onConfirm={handleDeleteConfirm}
      />
    </div>
  );
};

export default ManageCategories;
