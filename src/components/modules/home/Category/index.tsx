import { getAllCategories } from "@/services/category";
import CategoryClient from "./CategoryClient";

const Category = async () => {
  const { data: categories } = await getAllCategories();
return <CategoryClient categories={categories}/>
};

export default Category;
