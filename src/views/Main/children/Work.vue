<template>
  <v-container>
    <back />
    <fluid v-if="JSON.stringify(cards) !== '{}'" :cards="cards" />
    <empty v-else text="还没有任何作品哦" />
  </v-container>
</template>

<script>
import Fluid from "./../../../components/Fluid.vue";
import Back from "./../../../components/Back.vue";
import Empty from "./../../../components/Empty.vue";

export default {
  name: "Work",
  components: { Fluid, Back, Empty },
  data: () => ({ text: "" }),
  computed: {
    cards() {
      const cards = {};
      const all = this.$store.state.cards;
      const name = this.$route.name;
      const id = this.$store.state.user.id;
      if (name === "Work") {
        for (let key in all) if (all[key].id === id) cards[key] = all[key];
      } else if (name === "Like") {
        for (let key in all)
          if (all[key].likes.includes(id)) cards[key] = all[key];
      }
      return cards;
    },
  },
};
</script>
