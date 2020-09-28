import Vue from "vue";
import VueRouter from "vue-router";

import Home from "../views/Home.vue";
import Main from "../views/Main/Main.vue";
import Picture from "../views/Main/children/Picture.vue";
import Login from "../views/Login.vue";
import Me from "../views/Main/children/Me.vue";
import Upload from "../views/Main/Upload.vue";
import Work from "../views/Main/children/Work.vue";
import Info from "../views/Main/children/Info.vue";
import Detail from "../views/Main/Detail.vue";
import Rank from "../views/Main/children/Rank.vue";
import Birth from "../views/Birth.vue";

import store from "../store/";
import { getItem } from "./../plugins/storage";

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
        path: "rank",
        name: "Rank",
        component: Rank,
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
    path: "/upload",
    name: "Upload",
    component: Upload,
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

const Intercept = ["Me", "Upload", "Work", "Info", "Like"];

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
