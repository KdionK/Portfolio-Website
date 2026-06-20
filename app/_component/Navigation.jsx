"use client";

import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import style from "./_css/Navigation.module.css";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav
      className={`${style.navigation} shadow-md p-4 flex items-center justify-between`}
    >
      <Link href="/" className="flex items-center gap-2">
        <Image
          className="text-black"
          src="/Couronne.svg"
          width={75}
          height={75}
          alt="Logo"
          style={{
            maxWidth: "100%",
            height: "auto"
          }} />
      </Link>
      {/* Hamburger */}
      <button
        onClick={() => setOpen(!open)}
        className={
          `lg:hidden p-2 rounded ` + style.hamburger + ` focus:outline-none `
        }
      >
        ☰
      </button>
      {/* Links */}
      <div
        className={`${open ? "translate-y-0" : "-translate-y-full"} 
              ${
                style.links
              }  md:static md:flex-row md:gap-6 md:w-auto md:translate-y-0 lg:transform-none`}
      >
        <Link href="/" className="flex items-center gap-2 pb-4 lg:hidden">
          <button onClick={() => setOpen(!open)}>
            <Image
              className="text-black"
              src="/Couronne.svg"
              width={75}
              height={75}
              alt="Logo"
              style={{
                maxWidth: "100%",
                height: "auto"
              }} />
          </button>
        </Link>

        <Link href="/about" className="block p-4 md:p-0 hover:text-blue-500">
          <button onClick={() => setOpen(!open)}>
            <h2>à propos</h2>
          </button>
        </Link>
        <Link href="/projets" className="block p-4 md:p-0 hover:text-blue-500">
          <button onClick={() => setOpen(!open)}>
            <h2>Projets</h2>
          </button>
        </Link>
        <Link href="/contact" className="block p-4 md:p-0 hover:text-blue-500">
          <button onClick={() => setOpen(!open)}>
            <h2>Contact</h2>
          </button>
        </Link>
        <button
          onClick={() => setOpen(!open)}
          className={` lg:hidden block p-4 md:p-0 hover:text-blue-500`}
        >
          ↑
        </button>
      </div>
    </nav>
  );
}
