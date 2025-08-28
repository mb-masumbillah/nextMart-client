import Image from "next/image";
import { Button } from "../../button";
import { X } from "lucide-react";
import { Dispatch, SetStateAction } from "react";

type TImagePreviewProps = {
  setImageFiles: Dispatch<SetStateAction<[] | File[]>>;
  setImagePreview: Dispatch<SetStateAction<[] | string[]>>;
  imagePreview: [] | string[];
  className?: string;
};

const ImagePreview = ({
  setImageFiles,
  setImagePreview,
  imagePreview,
  className,
}: TImagePreviewProps) => {
  const handleRemove = (index: number) => {
    setImageFiles((prev) => prev.filter((_, idx) => idx !== index));
    setImagePreview((prev) => prev.filter((_, idx) => idx !== index));
  };

  return (
    <div className={className}>
      {imagePreview.map((preview, index) => (
        <div
          key={index}
          className="relative w-36 h-36 rounded-md overflow-hidden border border-dashed border-gray-300"
        >
          <Image
            className="object-cover w-full h-full"
            width={500}
            height={500}
            src={preview}
            alt={`preview ${index + 1}`}
          />

          <Button
            type="button"
            size="sm"
            onClick={() => handleRemove(index)}
            className="bg-red-300 hover:bg-red-400 absolute -top-0 -right-0 w-6 h-6 p-0 rounded-full"
          >
            <X className="w-4 h-4" />
          </Button>
        </div>
      ))}
    </div>
  );
};

export default ImagePreview;
