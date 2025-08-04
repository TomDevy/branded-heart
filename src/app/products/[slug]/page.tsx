"use client";

import { notFound, useParams } from "next/navigation";
import Image from "next/image";
import style from "./productDeets.module.css";
import { products } from "@/app/lib/products";

export default function ProductDetail() {
  const params = useParams();
  const slug = params?.slug as string;

  const product = products.find((p) => p.slug === slug);

  if (!product) return notFound();

  return (
    <div className={style.productPage}>
      <div className={style.container}>
        <div className={style.imageWrapper}>
          <Image
            src={product.image}
            alt={product.name}
            fill
            className={style.productImage}
          />
        </div>
        <div className={style.details}>
          <h1>{product.name}</h1>
          <p className={style.category}>{product.category}</p>
          <p className={style.price}>{product.price}</p>
          <p className={style.description}>{product.description}</p>
        </div>
      </div>
    </div>
  );
}
