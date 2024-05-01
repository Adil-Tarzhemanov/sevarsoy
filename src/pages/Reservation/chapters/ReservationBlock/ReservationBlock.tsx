import styles from "./styles.module.scss";
import { FC } from "react";
import ButtonDateRangePicker from "../../../../components/ButtonsDateRangePicker/ButtonsDateRangePicker";
import ButtonNumberSelection from "../../../../components/ButtonNumberSelection/ButtonNumberSelection";
import NumberReservation from "./components/NumberReservation/NumberReservation";
import ResultReserv from "../ResultReserv/ResultReserv";
import { useAppSelector } from "../../../../store/hooks";
import { useWindowSize } from "../../../../hooks/windowSize";
import MobileResultReserv from "./components/MobileResultReserv/MobileResultReseerv";
import MobileNumberReservation from "./components/MobileNumberReservation/MobileNumberReservation";

const ReservationBlock: FC = () => {
  const numbersInfo = useAppSelector(
    (state) => state.rangePickerReducer.numbersInfo.data,
  );

  const windowSize = useWindowSize();

  return (
    <div className={styles.container}>
      {/*<div className={styles.rangeDatePicker}>*/}
      {/*  <ButtonDateRangePicker />*/}
      {/*  <ButtonNumberSelection />*/}
      {/*</div>*/}
      <div className={styles.content}>
        <div className={styles.numbers}>
          {numbersInfo.map((number: any, index: number) =>
            windowSize > 920 ? (
              <NumberReservation {...number} key={number.index} />
            ) : (
              <MobileNumberReservation {...number} key={number.index} />
            ),
          )}
        </div>
        {windowSize > 1281 ? <ResultReserv /> : <MobileResultReserv />}
      </div>
    </div>
  );
};

export default ReservationBlock;
