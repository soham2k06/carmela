import { FilterProps } from "@/types";

const headers = {
  "X-Api-Key": "7frUWaySYlmaxqt4QrArbg==ZiMzJoQvn3Nry1XN",
};

const BASE_URL = "https://api.api-ninjas.com/v1/cars";

export async function getCars(filters: FilterProps) {
  const { fuel, limit, manufacturer, model, year } = filters;
  const res = await fetch(
    `${BASE_URL}?make=${manufacturer}&model=${model}&year=${year}&fuel_type=${fuel}&limit=${limit}`,
    { headers }
  );
  const data = await res.json();
  return data;
}
