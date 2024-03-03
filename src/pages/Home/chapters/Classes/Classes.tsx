import styles from './styles.module.scss'
import {FC} from "react"
import {mainClasses, minorClasses} from "../../../../constants/сlasses";
import classNames from "classnames";

const Classes: FC = () => {

    return (
        <div className={styles.container}>
            <h2 className={styles.classesTitle}>Чем заняться на курорте</h2>
            <div className={classNames(styles.mainClasses, styles.mainSwiper)}>

                    {mainClasses.map((clas) => (
                        <img src={clas.img} alt="class" className={styles.clasImg} />
                    ))}

            </div>
            <div className={classNames(styles.minorClasses, styles.minorSwiper)}>

                    {minorClasses.map((clas) => (
                        <img src={clas.img} alt="class" />
                    ))}

            </div>
        </div>
    )
}

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

