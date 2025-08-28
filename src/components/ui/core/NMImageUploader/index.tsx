import React, { Dispatch, SetStateAction } from "react";
import { Input } from "../../input";
import { cn } from "@/lib/utils";

type TImageUploadPros = {
  label?: string;
  className?: string;
  setImageFiles: Dispatch<SetStateAction<[] | File[]>>;
  setImagePreview: Dispatch<SetStateAction<[] | string[]>>;
};

const NMImageUploader = ({
  setImageFiles,
  setImagePreview,
  label = "Uploade Image",
  className,
}: TImageUploadPros) => {
  const handleChangeImage = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files![0];

    setImageFiles((prev) => [...prev, file]);

    if (file) {
      const reader = new FileReader();

      reader.onloadend = () => {
        setImagePreview((prev) => [...prev, reader.result as string]);
      };

      reader.readAsDataURL(file);
    }

    event.target.value = "";
  };

  return (
    <div className={cn("flex justify-center items-center", className)}>
      <Input
        onChange={handleChangeImage}
        type="file"
        multiple
        accept="image/*"
        className="hidden"
        id="image-uploader"
      />
      <label
        className="w-full h-36 md:size-36 flex items-center justify-center border-2 border-dashed border-gray-300 rounded-md cursor-pointer text-center text-sm text-gray-500 hover:bg-gray-50 transition"
        htmlFor="image-uploader"
      >
        {label}
      </label>
    </div>
  );
};

export default NMImageUploader;
