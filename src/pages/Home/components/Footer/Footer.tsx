import styles from './styles.module.scss'
import {FC} from "react"
import Logo from "../../../../components/Header/components/Logo/Logo.tsx";

type FooterProps = {}

const Footer: FC = () => {
    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <div className={styles.content}>
                    <div className={styles.logo}>
                        <Logo color='white' width={185} />
                    </div>
                    {/*<div className={styles.socialMedia}></div>*/}
                    <div className={styles.numbers}>
                        <p className={styles.number}>+99895 001 11 44</p>
                        <p className={styles.number}>+99895 001 11 88</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Footer;