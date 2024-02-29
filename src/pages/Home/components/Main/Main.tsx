import styles from "./styles.module.scss";
import React, { FC, useEffect, useState } from "react";
import ButtonDateRangePicker from "../../../../components/ButtonsDateRangePicker/ButtonsDateRangePicker";
import ButtonNumberSelection from "../../../../components/ButtonNumberSelection/ButtonNumberSelection";
import { useRoomsDataByMutation } from "../../../../api/queries/rooms/rooms.post";
import { useAppSelector } from "../../../../store/hooks";
import WeatherWidget from "../../../../components/WeatherWidget/WeatherWidget";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

const TITLE = "SEVARSOY";

const Main: FC = () => {
  const roomsData = useAppSelector((state) => state.rangePickerReducer);
  const roomsDataRequest = {
    count_room: roomsData.numbers.length,
    date_in: roomsData.dates[0],
    date_out: roomsData.dates[1],
    people: roomsData.numbers.map((number: any) => ({
      adults: number.adults,
      childs: number.childs,
    })),
  };
  const {
    data: roomsDataResponse,
    isError,
    mutate,
  } = useRoomsDataByMutation(roomsDataRequest);

  const [displayedTitle, setDisplayedTitle] = useState("");

  const { ref: refText, inView: inViewText } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });
  const { ref: refRangePicker, inView: inViewRangePicker } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  useEffect(() => {
    if (inViewText && displayedTitle.length < TITLE.length) {
      const intervalId = setInterval(() => {
        setDisplayedTitle((prev) => TITLE.substring(0, prev.length + 1));
      }, 100); // Регулируйте скорость печатания изменением интервала

      return () => clearInterval(intervalId);
    }
  }, [inViewText, displayedTitle]);

  if (isError) return <div>Error fetching data</div>;

  return (
    <div className={styles.container}>
      <video autoPlay muted loop className={styles.videoBackground}>
        <source src="./assets/home/mainVideo.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className={styles.content}>
        <div className={styles.infoAndRangePicker}>
          <h1 className={styles.mainTitle}>{displayedTitle}</h1>
          <motion.p
            className={styles.mainText}
            ref={refText}
            animate={inViewText ? { y: 0, opacity: 1 } : {}}
            initial={{ y: 100, opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            Первоклассный горнолыжный курорт, который предлагает высокий уровень
            комфорта, безопасности и качества услуг, доступный для посещения
            круглый год.
          </motion.p>
          <motion.div
            className={styles.rangeDatePicker}
            ref={refRangePicker}
            animate={inViewRangePicker ? { y: 0, opacity: 1 } : {}}
            initial={{ y: -100, opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <ButtonDateRangePicker />
            <ButtonNumberSelection />
            <button className={styles.searchBtn} onClick={() => mutate()}>
              Найти
            </button>
          </motion.div>
        </div>
        <WeatherWidget />
      </div>
    </div>
  );
};

export default Main;
