<template>
  <div id="login" class="pa-3">
    <v-btn to="/main/home" small icon color="primary" fab>
      <v-icon>mdi-chevron-left</v-icon>
    </v-btn>
    <section class="mx-9">
      <v-img width="180px" class="mx-auto mb-6" src="@/assets/smile.png" />
      <v-text-field label="昵称" v-model="nick" />
      <v-text-field label="密码" type="password" v-model="password" />
      <v-btn rounded block outlined color="primary" @click="login">登录 / 注册</v-btn>
    </section>

    <p class="mt-6 caption text-center">本活动与招新小游戏共用账户</p>
  </div>
</template>

<script>
import md5 from "blueimp-md5";
import { mapActions, mapMutations } from "vuex";

export default {
  name: "Login",
  data: () => ({
    nick: "",
    password: "",
    confirm: "",
    tab: "login",
  }),
  methods: {
    ...mapActions(["Account"]),
    ...mapMutations(["Notify"]),
    login() {
      if (!this.nick.length) {
        this.Notify({ type: "warning", message: "昵称不可为空" });
        return;
      }
      if (this.password.length < 6) {
        this.Notify({ type: "warning", message: "密码至少为6位" });
        return;
      }
      this.Account({
        nick: this.nick,
        password: md5(this.password),
      });
    },
  },
};
</script>

