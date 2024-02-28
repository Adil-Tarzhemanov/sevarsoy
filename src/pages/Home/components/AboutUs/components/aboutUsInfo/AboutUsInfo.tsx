import styles from "./styles.module.scss";
import { FC } from "react";

const AboutUsInfo: FC<any> = ({ alt, src, title, text }) => {
  return (
    <div className={styles.info}>
      <img src={src} alt={alt} className={styles.img} />
      <div className={styles.titleAndText}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.text}>{text}</p>
      </div>
    </div>
  );
};
export default AboutUsInfo;
