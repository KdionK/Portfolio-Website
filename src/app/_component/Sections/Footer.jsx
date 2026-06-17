import { FileText, Instagram, Linkedin } from "lucide-react";
import React from "react";
import style from "../_css/Footer.module.css";

const Footer = () => {
  return (
    <footer className="border-t-2 border-orange-300 pb-4">
      <div id="nom" className="">
        <h1>Karim Dion Khelalfa</h1>
      </div>
      <div id="Social Media" className="">
        <ul className={style.LinkFlex}>
          <li>
            <a href="https://www.linkedin.com/in/karimdionk/">
              <Linkedin />
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/Karimdoesart67/">
              <Instagram />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
