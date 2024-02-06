import styles from './styles.module.scss'
import {FC} from "react"
import {Outlet} from "react-router-dom";
import Header from "../../components/Header/Header";

type MainLayoutProps = {}

const MainLayout: FC = () => {
    return (
        <div className={styles.container}>
            {/*<Header />*/}
            <div className={styles.outlet}>
                <Outlet />
            </div>
        </div>
    )
}
export default MainLayout;