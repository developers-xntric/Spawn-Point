"use client";

import Image from "next/image";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Branded Experiences", href: "/branded-experiences" },
    { name: "Case Studies", href: "/case-studies" },
    { name: "Contact us", href: "/contact" },
  ];

  return (
    <nav className="w-full py-4 bg-[#031347]">
      <div className="2xl:max-w-[1740px] w-[95%] md:w-[90%] mx-auto flex items-center justify-between">

        {/* Logo */}
        <div className="flex items-center">
          <Image
            src="/home/spawn-logo.png"
            width={2000}
            height={2000}
            alt="logo"
            className="w-[100px]"
          />
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex bg-white/5 backdrop-blur-md px-6 py-3 rounded-lg border border-white/10 space-x-10  font-hel text-[16px]">

          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={
                pathname === link.href
                  ? "text-[#BBFC00] font-normal  transition" 
                  : "text-white hover:text-[#BBFC00] transition"
              }
            >
              {link.name}
            </Link>
          ))}

        </div>

        {/* Connect Button */}
        <button className="hidden md:block bg-[#BBFC00] text-[#031347] font-bold px-6 py-2 rounded-lg font-hel">
          Lets Connect
        </button>

        {/* Mobile Menu Icon */}
        <button onClick={() => setOpen(!open)} className="md:hidden text-white">
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Mobile Menu */}
        {open && (
          <div className="absolute top-20 left-0 w-full bg-[#070e25] px-6 py-6 space-y-4 md:hidden border-t border-white/10 font-hel">

            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={
                  pathname === link.href
                    ? "block text-[#BBFC00] font-normal transition"
                    : "block text-white hover:text-[#BBFC00] transition"
                }
              >
                {link.name}
              </Link>
            ))}

            <button className="w-full bg-[#BBFC00] text-black font-semibold px-6 py-2 rounded-lg shadow-[0_0_20px_#BBFC00]">
              Let’s Connect
            </button>
          </div>
        )}

      </div>
    </nav>
  );
}
