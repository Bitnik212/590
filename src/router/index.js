import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: () =>
      import(/* webpackChunkName: "Home" */ "../layouts/home/index.vue")
  },
  {
    path: "/timetable",
    name: "Timetable",
    component: () =>
      import(/* webpackChunkName: "Timetable" */ "../layouts/timetable/index.vue")
  },
  {
    path: "/about",
    name: "About",
    component: () =>
      import(/* webpackChunkName: "About" */ "../layouts/about/index.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
