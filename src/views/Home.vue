<template>
  <div class="flex flex-col md:flex-row justify-center gap-4 mx-auto pb-6">
    <div class="ot shadow-2xl p-2 rounded-2xl">
      <h1 class="text-4xl font-bold pt-4 pb-4">Old Testament</h1>
      <div class="flex flex-row flex-wrap gap-4 justify-start">
        <div class="books p-2" v-for="book of books.slice(0, 39)">
          <router-link
            class="border-neutral-700 border-2 rounded-md p-2 hover:bg-neutral-700 hover:text-white transition-colors duration-300"
            :to="{ name: 'book', params: { book: book.url_pattern } }"
            >{{ book.book }}</router-link
          >
        </div>
      </div>
    </div>
    <div class="nt shadow-2xl p-2 rounded-2xl">
      <h1 class="text-4xl font-bold pt-4 pb-4">New Testament</h1>
      <div class="flex flex-row flex-wrap gap-4 justify-start">
        <div class="books p-2" v-for="book in books.slice(39, books.length)">
          <router-link
            class="border-neutral-700 border-2 rounded-md p-2 hover:bg-neutral-700 hover:text-white transition-colors duration-30"
            :to="{ name: 'book', params: { book: book.url_pattern } }"
            >{{ book.book }}</router-link
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const books = [
  {
    book: "Genesis",
    url_pattern: "genesis",
  },
  {
    book: "Exodus",
    url_pattern: "exodus",
  },
  {
    book: "Leviticus",
    url_pattern: "leviticus",
  },
  {
    book: "Numbers",
    url_pattern: "numbers",
  },
  {
    book: "Deuteronomy",
    url_pattern: "deuteronomy",
  },
  {
    book: "Joshua",
    url_pattern: "joshua",
  },
  {
    book: "Judges",
    url_pattern: "judges",
  },
  {
    book: "Ruth",
    url_pattern: "ruth",
  },
  {
    book: "1 Samuel",
    url_pattern: "_1_samuel",
  },
  {
    book: "2 Samuel",
    url_pattern: "_2_samuel",
  },
  {
    book: "1 Kings",
    url_pattern: "_1_kings",
  },
  {
    book: "2 Kings",
    url_pattern: "_2_kings",
  },
  {
    book: "1 Chronicles",
    url_pattern: "_1_chronicles",
  },
  {
    book: "2 Chronicles",
    url_pattern: "_2_chronicles",
  },
  {
    book: "Ezra",
    url_pattern: "ezra",
  },
  {
    book: "Nehemiah",
    url_pattern: "nehemiah",
  },
  {
    book: "Esther",
    url_pattern: "esther",
  },
  {
    book: "Job",
    url_pattern: "job",
  },
  {
    book: "Psalms",
    url_pattern: "psalms",
  },
  {
    book: "Proverbs",
    url_pattern: "proverbs",
  },
  {
    book: "Ecclesiastes",
    url_pattern: "ecclesiastes",
  },
  {
    book: "Song of Solomon",
    url_pattern: "song_of_solomon",
  },
  {
    book: "Isaiah",
    url_pattern: "isaiah",
  },
  {
    book: "Jeremiah",
    url_pattern: "jeremiah",
  },
  {
    book: "Lamentations",
    url_pattern: "lamentations",
  },
  {
    book: "Ezekiel",
    url_pattern: "ezekiel",
  },
  {
    book: "Daniel",
    url_pattern: "daniel",
  },
  {
    book: "Hosea",
    url_pattern: "hosea",
  },
  {
    book: "Joel",
    url_pattern: "joel",
  },
  {
    book: "Amos",
    url_pattern: "amos",
  },
  {
    book: "Obadiah",
    url_pattern: "obadiah",
  },
  {
    book: "Jonah",
    url_pattern: "jonah",
  },
  {
    book: "Micah",
    url_pattern: "micah",
  },
  {
    book: "Nahum",
    url_pattern: "nahum",
  },
  {
    book: "Habakkuk",
    url_pattern: "habakkuk",
  },
  {
    book: "Zephaniah",
    url_pattern: "zephaniah",
  },
  {
    book: "Haggai",
    url_pattern: "haggai",
  },
  {
    book: "Zechariah",
    url_pattern: "zechariah",
  },
  {
    book: "Malachi",
    url_pattern: "malachi",
  },
  {
    book: "Matthew",
    url_pattern: "matthew",
  },
  {
    book: "Mark",
    url_pattern: "mark",
  },
  {
    book: "Luke",
    url_pattern: "luke",
  },
  {
    book: "John",
    url_pattern: "john",
  },
  {
    book: "Acts",
    url_pattern: "acts",
  },
  {
    book: "Romans",
    url_pattern: "romans",
  },
  {
    book: "1 Corinthians",
    url_pattern: "_1_corinthians",
  },
  {
    book: "2 Corinthians",
    url_pattern: "_2_corinthians",
  },
  {
    book: "Galatians",
    url_pattern: "galatians",
  },
  {
    book: "Ephesians",
    url_pattern: "ephesians",
  },
  {
    book: "Philippians",
    url_pattern: "philippians",
  },
  {
    book: "Colossians",
    url_pattern: "colossians",
  },
  {
    book: "1 Thessalonians",
    url_pattern: "_1_thessalonians",
  },
  {
    book: "2 Thessalonians",
    url_pattern: "_2_thessalonians",
  },
  {
    book: "1 Timothy",
    url_pattern: "_1_timothy",
  },
  {
    book: "2 Timothy",
    url_pattern: "_2_timothy",
  },
  {
    book: "Titus",
    url_pattern: "titus",
  },
  {
    book: "Philemon",
    url_pattern: "philemon",
  },
  {
    book: "Hebrews",
    url_pattern: "hebrews",
  },
  {
    book: "James",
    url_pattern: "james",
  },
  {
    book: "1 Peter",
    url_pattern: "_1_peter",
  },
  {
    book: "2 Peter",
    url_pattern: "_2_peter",
  },
  {
    book: "1 John",
    url_pattern: "_1_john",
  },
  {
    book: "2 John",
    url_pattern: "_2_john",
  },
  {
    book: "3 John",
    url_pattern: "_3_john",
  },
  {
    book: "Jude",
    url_pattern: "jude",
  },
  {
    book: "Revelation",
    url_pattern: "revelation",
  },
];
</script>
