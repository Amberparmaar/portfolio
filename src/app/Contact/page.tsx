"use client";
import React, { useState, useEffect } from "react";
import { Charm } from "next/font/google";
import Typewriter from "../Components/Typewriter";
import AOS from "aos";
import "aos/dist/aos.css";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const charm = Charm({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export default function Contact() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
      mirror: true,
      easing: "ease-out-cubic",
    });
  }, []);

  // State to store form data
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  // Handle input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Validation check
    if (!formData.name || !formData.email || !formData.message) {
      toast.error("All fields are required!");
      return;
    }

    // Simulating a form submission (no API needed)
    toast.success("Message sent successfully!");

    // Reset form fields
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="text-white min-h-screen flex flex-col justify-center items-center py-20">
      {/* Toast Notifications */}
      <ToastContainer position="top-center" autoClose={3000} />

      <h3
        className="text-center text-4xl md:text-5xl font-bold mb-10 hover:scale-110 transition-transform duration-300"
        style={{ fontFamily: "Charm", fontWeight: 700 }}
        data-aos="fade-down"
        data-aos-duration="1000"
      >
        <Typewriter text="Get In Touch" speed={100} />
      </h3>

      {/* Contact Form */}
      <div
        className="w-full max-w-md md:max-w-2xl bg-gray-500 rounded-xl shadow-md p-6"
        data-aos="fade-up"
        data-aos-delay="300"
      >
        <form onSubmit={handleSubmit} className="space-y-6">
          <div data-aos="fade-right" data-aos-delay="400">
            <label className="block text-white text-sm font-bold mb-2" htmlFor="name">
              Name
            </label>
            <input
              className="w-full py-2 px-3 rounded-lg bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
              id="name"
              type="text"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
            />
          </div>

          <div data-aos="fade-right" data-aos-delay="500">
            <label className="block text-white text-sm font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input
              className="w-full py-2 px-3 rounded-lg bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
              id="email"
              type="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>

          <div data-aos="fade-right" data-aos-delay="600">
            <label className="block text-white text-sm font-bold mb-2" htmlFor="message">
              Message
            </label>
            <textarea
              className="w-full py-2 px-3 rounded-lg bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
              id="message"
              rows={4}
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
            ></textarea>
          </div>

          <div className="flex items-center justify-center" data-aos="zoom-in" data-aos-delay="700">
            <button
              className="px-6 py-3 font-semibold text-white bg-gradient-to-r from-blue-200 to-yellow-500 rounded-lg shadow-md hover:from-yellow-500 hover:to-white transition-all duration-300"
              type="submit"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
