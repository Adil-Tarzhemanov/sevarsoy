import styles from './styles.module.scss'

import React from 'react';
import {useWeatherDataByQuery} from "../../api/queries/weather/weatherData";

const WeatherWidget = () => {
    const { data, isLoading, isError } = useWeatherDataByQuery();

    if (isLoading) return <div>Loading...</div>;
    if (isError) return <div>Error fetching data</div>;

    const temperatures = data.data_day.temperature_mean;
    const currentTeperature = Math.round(data.data_current.temperature);
    console.log(data)

    return (
        <div className={styles.container}>
            <h3>{currentTeperature}</h3>
            {/*{temperatures.map((temperature: number, index: number) =>*/}
            {/*    <h3 key={index}>{Math.round(temperature)}</h3>*/}
            {/*)}*/}
        </div>
    );
}

export default WeatherWidget;