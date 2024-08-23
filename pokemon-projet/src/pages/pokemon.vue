<template>
  <div class="d-flex justify-center align-center" style="margin: 20px;">
    <v-container>
      <h2 class="text-center"><i>Mes Pokémon Favoris</i></h2>
      <v-container class="d-flex justify-center align-center">
        <v-row justify="center">
          <PokemonCard :pokemonID="id" :isRare="false" v-for="id in store.favorites" :key="id" />
        </v-row>
      </v-container>
    </v-container>
  </div>
</template>

<script setup>
import { useCartStore } from "@/stores/cart";
import PokemonCard from "@/components/PokemonCard.vue";

const store = useCartStore();
</script>


