import styles from "./styles.module.scss";
import { FC } from "react";
import { useAppSelector } from "../../../../store/hooks";
import {
  dateDayFormatted,
  dateMonthFormatted,
} from "../../../../helpers/date-MMMM.helper";
import { priceForType } from "../../../../helpers/priceForType.helper";
import { resultSum } from "../../../../helpers/resultSum.helper";

const ResultReserv: FC = () => {
  const dates = useAppSelector((state) => state.rangePickerReducer.dates);
  const numbers = useAppSelector((state) => state.rangePickerReducer.numbers);
  const numbersInfo = useAppSelector(
    (state) => state.rangePickerReducer.numbersInfo,
  );

  return (
    <div className={styles.reservationResult}>
      <h3 className={styles.head}>
        Ваше <br /> бронирование
      </h3>
      <div className={styles.line}></div>
      <div className={styles.dates}>
        <h3
          className={styles.monthDays}
        >{`${dateMonthFormatted(dates[0])} - ${dateMonthFormatted(dates[1])}`}</h3>
        <div className={styles.weekDays}>
          <h4 className={styles.weekDay}>{dateDayFormatted(dates[0])}</h4>
          <h4 className={styles.weekDay}>{dateDayFormatted(dates[1])}</h4>
        </div>
      </div>
      <div className={styles.line}></div>
      {numbers.map((number: any) => {
        return (
          number.type !== "none" && (
            <div className={styles.info}>
              <div className={styles.typeAndMainSum}>
                <h3 className={styles.type}>{number.type}</h3>
                <p className={styles.mainSum}>
                  {priceForType(number.type)} сум
                </p>
              </div>
              {new Array(number.mattress)
                .fill(numbersInfo.mattress)
                .map((extra) => {
                  return (
                    <div className={styles.extraSums}>
                      <h4 className={styles.extra}>
                        Дополнительные <br /> матрасы
                      </h4>
                      <p className={styles.extraSum}>{extra} сум</p>
                    </div>
                  );
                })}
              {new Array(number.nutrition)
                .fill(numbersInfo.nutrition)
                .map((extra) => {
                  return (
                    <div className={styles.extraSums}>
                      <h4 className={styles.extra}>
                        Дополнительное <br /> питание
                      </h4>
                      <p className={styles.extraSum}>{extra} сум</p>
                    </div>
                  );
                })}
            </div>
          )
        );
      })}
      <div className={styles.line}></div>
      <h2 className={styles.resultSum}>
        {resultSum(numbers, numbersInfo)} сум
      </h2>
      <button className={styles.continueBtn}>Продолжить</button>
    </div>
  );
};
export default ResultReserv;
