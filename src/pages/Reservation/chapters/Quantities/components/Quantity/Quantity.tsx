import styles from "./styles.module.scss";
import { FC } from "react";

const Quantity: FC<any> = ({ img, title, widthImg, widthTitle }) => {
  return (
    <div className={styles.quantity}>
      <div className={styles.background}></div>
      <img
        alt="quantity"
        className={styles.quantityImg}
        src={img}
        style={{ width: widthImg }}
      />
      <h4 className={styles.title} style={{ width: widthTitle }}>
        {title}
      </h4>
    </div>
  );
};

export default Quantity;
