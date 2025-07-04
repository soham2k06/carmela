"use client";

import { toast } from "react-toastify";

import { useCars } from "@/api/useCars";

import CarCardSkeleton from "./car-card/CarCardSkeleton";
import CarCard from "./car-card/CarCard";
import ShowMore from "./searches/ShowMore";
import Error from "../Error";

function Cars({ searchParams }: { searchParams: any }) {
  const {
    cars,
    isLoading: isLoadingCars,
    error,
    refetch,
  } = useCars({
    manufacturer: searchParams.manufacturer || "",
    year: searchParams.year || 2023,
    fuel: searchParams.fuel || "",
    model: searchParams.model || "",
  });

  const errMessage = (error as any)?.message;

  if (error)
    toast.error(errMessage, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });

  if (!error && cars?.length === 0) {
    toast.error("Car manufacturer and model didn't match");
  }

  return (
    <section>
      <div className="grid 2xl:grid-cols-4 xl:grid-cols-3 md:grid-cols-2 grid-cols-1 w-full gap-8 pt-14">
        {isLoadingCars ? (
          <>
            <CarCardSkeleton />
            <CarCardSkeleton />
            <CarCardSkeleton />
            <CarCardSkeleton />
            <CarCardSkeleton />
          </>
        ) : (
          cars?.map((car: any, i: any) => <CarCard key={i} car={car} />)
        )}
      </div>

      {cars && cars?.length < 1 && (
        <Error
          message={errMessage}
          customizedMsg="Car manufacturer and model didn't match"
          refetch={refetch}
        />
      )}
      {!cars && error && <Error refetch={refetch} message={errMessage} />}
    </section>
  );
}

export default Cars;
