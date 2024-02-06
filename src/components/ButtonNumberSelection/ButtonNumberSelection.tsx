import styles from './styles.module.scss'
import React, {FC, useState} from "react"
import NumberSelection from "../NumberSelection/NumberSelection";

const ButtonNumberSelection: FC = () => {
    const [isNumberVisible, setIsNumberVisible] = useState(false);

    return (
        <div className={styles.container}>
            {isNumberVisible && <NumberSelection setIsNumberVisible={setIsNumberVisible} />}
            <div className={styles.quantity} onClick={() => setIsNumberVisible(true)}>
                <div className={styles.quantityWrapper}>
                    <img alt='human'
                         src='/assets/home/main/human.png'
                         className={styles.calendarImg}
                    />
                    <div className={styles.titleAndQuantity}>
                        <p className={styles.title}>Гости</p>
                        <p className={styles.adultsAndChildren}>2 взрослых, 0 детей</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ButtonNumberSelection;