"use client";

import React from "react";
import style from "./products.module.css";
import Image from "next/image";
import Link from "next/link";

// You can eventually fetch this from a CMS or JSON file
const products = [
  {
    id: 1,
    name: "Premium Branded Tee",
    image: "/products/voiceBH2.jpg",
    price: "$34.99",
    category: "T-Shirts",
    link: "/products/premium-tee"
  },
  {
    id: 2,
    name: "Custom Logo Tote",
    image: "/products/totebag4.jpg",
    price: "$29.99",
    category: "Bags",
    link: "/products/logo-tote"
  },
  {
    id: 3,
    name: "Signature Hoodie",
    image: "/products/hoodie.jpg",
    price: "$59.99",
    category: "Hoodies",
    link: "/products/signature-hoodie"
  },
  {
    id: 4,
    name: "Embroidered Cap",
    image: "/products/caps.jpg",
    price: "$24.99",
    category: "Headwear",
    link: "/products/embroidered-cap"
  }
];

const ProductCard = ({ product }: any) => {
  return (
    <div className={style.card}>
      <Link href={product.link}>
        <div className={style.imageWrapper}>
          <Image
            src={product.image}
            alt={product.name}
            fill
            className={style.productImage}
          />
          <div className={style.overlay}>
            <span className={style.overlayText}>View Product</span>
          </div>
        </div>
        <div className={style.details}>
          <p className={style.category}>{product.category}</p>
          <h3 className={style.name}>{product.name}</h3>
          {/* <p className={style.price}>{product.price}</p> */}
        </div>
      </Link>
    </div>
  );
};

const Products = () => {
  return (
    <div className={style.productsMain}>
      <section className={style.section}>
        <h1 className={style.pageTitle}>Our Products</h1>

        <div className={style.grid}>
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Products;
