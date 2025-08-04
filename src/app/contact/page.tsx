"use client";
import React, { useState } from "react";
import style from "./contact.module.css";
import { Mail, Phone, MapPin, Send, CheckCircle } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const isFormValid =
    formData.name.trim() !== "" &&
    formData.email.trim() !== "" &&
    formData.message.trim() !== "";

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isFormValid) return;

    setIsSubmitting(true);
    try {
      const response = await fetch("https://formspree.io/f/manbdryy", {
        method: "POST",
        headers: {
          Accept: "application/json",
        },
        body: new FormData(e.target as HTMLFormElement),
      });

      if (response.ok) {
        setFormData({ name: "", email: "", message: "" });
        setShowModal(true);
      } else {
        alert("Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Form submission error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className={style.contactMain}>
      <section className={style.hero}>
        <h1>Get in Touch</h1>
        <p>Have questions or want to make an order? We’d love to hear from you!</p>
      </section>

      <div className={style.container}>
        {/* Contact Form */}
        <form className={style.form} onSubmit={handleSubmit}>
          <div className={style.inputGroup}>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Your name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className={style.inputGroup}>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="you@example.com"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className={style.inputGroup}>
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              rows={5}
              placeholder="Your message"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>

          <button
            type="submit"
            className={style.submitBtn}
            disabled={!isFormValid || isSubmitting}
          >
            {isSubmitting ? "Sending..." : <><Send size={16} /> Send Message</>}
          </button>
        </form>

        {/* Contact Info */}
        <div className={style.infoBox}>
          <h2>Contact Details</h2>
          <p><Mail size={18} /> brandedheart13@gmail.com</p>
          <p><Phone size={18} /> +234 706 193 4336</p>
          <p><MapPin size={18} /> Akure, Nigeria</p>
        </div>
      </div>

      {/* Success Modal */}
      {showModal && (
        <div className={style.modalOverlay}>
          <div className={style.modal}>
            <CheckCircle size={36} color="#28a745" />
            <h3>Message Received</h3>
            <p>We've received your message, and will get back to you soonest!</p>
            <button onClick={() => setShowModal(false)} className={style.closeBtn}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Contact;
