"use client";
import React, { useRef } from "react";
import style from "./Contact.module.css";
import Image from "next/image";
import Link from "next/link";
import { mailingAction } from "@/app/_actions/mailingAction";
import { Instagram, Linkedin } from "lucide-react";

const Contact = () => {
  const formRef = useRef(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    e.stopPropagation();
    console.log(formRef.current);
    await mailingAction(formRef.current);
  };

  return (
    <section className={style.contactSection}>
      <div className={style.contactMe}>
        <form ref={formRef} onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">Nom:</label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Entrez votre nom"
            />
          </div>
          <div>
            <label htmlFor="email">Email:</label>

            <input
              type="email"
              name="email"
              id="email"
              placeholder="Entrez votre email"
            />
          </div>
          <div>
            <label htmlFor="message">Message:</label>
            <textarea
              name="message"
              id="message"
              placeholder="Entrez votre message"
            ></textarea>
          </div>
          <button
            className="golden-text text-center font-bold text-lg self-center pl-0"
            type="submit"
          >
            Envoyer
          </button>
        </form>
        <div className={style.contactTitle + " w-1/2 h-full"}>
          <h1>
            CONTACTEZ <span className={style.moi}>MOI</span>
          </h1>
        </div>
      </div>
      <div className={style.contactInfo}>
        <div className={style.contactItem}>
          <h4> Email:</h4>
          <p>
            <a href="mailto:dionkkarim@gmail">dionkkarim@gmail.com</a>
          </p>
        </div>
        <div className={style.contactItem}>
          <h4>Téléphone:</h4>
          <p>(579) 368-5266</p>
        </div>
        <div className={style.contactItem + " flex flex-row justify-center"}>
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
      </div>
    </section>
  );
};

export default Contact;
