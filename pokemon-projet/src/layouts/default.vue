<template>
  <v-app>
    <HeaderBar></HeaderBar>
    <v-main class="w-100">
      <router-view />
    </v-main>

    <AppFooter />
  </v-app>
</template>

<script setup>
import HeaderBar from '@/components/HeaderBar.vue';

  //
</script>
