<template>
  <div>
    <h1 class="text-5xl md:text-6xl break-words text-center font-bold">
      {{ bibleStore.bible[index].book }}
    </h1>
    <div class="chapters mb-6 shadow-2xl rounded-2xl p-2">
      <h1 class="text-2xl font-bold">Chapters</h1>
      <div class="flex flex-wrap gap-4">
        <router-link
          class="md:text-2xl"
          v-for="chapter of bibleStore.bible[index].chapters"
          :to="{
            name: 'chapter',
            params: { book: props.book, chapter: chapter.chapter },
          }"
          >{{ chapter.chapter }}</router-link
        >
      </div>
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
});

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
