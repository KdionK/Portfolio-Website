import { FileText, Instagram, Linkedin } from "lucide-react";
import Image from "next/image";
import React from "react";
import style from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={style.footer}>
      <div id="nom" className={style.footerName}>
        <h1>Karim Dion Khelalfa</h1>
      </div>
      <div id="CV" className={style.footerCv}>
        <a
          href="./CV.pdf"
          target="_blank"
          download={"CV.pdf"}
          className={style.cvLink}
        >
          <FileText />
          <p className={style.cvText}>Mon CV</p>
        </a>
      </div>
      <div id="Social Media" className={style.footerSocial}>
        <ul className={style.socialList}>
          <li>
            <a href="https://www.linkedin.com/in/karimdionk/">
              <Linkedin />
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/pancakedoesart67/">
              <Instagram />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
