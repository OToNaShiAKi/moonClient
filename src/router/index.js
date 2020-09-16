import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Main from "../views/Main/Main.vue";
import Picture from "../views/Main/children/Picture.vue";

import store from "../store/";

const Login = () => import("../views/Login.vue");
const Me = () => import("../views/Main/children/Me.vue");
const Upload = () => import("../views/Upload.vue");

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
    path: "/upload",
    name: "Upload",
    component: Upload,
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

const Intercept = ["Me", "Upload"];

router.beforeEach((to, from, next) => {
  console.log(to);
  const user = store.state.user;
  if (user.id || !Intercept.includes(to.name)) next();
  else next("/login");
});

export default router;
