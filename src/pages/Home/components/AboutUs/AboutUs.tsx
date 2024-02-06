import styles from './styles.module.scss'
import {FC} from "react"

const AboutUs: FC = () => {
    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <div className={styles.titleAndImg}>
                    {/*<h2 className={styles.title}>SEVARSOY</h2>*/}
                    <img alt='Sevarsoy'
                         src='/assets/home/aboutUs/aboutUs2.png'
                         className={styles.aboutUsImg}/>
                </div>
                <p className={styles.text}>Горный курорт Sevarsoy расположен на территории площадью 900 гектаров в одном
                    из красивейших и живописных мест столичной области, на отрогах Чаткальского хребта западной части Тянь-Шаньских гор,
                    всего в 65 километрах от Ташкента.
                    <br/>
                    <br/>
                    Мы предлагаем широкий круг активных развлечений на любой вкус зимой и летом. Инфраструктура и сервис курорта придутся
                    по душе любому посетителю – от спортсменов-профессионалов и любителей экстрима до самых юных туристов и семейных
                    компаний.
                </p>
            </div>
        </div>
    )
}
export default AboutUs;