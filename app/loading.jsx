"use client";
import React from "react";
import style from "./loading.module.css";

const loading = () => {
  return (
    // from https://codepen.io/kucukharf/pen/pvzeZJr
    <div>
      <div className={style.boxes}>
        <div className={style.box}>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div className={style.box}>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div className={style.box}>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div className={style.box}>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default loading;
