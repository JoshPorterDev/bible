<template>
  <router-view></router-view>
  <!-- <div> -->
  <!--   <pre>{{ bibleStore.genesis.chapters[12] }}</pre> -->
  <!-- </div> -->
</template>

<script setup>
import { useBibleStore } from "./store/bibleStore";
const bibleStore = useBibleStore();
</script>
