<template>
  <div id="home" class="text-center pa-3 overflow-hidden">
    <h2>科协招新活动</h2>
    <p class="caption">活动将于10月1日正式开启</p>
    <v-bottom-sheet v-model="sheet" inset>
      <template v-slot:activator="{ on, attrs }">
        <v-btn light outlined :disabled="disable" v-bind="attrs" v-on="on">活动列表</v-btn>
      </template>
      <v-list light>
        <v-subheader>科协招新活动列表</v-subheader>
        <v-list-item :to="tile.path" v-for="tile in tiles" :key="tile.icon">
          <v-list-item-icon>
            <v-icon :color="tile.color">{{ tile.icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>{{ tile.title }}</v-list-item-title>
            <v-list-item-subtitle>{{ tile.text }}</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
        <v-list-item @click="sheet = !(overlay = true)">
          <v-list-item-icon>
            <v-icon color="success">mdi-playlist-star</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>招新报名表</v-list-item-title>
            <v-list-item-subtitle>加入科协，浪有所学！</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-bottom-sheet>
    <p class="caption bottom">感谢XXX对本活动的倾情赞助</p>
    <v-overlay :value="overlay">
      <v-img src="@/assets/wechat.jpg" width="60vw" />
      <p class="caption">微信扫描小程序码报名科协</p>
      <v-btn icon @click="overlay = false">
        <v-icon>mdi-close</v-icon>
      </v-btn>
    </v-overlay>
  </div>
</template>

<script>
export default {
  name: "Home",
  data: () => ({
    tiles: [
      {
        icon: "mdi-gamepad",
        color: "#3e99f6",
        title: "招新小游戏",
        text: "玩小游戏，赢大礼品！",
      },
      {
        icon: "mdi-star-four-points",
        color: "#fd8a2f",
        title: "定格风景",
        text: "记录华科的最美瞬间！",
        path: "main/home",
      },
      {
        icon: "mdi-cake-layered",
        color: "#ef4971",
        title: "作坊生日会",
        text: "与科同喜，共吃蛋糕！",
      },
    ],
    sheet: false,
    overlay: false,
    disable: true,
  }),
  created() {
    const date = new Date().getTime(),
      line = new Date("2020-10-01 00:00:00").getTime();
    console.log(line);
    this.disable = date <= line;
  },
};
</script>

<style lang="less" scoped>
#home {
  color: #454545;
  min-height: 100vh;
  position: relative;
  background: #fff url("../assets/back.jpg") center bottom/contain no-repeat
    fixed;
}
.bottom {
  position: absolute;
  bottom: 0;
  width: 100%;
}
</style>
