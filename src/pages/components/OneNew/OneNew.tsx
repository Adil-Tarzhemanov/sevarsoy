import styles from "./styles.module.scss";
import { FC } from "react";
import classNames from "classnames";

const OneNew: FC<any> = ({ img, title, date, small }) => {
  return (
    <div
      className={classNames(styles.container, {
        [styles.small]: small,
      })}
    >
      <img src={img} alt="news" className={styles.background} />
      <div className={styles.content}>
        <h3 className={classNames(styles.head, styles.smallHead)}>Новости</h3>
        <h3 className={classNames(styles.title, styles.sallTitle)}>{title}</h3>
        <h4 className={classNames(styles.date, styles.smallDate)}>{date}</h4>
      </div>
    </div>
  );
};

export default OneNew;
