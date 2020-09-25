<template>
  <div class="text-center pa-6">
    <v-img class="mx-auto" src="@/assets/logo.png" width="240px" />
    <p class="caption primary--text">{{ text }}</p>
  </div>
</template>

<script>
export default {
  name: "Empty",
  props: {
    text: {
      type: String,
      default: "暂无数据",
    },
  },
};
</script>