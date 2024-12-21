import React from "react";
import styles from "./Accueil.module.css";

const Accueil = () => {
  return (
    <section className={styles.mainSection}>
      <div className={styles.centerContent}>
        <img
          src="/KarimCrown.svg" // If in public folder
          alt="Karim Crown Logo"
          className={styles.centerpieceImage}
        />
        <h1 className={styles.title}>Welcome to My Portfolio</h1>
        <p className={styles.subtitle}>
          Explorez mes projets, mes compétences et mon expérience !
        </p>
      </div>
    </section>
  );
};
export default Accueil;
