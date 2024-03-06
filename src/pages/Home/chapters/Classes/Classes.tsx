import styles from "./styles.module.scss";
import { FC, useState } from "react";
import { classes } from "../../../../constants/сlasses";
import HeadChapter from "../../components/HeadChapter/HeadChapter";
import classNames from "classnames";

const Classes: FC = () => {
  const [moreRests, setMoreRests] = useState(false);
  const [visibleRests, setVisibleRests] = useState(5);

  const onMoreRests = async () => {
    setMoreRests(true);
    setTimeout(() => {
      setVisibleRests((prevCount) => prevCount + 20);
    }, 1000);
  };

  return (
    <div className={styles.container} id="classes">
      <HeadChapter title="Чем заняться на курорте" color={false} />
      <div className={styles.content}>
        <div className={styles.rests}>
          {classes.slice(0, visibleRests).map((rest) => (
            <div
              className={classNames(styles.restWrapper, {
                [styles.moreRestsActive]: moreRests,
              })}
            >
              <div className={styles.restBackground}></div>
              <h2 className={styles.restTitle}>{rest.title}</h2>
              <img
                src={rest.img}
                alt="rest"
                key={rest.id}
                className={classNames(styles.restImg)}
              />
            </div>
          ))}
        </div>
        {visibleRests < classes.length && (
          <button className={styles.moreRestsBtn} onClick={() => onMoreRests()}>
            Подробнее
            <img
              alt="arrow"
              src="assets/home/arrow.png"
              className={styles.arrow}
            />
          </button>
        )}
      </div>
      {/*<h2 className={styles.classesTitle}>Чем заняться на курорте</h2>*/}

      {/*<div className={classNames(styles.mainClasses, styles.mainSwiper)}>*/}

      {/*        {mainClasses.map((clas) => (*/}
      {/*            <img src={clas.img} alt="class" className={styles.clasImg} />*/}
      {/*        ))}*/}

      {/*</div>*/}
      {/*<div className={classNames(styles.minorClasses, styles.minorSwiper)}>*/}

      {/*        {minorClasses.map((clas) => (*/}
      {/*            <img src={clas.img} alt="class" />*/}
      {/*        ))}*/}

      {/*</div>*/}
    </div>
  );
};

export default Classes;

// import styles from './styles.module.scss'
// import {FC, useEffect, useRef} from "react"
// import Slider from 'react-slick';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';
// import {mainClasses, minorClasses} from "../../../../constants/сlasses";
// import classNames from "classnames";
//
// const Classes: FC = () => {
//     const sliderRef = useRef(null);
//
//     const settings1 = {
//         slidesToShow: 2,
//         slidesToScroll: 1,
//         infinite: true,
//         centerMode: true,
//         autoplay: true,
//         speed: 8000,
//         autoplaySpeed: 0,
//         cssEase: 'linear',
//         pauseOnHover: false,
//         initialSlide: 1,
//         swipeToSlide: true,
//         className: styles.mainMySlider,
//     };
//     const settings2 = {
//         rtl: true,
//         slidesToShow: 4,
//         slidesToScroll: 1,
//         infinite: true,
//         centerMode: true,
//         autoplay: true,
//         speed: 4000,
//         autoplaySpeed: 0,
//         cssEase: 'linear',
//         pauseOnHover: false,
//         initialSlide: 1,
//         className: styles.mainMySlider,
//     }
//     return (
//         <div className={styles.container}>
//             <h2 className={styles.classesTitle}>Чем заняться на курорте</h2>
//             <div className={classNames(styles.mainClasses, styles.mainSwiper)}>
//                 <Slider {...settings1}>
//                     {mainClasses.map((clas) => (
//                         <img src={clas.img} alt="class" className={styles.clasImg} />
//                     ))}
//                 </Slider>
//             </div>
//             <div className={classNames(styles.minorClasses, styles.minorSwiper)}>
//                 <Slider {...settings2}>
//                     {minorClasses.map((clas) => (
//                         <img src={clas.img} alt="class" />
//                     ))}
//                 </Slider>
//             </div>
//         </div>
//     )
// }
//
// export default Classes;
