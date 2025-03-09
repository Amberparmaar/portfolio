"use client";
import React, { useState } from "react";
import Link from "next/link";
import { FiMenu, FiX } from "react-icons/fi";
import Toggle from "@/app/Components/Toggle";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-[#00cccc] p-4">
      <nav className="container mx-auto flex justify-between items-center">
        {/* Logo Section */}
        <div className="flex items-center gap-2">
          <Link href="http://localhost:3000/">
            <span className="text-xl font-bold text-gray-800 transition-transform duration-300 hover:scale-110">
              Port<span className="text-white">Folio</span>
            </span>
          </Link>
        </div>

        <Toggle />
        {/* Hamburger Menu for Mobile */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-800 focus:outline-none"
          >
            {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>

        {/* Navigation Links */}

        <ul className="hidden md:flex space-x-4 font-semibold">
          <li>
            <Link
              href="/"
              className="text-gray-800 hover:text-white  hover:underline transition-transform duration-300 hover:scale-110"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/About"
              className="text-gray-800 hover:text-white  hover:underline transition-transform duration-300 hover:scale-110"
            >
              About Me
            </Link>
          </li>
          <li>
            <Link
              href="/Skills"
              className="text-gray-800 hover:text-white hover:underline transition-transform duration-300 hover:scale-110"
            >
              Skills
            </Link>
          </li>
          <li>
            <Link
              href="/Projects"
              className="text-gray-800 hover:text-white transition-transform duration-300 hover:scale-110 hover:underline"
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              href="/Contact"
              className="text-gray-800 hover:text-white transition-transform duration-300 hover:scale-110 hover:underline"
            >
              Contact Me
            </Link>
          </li>
        </ul>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="md:hidden flex flex-col items-center bg-yellow-400 text-gray-800 font-semibold space-y-4 p-4">
          <li>
            <Link href="/" onClick={() => setIsOpen(false)}>
              Home
            </Link>
          </li>
          <li>
            <Link href="/About" onClick={() => setIsOpen(false)}>
              About Me
            </Link>
          </li>
          <li>
            <Link href="/Skills" onClick={() => setIsOpen(false)}>
              Skills
            </Link>
          </li>
          <li>
            <Link href="/Projects" onClick={() => setIsOpen(false)}>
              Projects
            </Link>
          </li>
          <li>
            <Link href="/Contact" onClick={() => setIsOpen(false)}>
              Contact Me
            </Link>
          </li>
        </ul>
      )}
    </div>
  );
}
