import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';
import "./SearchBox.css"

export default function SearchBox({ updateInfo }) {
    let [city, setCity] = useState("");
    let [error, setError] = useState(false);

    // This is a dummy key, you should replace it with your actual WeatherAPI.com key
    const API_KEY = "b9ee87e9942e4eecbb800548251908";

    let getWeatherInfo = async () => {
        try {
            let response = await fetch(`https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city}`);

            if (!response.ok) { // Check for bad response (e.g., 400 Bad Request for invalid city)
                throw new Error("No such place exists");
            }

            let jsonResponse = await response.json();
            let result = {
                city: jsonResponse.location.name,
                temp: jsonResponse.current.temp_c,
                latitude: jsonResponse.location.lat,
                longitude: jsonResponse.location.lon,
                humidity: jsonResponse.current.humidity,
                weather: jsonResponse.current.condition.text,
                feelsLike: jsonResponse.current.feelslike_c
            };

            console.log(result);
            return result;
        } catch (err) {
            throw err;
        }
    };

    let handleChange = (e) => {
        setCity(e.target.value);
    };

    let handleSubmit = async (e) => {
        try {
            e.preventDefault();
            setError(false); // Reset error state on new search
            let newInfo = await getWeatherInfo();
            updateInfo(newInfo);
            setCity(""); // Clear the input field after a successful search
        } catch (err) {
            setError(true);
        }
    };

    return (
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            <form onSubmit={handleSubmit}>
                <TextField id="city" label="City Name" variant="outlined" onChange={handleChange} value={city} required />
                <br /><br />
                <Button variant="contained" type="submit">
                    Search
                </Button>
                <br /><br />
                {error && <p style={{ color: 'red' }}>No such place exists</p>}
            </form>
        </div>
    );
}