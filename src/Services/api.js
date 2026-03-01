const API_KEY = "7dc1151498fe2aeff55d77c35d55f03c";
const BASE_URL = "https://api.openweathermap.org/data/2.5/weather";

export async function getWeather(city) {
  const response = await fetch(
    `${BASE_URL}?q=${city}&appid=${API_KEY}&units=metric&lang=es`
  );

  if (!response.ok) {
    throw new Error("Ciudad no encontrada");
  }

  return await response.json();
}