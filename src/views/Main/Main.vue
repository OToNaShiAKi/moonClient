<template>
  <div id="main" class="pt-3">
    <keep-alive>
      <router-view />
    </keep-alive>
    <v-bottom-navigation
      fixed
      v-model="nav"
      hide-on-scroll
      grow
      background-color="accent"
      color="primary"
    >
      <v-btn to="/main/home" value="home">
        <span>照片墙</span>
        <v-icon>mdi-image-outline</v-icon>
      </v-btn>

      <v-btn to="/main/upload" value="upload">
        <span>发布</span>
        <v-icon>mdi-cloud-upload-outline</v-icon>
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