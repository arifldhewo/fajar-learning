import Vue from "vue";
import VueRouter from "vue-router";
import MainView from "../views/MainView.vue";
import CatalogCourseView from "@/views/CatalogCourseView.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: MainView,
  },
  {
    path: "/course",
    name: "course",
    component: CatalogCourseView,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
