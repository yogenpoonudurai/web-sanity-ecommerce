import { GetServerSideProps } from "next";
import React from "react";
import { HeroBanner, Product } from "../components";
import { client } from "../lib/client";
import { BannerData } from "../lib/types/banner.type";
import type { ProductType } from "../lib/types/product.type";

type Props = {
  bannerData: BannerData[];
  products: ProductType[];
};

function Home({ products, bannerData }: Props) {
  return (
    <div className="min-h-screen mx-auto bg-white text-black">
      <HeroBanner bannerData={bannerData[0]} />
      <div className="container w-full py-10 px-5">
        <h2 className="text-center text-3xl font-bold text-primary">
          Best Selling Products
        </h2>
        <p className="text-center mx-auto text-sm">
          Speakers of many variations
        </p>
        <div className="mx-auto">
          {products.map((product) => (
            <Product key={product._id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const query = '*[_type == "product"]';
  const products = await client.fetch(query);
  const bannerQuery = '*[_type == "banner"]';
  const bannerData = await client.fetch(bannerQuery);
  return {
    props: {
      products,
      bannerData,
    },
  };
};
