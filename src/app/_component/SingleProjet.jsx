"use client";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import style from "./SingleProjet.module.css";

const SingleProjet = ({
  imgLink,
  imgAlt,
  title,
  children,
  leftOrRight = "left",
  className,
}) => {
  const divRef = useRef(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    if (divRef.current) {
      const { width, height } = divRef.current.getBoundingClientRect();
      setDimensions({ width, height });

      console.log({ width, height });
    }
  }, []); // Runs after initial render
  return (
    <div className={className}>
      <div
        className={
          style.project +
          " " +
          (leftOrRight === "left" ? style.left : style.right)
        }
      >
        <h1 className={style.projectTitle}>{title}</h1>
        <Image width={400} height={400} src={imgLink} alt={imgAlt} />
      </div>
      <div
        ref={divRef}
        className={
          style.projectDescription +
          " " +
          (leftOrRight === "left" ? style.descLeft : style.descRight)
        }
        style={{ top: dimensions.height / 4 }}
      >
        {children}
      </div>
    </div>
  );
};

export default SingleProjet;
