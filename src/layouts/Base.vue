<template>
  <Navbar />
  <div class="w-10/12 pt-6 md:w-8/12 mx-auto">
    <router-view></router-view>
  </div>
</template>

<script setup>
import Navbar from "../components/Navbar.vue";
</script>
