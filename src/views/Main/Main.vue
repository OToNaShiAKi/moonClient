<template>
  <div id="main" class="pb-9">
    <keep-alive>
      <router-view />
    </keep-alive>
    <v-bottom-navigation
      fixed
      :value="nav"
      grow
      background-color="accent"
      color="primary"
      mandatory
    >
      <v-btn to="/main/home" value="picture">
        <span>照片墙</span>
        <v-icon>mdi-image-outline</v-icon>
      </v-btn>

      <v-btn to="/main/rank" value="rank">
        <span>排行榜</span>
        <v-icon>mdi-format-list-bulleted</v-icon>
      </v-btn>

      <v-btn to="/main/me" value="me">
        <span>我的</span>
        <v-icon>mdi-face-outline</v-icon>
      </v-btn>
    </v-bottom-navigation>
  </div>
</template>

<script>
export default {
  name: "Main",
  computed: {
    nav() {
      let name = this.$route.name.toLowerCase();
      if (!["picture", "rank", "me"].includes(name)) return "me";
      return name;
    },
  },
};
</script>

<style lang="less" scoped>
#main {
  min-height: 100vh;
  background-color: #2c2c2c;
}
</style>