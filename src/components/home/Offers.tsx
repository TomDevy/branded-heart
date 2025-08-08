"use client";
import { useRef, useEffect } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import {
  BadgeCheck,
  PencilRuler,
  Timer,
  Leaf,
} from "lucide-react";

const offersData = [
  {
    title: "Premium Quality",
    icon: <BadgeCheck size={64} className="text-black"color="#be0505" />,   
     description: "Superior materials and craftsmanship in every product we create.",
  },
  {
    title: "Custom Design",
    icon: <PencilRuler size={64} className="text-black" color="#be0505"/>,
    description: "Tailored solutions that perfectly match your brand identity.",
  },
  {
    title: "Fast Production",
    icon: <Timer size={64} className="text-black" color="#be0505"/>,
    description: "Quick turnaround times without compromising on quality.",
  },
  {
    title: "Sustainable Practices",
    icon: <Leaf size={64} className="text-black" color="#be0505"/>,
    description: "Environmentally conscious materials and production methods.",
  },
];

const Offers = () => {
  const controls = useAnimation();
  const ref = useRef(null);
  const inView = useInView(ref, { once: false, margin: "0px 0px -20% 0px" });


  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
      },
    },
  };

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">WHY CHOOSE US</h2>
          <div className="w-24 h-1 bg-black mx-auto"></div>
        </div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {offersData.map((offer, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white p-8 flex flex-col items-center text-center shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="mb-6">{offer.icon}</div>
              <h3 className="text-xl font-bold mb-4">{offer.title}</h3>
              <p className="text-gray-600">{offer.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Offers;