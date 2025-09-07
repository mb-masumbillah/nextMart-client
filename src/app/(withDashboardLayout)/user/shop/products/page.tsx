import ManageProducts from "@/components/modules/shop/products";
import { getAllProducts } from "@/services/product";
import React from "react";

const ManageProductsPage = async ({
  searchParams,
}: {
  searchParams: Promise<{ page: string }>;
}) => {
  const { page } = await searchParams;

  const { data, meta } = await getAllProducts( page, "3");

  return (
    <div>
      <ManageProducts products={data} meta={meta}></ManageProducts>
    </div>
  );
};

export default ManageProductsPage;
