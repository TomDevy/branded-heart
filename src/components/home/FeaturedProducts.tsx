"use client";
import { useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";


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
    <motion.div 
      // whileHover={{ y: -10 }}
      // transition={{ duration: 0.3 }}
      className="group cursor-pointer"
    >
      <Link href={product.link}>
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

        <div ref={containerRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;