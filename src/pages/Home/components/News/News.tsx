import styles from "./styles.module.scss";
import { FC } from "react";
import { news } from "../../../../constants/news";
import OneNew from "../../../components/OneNew/OneNew";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

const News: FC = () => {
  const { ref: refBigNews, inView: inViewBigNews } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  const { ref: refSmallNews, inView: inViewSmallNews } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  return (
    <div className={styles.container}>
      <h2 className={styles.newsTitle}>Новости</h2>
      <div className={styles.news}>
        <motion.div
          className={styles.bigNew}
          ref={refBigNews}
          animate={inViewBigNews && { y: 0, x: 0, opacity: 1 }}
          initial={{ y: 300, x: -300, opacity: 0 }}
          transition={{ duration: 1 }}
        >
          <OneNew {...news[0]} />
        </motion.div>
        <motion.div
          className={styles.smallNews}
          ref={refSmallNews}
          animate={inViewSmallNews && { y: 0, x: 0, opacity: 1 }}
          initial={{ y: 300, x: 300, opacity: 0 }}
          transition={{ duration: 1 }}
        >
          <OneNew {...news[1]} />
          <OneNew {...news[2]} />
        </motion.div>
      </div>
      {/*<button className={styles.allNewsBtn}>Все новости</button>*/}
    </div>
  );
};
export default News;
