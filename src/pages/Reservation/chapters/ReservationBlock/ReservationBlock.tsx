import styles from "./styles.module.scss";
import { FC } from "react";
import ButtonDateRangePicker from "../../../../components/ButtonsDateRangePicker/ButtonsDateRangePicker";
import ButtonNumberSelection from "../../../../components/ButtonNumberSelection/ButtonNumberSelection";
import NumberReservation from "./components/NumberReservation/NumberReservation";
import ResultReserv from "../ResultReserv/ResultReserv";
import { useAppSelector } from "../../../../store/hooks";

const ReservationBlock: FC = () => {
  const numbersInfo = useAppSelector(
    (state) => state.rangePickerReducer.numbersInfo.data,
  );
  const info = useAppSelector((state) => state.rangePickerReducer.numbersInfo);
  console.log(numbersInfo);
  console.log(info);

  return (
    <div className={styles.container}>
      <div className={styles.rangeDatePicker}>
        <ButtonDateRangePicker />
        <ButtonNumberSelection />
      </div>
      <div className={styles.content}>
        <div className={styles.numbers}>
          {numbersInfo.map((number: any, index: number) => (
            <NumberReservation {...number} key={number.index} />
          ))}
        </div>
        <ResultReserv />
        {/*<video*/}
        {/*  width="256"*/}
        {/*  height="256"*/}
        {/*  preload="none"*/}
        {/*  style={{*/}
        {/*    background:*/}
        {/*      "transparent url('https://cdn-icons-png.flaticon.com/512/8112/8112937.png') 50% 50% / cover no-repeat",*/}
        {/*  }}*/}
        {/*  autoPlay*/}
        {/*  loop*/}
        {/*  muted*/}
        {/*  playsInline*/}
        {/*>*/}
        {/*  <source*/}
        {/*    src="https://cdn-icons-mp4.flaticon.com/512/8112/8112937.mp4"*/}
        {/*    type="video/mp4"*/}
        {/*  />*/}
        {/*</video>*/}
      </div>
    </div>
  );
};

export default ReservationBlock;
