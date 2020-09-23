<template>
  <v-btn @click="$router.back()" small icon color="primary" fab>
    <v-icon>mdi-chevron-left</v-icon>
  </v-btn>
</template>

<script>
export default {
  name: "Back",
};
</script>