"use client";

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import { Autoplay, Pagination } from 'swiper/modules';
import Image from "next/image";
import hero from "../../assets/media/AM2.jpg";
import hero1 from "../../assets/media/AM3.jpg";
import hero2 from "../../assets/media/totebag4.jpg";
import hero3 from "../../assets/media/totebag5.jpg";

const Hero = () => {
  const images = [
    { src: hero, text: "Creative Branding Solutions" },
    { src: hero1, text: "Innovative Designs" },
    { src: hero2, text: "Quality Custom Products" },
    { src: hero3, text: "Unique Tote Bags" }
  ];

  return (
    <div className="pt-2 md:pt-2 lg:pt-25 block z-[1000]">
      <Swiper
        spaceBetween={0}
        autoplay={{ delay: 4000 }}
        speed={1500}
        loop
        slidesPerView={1}
        modules={[Autoplay, Pagination]}
        pagination={{ clickable: true }}
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-[250px] md:h-[370px]">
              <Image
                src={image.src}
                alt={`cover image ${index + 1}`}
                layout="fill"
                objectFit="cover"
                objectPosition="center"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white text-center">
                <h2 className="text-lg md:text-2xl font-bold px-4">
                  {image.text}
                </h2>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Hero;
