import ImageSkeleton from "@/components/ImageSkeleton";

function CarCardSkeleton() {
  return (
    <ul className="flex flex-col p-6 bg-primary-blue-100 rounded-3xl cursor-progress">
      {/* Make & Model */}
      <div className="skeleton">
        <h2 className="text-2xl leading-6">manufacturer model</h2>
      </div>

      {/* Car rent */}
      <p className="skeleton flex mt-6 text-3xl leading-9">
        <span className="self-start text-sm leading-4">₹</span>
        <span>car rent</span>
        <span className="self-end text-sm leading-4">/day</span>
      </p>

      {/* Image */}
      <div className="h-40 my-3 bg-gray-300 rounded-lg animate-pulse">
        <ImageSkeleton isLoading />
      </div>

      {/* Features */}
      <div className="flex justify-between mt-2">
        <div className="skeleton">
          <div className="h-10" />
          <p className="text-sm leading-4">transmission</p>
        </div>
        <div className="skeleton">
          <div className="h-10" />
          <p className="text-sm leading-4">transmission</p>
        </div>
        <div className="skeleton">
          <div className="h-10" />
          <p className="text-sm leading-4">transmission</p>
        </div>
      </div>
    </ul>
  );
}

export default CarCardSkeleton;
