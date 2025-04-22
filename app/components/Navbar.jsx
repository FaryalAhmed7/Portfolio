"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import NavLink from "./NavLink";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import MenuOverlay from "./MenuOverlay";

const navlinks = [
  { title: "About", path: "#about" },
  { title: "Projects", path: "#projects" },
  { title: "Contact", path: "#contact" }
];

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#121212] border-b border-[#33353F] h-16 flex items-center">
      <div className="container mx-auto flex items-center justify-between px-6">
        
      <Link href="/">
  <Image 
    src="/images/logo.png"
    alt="Faryal Ahmed Logo"
    width={120} // Further reduced width
    height={45} // Further reduced height
    className="w-[120px] h-[45px] md:w-[140px] md:h-[55px] object-contain  "
  />
</Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8">
          {navlinks.map((link, index) => (
            <NavLink key={index} href={link.path} title={link.title} />
          ))}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setNavbarOpen(!navbarOpen)} className="text-white">
            {navbarOpen ? <XMarkIcon className="h-6 w-6" /> : <Bars3Icon className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {navbarOpen && <MenuOverlay links={navlinks} />}
    </nav>
  );
};

export default Navbar;
