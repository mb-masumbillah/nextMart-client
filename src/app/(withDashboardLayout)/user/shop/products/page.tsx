import ManageProducts from "@/components/modules/shop/products";
import { getAllProducts } from "@/services/product";
import React from "react";

const ManageProductsPage = async () => {
  const { data, meta } = await getAllProducts();

  return (
    <div>
      <ManageProducts products={data}></ManageProducts>
    </div>
  );
};

export default ManageProductsPage;
