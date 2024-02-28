import styles from "./styles.module.scss";
import { FC } from "react";
import AboutUsInfo from "./components/aboutUsInfo/AboutUsInfo";
import { aboutUsInfo } from "../../../../constants/aboutUsInfo";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

const AboutUs: FC = () => {
  const { ref: refImg, inView: inViewImg } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  const { ref: refInfo, inView: inViewInfo } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.backgroundAndImg} ref={refImg}>
          <div className={styles.blueBack}></div>
          <motion.img
            alt="Sevarsoy"
            src="/assets/home/aboutUs/back.png"
            className={styles.aboutUsImg}
            animate={inViewImg && { y: 0, x: 0, opacity: 1 }}
            initial={{ y: -200, x: -200, opacity: 0 }}
            transition={{ duration: 0.7 }}
          />
        </div>
        <motion.div
          className={styles.infoWrapper}
          ref={refInfo}
          animate={inViewInfo && { y: 0, x: 0, opacity: 1 }}
          initial={{ y: -200, x: 200, opacity: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h2 className={styles.head}>
            Горный курорт мирового класса в Узбекистане
          </h2>
          {aboutUsInfo.map((element: any) => (
            <AboutUsInfo {...element} />
          ))}
        </motion.div>
      </div>
    </div>
  );
};
export default AboutUs;
