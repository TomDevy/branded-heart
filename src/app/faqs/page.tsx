"use client";

import React, { useState } from "react";
import style from "./faqs.module.css";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqData = [
  {
    question: "What products do you offer?",
    answer: "We offer branded t-shirts, hoodies, caps, tote bags, and more customized for individuals, teams, and events.",
  },
  {
    question: "Can I request a custom design?",
    answer: "Absolutely! We specialize in custom branding. Reach out to us via the contact form to discuss your needs.",
  },
  {
    question: "What is the delivery timeline?",
    answer: "Typically, orders are processed and delivered within 5–10 business days, depending on quantity and customization level.",
  },
  {
    question: "Do you ship nationwide?",
    answer: "Yes, we deliver to all states in Nigeria. Delivery fees vary based on location.",
  },
//   {
//     question: "How do I make payments?",
//     answer: "Payments are made securely online through our platform or via direct bank transfer after order confirmation.",
//   }
];

const FaqItem = ({ question, answer, index, activeIndex, toggle }: any) => {
  const isOpen = index === activeIndex;
  return (
    <div className={style.faqItem}>
      <div className={style.faqHeader} onClick={() => toggle(index)}>
        <h3>{question}</h3>
        {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
      </div>
      {isOpen && <p className={style.faqAnswer}>{answer}</p>}
    </div>
  );
};

const Faqs = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div className={style.faqsMain}>
      <div className={style.container}>
        <h1>Frequently Asked Questions</h1>
        <div className={style.faqList}>
          {faqData.map((item, index) => (
            <FaqItem
              key={index}
              index={index}
              question={item.question}
              answer={item.answer}
              activeIndex={activeIndex}
              toggle={toggle}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Faqs;
