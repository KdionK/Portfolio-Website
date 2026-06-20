import Image from "next/image";
import styles from "../projets.module.css";

const YokaiRush = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Yokai Rush</h1>
      <Image
        src="/images/yokai_rush.png"
        alt="Yokai Rush"
        width={800}
        height={450}
        className={styles.image}
        style={{
          maxWidth: "100%",
          height: "auto"
        }} />
    </div>
  );
};

export default YokaiRush;
