import { FilterProps } from "@/types";

const headers = {
  "X-Api-Key": "p44lsk5qZBCgummZjpRF74b2hlpZ6J5XI9ZDhmyF",
};

const BASE_URL = "https://api.api-ninjas.com/v1/cars";

export async function getCars(filters: FilterProps) {
  const { fuel, limit, manufacturer, model, year } = filters;
  const res = await fetch(
    `${BASE_URL}?make=${manufacturer}&year=${year}&model=${model}&limit=${limit}&fuel_type=${fuel}`,
    { headers }
  );

  const data = await res.json();
  return data;
}
