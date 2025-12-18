"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Branded Experiences", href: "/brand-experience" },
    { name: "Case Studies", href: "/case-studies" },
    { name: "Contact us", href: "/contact" },
  ];

  return (
    <nav className={`w-full py-4 fixed top-0 left-0 z-9999 transition-all duration-300 ${scrolled ? "bg-[#031347] shadow-lg" : "bg-linear-to-b from-[#0e1630] to-[#031347]"}`}>
      <div className="2xl:max-w-[1440px] w-[90%] lg:w-[85%] mx-auto flex items-center justify-between"> 

        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/home/spawn-logo.png"
            width={2000}
            height={2000}
            alt="logo"
            className="md:w-[100px] w-[70px]"
          />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden xl:flex bg-white/5 backdrop-blur-md px-6 py-3 rounded-lg border border-white/10 space-x-10  font-hel text-[16px]">

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
        <Link href="/contact">
        <button className="hidden md:block bg-[#BBFC00] text-[#031347] font-bold px-6 py-2 rounded-[5px] font-hel border border-transparent hover:bg-transparent hover:border-white hover:text-white">
          Lets Connect
        </button>
        </Link>
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
                onClick={() => setOpen(false)}
                className={
                  pathname === link.href
                    ? "block text-[#BBFC00] font-normal transition"
                    : "block text-white hover:text-[#BBFC00] transition"
                }
              >
                {link.name}
              </Link>
            ))}
            <Link href="/contact" onClick={() => setOpen(false)}>
              <button className="w-full bg-[#BBFC00] text-[#031347] font-bold px-6 py-2 rounded-[5px] font-hel border border-transparent hover:bg-transparent hover:border-white hover:text-white">
                Let’s Connect
              </button>
            </Link>
          </div>
        )}

      </div>
    </nav >
  );
}
