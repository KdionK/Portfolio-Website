import React from "react";
import style from "./About.module.css";
import Image from "next/image";
import { FileText } from "lucide-react";

const About = () => {
  return (
    <section className={style.aboutSection + " py-12"}>
      <div className={style.aboutTitle}>
        <h1>À PROPOS DE MOI</h1>
      </div>

      <div className={style.aboutContent}>
        <div className={style.aboutImage}>
          <Image
            src={"/Cute-guy.jpg"}
            width={350}
            height={350}
            alt="Photo profesionnel de Karim Dion K."
          />
          <p className="text-xs">
            Une photo de moi, Regardez ces yeux doux et dites-moi que vous ne
            voulez pas m'engager !
          </p>
          <a
            href="./CV.pdf"
            target="_blank"
            download={"CV.pdf"}
            className={
              " text-center font-bold text-lg self-center pl-0 flex flex-col items-center mt-4"
            }
          >
            <FileText />
            <p className={style.aboutCV}>Mon CV</p>
          </a>
        </div>
        <div className={style.aboutDesc}>
          <h1>Bonjour!</h1>
          <p>
            Je suis Karim Dion K., <span>créateur de jeux vidéo!</span>
          </p>
          <p>
            Depuis mon enfance, j'ai toujours aimé jouer aux jeux vidéo. Mon
            premier jeu était <i>Super Mario 64</i> sur un émulateur que mon
            père avait installé sur l'ordinateur familial.
          </p>
          <p>
            Aujourd'hui, j'ai joué à de nombreux jeux et créé quelques-uns
            moi-même ! J'utilise principalement <span>Unity</span>, mais pendant
            mon temps libre, j'aime expérimenter avec <span>Godot</span> et
            d'autres langages de programmation, comme le Python. J'ai aussi
            l'intention d'apprendre à utiliser Unreal Engine dans un avenir
            proche.
          </p>
          <p>
            Par ailleurs, je suis également artiste numérique. J'utilise
            Photoshop pour créer des illustrations, Aseprite pour du pixel art,
            et j'apprécie beaucoup Blender et Blockbench pour la modélisation
            3D.
          </p>
          <p>
            Académiquement, j'ai fait une année en informatique, mais j'ai
            rapidement compris qu'autant que j'adore la réseautique et la
            programmation, je voulais également faire de l'art. C'est ainsi que
            je me suis finalement orienté vers
            <span> l'intégration multimédia</span>.
          </p>
          <div className={style.aboutAbilities}>
            <h1>Mes compétences</h1>
            <div className="flex flex-row justify-evenly items-center w-full ">
              <div>
                <h2>Logiciels</h2>
                <ul>
                  <li className={style.aboutFavouriteLog}>Unity</li>
                  <li>Photoshop</li>
                  <li>Adobe XD</li>
                  <li className={style.aboutFavouriteLog}>Blender</li>
                  <li className={style.aboutFavouriteLog}>BlockBench</li>
                  <li>Audition</li>
                  <li className={style.aboutFavouriteLog}>Godot</li>
                  <li>Premiere</li>
                  <li>Illustrator</li>
                </ul>
              </div>
              <div>
                <h2>Langages</h2>
                <ul>
                  <li className={style.aboutFavouriteLog}>Python</li>
                  <li>C++</li>
                  <li>HTML</li>
                  <li className={style.aboutFavouriteLog}>C#</li>
                  <li>CSS</li>
                  <li>JavaScript</li>
                  <li>PHP</li>
                </ul>
              </div>
              <div>
                <h2>Frameworks</h2>
                <ul>
                  <li>React</li>
                  <li>NextJS</li>
                  <li>Laravel</li>
                  <li>Pygame</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
