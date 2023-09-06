import CustomFilter from "@/components/cars/searches/CustomFilter";
import Hero from "@/components/Hero";
import SearchBar from "@/components/cars/searches/SearchBar";

import { fuels, yearsOfProduction } from "@/constants";
import Cars from "@/components/cars/Cars";

export default function Home({ searchParams }: { searchParams: any }) {
  return (
    <main className="overflow-hidden">
      <Hero />

      <div
        className="mt-12 sm:px-16 px-6 py-4 max-w-[1440px] mx-auto"
        id="discover"
      >
        <div className="flex flex-col items-start justify-start gap-y-2.5 text-black-100">
          <h1 className="text-4xl font-extrabold">Car Catalogue</h1>
          <p>Explore out cars you might like</p>
        </div>

        <div className="pt-12 w-full flex justify-between items-center flex-wrap gap-5">
          <SearchBar />

          <div className="flex justify-start flex-wrap items-center gap-2">
            <CustomFilter title="fuel" options={fuels} />
            <CustomFilter title="year" options={yearsOfProduction} />
          </div>
        </div>

        <Cars searchParams={searchParams} />
      </div>
    </main>
  );
}
