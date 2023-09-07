"use client";

import { useState } from "react";

import SearchManufacturer from "./SearchManufacturer";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useCars } from "@/api/useCars";
import { toast } from "react-toastify";

function SearchButton({
  otherClasses,
  isLoading,
}: {
  otherClasses: string;
  isLoading: boolean;
}) {
  return (
    <button
      type="submit"
      disabled={isLoading}
      className={`-ml-3 z-20 ${otherClasses}`}
    >
      <Image
        src={"/magnifying-glass.svg"}
        alt={"magnifying glass"}
        width={40}
        height={40}
        className={`${
          isLoading ? "animate-[ping2_1.5s_infinite_linear]" : ""
        } object-contain`}
      />
    </button>
  );
}

function SearchBar() {
  const { isLoading } = useCars({});

  const [manufacturer, setManufacturer] = useState("");
  const [model, setModel] = useState("");

  const router = useRouter();

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (manufacturer.trim() === "" && model.trim() === "") {
      toast.info("Please provide some input");
      return;
    }

    updateSearchParams(model.toLowerCase(), manufacturer.toLowerCase());
  };

  const updateSearchParams = (model: string, manufacturer: string) => {
    // Create a new URLSearchParams object using the current URL search parameters
    const searchParams = new URLSearchParams(window.location.search);

    // Update or delete the 'model' search parameter based on the 'model' value
    if (model) searchParams.set("model", model);
    else searchParams.delete("model");

    if (manufacturer) searchParams.set("manufacturer", manufacturer);
    else searchParams.delete("manufacturer");

    const newPathname = `${
      window.location.pathname
    }?${searchParams.toString()}`;

    router.push(newPathname);
  };

  return (
    <form
      className="flex items-center justify-start max-sm:flex-col w-full relative max-sm:gap-4 max-w-3xl"
      onSubmit={handleSearch}
    >
      <div className="flex-1 max-sm:w-full flex justify-start items-center relative">
        <SearchManufacturer
          isLoading={isLoading}
          manufacturer={manufacturer}
          setManufacturer={setManufacturer}
        />
        <SearchButton isLoading={isLoading} otherClasses="sm:hidden" />
      </div>
      <div className="flex-1 max-sm:w-full flex justify-start items-center relative">
        <Image
          src="/model-icon.png"
          width={25}
          height={25}
          className="absolute w-5 h-5 ml-4"
          alt="car model"
        />
        <input
          type="text"
          name="model"
          value={model}
          onChange={(e) => setModel(e.target.value)}
          placeholder="Tiguan..."
          className="w-full h-12 pl-12 p-4 bg-light-white rounded-r-full max-sm: rounded-full outline-none cursor-pointer text-sm"
        />
        <SearchButton otherClasses="sm:hidden" isLoading={isLoading} />
      </div>
      <SearchButton otherClasses="max-sm:hidden" isLoading={isLoading} />
    </form>
  );
}

export default SearchBar;
