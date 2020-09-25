<template>
  <div class="pr-6 birth">
    <back />
    <v-timeline dense class="text-left pt-0">
      <v-subheader class="primary--text">成就挑战：</v-subheader>
      <v-timeline-item
        fill-dot
        small
        v-for="item in depart"
        :key="item.date"
        :color="item.color"
        :icon="icon[item.icon]"
      >
        <v-card v-if="!item.show" light>
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
  </div>
</template>

<script>
import Back from "./../../components/Back.vue";

export default {
  name: "Time",
  data: () => ({
    overlay: true,
    depart: [
      {
        name: "One Echo",
        date: "10-05",
        achieve: "记忆月饼：3s内通过一场考试。",
        color: "success",
        birth: "设计去掉的每一项动效，都是开发追着砍出来的。",
      },
      {
        name: "媒体",
        date: "10-06",
        achieve: "定格风景：在科技楼中拍摄卷起来的傅里叶（快展开啊喂）。",
        color: "error",
        birth: "辣眼，又何尝不是一种宣传。",
      },
      {
        name: "策划",
        date: "10-07",
        achieve:
          "记忆月饼：进行一局游戏且得分包含数字4；定格风景：拍摄华科经典雕塑——四年顶个球。",
        color: "primary",
        birth: "原型图的“美感”，是设计狮的伤痛。",
      },
    ],
    icon: {
      2: "mdi-camera-timer",
      1: "mdi-checkbox-marked-circle-outline",
      0: "mdi-minus-circle-outline",
    },
  }),
  created() {
    const now = Date.now();
    const { onecho, media, office } = this.$store.state.user;

    this.depart[0].icon = onecho;
    this.depart[1].icon = media;
    this.depart[2].icon = office;

    for (let item of this.depart) {
      let line = new Date("2020-" + item.date);
      line.setHours(0);
      line = line.getTime();
      item.show = line < now;
      if (line > now) item.icon = 2;
    }
  },
  components: { Back },
};
</script>

<style lang="less" scoped>
.birth::before {
  content: "";
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: #000000af;
}
</style>

