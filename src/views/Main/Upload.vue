<template>
  <div class="pt-2">
    <back />
    <div class="px-9">
      <v-file-input
        accept="image/*"
        name="file"
        prepend-icon="mdi-camera"
        multiple
        persistent-hint
        hint="可以先用PS修修图哦"
        label="选择图片"
      />
      <v-textarea
        v-model="textarea"
        class="mt-3"
        auto-grow
        outlined
        label="说点感想吧"
      />
      <v-btn
        color="primary"
        outlined
        block
        rounded
        type="submit"
        @click="submit"
      >
        提交
      </v-btn>
    </div>
    <p class="mt-6 caption text-center">优秀作品将录入期刊，并获得额外积分</p>
  </div>
</template>

<script>
import { mapActions, mapMutations } from "vuex";
import Back from "./../../components/Back.vue";

const FileRule = /^image\//;

export default {
  name: "Upload",
  data: () => ({ textarea: "" }),
  components: { Back },
  methods: {
    ...mapActions(["Upload"]),
    ...mapMutations(["Notify"]),
    submit() {
      const files = document.querySelector("input[name=file]").files;
      if (!files.length) {
        this.Notify({ type: "warning", message: "请至少上传一张图片" });
        return;
      }
      for (let file of files) {
        if (!FileRule.test(file.name)) {
          this.Notify({ type: "warning", message: "请勿上传非图片文件" });
          return;
        }
      }
      const formdata = new FormData();
      for (let file of files) {
        let name = file.name;
        formdata.append(name, file);
      }
      formdata.append("text", this.textarea);
      this.Upload(formdata);
    },
  },
};
</script>

