<script setup>
import PokemonCard from "@/components/PokemonCard.vue";

const pokemonPref = [
  { id: 4, rare: true },
  { id: 25, rare: true },
  { id: 151, rare: true },
  { id: 225, rare: true },
  { id: 34, rare: true },
  { id: 20, rare: true },
  { id: 870, rare: true },
  { id: 650, rare: true },
  { id: 875, rare: true },
  { id: 534, rare: true },
  { id: 78, rare: true },
  { id: 654, rare: true },
  { id: 666, rare: true },
  { id: 384, rare: true },
  { id: 900, rare: true },
  { id: 1000, rare: true },
  { id: 606, rare: true },
  { id: 284, rare: true },
  { id: 190, rare: true },
  { id: 1003, rare: true },
];
</script>

<template>
  <div style="margin: 20px;">
    <v-container fluid class="d-flex flex-column align-center justify-center">
      <h2 class="text-center"><i>Attrapez les tous</i></h2>
      <br> 
    
      <img src="@/assets/pokeball.png" alt="Pokeball" class="mx-auto d-block" style="width: 75px; height: 75px;">
      <br>   
      <v-row align="center" justify="center" class="flex-row flex-wrap">
        <PokemonCard 
          v-for="({ id, rare }) in pokemonPref" 
          :key="id" 
          :pokemonID="id" 
          :isRare="rare" 
        />
      </v-row>
    </v-container>
  </div>
</template>


