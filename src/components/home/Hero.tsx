"use client";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import { Autoplay, Pagination, EffectFade } from 'swiper/modules';
import Image from "next/image";
import Link from "next/link";
import hero from "../../assets/media/AM2.jpg";
import hero1 from "../../assets/media/AM3.jpg";
import hero2 from "../../assets/media/totebag4.jpg";
import hero3 from "../../assets/media/totebag5.jpg";

const Hero = () => {
  const slides = [
    {
      src: hero,
      title: "ELEVATE YOUR BRAND",
      subtitle: "Premium Custom Branding Solutions",
      cta: "Explore Collection",
      link: "/products"
    },
    {
      src: hero1,
      title: "CRAFTED FOR DISTINCTION",
      subtitle: "Innovative Designs That Stand Out",
      cta: "Shop Now",
      link: "/shop"
    },
    {
      src: hero2,
      title: "QUALITY REDEFINED",
      subtitle: "Handcrafted Custom Products",
      cta: "Discover More",
      link: "/about"
    },
    {
      src: hero3,
      title: "CARRY YOUR STATEMENT",
      subtitle: "Signature Tote Collection",
      cta: "View Products",
      link: "/totes"
    }
  ];

  return (
    <div className="w-full">
      <Swiper
        spaceBetween={0}
        autoplay={{ delay: 5000 }}
        speed={1000}
        loop
        slidesPerView={1}
        modules={[Autoplay, Pagination, EffectFade]}
        pagination={{ clickable: true }}
        effect="fade"
        className="w-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-[60vh] md:h-[80vh] lg:h-[90vh]">
              <Image
                src={slide.src}
                alt={`Brand showcase ${index + 1}`}
                fill
                className="object-cover object-center"
                priority={index === 0}
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col items-start justify-center px-6 md:px-16 lg:px-24">
                <div className="max-w-2xl">
                  <h1 className="text-white text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-3">
                    {slide.title}
                  </h1>
                  <p className="text-white text-lg md:text-xl mb-8">
                    {slide.subtitle}
                  </p>
                  <Link href={slide.link}>
                    <span className="bg-white text-black py-3 px-8 font-bold hover:bg-gray-200 transition-colors duration-300 inline-block">
                      {slide.cta}
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Hero;