import Link from "next/link";
import React from "react";
import { urlFor } from "../lib/client";
import { ProductType } from "../lib/types/product.type";

type Props = {
  product: ProductType;
};
const Product = ({ product }: Props) => {
  return (
    <Link
      href={`/product/${product.slug.current}`}
      className="card w-40 bg-base-100 shadow-md"
    >
      <figure>
        <img
          src={urlFor(product.image && product.image[0]).toString()}
          alt={product.name}
        />
      </figure>
      <div className="card-body">
        <div className="card-title">{product.name}</div>
        <div className="text-right font-bold">
          <span className="font-medium">RM </span>
          {product.price.toFixed(2)}
        </div>
      </div>
    </Link>
  );
};

export default Product;
