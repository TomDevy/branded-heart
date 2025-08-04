"use client";
import React from "react";
import style from "./about.module.css";
import Link from "next/link";
import {
  Shirt,
  Handshake,
  Target,
  Lightbulb,
  CheckCircle,
} from "lucide-react";

const About = () => {
  return (
    <div className={style.aboutMain}>
      <section className={style.hero}>
        <p>Crafting identity through branded fashion and wearables.</p>
      </section>

      <section className={style.section}>
        <div className={style.iconTitle}>
          <Lightbulb size={30} className={style.icon} />
          <h2>Our Vision</h2>
        </div>
        <p>
         Our Vision at Branded Heart Creations is to be a household name globally in styling, products branding and sales service rendering through quality product at a friendly price at the right time.
        </p>
      </section>

      <section className={style.section}>
        <div className={style.iconTitle}>
          <Target size={30} className={style.icon} />
          <h2>Our Mission</h2>
        </div>
        <p>
          We leave an indellible impression on the heart of our customer, We give a reason to make us your Number One choice in styling, product branding and quality of service.
        </p>
      </section>

      <section className={style.section}>
        <div className={style.iconTitle}>
          <Shirt size={30} className={style.icon} />
          <h2>What We Do</h2>
        </div>
        <ul>
          <li>Custom T-Shirt Branding</li>
          <li>Merch Design & Production</li>
          <li>Corporate Gifts & Event Wear</li>
          <li>Bulk Orders for Groups, Churches, & Schools</li>
        </ul>
      </section>

      <section className={style.section}>
        <div className={style.iconTitle}>
          <CheckCircle size={30} className={style.icon} />
          <h2>Why Choose Us?</h2>
        </div>
        <ul>
          <li>Integrity</li>
          <li>Attention to detail</li>
          <li>Fast delivery & responsive communication</li>
          <li>Excellent material quality</li>
          <li>Affordable pricing for all order sizes</li>
        </ul>
      </section>

      <section className={style.cta}>
        <p>Ready to get started with us? 💼</p>
        <Link href="/products" className={style.ctaBtn}>
          Explore Our Products
        </Link>
      </section>
    </div>
  );
};

export default About;
