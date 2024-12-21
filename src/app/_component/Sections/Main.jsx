import React from "react";
import style from "./Main.module.css";
import Accueil from "./Accueil";
import About from "./About";
import Contact from "./Contact";
import Projets from "./Projets";
import Footer from "./Footer";

const Main = () => {
  return (
    <div className={style.container}>
      <main className="w-full flex flex-col items-center">
        <Accueil />
        <About />
        <Projets />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Main;
