import { useState } from "react";
import { useWeather } from "../hooks/useWeather";

export default function Weather(){
    const [city, setCity] = useState("")
    const [searchCity, setSearchCity] = useState("")
    const { weather, loading, error } = useWeather(searchCity)

    const handleSubmit = (e) => {
        e.preventDefault()
        setSearchCity(city)
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    placeholder="Entrez une ville"
                />
                <button type="submit">Rechercher</button>
            </form>

            {loading && <p>Chargement...</p>}
            {error && <p>Erreur : {error}</p>}
            {weather?.current_weather && (
                <div>
                    <p>Température : {weather.current_weather.temperature}°C</p>
                    <p>Vitesse du vent : {weather.current_weather.windspeed}°C</p>
                </div>
            )}
        </div>
    )
}