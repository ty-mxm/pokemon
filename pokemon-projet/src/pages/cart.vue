<template>
    <div class="d-flex justify-center align-center" style="margin: 20px;">
      <v-container>
        <h2 class="text-center"><i>Pokemon Attrapés</i></h2>
        <v-container class="d-flex justify-center align-center">
          <v-row justify="center">
            <PokemonCard
              v-for="poke in store.panier"
              :key="poke.id" 
              :pokemonID="poke.id"
              :isRare="poke.isRare"
              :favorite="isFavorite(poke.id)" 
              @toggleFavorite="toggleFavorite(poke.id)"
            />
          </v-row>
        </v-container>
        <v-btn @click="store.removeLastItem" class="mx-auto mt-4">Retirer</v-btn>
      </v-container>
    </div>
  </template>
  
  <script setup>
  import { ref } from "vue";
  import { useCartStore } from "@/stores/cart";
  import PokemonCard from "@/components/PokemonCard.vue";
  
  const store = useCartStore();
  const favorites = ref([]);
  
  const isFavorite = (id) => {
      return favorites.value.includes(id);
  };
  
  const toggleFavorite = (id) => {
      if (favorites.value.includes(id)) {
          favorites.value = favorites.value.filter(favID => favID !== id);
      } else {
          favorites.value.push(id);
      }
  };
  </script>
  
  <style scoped>
  /* Ajoutez des styles supplémentaires si nécessaire */
  </style>
  