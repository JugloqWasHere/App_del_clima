<template>
  <div class="container">
    <h1>Aplicacion del Clima</h1>

    <SearchBar @search="searchCity" />

    <div class="grid">
      <WeatherCard
        v-for="weather in weatherList"
        :key="weather.id"
        :weather="weather"
      />
    </div>

    <p v-if="error" class="error">{{ error }}</p>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import SearchBar from "./components/SearchBar.vue";
import WeatherCard from "./components/WeatherCard.vue";
import { getWeather } from "./services/api";

const cities = ["Bogotá", "Medellín", "Cali", "Barranquilla", "Cartagena"];
const weatherList = ref([]);
const error = ref("");

async function loadCities() {
  try {
    weatherList.value = [];
    for (const city of cities) {
      const data = await getWeather(city);
      weatherList.value.push(data);
    }
  } catch (err) {
    error.value = err.message;
  }
}

async function searchCity(city) {
  try {
    error.value = "";
    const data = await getWeather(city);
    weatherList.value = [data];
  } catch (err) {
    error.value = err.message;
  }
}

onMounted(loadCities);
</script>

<style>
body {
  margin: 0;
  font-family: Arial, sans-serif;
  background: linear-gradient(135deg, #4e73df, #1cc88a);
  min-height: 100vh;
}

.container {
  padding: 2rem;
  text-align: center;
}

h1 {
  color: white;
}

.error {
  color: red;
  margin-top: 1rem;
}

/* Responsive */
@media (max-width: 768px) {
  .container {
    padding: 1rem;
  }
}
</style>