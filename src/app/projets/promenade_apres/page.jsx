import Image from "next/image";
import styles from "../projets.module.css";

export default function Page() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>A night at nowhere station</h1>
      <div className={styles.gallery}>
        <Image
          src="/nowherestation/1.jpg"
          width={1200}
          height={800}
          alt="Now Here Station"
        />
        <Image
          src="/nowherestation/2.jpg"
          width={1200}
          height={800}
          alt="Now Here Station"
        />
        <Image
          src="/nowherestation/3.jpg"
          width={1200}
          height={800}
          alt="Now Here Station"
        />
      </div>
    </div>
  );
}
