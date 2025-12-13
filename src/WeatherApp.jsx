import { useState } from "react";
import InfoBox from "./InfoBox";
import SearchBox from "./SearchBox";

export default function WeatherApp() {
    const [weatherInfo, setWeatherInfo] = useState({
        city: "Pune",
        feelsLike: 21.8,
        humidity: 93,
        latitude: 18.5333,
        longitude: 73.8667,
        temp: 21.8,
        weather: "Light rain"
    })

    let updateInfo = (result) => (
        setWeatherInfo(result)
    )
    return (
        <>
            <div style={{ textAlign: "center" }}>
                <h1>Weather App By Atul</h1>
                <SearchBox updateInfo={updateInfo} />
                <InfoBox info={weatherInfo} />
            </div>
        </>
    )
}