"use client";
import React from "react";
import style from "./loading.module.css";

const loading = () => {
  return (
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
    // from https://codepen.io/kucukharf/pen/pvzeZJr
  );
};

export default loading;
