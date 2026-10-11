import Image from "next/image";
import profileImage from "../../AaEVsCINLLLCd6EXko8sJw-AaEVsCINQ_Ww_GsKIjJJWQ.jpg";

export default function HeroImage() {
  return (
    <div className="flex justify-center lg:justify-end">
      <div className="relative h-80 w-80 overflow-hidden rounded-full border-4 border-blue-600 shadow-2xl shadow-cyan-500/30">
        <Image
          src={profileImage}
          alt="CabTech Hub profile"
          fill
          priority
          className="object-cover"
          sizes="(max-width: 1024px) 320px, 320px"
        />
      </div>
    </div>
  );
}













