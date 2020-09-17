import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Main from "../views/Main/Main.vue";
import Picture from "../views/Main/children/Picture.vue";

import store from "../store/";

const Login = () => import("../views/Login.vue");
const Me = () => import("../views/Main/children/Me.vue");
const Upload = () => import("../views/Main/children/Upload.vue");
const Work = () => import("../views/Main/children/Work.vue");

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
      {
        path: "upload",
        name: "Upload",
        component: Upload,
      },
      {
        path: "work",
        name: "Work",
        component: Work,
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
  const user = store.state.user;
  if (user.id || !Intercept.includes(to.name)) next();
  else next("/login");
});

export default router;
