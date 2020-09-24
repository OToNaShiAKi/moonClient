<template>
  <div id="home" class="text-center py-3 overflow-hidden">
    <section v-if="disable">
      <v-progress-circular
        v-for="(item, i) in time"
        class="ma-1"
        :value="(item / progress[i].division) * 100"
        :color="progress[i].color"
        size="60"
        :key="i"
        rotate="-90"
      >
        {{ item }}
      </v-progress-circular>
    </section>
    <h3 v-else>科协招新活动</h3>
    <p class="caption mb-2">{{ text }}</p>
    <v-bottom-sheet v-model="sheet" inset>
      <template v-slot:activator="{ on, attrs }">
        <v-btn light outlined :disabled="disable" v-bind="attrs" v-on="on">
          活动列表
        </v-btn>
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
    <v-img max-width="100vw" max-height="100%" src="@/assets/back.jpg" />
    <p class="caption">感谢新东方对本活动的倾情赞助</p>

    <v-overlay :value="overlay">
      <v-img src="@/assets/wechat.jpg" width="60vw" max-width="240px" />
      <p class="caption">微信扫描小程序码报名科协</p>
      <v-btn icon @click="overlay = false">
        <v-icon>mdi-close</v-icon>
      </v-btn>
    </v-overlay>
  </div>
</template>

<script>
const CountDown = (time) => {
  time = Math.floor(time / 1000);
  let day = Math.floor(time / (60 * 60 * 24));
  time -= day * 60 * 60 * 24;
  let hour = Math.floor(time / (60 * 60));
  time -= hour * 60 * 60;
  let minute = Math.floor(time / 60);
  let second = time - minute * 60;
  return [day, hour, minute, second];
};

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
        path: "/main/home",
      },
      {
        icon: "mdi-cake-layered",
        color: "#ef4971",
        title: "作坊生日会",
        text: "与科同喜，共吃蛋糕！",
        path: "/birth",
      },
    ],
    sheet: false,
    overlay: false,
    disable: true,
    text: "",
    time: null,
    progress: [
      { color: "accent", division: 7 },
      { color: "warning", division: 24 },
      { color: "success", division: 60 },
      { color: "error", division: 60 },
    ],
  }),
  created() {
    const date = new Date().getTime(),
      start = new Date("2020-10-01 13:34:00").getTime(),
      end = new Date("2020-10-08 00:00:00").getTime();
    if (date < start) {
      this.text = "活动倒计时";
      let time = CountDown(start - date);
      this.time = time;
      const timer = setInterval(() => {
        if (time[0] <= 0 && time[1] <= 0 && time[2] <= 0 && time[3] <= 0) {
          clearInterval(timer);
          this.disable = false;
          this.text = "活动时间：10月1日0点 - 10月8日24点";
          this.time = false;
        }
        time = CountDown(start - Date.now());
        this.time = time;
      }, 1000);
    } else if (date > end) this.text = "活动已结束";
    else this.text = "活动时间：10月1日0点 - 10月8日24点";
    this.disable = date < start || date > end;
  },
};
</script>

<style lang="less" scoped>
#home {
  color: #454545;
  min-height: 100vh;
  position: relative;
  background: #fff;
}
</style>
