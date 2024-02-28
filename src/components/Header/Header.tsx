import styles from "./styles.module.scss";
import { FC, useEffect, useState } from "react";
import { headerList } from "../../constants/headerList";
import classNames from "classnames";
import Logo from "./components/Logo/Logo.tsx";

const Header: FC = () => {
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolling]);
  return (
    <header
      className={classNames(styles.header, { [styles.scrolling]: scrolling })}
    >
      {scrolling ? (
        <Logo color="#5E5E5E" width={135} />
      ) : (
        <Logo color="white" width={135} />
      )}
      <ul className={styles.list}>
        {headerList.map((element) => (
          <li className={styles.listElement}>{element.title}</li>
        ))}
      </ul>
      <div className={styles.languages}>
        <button className={classNames(styles.language, styles.active)}>
          RU
        </button>
        <button className={styles.language}>UZ</button>
      </div>
    </header>
  );
};
export default Header;
