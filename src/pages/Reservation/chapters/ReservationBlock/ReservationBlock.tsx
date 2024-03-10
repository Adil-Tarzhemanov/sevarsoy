import styles from "./styles.module.scss";
import { FC } from "react";
import ButtonDateRangePicker from "../../../../components/ButtonsDateRangePicker/ButtonsDateRangePicker";
import ButtonNumberSelection from "../../../../components/ButtonNumberSelection/ButtonNumberSelection";
import NumberReservation from "./components/NumberReservation/NumberReservation";
import { reservNumbers } from "../../../../constants/reservation/reservNumbers";

const ReservationBlock: FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.rangeDatePicker}>
        <ButtonDateRangePicker />
        <ButtonNumberSelection />
      </div>
      <div className={styles.content}>
        <div className={styles.numbers}>
          {reservNumbers.map((number) => (
            <NumberReservation />
          ))}
        </div>
        <div className={styles.reservationResult}>
          <h3 className={styles.head}>
            Ваше <br /> бронирование
          </h3>
          <div className={styles.line}></div>
          <div className={styles.dates}>
            <h3 className={styles.monthDays}>4 марта - 5 марта</h3>
            <div className={styles.weekDays}>
              <h4 className={styles.weekDay}>понедельник</h4>
              <h4 className={styles.weekDay}>вторник</h4>
            </div>
          </div>
          <div className={styles.line}></div>
          <div className={styles.info}>
            <div className={styles.typeAndExtra}>
              <h3 className={styles.type}>STANDART</h3>
              <h4 className={styles.extra}>
                Дополнительное <br /> питание
              </h4>
            </div>
            <div className={styles.sums}>
              <p className={styles.mainSum}>2 300 000 сум</p>
              <p className={styles.extraSum}>150 000 сум</p>
            </div>
          </div>
          <div className={styles.line}></div>
          <h2 className={styles.resultSum}>2 450 000 сум</h2>
          <button className={styles.continueBtn}>Продолжить</button>
        </div>
      </div>
    </div>
  );
};

export default ReservationBlock;
