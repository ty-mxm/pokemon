<template>
  <v-footer
    class="bg-indigo-lighten-2 text-center d-flex flex-column "
  >
    <div>
      <v-btn
        v-for="icon in icons"
        :key="icon"
        :icon="icon"
        class="mx-0"
        variant="text"
      ></v-btn>
    </div>

    <div class="pt-0">
        1995 - 2024
    </div>

    <v-divider></v-divider>

    <div>
      <strong>Pokemania</strong>
    </div>
  </v-footer>
</template>
<script>
  export default {
    data: () => ({
      icons: [
        'mdi-facebook',
        'mdi-twitter',
        'mdi-linkedin',
        'mdi-instagram',
      ],
    }),
  }
</script>
<style scoped>

</style>