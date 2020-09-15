import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Main from "../views/Main/Main.vue";
import Picture from "../views/Main/children/Picture.vue";

/* import store from "../store/";
import { getItem } from "../plugins/storage"; */

const Login = () => import("../views/Login.vue");
const Me = () => import("../views/Main/children/Me.vue");

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
    path: "/main",
    name: "Main",
    component: Main,
    children: [
      {
        path: "home",
        name: "Picture",
        component: Picture,
      },
      {
        path: "me",
        name: "Me",
        component: Me,
      },
    ],
  },
  {
    path: "*",
    redirect: "/",
  },
];

const router = new VueRouter({
  routes,
});

/* router.beforeEach((to, from, next) => {
  const user = store.state.user;
  if (!to.fullPath.includes("login") && !user._id) {
    const info = getItem("user");
    if (info) store.dispatch("Account", info);
    else next("/login");
  } else next();
}); */

export default router;
