<template>
  <v-container>
    <back />
    <fluid :cards="cards" />
  </v-container>
</template>

<script>
import Fluid from "./../../../components/Fluid.vue";
import Back from "./../../../components/Back.vue";

export default {
  name: "Work",
  components: { Fluid, Back },
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
