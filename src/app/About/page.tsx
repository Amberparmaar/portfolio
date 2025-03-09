"use client";
import { Charm } from "next/font/google";
import Typewriter from "../Components/Typewriter";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const charm = Charm({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export default function About() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      mirror: true,
    });
  }, []);

  return (
    <section className="text-white">
    <div className="max-w-2xl h-screen mx-auto shadow-xl  md:p-10 transition-all duration-700 ease-in-out transform hover:scale-105">
      <h1
        className="text-center py-6 text-4xl md:text-5xl font-bold hover:scale-110 transition-transform duration-300"
        data-aos="fade-down"
        style={{ fontFamily: "Charm" }}
      >
        <Typewriter text="About Me" speed={100} />
      </h1>

      <div
        className="shadow-xl rounded-xl p-6 bg-yellow-100 shadow-yellow-500 mb-8 transition-all duration-500 ease-in-out transform hover:scale-105"
        data-aos="fade-up"
      >
        <p
          className="text-gray-600 mb-4 text-sm md:text-base transition-opacity duration-500 hover:opacity-80"
          data-aos="fade-right"
          data-aos-delay="200"
        >
          I'm a passionate individual with a background in digital marketing and
          a growing expertise in web development. I've completed a digital
          marketing course and I'm currently expanding my skills through the
          Governor Sindh Initiative IT courses.
        </p>
        <p
          className="text-gray-600 mb-4 text-sm md:text-base transition-opacity duration-500 hover:opacity-80"
          data-aos="fade-right"
          data-aos-delay="400"
        >
          My journey in the tech world started with HTML and CSS, and I've since
          added TypeScript to my skill set. I'm constantly learning and looking
          for new challenges to improve my abilities.
        </p>
        <p
          className="text-gray-600 text-sm md:text-base transition-opacity duration-500 hover:opacity-80"
          data-aos="fade-right"
          data-aos-delay="600"
        >
          I believe in the power of continuous learning and I'm excited about
          the future of technology and digital marketing.
        </p>
      </div>
    </div>
    </section>
  );
}
