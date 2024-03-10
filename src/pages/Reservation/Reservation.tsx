import styles from "./styles.module.scss";
import { FC } from "react";
import Quantities from "./chapters/Quantities/Quantities";
import ReservationBlock from "./chapters/ReservationBlock/ReservationBlock";

const Reservation: FC = () => {
  return (
    <div className={styles.container}>
      <Quantities />
      <ReservationBlock />
    </div>
  );
};

export default Reservation;
