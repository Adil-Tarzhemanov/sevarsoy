import styles from './styles.module.scss'
import React, {FC} from "react"
import ButtonDateRangePicker from "../../../../components/ButtonsDateRangePicker/ButtonsDateRangePicker";
import ButtonNumberSelection from "../../../../components/ButtonNumberSelection/ButtonNumberSelection";
import {useRoomsDataByMutation} from "../../../../api/queries/rooms/rooms.post";
import {useAppSelector} from "../../../../store/hooks";

const Main: FC = () => {
    const roomsDataRequest = useAppSelector(state => state.rangePickerReducer);
    const {data: roomsDataResponse, isError, mutate} = useRoomsDataByMutation({
        "count_room": roomsDataRequest.numbers.length,
        "date_in": roomsDataRequest.dates[0],
        "date_out": roomsDataRequest.dates[1],
        "people":
            roomsDataRequest.numbers.map((number: any) => (
                {
                    "adults": number.adults,
                    "childs": number.childs,
                }
            ))
    })

    if (isError) return <div>Error fetching data</div>;

    console.log(roomsDataResponse)

    return (
        <div className={styles.container}>
            <h1 className={styles.mainTitle}>SEVARSOY</h1>
            <div className={styles.rangeDatePicker}>
                <ButtonDateRangePicker/>
                <ButtonNumberSelection/>
                <button className={styles.searchBtn}
                        onClick={() => mutate()}>
                    Найти
                </button>
            </div>
        </div>
    )
}

export default Main;