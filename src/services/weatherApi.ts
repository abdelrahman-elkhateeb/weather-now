export async function getCoordinates(cityName: string) {
  const res = await fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${cityName}&count=10&language=en&format=json`)

  if (!res.ok) throw new Error("error internally through searching the city")

  const data = await res.json();

  if (!data.results || data.results.length === 0) throw new Error("we couldn't find this city, check your spelling plz☹️")

  return data.results;
}


export async function getWeatherData(lat: number, lng: number) {
  const res = await fetch(
    `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lng}&current=temperature_2m,relative_humidity_2m,apparent_temperature,precipitation,weather_code,wind_speed_10m&hourly=temperature_2m,weather_code&daily=weather_code,temperature_2m_max,temperature_2m_min&timezone=auto`
  );

  if (!res.ok) throw new Error("internal server error");

  const data = await res.json();

  return data;
}