import React from "react";
import style from "../_component/MobileNav.module.css";
import Image from "next/image";
import Link from "next/link";
import { FileBox, Gamepad, Phone } from "lucide-react";
const MobileNav = () => {
  return (
    <div className={style.floatingNav}>
      <ul className="flex flex-row items-center gap-4">
        <li>
          <Link href="/">
            <Image src="/Couronne.svg" alt="logo" width={50} height={50} />
          </Link>
        </li>
        <li>
          <Link href="/projets">
            <Gamepad width={30} height={30} color="black" />
          </Link>
        </li>
        <li>
          <Link href="/a-propos">
            <Image
              src="/About.svg"
              alt="About-Me"
              width={30}
              height={30}
              color="black"
            />
          </Link>
        </li>
        <li>
          <Link href="/contact">
            <Phone fill="black" width={30} height={30} color="black" />
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default MobileNav;
