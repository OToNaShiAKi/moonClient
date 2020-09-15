<template>
  <div id="main" class="pt-3">
    <router-view />
    <v-bottom-navigation
      fixed
      v-model="nav"
      dark
      hide-on-scroll
      grow
      background-color="#2c2c2c"
      color="#ecc02c"
    >
      <v-btn to="home" value="home">
        <span>Home</span>
        <v-icon>mdi-home-outline</v-icon>
      </v-btn>

      <v-btn to="favour" value="favorites">
        <span>Upload</span>
        <v-icon>mdi-cloud-upload-outline</v-icon>
      </v-btn>

      <v-btn to="me" value="me">
        <span>Me</span>
        <v-icon>mdi-face-outline</v-icon>
      </v-btn>
    </v-bottom-navigation>
  </div>
</template>

<script>
// import { mapMutations } from "vuex";

export default {
  name: "Main",
  data: () => ({
    nav: "home",
  }),
};
</script>

<style lang="less" scoped>
#main {
  min-height: 100vh;
  background-color: #2c2c2c;
}
</style>