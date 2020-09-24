<template>
  <div class="birth pa-3">
    <div class="text-center">
      <v-btn depressed rounded color="warning" small>庆生主题日</v-btn>
    </div>
    <!-- <v-timeline dense>
      <v-timeline-item fill-dot small v-for="n in 3" :key="n">
        <v-card>
          <v-card-title>10.{{ n }}</v-card-title>
          <v-card-subtitle>One Echo</v-card-subtitle>
          <v-card-text>成就：</v-card-text>
        </v-card>
      </v-timeline-item>
    </v-timeline> -->
  </div>
</template>

<script>
export default {
  name: "Birth",
  data: () => ({ depart: [] }),
};
</script>

<style lang="less" scoped>
@media screen and (max-width: 1200px) {
  .birth {
    min-height: 100vh;
    background: url("../../assets/birth.jpg") center / cover no-repeat fixed;
  }
}

@media screen and (min-width: 1200px) {
  .birth {
    min-height: 100vh;
    background: url("../../assets/birth.jpg") center / contain no-repeat fixed;
  }
}
</style>

