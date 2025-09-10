"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { cities } from "@/constant/cities";
import { updateCity, updateShippingAddress } from "@/redux/features/cartSlice";
import { useAppDispatch } from "@/redux/hook";

const Address = () => {
  const dispatch = useAppDispatch();

  const handleCitySelect = (city: string) => {
    dispatch(updateCity(city));
  };

  const handleShippingAddress = (address: string) => {
    dispatch(updateShippingAddress(address));
  };

  return (
    <div className="border-2 border-white bg-background brightness-105 rounded-md col-span-4  p-5 ">
      <div className="flex flex-col justify-between h-full">
        <h1 className="text-2xl font-bold">Address</h1>
        <p className="text-gray-500">Enter your address.</p>
        <div className="mt-5">
          <Select onValueChange={(city) => handleCitySelect(city)}>
            <SelectTrigger>
              <SelectValue placeholder="Select Product Category" />
            </SelectTrigger>

            <SelectContent className="bg-white">
              {cities.map((city, idx) => (
                <SelectItem key={idx} value={city}>
                  {city}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <Textarea
            className="mt-5"
            onChange={(e) => handleShippingAddress(e.target.value)}
            rows={5}
          />
        </div>
      </div>
    </div>
  );
};

export default Address;
