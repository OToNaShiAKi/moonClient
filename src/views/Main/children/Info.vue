<template>
  <div>
    <back />
    <section class="px-6">
      <v-text-field label="姓名" v-model="name" />
      <v-text-field label="手机" type="tel" v-model="telphone" />
      <v-text-field label="学号" type="tel" v-model="uid" />
      <v-btn color="primary" rounded block outlined @click="info">提交</v-btn>
    </section>
    <p class="caption text-center mt-6">实名认证后我们才能发送领奖短信哦</p>
  </div>
</template>

<script>
import Back from "./../../../components/Back.vue";
import { mapActions, mapMutations } from "vuex";

const PhoneRule = /^[1](([3][0-9])|([4][5-9])|([5][0-3,5-9])|([6][5,6])|([7][0-8])|([8][0-9])|([9][1,8,9]))[0-9]{8}$/;
const UidRule = /^U20(16|17|18|19|20)\d{5}$/;

export default {
  name: "Info",
  components: { Back },
  data: () => ({
    name: "",
    telphone: "",
    uid: "U",
  }),
  mounted() {
    const { name, telphone, uid } = this.$store.state.user;
    this.name = name;
    this.telphone = telphone;
    this.uid = uid || "U";
  },
  methods: {
    ...mapActions(["Info"]),
    ...mapMutations(["Notify"]),
    info() {
      const name = this.name,
        telphone = this.telphone,
        uid = this.uid;
      if (!name.length) {
        this.Notify({ type: "warning", message: "姓名不可为空" });
        return;
      }
      if (!PhoneRule.test(telphone)) {
        this.Notify({ type: "warning", message: "手机号不合规" });
        return;
      }
      if (!UidRule.test(uid)) {
        this.Notify({ type: "warning", message: "学号不合规" });
        return;
      }
      this.Info({ name, telphone, uid });
    },
  },
};
</script>
