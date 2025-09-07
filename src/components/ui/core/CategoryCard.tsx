import { ICategory } from "@/types";
import Image from "next/image";


const CategoryCard = ({ category }: { category: ICategory }) => {
  return (
    <div className="bg-white bg-opacity-50 border-2 border-white rounded-2xl text-center p-6 h-44">
      {/* <Image
        src={category?.icon}
        width={100}
        height={150}
        alt="category icon"
        className="w-full h-full object-contain"
      /> */}
      <Image
        src="https://psediting.websites.co.in/obaju-turquoise/img/product-placeholder.png"
        width={100}
        height={150}
        alt="category icon"
        className="w-full h-full object-contain"
      />
      <h3 className="text-lg font-semibold truncate mt-3">{category?.name}</h3>
    </div>
  );
};

export default CategoryCard;
