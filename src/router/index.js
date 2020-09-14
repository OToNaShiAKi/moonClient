import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

import store from "../store/";
import { getItem } from "../plugins/storage";

const Login = () => import("../views/Login.vue");

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "*",
    redirect: "/",
  },
];

const router = new VueRouter({
  routes,
});

router.beforeEach((to, from, next) => {
  const user = store.state.user;
  if (!to.fullPath.includes("login") && !user._id) {
    const info = getItem("user");
    if (info) store.dispatch("Account", info);
    else next("/login");
  } else next();
});

export default router;
