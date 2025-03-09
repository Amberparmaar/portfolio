"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import { Charm } from "next/font/google";
import Typewriter from "../Components/Typewriter";
import AOS from "aos";
import "aos/dist/aos.css";

const charm = Charm({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export default function Skills() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
      mirror: true,
      easing: "ease-out-cubic",
    });
  }, []);

  return (
    <div className="max-w-screen-2xl mx-auto text-white">
      <h3
        className="text-center py-6 hover:scale-110 text-4xl md:text-5xl transition-transform duration-300"
        style={{ fontFamily: "Charm", fontWeight: 700 }}
        data-aos="fade-down"
        data-aos-duration="1000"
      >
        <Typewriter text="Skills" speed={100} />
      </h3>
      <div className="container px-6 py-10 mx-auto text-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
          {/* Skill Cards */}
          {[
            { src: "/Assets/html.webp", title: "HTML" },
            { src: "/Assets/css.jpeg", title: "CSS" },
            { src: "/Assets/typescript.jpeg", title: "TypeScript" },
            { src: "/Assets/nextjs.jpeg", title: "Next.js" },
            { src: "/Assets/figma.webp", title: "Figma" },
            { src: "/Assets/tailwind.jpeg", title: "Tailwind CSS" },
            {
              src: "/Assets/digital marketing.jpeg",
              title: "Digital Marketing",
            },
          ].map((skill, index) => (
            <div
              key={index}
              className="p-4 w-full max-w-xs mx-auto shadow-yellow-500 shadow-xl border rounded-2xl hover:scale-105 transition-transform duration-300 bg-gray-500"
              data-aos="fade-up"
              data-aos-delay={100 * index}
              data-aos-anchor-placement="top-bottom"
            >
              <Image
                src={skill.src}
                alt={skill.title}
                width={150}
                height={100}
                className="mx-auto"
              />
              <div className="card-body py-4">
                <h2 className="card-title text-white font-bold text-lg">
                  {skill.title}
                </h2>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
