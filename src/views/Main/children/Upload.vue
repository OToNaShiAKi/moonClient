<template>
  <div class="px-9 pt-2">
    <v-file-input
      accept="image/*"
      name="file"
      prepend-icon="mdi-camera"
      multiple
      label="可以先用PS修修图哦"
    />
    <v-textarea v-model="textarea" auto-grow clearable outlined label="说点感想吧" />
    <v-btn color="primary" outlined block rounded type="submit" @click="submit">提交</v-btn>
    <p class="mt-6 caption text-center">优秀作品将录入期刊，并获得额外积分</p>
  </div>
</template>

<script>
import { mapActions, mapMutations } from "vuex";

export default {
  name: "Upload",
  data: () => ({
    textarea: "",
  }),
  methods: {
    ...mapActions(["Upload"]),
    ...mapMutations(["Notify"]),
    submit() {
      const files = document.querySelector("input[name=file]").files;
      if (!files.length) {
        this.Notify({ type: "warning", message: "请至少上传一张图片" });
        return;
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

