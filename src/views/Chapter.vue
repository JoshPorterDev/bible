<template>
  <div>
    <router-link
      :to="{ name: 'book', params: { book: book } }"
      class="text-center text-xl"
      >Back to {{ bibleStore.bible[index].book }}</router-link
    >
    <div class="header pt-4 pb-4">
      <h1 class="font-bold text-5xl md:text-6xl text-center">
        {{ bibleStore.bible[index].book }}
      </h1>
      <h1 class="text-3xl font-semibold">Chapter {{ props.chapter }}</h1>
    </div>

    <div class="verses mb-6">
      <div
        class="flex"
        v-for="verse of bibleStore.bible[index].chapters[props.chapter - 1]
          .verses"
      >
        <p class="inline text-md pr-4 font-bold">{{ verse.verse }}</p>
        <p class="inline text-lg">{{ verse.text }}</p>
      </div>
    </div>

    <div class="navigation flex justify-between mb-6">
      <router-link
        :class="{ invisible: parseInt(props.chapter) == 1 }"
        @click="scrollToTop"
        :to="{
          name: 'chapter',
          params: { book: book, chapter: props.chapter - 1 },
        }"
        >Chapter {{ props.chapter - 1 }}</router-link
      >
      <router-link
        :class="{
          invisible:
            parseInt(props.chapter) == bibleStore.bible[index].chapters.length,
        }"
        @click="scrollToTop"
        :to="{
          name: 'chapter',
          params: { book: book, chapter: parseInt(props.chapter) + 1 },
        }"
        >Chapter {{ parseInt(props.chapter) + 1 }}</router-link
      >
    </div>
  </div>
</template>

<script setup>
import { useBibleStore } from "../store/bibleStore";
const bibleStore = useBibleStore();

const props = defineProps({
  book: {
    required: true,
    type: String,
  },
  chapter: {
    required: true,
    type: String,
  },
});

function scrollToTop() {
  window.scrollTo(0, 0);
}

// Get the index of the book
const indexedBooks = [
  "genesis",
  "exodus",
  "leviticus",
  "numbers",
  "deuteronomy",
  "joshua",
  "judges",
  "ruth",
  "_1_samuel",
  "_2_samuel",
  "_1_kings",
  "_2_kings",
  "_1_chronicles",
  "_2_chronicles",
  "ezra",
  "nehemiah",
  "esther",
  "job",
  "psalms",
  "proverbs",
  "ecclesiastes",
  "song_of_solomon",
  "isaiah",
  "jeremiah",
  "lamentations",
  "ezekiel",
  "daniel",
  "hosea",
  "joel",
  "amos",
  "obadiah",
  "jonah",
  "micah",
  "nahum",
  "habakkuk",
  "zephaniah",
  "haggai",
  "zechariah",
  "malachi",
  "matthew",
  "mark",
  "luke",
  "john",
  "acts",
  "romans",
  "_1_corinthians",
  "_2_corinthians",
  "galatians",
  "ephesians",
  "philippians",
  "colossians",
  "_1_thessalonians",
  "_2_thessalonians",
  "_1_timothy",
  "_2_timothy",
  "titus",
  "philemon",
  "hebrews",
  "james",
  "_1_peter",
  "_2_peter",
  "_1_john",
  "_2_john",
  "_3_john",
  "jude",
  "revelation",
];

const index = indexedBooks.indexOf(props.book);
</script>
