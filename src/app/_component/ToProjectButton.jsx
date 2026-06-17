"use client";
import Image from "next/image";
import React from "react";
export default function ToProjectButton({ href, title, image }) {
  return (
    <div>
      <link rel="stylesheet" href={`projet/${href}`}>
        <Image src={`./${image}`} width={50} height={50} alt={`To ${title}`} />
      </link>
    </div>
  );
}
