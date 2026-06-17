"use client";

import Image from "next/image";
import styles from "../projets.module.css";

export default function SaintesOfSevers() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Saintes Of Severs</h1>
      <Image
        src="/images/saints_of_sewers.jpg"
        alt="Saints Of Severs"
        width={800}
        height={400}
      />
    </div>
  );
}
