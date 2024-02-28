import styles from "./styles.module.scss";
import React, { FC } from "react";
import "dayjs/locale/ru";
import Main from "./components/Main/Main";
import AboutUs from "./components/AboutUs/AboutUs";
import Classes from "./components/Classes/Classes";
import Numbers from "./components/ Numbers/Numbers";
import News from "./components/News/News";
import Footer from "./components/Footer/Footer";

const Home: FC = () => {
  return (
    <div className={styles.container}>
      <Main />
      <AboutUs />
      {/*<Classes />*/}
      <Numbers />
      <News />
      {/*<Footer />*/}
    </div>
  );
};
export default Home;
