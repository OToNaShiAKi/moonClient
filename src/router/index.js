import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Main from "../views/Main/Main.vue";
import Picture from "../views/Main/children/Picture.vue";

import store from "../store/";
import { getItem } from "./../plugins/storage";

const Login = () => import("../views/Login.vue");
const Me = () => import("../views/Main/children/Me.vue");
const Upload = () => import("../views/Main/children/Upload.vue");
const Work = () => import("../views/Main/children/Work.vue");
const Info = () => import("../views/Main/children/Info.vue");
const Detail = () => import("../views/Main/Detail.vue");
const Rank = () => import("../views/Main/Rank.vue");
const Birth = () => import("../views/Birth.vue");

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
    path: "/birth",
    name: "Birth",
    component: Birth,
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
      {
        path: "like",
        name: "Like",
        component: Work,
      },
      {
        path: "info",
        name: "Info",
        component: Info,
      },
    ],
  },
  {
    path: "/rank",
    name: "Rank",
    component: Rank,
  },
  {
    path: "/detail",
    name: "Detail",
    component: Detail,
  },
  {
    path: "*",
    redirect: "/",
  },
];

const router = new VueRouter({ routes });

const Intercept = ["Me", "Upload"];

router.beforeEach(async (to, from, next) => {
  let user = store.state.user;
  if (!user.id) {
    user = getItem("user") || {};
    if (user.nick && user.password) {
      await store.dispatch("Account", user);
      next();
      return;
    }
  }
  if (user.id || !Intercept.includes(to.name)) next();
  else next("/login");
});

export default router;
