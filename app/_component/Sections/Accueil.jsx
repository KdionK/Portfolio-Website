import Image from "next/image";
import React from "react";
import styles from "../_css/Accueil.module.css";

const Accueil = () => {
  return (
    <section className={`${styles.AccueilSection} text-center p-8}`}>
      <div className={styles.AccueilMain}>
        <Image
          src="/KarimCrown.svg"
          alt="Karim Crown Logo"
          width={350}
          height={350}
          className=""
          style={{
            maxWidth: "100%",
            height: "auto"
          }} />
        <h1 className="">Welcome to My Portfolio</h1>
        <p className="">
          Explorez mes projets, mes compétences et mon expérience !
        </p>
      </div>
      {/* Mobile Art a améliorer */}
      {/* <Image
        src="/MobileArt.jpg"
        alt="Mobile Art"
        width={341}
        height={415}
        className="pt-16"
      /> */}
    </section>
  );
};
export default Accueil;
