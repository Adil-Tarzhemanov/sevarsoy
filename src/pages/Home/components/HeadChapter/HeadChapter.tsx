import styles from "./styles.module.scss";
import { FC } from "react";

const HeadChapter: FC<any> = ({ title }) => {
  return (
    <div className={styles.container}>
      <div className={styles.line}></div>
      <h2 className={styles.numbersTitle}>{title}</h2>
    </div>
  );
};
export default HeadChapter;
