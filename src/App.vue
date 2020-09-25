<template>
  <v-app>
    <v-progress-linear
      indeterminate
      color="primary"
      absolute
      :active="progress"
    />
    <router-view />
    <v-snackbar
      :color="notify.type"
      :timeout="1500"
      v-model="notify.show"
      top
      dark
      >{{ notify.message }}</v-snackbar
    >
  </v-app>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "App",
  computed: { ...mapState(["notify", "progress"]) },
};
</script>


<style lang="less" scoped>
#app,
.background {
  background-color: #2c2c2c;
}

@media screen and (max-width: 1200px) {
  .birth {
    min-height: 100vh;
    background: url("./assets/birth.jpg") center / cover no-repeat fixed;
  }
}

@media screen and (min-width: 1200px) {
  .birth {
    min-height: 100vh;
    background: url("./assets/birth.jpg") center / contain no-repeat fixed;
  }
}
</style>