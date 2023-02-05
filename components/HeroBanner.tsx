import Link from "next/link";
import { urlFor } from "../lib/client";
import { BannerData } from "../lib/types/banner.type";

type Props = {
  bannerData: BannerData;
};
const HeroBanner = ({ bannerData }: Props) => {
  return (
    <div
      className="hero h-[350px]"
      style={{
        backgroundImage: bannerData?.image
          ? `url(${urlFor(bannerData?.image)})`
          : "",
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-neutral-content h-full w-full justify-between relative">
        <div className="absolute top-10 left-10">
          <p className="text-black text-sm">{bannerData?.smallText}</p>
          <h3 className="text-black font-bold text-4xl">
            {bannerData?.midText}
          </h3>
          <h1 className="text-white font-extrabold text-7xl mb-10">
            {bannerData?.largeText1}
          </h1>
          <Link href={`/products/${bannerData?.product}`}>
            <button className="btn btn-accent btn-sm">
              {bannerData?.buttonText}
            </button>
          </Link>
        </div>
        <div className="absolute bottom-5 right-10 text-right">
          <div className="text-accent font-bold">Description</div>
          <p>{bannerData?.desc}</p>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
