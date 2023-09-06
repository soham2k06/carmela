"use client";
import { ShowMoreProps } from "@/types";
import CustomButton from "../../CustomButton";
import { useRouter } from "next/navigation";
import { updateSearchParams } from "@/utils";

function ShowMore({ pageNumber, isNext }: ShowMoreProps) {
  const router = useRouter();
  function handleNavigation() {
    const newLimit = (pageNumber + 1) * 10;
    const newPathname = updateSearchParams("limit", String(newLimit));
    router.push(newPathname);
  }
  return (
    <div className="w-full flex items-center justify-center gap-5 mt-10">
      {!isNext && (
        <CustomButton
          btnType="button"
          title="Show More"
          containerStyles="bg-primary-blue rounded-full text-white"
          handleClick={handleNavigation}
        />
      )}
    </div>
  );
}

export default ShowMore;
