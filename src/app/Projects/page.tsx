"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Charm } from "next/font/google";
import Typewriter from "../Components/Typewriter";
import AOS from "aos";
import "aos/dist/aos.css";

const charm = Charm({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export default function Projects() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
      mirror: true,
      easing: "ease-out-cubic",
    });
  }, []);

  return (
    <div className="text-white">
      <h3
        className="text-center py-6 hover:scale-110 text-4xl md:text-5xl transition-transform duration-300"
        style={{ fontFamily: "Charm", fontWeight: 700 }}
        data-aos="fade-down"
        data-aos-duration="1000"
      >
        <Typewriter text="Projects" speed={100} />
      </h3>
      <div className="container px-6 py-10 mx-auto text-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-center">
          {/* Project Cards */}
          {[
            {
              src: "/Assets/blog.webp",
              title: "Blog Website",
              desc: "A Coffee Blog that shares insights, tips, and experiences about coffee, including brewing methods, coffee culture, and recommendations. ",
            },
            {
              src: "/Assets/calculator.jpeg",
              title: "Calculator",
              desc: "I have created a versatile calculator that allows users to perform calculations with any number.",
            },
            {
              src: "/Assets/data sweeper.jpeg",
              title: "Data Sweeper",
              desc: "I developed a Data Sweeper App cleans and organizes datasets by removing duplicates, correcting errors, and optimizing data for better analysis and efficiency.",
            },
            {
              src: "/Assets/growth mindset.png",
              title: "Growth Mindset App",
              desc: "A Growth Mindset app that helps users develop a positive mindset through motivational content, goal setting, and habit tracking.",
            },
            {
              src: "/Assets/number guess.jpeg",
              title: "Number Guessing Game",
              desc: "I developed a number guessing game where users input a number, and the game intelligently guesses it.",
            },
            {
              src: "/Assets/qr code.jpeg",
              title: "QR code generator",
              desc: "I have develop QR code generator with streamlit and python.",
            },
            {
              src: "/Assets/quiz.jpeg",
              title: "Quiz Whiz",
              desc: "I have developed a quiz system where students can easily come and attempt quizzes easily.",
            },
            {
              src: "/Assets/resume.jpeg",
              title: "Resume Builder",
              desc: "A web application to create, edit, and share resumes dynamically with a unique URL. Features include PDF download and print options.",
            },
            {
              src: "/Assets/unit converter.jpeg",
              title: "Unit Converter App",
              desc: "A Unit Converter app that allows users to easily convert between different measurement units, length, weight, temperature, and more.",
            },
          ].map((project, index) => (
            <div
              key={index}
              className="p-4 w-full max-w-xs mx-auto shadow-yellow-500 shadow-xl border rounded-2xl hover:scale-105 transition-transform duration-300 bg-gray-500"
              data-aos="fade-up"
              data-aos-delay={100 * index}
              data-aos-anchor-placement="top-bottom"
            >
              <Image
                src={project.src}
                alt={project.title}
                width={150}
                height={100}
                className="mx-auto"
                data-aos="zoom-in"
                data-aos-delay={100 * index + 100}
              />
              <div className="card-body py-4">
                <h2
                  className="card-title font-bold text-lg text-white"
                  data-aos="fade-right"
                  data-aos-delay={100 * index + 200}
                >
                  {project.title}
                </h2>
                <p
                  className="text-sm text-white"
                  data-aos="fade-right"
                  data-aos-delay={100 * index + 300}
                >
                  {project.desc}
                </p>
                <div
                  className="card-actions justify-end mt-4"
                  data-aos="fade-up"
                  data-aos-delay={100 * index + 400}
                >
                  <Link href="https://github.com/Amberparmaar">
                    <button
                      type="button"
                      className="px-6 py-3 font-semibold text-white bg-gradient-to-r from-blue-200 to-yellow-500 rounded-lg shadow-md hover:from-yellow-500 hover:to-white transition-all duration-300"
                    >
                      GitHub
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
