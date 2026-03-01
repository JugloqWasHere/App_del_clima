<template>
  <div class="card">
    <!-- Imagen de la ciudad -->
    <img :src="cityImage" class="city-img" />

    <h2>{{ weather.name }}</h2>

    <!-- Icono del clima -->
    <img :src="iconUrl" alt="icono clima" />

    <p>{{ weather.weather[0].description }}</p>
    <h3>{{ weather.main.temp }}°C</h3>
    <p>💧 Humedad: {{ weather.main.humidity }}%</p>
    <p>🌬️ Viento: {{ weather.wind.speed }} m/s</p>
  </div>
</template>

<script setup>
import { computed } from "vue";

const props = defineProps({
  weather: Object
});

const iconUrl = computed(() =>
  `https://openweathermap.org/img/wn/${props.weather.weather[0].icon}@2x.png`
);

// 👇 ESTA ES LA PARTE IMPORTANTE
const cityImage = computed(() =>
  `https://picsum.photos/600/400?random=${props.weather.id}`
);
</script>

<style scoped>
.card {
  background: #1f1f1f;
  color: white;
  padding: 1.5rem;
  border-radius: 16px;
  text-align: center;
  transition: 0.3s;
}

.card:hover {
  transform: translateY(-5px);
}

.city-img {
  width: 100%;
  height: 180px;
  object-fit: cover;
  border-radius: 12px;
  margin-bottom: 1rem;
}

img {
  width: 100px;
}
</style>