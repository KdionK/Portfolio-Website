"use client";
import React, { useState } from "react";
import style from "./Projets.module.css";

const projets = () => {
  const descriptions = [
    `Ce projet fait en Unity a été mon premier essai avec la réalité virtuelle. J'ai eu plusieurs idées avant d'arriver à cette itération d'une station de train dans le désert. Au départ, mon idée était de recréer une scène du jeu Zenless Zone Zero, mais après avoir fini la station de train, je me suis dit que c'était peut-être plus intéressant de le placer dans un endroit moins conventionnel. Ce projet est l'un dont je suis le plus fier parce que je trouve vraiment avoir réussi parfaitement l'ambiance du jeu.
    Les défis de ce projet fut: \n`,
    `Yokai Rush a été mon projet de Jeu 5, fait en Unity. Ce jeu fut une expérience incroyablement intéressante a développer avec mes deux très bons amis, Pier-Charles Martin et Maxime Constantineau. Notre objectif était de créer un jeu où le joueur se sentait puissant dans un environnement intéressant. Dans mon humble opinion, nous avons créer quelque chose d'incroyable pour une première expérience avec Unity 3D. Yokai Rush est un jeu à propos d'un homme chèvre qui tente de détruire des géants tout an créant un chemin derrière lui.
    Les défis de ce projet fut: \n`,
    `Balade Macabre fut ma première expérimentation de création de jeu en équipe. Ce fantastique jeu fait en Unity et fut créé en collaboration avec mon brave et talentueux ami, Hans Whissel et notre incroyable artiste, Gabrielle Elemond Beaudin. l'objectif du cours était de faire un jeu de plateforme et d'y mixer des concepts de roguelike.
    Les défis de ce projet fut:  \n`,
    `\n`,
  ];
  const defis = [
    [
      "Créer des systèmes de particules intéréssants.",
      "Créer des Shader Graphs pour les particules et le sable.",
      "Manipuler un terrain en 3D.",
      "Créer un jeu en 3D en réalité virtuelle.",
      "Modéliser, texturer et organiser une scène complète en 3D.",
    ],
    [
      "Générer une île entièrement procéduralement",
      "développer une machine à état pour les ennemis",
      "Créer une machine à état pour les blocs de l'environnement",
      "Créer un personnage qui se contrôle bien en 3D",
      "Intégrer beaucoup de modèles et d'éléments en équipe",
    ],
    [
      "générer une carte de manière semi-procédurale",
      "créer un ennemi capable de suivre un chemin préétabli",
      "créer un ennemi avec une intelligence artificielle avec A* pathfinding",
      "créer un personnage qui se contrôle bien en 2D",
      "intégrer un magasin dans le jeu avec lequel intéragir",
    ],
  ];

  return (
    <div className={style.projetsContainer}>
      <h1 className={style.projetsTitle}>Mes coups de coeur</h1>
      <div className={style.plusieursprojets}></div>
    </div>
  );
};

export default projets;
