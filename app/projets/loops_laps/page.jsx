import Image from "next/image";
import styles from "../projets.module.css";

export default function Page() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Loops & Laps</h1>
      <div className={styles.gallery}>
        <Image
          src="/loops_laps/1.jpg"
          width={1200}
          height={800}
          alt="Loops & Laps"
          style={{
            maxWidth: "100%",
            height: "auto"
          }} />
        <Image
          src="/loops_laps/2.jpg"
          width={1200}
          height={800}
          alt="Loops & Laps"
          style={{
            maxWidth: "100%",
            height: "auto"
          }} />
        <Image
          src="/loops_laps/3.jpg"
          width={1200}
          height={800}
          alt="Loops & Laps"
          style={{
            maxWidth: "100%",
            height: "auto"
          }} />
      </div>
    </div>
  );
}
