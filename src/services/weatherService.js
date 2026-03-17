
export async function fetchWeather(city){
    const API_LAT_LONG = `https://geocoding-api.open-meteo.com/v1/search?count=1&language=fr&format=json&name=${city}`
    const req = await fetch(API_LAT_LONG)

    if(!req.ok){
        throw new Error("Erreur lors de la récupération de la LAT et LONG");
    }

    const data = await req.json()
    const {latitude, longitude } = data.results[0]

    return fetchCityWeather(latitude, longitude)
}

async function fetchCityWeather(lat, long){
    const req = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${long}&current_weather=true`)

    if(!req.ok){
        throw new Error("Erreur lors de la récupération de la meteo");
    }

    return req.json()
}