"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

import { CarProps } from "@/types";
import { calculateCarRent, generateCarImageUrl } from "@/utils";

import CustomButton from "@/components/CustomButton";
import ImageSkeleton from "@/components/ImageSkeleton";
import CarDetails from "./CarDetails";
import CarFeature from "./CarFeature";

interface CarCardProps {
  car: CarProps;
}

function CarCard({ car }: CarCardProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const maxCarNameLength = 17;

  const { city_mpg, year, make, model, transmission, drive } = car;
  const carName = make + " " + model;
  const carRent = calculateCarRent(city_mpg, year);

  return (
    <ul className="flex flex-col p-6 justify-center items-start text-black-100 bg-primary-blue-100 hover:bg-white hover:shadow-md rounded-3xl group">
      <div className="w-full flex justify-between items-start gap-2">
        <h2 className="text-2xl leading-7 font-bold capitalize">
          {carName.length < maxCarNameLength
            ? carName
            : carName.substring(0, maxCarNameLength) + "..."}
        </h2>
      </div>

      <p className="flex mt-6  text-3xl leading-9 font-extrabold">
        <span className="self-start text-sm leading-4 font-semibold">₹</span>
        {carRent}
        <span className="self-end text-[14px] leading-[17px] font-medium">
          /day
        </span>
      </p>

      <div className="relative w-full h-40 my-3 object-contain">
        <ImageSkeleton isLoading={isLoading} />
        <Image
          src={generateCarImageUrl(car)}
          alt="car model"
          onLoad={() => setIsLoading(false)}
          fill
          priority
          className={`object-contain ${isLoading ? "hidden" : "block"}`}
        />
      </div>

      <div className="relative flex w-full mt-2">
        <div className="flex group-hover:invisible w-full justify-between text-grey">
          <CarFeature
            img="steering-wheel"
            label={transmission === "a" ? "Automatic" : "Manual"}
          />
          <CarFeature img="tire" label={drive.toUpperCase()} />
          <CarFeature img="gas" label={`${city_mpg} MPG`} />
        </div>

        <div className="hidden group-hover:flex absolute bottom-0 w-full z-10">
          <CustomButton
            title="View More"
            containerStyles="w-full py-[16px] rounded-full bg-primary-blue"
            textStyles="text-white text-[14px] leading-[17px] font-bold"
            rightIcon="/right-arrow.svg"
            handleClick={() => setIsOpen(true)}
          />
        </div>
      </div>

      <CarDetails
        isOpen={isOpen}
        closeModal={() => setIsOpen(false)}
        car={car}
      />
    </ul>
  );
}

export default CarCard;
