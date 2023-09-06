"use client";

import { useState } from "react";
import Image from "next/image";

import { generateCarImageUrl } from "@/utils";
import { CarProps } from "@/types";

import ImageSkeleton from "@/components/ImageSkeleton";

interface CarImageProps {
  car: CarProps;
  angel: string;
}

function AngeledCarImage({ car, angel }: CarImageProps) {
  const [isLoading, setIsLoading] = useState(true);
  return (
    <div className="flex-1 relative w-full h-24 bg-primary-blue-100 rounded-lg">
      <ImageSkeleton isLoading={isLoading} />
      <Image
        onLoad={() => setIsLoading(false)}
        src={generateCarImageUrl(car, angel)}
        alt="car model"
        fill
        priority
        className={`object-contain ${isLoading ? "hidden" : "block"}`}
      />
    </div>
  );
}

export default AngeledCarImage;
