<template>
  <div class="pa-5 overflow-hidden"></div>
</template>

<script>
import { mapMutations } from "vuex";

export default {
  name: "Home",
  data: () => ({
    dialog: false,
  }),
  methods: {
    ...mapMutations(["Account"]),
    logout() {
      this.Account({});
      window.localStorage.clear();
      this.$router.replace("/login");
    },
  },
};
</script>

