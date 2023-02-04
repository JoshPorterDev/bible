import { createRouter, createWebHistory } from "vue-router";

import Base from "../layouts/Base.vue";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import Book from "../views/Book.vue";
import Chapter from "../views/Chapter.vue";

const routes = [
  {
    path: "/",
    component: Base,
    children: [
      {
        path: "/",
        name: "home",
        component: Home,
      },
      {
        path: "/about",
        name: "about",
        component: About,
      },
      {
        path: "/book/:book",
        name: "book",
        component: Book,
        props: true,
      },
      {
        path: "/book/:book/:chapter",
        name: "chapter",
        component: Chapter,
        props: true,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
