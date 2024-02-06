import styles from './styles.module.scss'
import {FC} from "react"
import { news } from '../../../../constants/news'

const News: FC = () => {
    return (
        <div className={styles.container}>
            <h2 className={styles.newsTitle}>Новости</h2>
            <div className={styles.news}>
                {news.map(news => {
                    return (
                        <div className={styles.new}>
                            <img alt='new'
                                 src={news.img}
                                 className={styles.newsImg}
                            />
                            <div className={styles.newsDataWrapper}>
                                <h4 className={styles.date}>{news.date}</h4>
                                <h3 className={styles.title}>{news.title}</h3>
                                <h3 className={styles.text}>{news.text}</h3>
                            </div>
                        </div>
                    )
                })}
            </div>
            <button className={styles.allNewsBtn}>Все новости</button>
        </div>
    )
}
export default News;