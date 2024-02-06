import styles from './styles.module.scss'
import {FC} from "react"
import {numbers} from "../../../../constants/numbers";

const Numbers: FC = () => {
    return (
        <div className={styles.container}>
            <h2 className={styles.numbersTitle}>Номера</h2>
            <div className={styles.numbers}>
                {numbers.map(number => {
                    return (
                        <div className={styles.number}>
                            <img alt='number'
                                 src={number.img}
                                 className={styles.numberImg}
                            />
                            <div className={styles.numberDataWrapper}>
                                <h3 className={styles.title}>{number.title}</h3>
                                <h3 className={styles.price}>от <span>{number.price}</span></h3>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
export default Numbers;