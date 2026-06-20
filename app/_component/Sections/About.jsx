import React from "react";
import style from "../_css/About.module.css";
import Image from "next/image";

const About = () => {
  return (
    <section className={`${style.MainAbout}`}>
      <div className="">
        <h1>À PROPOS DE MOI</h1>
      </div>
      <div className="">
        <div className={`${style.PhotoDesc}`}>
          <Image
            src={"/Cute-guy.jpg"}
            width={350}
            height={350}
            alt="Photo profesionnel de Karim Dion K."
            style={{
              maxWidth: "100%",
              height: "auto"
            }} />
          <p>
            Une photo de moi, Regardez ces yeux doux et dites-moi que vous ne
            voulez pas m'engager !
          </p>
        </div>
        <div className="">
          <h1>Bonjour!</h1>
          <p>
            Je suis Karim Dion K., <span>créateur de jeux vidéo!</span>
          </p>
          <p>
            Depuis mon enfance, j'ai toujours aimé jouer aux jeux vidéo. Mon
            premier jeu était <i>Super Mario 64</i> sur un émulateur à l'âge de
            4 ans.
          </p>
          <p>
            Aujourd'hui, j'ai joué à de nombreux jeux et créé quelques-uns
            moi-même ! J'utilise principalement <span>Unity</span>, mais pendant
            mon temps libre, j'aime expérimenter avec <span>Godot</span>.
          </p>
          <p>
            Par ailleurs, je suis également artiste numérique. J'utilise
            Photoshop, Aseprite, Clip Studio Paint. J'utilises également Blender
            et Blockbench pour la modélisation 3D.
          </p>

          <div className="">
            <h1>Mes compétences</h1>
            <div className={`${style.CompetencesList}`}>
              <div>
                <h2>Logiciels</h2>
                <ul className={`${style.LogicielList}`}>
                  <li className="col-span-4">Unity</li>
                  <li className="col-span-4">Blender</li>
                  <li className="col-span-4">Godot</li>
                  <li className="col-span-3">Adobe Photoshop</li>
                  <li className="col-span-3">Adobe Audition</li>
                  <li className="col-span-3">Adobe Premiere Pro</li>
                  <li className="col-span-3">Adobe Illustrator</li>
                </ul>
              </div>
              <div>
                <h2>Langages</h2>
                <ul>
                  <li className="col-span-6">C++</li>
                  <li className="col-span-6">C#</li>
                </ul>
              </div>
              <div>
                <h2>Frameworks</h2>
                <ul>
                  <li className="col-span-6">React</li>
                  <li className="col-span-6">NextJS</li>
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
