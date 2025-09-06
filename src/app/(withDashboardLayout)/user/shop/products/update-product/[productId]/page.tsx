import UpdateProductForm from "@/components/modules/shop/products/UpdateProductForm";
import { getSingleProduct } from "@/services/product";
import React from "react";

const UpdateProductPage = async ({
  params,
}: {
  params: Promise<{ productId: string }>;
}) => {
  const { productId } = await params;

  const { data: product, meta } = await getSingleProduct(productId);

  return (
    <div>
      <UpdateProductForm product={product}/>
    </div>
  );
};

export default UpdateProductPage;
