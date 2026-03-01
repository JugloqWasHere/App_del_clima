<template>
  <div class="search-container">
    <input v-model="city" placeholder="Escribe una ciudad..." />
    <button @click="handleSearch">Buscar</button>
  </div>
</template>

<script setup>
import { ref } from "vue";

const city = ref("");
const emit = defineEmits(["search"]);

function handleSearch() {
  if (city.value.trim() !== "") {
    emit("search", city.value);
    city.value = "";
  }
}
</script>

<style scoped>
.search-container {
  display: flex;
  gap: 10px;
  justify-content: center;
  flex-wrap: wrap;
}

input {
  padding: 10px;
  width: 250px;
}

button {
  padding: 10px 20px;
  cursor: pointer;
}
</style>