<template>
  <v-list color="accent" subheader class="px-3">
    <v-subheader class="primary--text">Hi {{ user.nick }} !</v-subheader>

    <v-list-item class="mr-9 mb-6">
      <v-list-item-avatar size="60">
        <v-img width="60px" src="@/assets/person.png" />
      </v-list-item-avatar>

      <v-list-item-content>
        <v-list-item-title class="primary--text mb-2">
          <h3>{{ user.nick }}</h3>
        </v-list-item-title>
        <v-list-item-subtitle class="primary--text d-flex flex-wrap justify-space-between">
          <span>排名：{{ user.rank }}</span>
          <v-divider vertical color="#ecc02c" />
          <span>动态：{{ user.pictures }}</span>
        </v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>

    <v-list-item-group>
      <v-list-item v-for="item in items" :key="item.path" :to="item.path">
        <v-list-item-icon>
          <v-icon color="primary">{{ item.icon }}</v-icon>
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title>{{ item.text }}</v-list-item-title>
        </v-list-item-content>
        <v-list-item-action>
          <v-icon>mdi-chevron-right</v-icon>
        </v-list-item-action>
      </v-list-item>
    </v-list-item-group>

    <section class="pa-6">
      <v-btn color="primary" block outlined rounded @click="Logout">退出登录</v-btn>
    </section>
  </v-list>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  name: "Me",
  data: () => ({
    items: [
      {
        icon: "mdi-account",
        text: "实名认证",
        path: "/main/info",
      },
      {
        icon: "mdi-heart",
        text: "我的喜欢",
        path: "/main/like",
      },
      {
        icon: "mdi-near-me",
        text: "我的作品",
        path: "/main/work",
      },
      {
        icon: "mdi-format-list-bulleted",
        text: "点赞排行",
        path: "/rank",
      },
      {
        icon: "mdi-home",
        text: "招新首页",
        path: "/",
      },
    ],
  }),
  computed: { ...mapState(["user"]) },
  methods: {
    ...mapActions(["Logout"]),
  },
};
</script>
