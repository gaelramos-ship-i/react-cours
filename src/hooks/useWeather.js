import { useEffect, useState } from "react";
import { fetchWeather } from "../services/weatherService";

export function useWeather(city){
    const [weather, setWeather] = useState(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    useEffect(() => {
        if(!city) return

        async function loadWeather(){
            setLoading(true)
            setError(null)
            try {
                const data = await fetchWeather(city)
                setWeather(data)
            } catch (err) {
                setError(err.message)
            } finally {
                setLoading(false)
            }
        }
        loadWeather()
    }, [city])
    return {weather, loading, error }
}