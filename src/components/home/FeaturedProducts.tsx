"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { products } from "@/app/lib/products"; // Adjust if path is different

const ProductCard = ({ product }: any) => {
  return (
    <motion.div className="group cursor-pointer">
      <Link href={`/products/${product.slug}`}>
        <div className="relative h-80 w-full mb-4 overflow-hidden bg-gray-100">
          <div className="aspect-w-1 aspect-h-1 w-full h-full">
            <div className="relative h-full w-full">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 bg-primaryRed bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300 p-4 flex justify-center opacity-0 group-hover:opacity-100">
            <span className="text-white font-medium">View Product</span>
          </div>
        </div>
        <div>
          <p className="text-sm text-gray-500">{product.category}</p>
          <h3 className="text-lg font-medium mt-1">{product.name}</h3>
          <p className="font-medium mt-1">{product.price}</p>
        </div>
      </Link>
    </motion.div>
  );
};

const FeaturedProducts = () => {
  const containerRef = useRef(null);
  const featured = products.slice(0, 4); // Only first 4

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-10">
          <h2 className="text-3xl font-bold">FEATURED PRODUCTS</h2>
          <Link href="/products">
            <span className="text-black font-medium hover:underline">
              View All
            </span>
          </Link>
        </div>

        <div
          ref={containerRef}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {featured.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
