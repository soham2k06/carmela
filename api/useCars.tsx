"use client";
import { useQuery } from "@tanstack/react-query";
import { getCars } from "./apiCars";
import { FilterProps } from "@/types";

export function useCars(filters: FilterProps) {
  const {
    data: cars,
    error,
    isLoading,
    refetch,
  } = useQuery({
    queryFn: () => getCars(filters),
    queryKey: ["cars", filters],
  });
  
  if (error) console.error(error);
  return { cars, isLoading, error, refetch };
}
