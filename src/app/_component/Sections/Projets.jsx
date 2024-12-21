import React from "react";
import Image from "next/image";
import SingleProjet from "../SingleProjet";
import style from "./Projets.module.css";

const Projets = () => {
  return (
    <section id="projets">
      <h1 className={style.projetsTitle}>MES PROJETS</h1>
      <div className={style.projetsListe + " flex flex-col"}>
        <SingleProjet
          imgLink="/YokaiRush.png"
          imgAlt="Yokai Rush"
          title="Yokai Rush"
          leftOrRight="right"
          className={"self-end w-2/5"}
        >
          Yokai Rush a été mon projet de Jeu 5, fait en <span>Unity</span>. Ce
          jeu fut une expérience incroyablement intéressante a développer avec
          mes deux très bons amis, Pier-Charles Martin et Maxime Constantineau.
          Notre objectif était de créer un jeu où le joueur se sentait puissant
          dans un environnement intéressant. Dans mon humble opinion, nous avons
          créer quelque chose d'incroyable pour une première expérience avec
          Unity 3D. Yokai Rush est un jeu à propos d'un homme chèvre qui tente
          de détruire des géants tout an créant un chemin derrière lui.
          <br /> Les défis de ce projet fut: &nbsp;
          <ul>
            <li style={{ listStyle: "disc", marginLeft: "1rem" }}>
              générer une île entièrement procéduralement
            </li>
            <li style={{ listStyle: "disc", marginLeft: "1rem" }}>
              créer une machine à état pour les ennemis
            </li>
            <li style={{ listStyle: "disc", marginLeft: "1rem" }}>
              créer une machine à état pour les blocs de l'environnement
            </li>
            <li style={{ listStyle: "disc", marginLeft: "1rem" }}>
              créer un personnage qui se contrôle bien en 3D
            </li>
            <li style={{ listStyle: "disc", marginLeft: "1rem" }}>
              intégrer beaucoup de modèles et d'éléments en équipe
            </li>
            <li style={{ listStyle: "disc", marginLeft: "1rem" }}>
              intégrer beaucoup de modèles et d'éléments en équipe
            </li>
          </ul>
        </SingleProjet>
        <SingleProjet
          imgLink="/Balade.jpg"
          imgAlt="Balade Macabre"
          title={`Balade \n Macabre`}
          leftOrRight="left"
          className={" w-2/5"}
        >
          Balade Macabre fut ma première expérimentation de création de jeu en
          équipe. Ce fantastique jeu fait en <span>Unity</span> et fut créé en
          collaboration avec mon brave et talentueux ami, Hans Whissel et notre
          incroyable artiste, Gabrielle Elemond Beaudin. l'objectif du cours
          était de faire un jeu de plateforme et d'y mixer des concepts de
          roguelike. <br /> Les défis de ce projet fut: &nbsp;
          <ul>
            <li style={{ listStyle: "disc", marginLeft: "1rem" }}>
              générer une carte de manière semi-procédurale
            </li>
            <li style={{ listStyle: "disc", marginLeft: "1rem" }}>
              créer un ennemi capable de suivre un chemin préétabli
            </li>
            <li style={{ listStyle: "disc", marginLeft: "1rem" }}>
              créer un ennemi avec une intelligence artificielle avec A*
              pathfinding
            </li>
            <li style={{ listStyle: "disc", marginLeft: "1rem" }}>
              créer un personnage qui se contrôle bien en 2D
            </li>
            <li style={{ listStyle: "disc", marginLeft: "1rem" }}>
              intégrer un magasin dans le jeu avec lequel intéragir
            </li>
          </ul>
        </SingleProjet>
        <SingleProjet
          imgLink="/nowhere.png"
          imgAlt="A night at nowhere station"
          title="A night at nowhere station"
          leftOrRight="right"
          className={"self-end w-2/5"}
        >
          Ce projet fait en <span>Unity</span> a été mon premier essai avec la
          réalité virtuelle. J'ai eu plusieurs idées avant d'arriver à cette
          itération d'une station de train dans le désert. Au départ, mon idée
          était de recréer une scène du jeu Zenless Zone Zero, mais après avoir
          fini la station de train, je me suis dit que c'était peut-être plus
          intéressant de le placer dans un endroit moins conventionnel. Ce
          projet est l'un dont je suis le plus fier parce que je trouve vraiment
          avoir réussi parfaitement l'ambiance du jeu. <br />
          Les défis de ce projet fut: &nbsp;
          <ul>
            <li style={{ listStyle: "disc", marginLeft: "1rem" }}>
              Créer des systèmes de particules intéréssants
            </li>
            <li style={{ listStyle: "disc", marginLeft: "1rem" }}>
              Créer des Shader Graphs pour les particules et le sable
            </li>
            <li style={{ listStyle: "disc", marginLeft: "1rem" }}>
              manipuler un terrain en 3D
            </li>
            <li style={{ listStyle: "disc", marginLeft: "1rem" }}>
              Créer un jeu en 3D en réalité virtuelle
            </li>
            <li style={{ listStyle: "disc", marginLeft: "1rem" }}>
              Modéliser, texturer et organiser une scène complète en 3D
            </li>
          </ul>
        </SingleProjet>
        <SingleProjet
          imgLink="/Underwater.png"
          imgAlt="Underwater Kingdom"
          title="Underwater Kingdom"
          leftOrRight="left"
          className={" w-2/5"}
        >
          Underwater Kingdom est un projet en réalité virtuelle développé en
          <span>Unity</span> qui a été fait en collaboration avec mes deux
          incroyables amis, Pier-Charles Martin et Luka Munger. Ensemble, nous
          voulions créer une expérience d'exploration sous-marine dans un
          chateau abandonné. <br />
          Les défis de ce projet fut:
          <ul>
            <li style={{ listStyle: "disc", marginLeft: "1rem" }}>
              Utiliser du Post-Processing pour rendre le jeu plus réaliste comme
              étant sous-marin
            </li>
            <li style={{ listStyle: "disc", marginLeft: "1rem" }}>
              programmer des comportements d'objets en réalité virtuelle
            </li>
            <li style={{ listStyle: "disc", marginLeft: "1rem" }}>
              Utiliser des shaders pour rendre le jeu plus interactif
            </li>
            <li style={{ listStyle: "disc", marginLeft: "1rem" }}>
              Modéliser, texturer et organiser une scène complète en 3D
            </li>
            <li style={{ listStyle: "disc", marginLeft: "1rem" }}>
              Intégrer un environnement sous-marin
            </li>
          </ul>
        </SingleProjet>
        <SingleProjet
          imgLink="/Ruelle.jpg"
          imgAlt="3D art"
          title="galerie d'art"
          leftOrRight="right"
          className={"self-end w-2/5"}
        >
          Une petite galerie d'art de ce que j'ai fait que ce sois au travers de
          mes études ou Dans mon temps libre. <br />
          Cliquez ici pour voir l'ensemble de mes projets artistiques:
          <a href="https://www.instagram.com/pancakedoesart67/">
            mon Instagram
          </a>
        </SingleProjet>
      </div>
    </section>
  );
};

export default Projets;
