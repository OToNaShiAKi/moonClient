<template>
  <v-container fluid>
    <v-btn-toggle v-model="text" color="primary" dense mandatory tile group>
      <v-btn value="fresh" @click="GetCards('fresh')">最新</v-btn>
      <v-btn value="hot" @click="GetCards('hot')">最热</v-btn>
    </v-btn-toggle>
    <fluid :cards="cards" />
  </v-container>
</template>

<script>
import Fluid from "./../../../components/Fluid.vue";
import { mapState, mapActions } from "vuex";

export default {
  name: "Picture",
  data: () => ({ text: "fresh" }),
  computed: { ...mapState(["cards"]) },
  components: { Fluid },
  methods: { ...mapActions(["GetCards"]) },
  created() {
    this.GetCards(this.text);
  },
};
</script>

