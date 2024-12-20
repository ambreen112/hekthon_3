'use client'
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Navigation() {
  // State to manage menu toggle
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    console.log("Menu toggled:", isMenuOpen); // Debugging log
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      {/* Top Navigation Section */}
      <nav className="bg-black w-full h-[46px] flex justify-between items-center">
        {/* Left Navigation */}
        <div className="flex items-center justify-between">
          <div className="ml-7">
            <button className="flex items-center w-[145px] h-[44px] text-white text-sm font-bold font-Montserrat">
              <Image className="align-middle" src="/Vector (6).png" alt="phone" width={16} height={16} />
              (225)555-0118
            </button>
          </div>
          <div className="mr-9">
            <button className="flex items-center w-[260px] h-[44px] text-white text-sm font-bold ml-8 font-Montserrat">
              <Image className="text-white" src="/Vector (7).png" alt="email" width={16} height={12} />
              michelle.rivera@example.com
            </button>
          </div>
        </div>

        {/* Center Text */}
        <div className="w-full h-24 text-white text-sm font-bold flex justify-center">
          <p className="flex p-9 font-Montserrat">Follow Us and get a chance to win 80% off</p>
        </div>

        {/* Follow Us Section */}
        <div className="w-full h-24 text-white inline-flex items-center justify-center">
          <h6 className="font-Montserrat font-bold text-sm p-3">Follow Us :</h6>
          <div className="inline-flex w-auto h-26 mb-1 items-center space-x-3">
            <Image src="/a.png" alt="a" width={26} height={26} />
            <Image src="/b.png" alt="b" width={26} height={26} />
            <Image src="/c.png" alt="c" width={26} height={26} />
            <Image src="/bird.png" alt="bird" width={26} height={26} />
          </div>
        </div>
      </nav>

      {/* Main Navigation */}
      <div className="w-full h-[58px] flex items-center bg-white">
        <p className="font-Montserrat font-bold text-2xl text-black ml-8">Bandage</p>

        {/* Mobile Menu Hamburger */}
        <div className="flex items-center ml-auto mr-6 lg:hidden">
          <button 
            onClick={toggleMenu} 
            className="text-black" 
            aria-label="Toggle navigation menu"
          >
            <Image src="/burger.png" alt="menu" width={30} height={30} />
          </button>
        </div>

        {/* Main Menu (for large screens) */}
        <nav className="hidden lg:flex items-center justify-between w-full ml-8">
          <div className="flex items-center space-x-6">
            <Link href="#" className="text-black text-sm font-Montserrat">Home</Link>
            <Link href="/shop" className="text-black text-sm font-Montserrat flex items-center">
              Shop
              <Image src="/arrow.png" alt="arrow" width={5.71} height={28} />
            </Link>
            <Link href="/about" className="text-black text-sm font-Montserrat">About</Link>
            <Link href="/blog" className="text-black text-sm font-Montserrat">Blog</Link>
            <Link href="/contact" className="text-black text-sm font-Montserrat">Contact</Link>
            <Link href="/team" className="text-black text-sm font-Montserrat">Pages</Link>
          </div>

          <div className="flex items-center space-x-8">
            <nav className="flex items-center">
              <a href="#" className="flex items-center text-white">
                <Image src="/but.png" alt="button" width={12} height={12} />
                <p className="text-custom-blue-0 font-bold text-sm font-Montserrat ml-2">Login/Register</p>
              </a>
            </nav>

            {/* Icons */}
            <div className="flex items-center space-x-4">
              <Image src="/li-1.png" alt="lens" width={46} height={46} />
              <Image src="/li-2.png" alt="lens" width={46} height={46} />
              <Image src="/li-3.png" alt="lens" width={46} height={46} />
            </div>
          </div>
        </nav>
      </div>

      {/* Mobile Menu (toggleable) */}
      <div className={`lg:hidden ${isMenuOpen ? "block" : "hidden"} bg-white p-4`}>
        <nav className="flex flex-col space-y-4">
          <Link href="#" className="text-black text-sm font-Montserrat">Home</Link>
          <Link href="/shop" className="text-black text-sm font-Montserrat">Shop</Link>
          <Link href="/about" className="text-black text-sm font-Montserrat">About</Link>
          <Link href="/blog" className="text-black text-sm font-Montserrat">Blog</Link>
          <Link href="/contact" className="text-black text-sm font-Montserrat">Contact</Link>
          <Link href="/team" className="text-black text-sm font-Montserrat">Pages</Link>
        </nav>
      </div>
    </>
  );
}
