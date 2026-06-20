import Image from "next/image";
import styles from "../projets.module.css";

const BaladeMacabre = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Balade Macabre</h1>
      <p className={styles.description}>
        Balade Macabre fut ma première expérimentation de création de jeu en
        équipe. Ce jeu fait en Unity en collaboration avec Hans Whissel et
        Gabrielle Elemond Beaudin. L'objectif du cours était de faire un jeu de
        plateforme et d'y mixer des concepts de roguelike.
      </p>
      <Image
        src="/Balade.jpg"
        alt="Image du jeu Balade Macabre"
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

export default BaladeMacabre;
