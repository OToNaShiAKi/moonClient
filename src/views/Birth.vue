<template>
  <div class="pt-3 text-center birth" :class="overlay ? 'overlay' : ''">
    <v-btn
      v-show="!overlay"
      depressed
      rounded
      color="warning"
      small
      @click="overlay = true"
    >
      庆生主题成就
    </v-btn>
    <v-timeline v-show="overlay" dense class="text-left pt-0 mr-6">
      <v-subheader class="primary--text">挑战成就，赢取积分：</v-subheader>
      <v-timeline-item
        fill-dot
        small
        v-for="item in depart"
        :key="item.date"
        :color="item.color"
        :icon="item.icon"
      >
        <v-card v-if="item.show" light>
          <v-card-title :class="item.color + '--text'">
            {{ item.name }}
          </v-card-title>
          <v-card-subtitle>{{ item.birth }}</v-card-subtitle>
          <v-card-text>{{ item.achieve }}</v-card-text>
        </v-card>
        <div v-else>此主题将于 {{ item.date }} 开启</div>
      </v-timeline-item>
      <div class="caption text-center">照片成就审核会有一定程度延迟</div>
    </v-timeline>
    <v-btn icon v-show="overlay" @click="overlay = false">
      <v-icon small>mdi-close</v-icon>
    </v-btn>
  </div>
</template>

<script>
export default {
  name: "Time",
  data: () => ({
    overlay: false,
    depart: [
      {
        name: "One Echo",
        date: "10-02",
        achieve: "记忆月饼：3s内通过一场考试。",
        color: "success",
        birth: "设计去掉的每一项动效，都是开发追着砍出来的。",
      },
      {
        name: "媒体",
        date: "10-03",
        achieve: "定格风景：在科技楼中拍摄卷起来的傅里叶（快展开啊喂）。",
        color: "error",
        birth: "辣眼，又何尝不是一种宣传。",
      },
      {
        name: "策划",
        date: "10-04",
        achieve:
          "记忆月饼：进行一局游戏且得分包含数字4；定格风景：拍摄华科经典雕塑——四年顶个球。",
        color: "primary",
        birth: "原型图的“美感”，是设计狮的伤痛。",
      },
    ],
  }),
  created() {
    const now = Date.now();
    const { onecho, media, office } = this.$store.state.user;

    const icon = {
      true: "mdi-checkbox-marked-circle-outline",
      false: "mdi-minus-circle-outline",
    };
    this.depart[0].icon = icon[onecho];
    this.depart[1].icon = icon[media];
    this.depart[2].icon = icon[office];

    for (let item of this.depart) {
      let line = new Date("2020-" + item.date);
      line.setHours(0);
      line = line.getTime();
      item.show = line < now;
      if (line > now) item.icon = "mdi-minus-circle-outline";
    }
  },
};
</script>

<style lang="less" scoped>
.overlay::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #000000af;
}
</style>

