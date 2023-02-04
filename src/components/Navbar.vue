<template>
  <div class="shadow-2xl flex flex-wrap justify-between">
    <router-link class="text-6xl font-bold inline p-4" :to="{ name: 'home' }"
      >Bible</router-link
    >
    <div class="p-4 flex items-center gap-6 font-semibold text-2xl">
      <a target="_blank" href="https://github.com/joshporterdev/bible"
        >source</a
      >
      <router-link :to="{ name: 'about' }">About</router-link>
    </div>
  </div>
</template>
