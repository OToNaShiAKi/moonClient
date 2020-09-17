<template>
  <v-app>
    <v-progress-linear indeterminate color="primary" absolute :active="progress" />
    <router-view />
    <v-snackbar
      :color="notify.type"
      :timeout="1500"
      v-model="notify.show"
      top
      dark
    >{{ notify.message }}</v-snackbar>
  </v-app>
</template>

<script>
import { mapState, mapActions } from "vuex";
import { getItem } from "./plugins/storage";

export default {
  name: "App",
  computed: {
    ...mapState(["notify", "progress"]),
  },
  created() {
    let user = this.$store.state.user;
    if (!user.id) {
      user = getItem("user");
      if (user.nick && user.password) this.Account(user);
    }
  },
  methods: { ...mapActions(["Account"]) },
};
</script>

<style>
#app,
.background {
  background-color: #2c2c2c;
}
</style>