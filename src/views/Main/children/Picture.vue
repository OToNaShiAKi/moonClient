<template>
  <v-container fluid>
    <v-btn-toggle v-model="text" color="primary" dense mandatory tile group>
      <v-btn value="fresh" @click="GetCards('fresh')">最新</v-btn>
      <v-btn value="hot" @click="GetCards('hot')">最热</v-btn>
    </v-btn-toggle>
    <fluid v-if="JSON.stringify(cards) !== '{}'" :cards="cards" />
    <empty v-else text="目前尚无动态" />
  </v-container>
</template>

<script>
import Fluid from "./../../../components/Fluid.vue";
import Empty from "./../../../components/Empty.vue";
import { mapState, mapActions } from "vuex";

export default {
  name: "Picture",
  data: () => ({ text: "fresh" }),
  computed: { ...mapState(["cards"]) },
  components: { Fluid, Empty },
  methods: { ...mapActions(["GetCards"]) },
  created() {
    this.GetCards(this.text);
  },
};
</script>

