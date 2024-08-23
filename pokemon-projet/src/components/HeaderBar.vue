<script setup>
import { ref } from "vue";

const tabs = ref([
  { id: 1, name: "Accueil", route: "/accueil" },
  { id: 2, name: "Les Pizzas", route: "/pizza" },
  { id: 3, name: "Mes Favoris", route: "/pokemon" },
  { id: 4, name: "Attrapez-les", route: "/delibird" },
  { id: 5, name: "Pokedex", route: "/cart" },
  { id: 6, name: "Contact", route: "/contact" },
]);
</script>

<template>
  <v-container>
    <v-row justify="center" class="my-4">
      <v-col cols="12" md="8" class="text-center">
        <h1 class="pokemania-title">PokéMania</h1>
        <h3><i>Le site de tous les dresseurs</i></h3>
      </v-col>
    </v-row>

    <v-row justify="center" class="my-4">
      <v-col cols="12" md="8" class="d-flex justify-center">
        <v-tabs>
          <v-tab v-for="tab in tabs" :key="tab.id" :to="tab.route" exact>
            {{ tab.name }}
          </v-tab>
        </v-tabs>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped lang="sass">
.pokemania-title
  color: #FFF59D
</style>
