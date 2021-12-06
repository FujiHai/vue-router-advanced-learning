import Vue from "vue";
// import VueRouter from "vue-router";
import VRouter from "../vrouter/index";
import Home from "../views/Home.vue";

Vue.use(VRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "about",
    name: "About",
    component: () => import("../views/About.vue"),
  },
];

const router = new VRouter({
  mode: "history",
  // base: process.env.BASE_URL,
  routes,
});

export default router;
