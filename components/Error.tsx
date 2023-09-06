"use client";

import CustomButton from "./CustomButton";

function Error({
  message,
  customizedMsg,
  refetch,
}: {
  message: any;
  customizedMsg?: string;
  refetch: any;
}) {
  console.log(refetch);
  return (
    <div className="flex justify-center items-center flex-col gap-2 bg-primary-blue-100 w-fit mx-auto px-8 py-4 rounded-lg">
      <h2 className="text-red-500 text-xl font-bold">Oops, no results</h2>
      <div className="text-red-400 text-center">
        {customizedMsg && <p>{customizedMsg}</p>}
        <p>{message}</p>
      </div>
      {customizedMsg ? (
        <CustomButton
          title="Go Back"
          containerStyles="mt-4 bg-primary-blue text-white rounded-full"
          handleClick={() => {
            window.history.pushState({}, "", window.location.pathname);
            location.reload();
          }}
        />
      ) : (
        <CustomButton
          title="Retry"
          containerStyles="mt-4 bg-primary-blue text-white rounded-full"
          handleClick={refetch}
        />
      )}
    </div>
  );
}

export default Error;
