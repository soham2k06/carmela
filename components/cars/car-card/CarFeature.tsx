import Image from "next/image";

function CarFeature({ img, label }: { img: string; label: any }) {
  return (
    <div className="flex flex-col justify-center items-center gap-2">
      <Image src={`/${img}.svg`} width={20} height={20} alt={img} />
      <p className="text-sm leading-4">{label}</p>
    </div>
  );
}

export default CarFeature;
