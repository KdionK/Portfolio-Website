"use client";
import Image from "next/image";
import styles from "../projets.module.css";

export default Page;

function Page() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Galerie</h1>
      <div className={styles.gallery}>
        <Image src="/galerie/1.jpg" width={1200} height={800} alt="Galerie" />
        <Image src="/galerie/2.jpg" width={1200} height={800} alt="Galerie" />
        <Image src="/galerie/3.jpg" width={1200} height={800} alt="Galerie" />
      </div>
    </div>
  );
}
