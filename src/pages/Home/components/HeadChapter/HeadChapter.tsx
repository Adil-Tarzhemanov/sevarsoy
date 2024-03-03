import styles from "./styles.module.scss";
import { FC } from "react";

const HeadChapter: FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.line}></div>
      <h2 className={styles.numbersTitle}>Номера</h2>
    </div>
  );
};
export default HeadChapter;
