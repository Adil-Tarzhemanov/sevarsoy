import styles from "./styles.module.scss";
import { FC } from "react";
import { quantities } from "../../../../constants/reservation/quantities";
import Quantity from "./components/Quantity/Quantity";

const Quantities: FC = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.head}>Бронирование номеров</h1>
      <div className={styles.quantities}>
        {quantities.map((quantity: any) => (
          <Quantity {...quantity} />
        ))}
      </div>
    </div>
  );
};
export default Quantities;
