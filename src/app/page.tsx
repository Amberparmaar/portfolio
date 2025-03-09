"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Typewriter from "./Components/Typewriter";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
  }, []);

  return (
    <div className="flex flex-col items-center">
      <Image
        src="/Assets/logo.jpg"
        alt="Profile Picture"
        width={200}
        height={200}
        className="rounded-full transition-transform duration-300 hover:scale-110 mt-7"
        data-aos="fade-down"
      />
      <h1
        className="mb-6 transition-transform duration-300 hover:scale-110"
        style={{
          fontFamily: "Monda",
          fontWeight: 700,
          fontSize: "48px",
          background: "linear-gradient(yellow, #00cccc, white)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
        data-aos="fade-up"
        data-aos-delay="200"
      >
        <Typewriter text="Welcome to My Portfolio" speed={100} />
      </h1>

      <p
        className="text-2xl text-white text-center max-w-3xl transition-transform duration-300 hover:scale-110"
        data-aos="fade-up"
        data-aos-delay="400"
      >
        Hi, I'm <b> AMBER PARMAAR </b>. I'm a digital marketing and web
        development enthusiast. I'm currently enhancing my skills through the
        Governor Sindh Initiative IT courses.
      </p>
      <div data-aos="fade-up" data-aos-delay="600">
        <Link href="https://www.linkedin.com/in/amber-shoukat-19724a293/">
          <button
            type="button"
            className="px-6 py-3 m-6 font-semibold text-[#00cccc] bg-white rounded-lg shadow-md hover:text-black transition-all duration-500"
          >
            Hire Me
          </button>
        </Link>

        <Link href="/Assets/cv.pdf">
          <button
            type="button"
            className="px-6 py-3 m-6 font-semibold text-[#00cccc] bg-gradient-to-r from-blue-200 to-yellow-500 rounded-lg shadow-md hover:from-yellow-500 hover:to-white transition-all duration-300"
          >
            Download CV
          </button>
        </Link>
      </div>
    </div>
  );
}
