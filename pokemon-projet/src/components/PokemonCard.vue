<!-- components/PokemonCard.vue -->
<script setup>
import { ref, onMounted } from "vue";
import { useCartStore } from "@/stores/cart";
import { fetchPokemonByID } from "@/services/pokemon.service";

const store = useCartStore();
const { pokemonID, isRare } = defineProps(['pokemonID', 'isRare']);
const toggle = ref(isRare);

const pokemon = ref(null);
const error = ref(null);

const fetchPokemon = async () => {
  try {
    const data = await fetchPokemonByID(pokemonID);
    pokemon.value = data;
  } catch (err) {
    error.value = "Error loading Pokemon";
    console.error(err);
  }
};

onMounted(() => {
  fetchPokemon();
});

const add = () => {
  store.addPokemonID(pokemonID, toggle.value);
};

const toggleFavorite = () => {
  if (store.favorites.includes(pokemonID)) {
    store.removeFavorite(pokemonID);
  } else {
    store.addFavorite(pokemonID);
  }
};
</script>

<template>
  <v-card v-if="pokemon" class="pokemon-card d-flex flex-column justify-center align-center pa-4 ma-5" elevation="12" outlined width="200px">
    <v-btn @click="toggleFavorite" class="favorite-button" :class="{ 'favorite': store.favorites.includes(pokemonID) }">
      <v-icon>{{ store.favorites.includes(pokemonID) ? 'mdi-heart' : 'mdi-heart-outline' }}</v-icon>
    </v-btn>
    <v-card-title>{{ pokemon.name }}</v-card-title>
    <v-card-subtitle>{{ pokemon.weight }}</v-card-subtitle>
    <v-container height="200">
      <v-img :src="toggle ? pokemon.imageRare : pokemon.image" class="w-100" />
    </v-container>
    <div class="d-flex flex-row justify-space-around">
      <v-btn v-if="toggle" variant="tonal" @click="toggle = !toggle" class="bg-blue-accent-4">Rarify</v-btn>
      <v-btn v-else variant="tonal" @click="toggle = !toggle" class="bg-red-accent-4">Normalize</v-btn>
      <v-btn @click="add" class="bg-yellow-accent-4">Catch</v-btn>
    </div>
    <div v-if="error" class="error">{{ error }}</div>
  </v-card>
</template>

<style scoped>
.pokemon-card {
  position: relative;
}

.favorite-button {
  position: absolute;
  top: 10px;
  right: 10px;
  min-width: 36px;
  height: 36px;
  z-index: 1;
  background-color: transparent !important;
  border: none;
  box-shadow: none;
}

.favorite-button .v-icon {
  color: var(--v-theme-primary-base); /* You can adjust the color as needed */
}

.favorite-button.favorite .v-icon {
  color: red; /* Color when the Pokémon is a favorite */
}
</style>
