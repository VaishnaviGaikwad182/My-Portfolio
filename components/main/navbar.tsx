'use client';
import { useState } from "react";
import Link from "next/link";
import {NAV_LINKS } from "@/constants";


export const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="fixed top-0 w-full z-50 h-[65px] bg-[#03001427] backdrop-blur-xl border-b border-white/10 px-6">
      <div className="w-full h-full max-w-7xl mx-auto flex items-center">

        {/* NAME */}
        <Link
          href="#home"
          className="
          mr-auto
          text-3xl md:text-3xl
          font-semibold tracking-wide
          text-white
          transition-all duration-500
          hover:scale-105
          hover:drop-shadow-[0_0_12px_rgba(168,85,247,0.6)]
        "
        >
          Vaishnavi Gaikwad
        </Link>



        {/* DESKTOP NAV — RIGHT */}
        <div className="hidden md:flex items-center gap-10 ml-auto">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.title}
              href={link.link}
              className="
                relative group capitalize
                text-white/80 font-medium
                transition duration-300
                hover:text-purple-400
              "
            >
              {link.title}

              {/* underline */}
              <span
                className="
                  absolute left-0 -bottom-1
                  h-[2px] w-0
                  bg-purple-400
                  transition-all duration-300
                  group-hover:w-full
                  group-hover:shadow-[0_0_10px_rgba(168,85,247,0.9)]
                "
              />
            </Link>
          ))}
        </div>

        {/* HAMBURGER */}
        <button
          className="md:hidden text-white text-3xl ml-auto"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          ☰
        </button>
      </div>

      {/* MOBILE MENU */}
      {isMobileMenuOpen && (
        <div className="
          absolute top-[65px] left-0 w-full
          bg-[#030014]/90 backdrop-blur-xl
          border-b border-white/10
          md:hidden
        ">
          <div className="flex flex-col items-center py-6 gap-5 text-white/90">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.title}
                href={link.link}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-lg hover:text-purple-400 transition"
              >
                {link.title}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
