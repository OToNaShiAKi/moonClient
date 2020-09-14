<template>
  <div class="pa-5">
    <v-text-field label="昵称" v-model="nick" />
    <v-text-field label="密码" type="password" v-model="password" />
    <v-btn rounded block outlined @click="account">注册 / 登录</v-btn>
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
  }),

  methods: {
    ...mapActions(["Account"]),
    ...mapMutations(["Notify"]),
    account() {
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
