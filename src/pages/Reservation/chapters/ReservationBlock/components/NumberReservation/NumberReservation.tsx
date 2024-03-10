import styles from "./styles.module.scss";
import { FC } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCube, Pagination } from "swiper/modules";
import { numberImages } from "../../../../../../constants/reservation/numberImages";
import { furniture } from "../../../../../../constants/reservation/furnitures";
import FurnitureElement from "../FurnitureElement/FurnitureElement";

import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/pagination";

const NumberReservation: FC = () => {
  return (
    <div className={styles.numberReservation}>
      <div className={styles.sliderAndInfo}>
        <div className={styles.swiper}>
          <Swiper
            grabCursor={true}
            effect={"creative"}
            creativeEffect={{
              prev: {
                shadow: true,
                translate: ["-20%", 0, -1],
              },
              next: {
                translate: ["100%", 0, 0],
              },
            }}
            pagination={true}
            modules={[EffectCube, Pagination]}
            className={styles.mySwiper}
          >
            {numberImages.map((img: any) => (
              <SwiperSlide className={styles.swiperSlide}>
                <img
                  alt="number"
                  src="/assets/reservation/numbers/standart/1.png"
                  className={styles.numberImg}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className={styles.info}>
          <h2 className={styles.title}>STANDART</h2>
          <h4 className={styles.humansCapacity}>2-х местный</h4>
          <div className={styles.furniture}>
            {furniture.map((element) => (
              <FurnitureElement {...element} />
            ))}
          </div>
          <div className={styles.extra}>
            <button className={styles.extraElement}>
              Дополнительный <br /> матрас
            </button>
            <button className={styles.extraElement}>
              Дополнительное <br /> питание
            </button>
          </div>
        </div>
      </div>
      <div className={styles.reservation}>
        <div className={styles.priceWrapper}>
          <h3 className={styles.priceText}>Стоимость за 1 ночь</h3>
          <h2 className={styles.price}>2 300 000 сум</h2>
        </div>
        <div className={styles.completion}>
          <div className={styles.conditionsAndQuests}>
            <div className={styles.cancelAndBank}>
              <button className={styles.cancelBtn}>Условия отмены</button>
              <button className={styles.bankMapBtn}>
                Оплата банковской картой
              </button>
            </div>
            <button className={styles.countQuests}>Количество гостей</button>
          </div>
          <button className={styles.chooseBtn}>Выбрать</button>
        </div>
      </div>
    </div>
  );
};
export default NumberReservation;
