import styles from "./styles.module.scss";
import { FC } from "react";
import { news } from "../../../../constants/news";
import OneNew from "../../../components/OneNew/OneNew";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import HeadChapter from "../../components/HeadChapter/HeadChapter";

const News: FC = () => {
  const { ref: refNews, inView: inViewNews } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div className={styles.container} id="news" ref={refNews}>
      <HeadChapter title="Новости" color={false} />
      <div className={styles.news}>
        <motion.div
          className={styles.bigNew}
          animate={inViewNews && { y: 0, x: 0, opacity: 1 }}
          initial={{ y: 300, x: -300, opacity: 0 }}
          transition={{ duration: 0.8 }}
        >
          <OneNew {...news[0]} />
        </motion.div>
        <motion.div
          className={styles.smallNews}
          animate={inViewNews && { y: 0, x: 0, opacity: 1 }}
          initial={{ y: 300, x: 300, opacity: 0 }}
          transition={{ duration: 0.8 }}
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
