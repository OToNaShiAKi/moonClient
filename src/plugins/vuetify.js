import Vue from "vue";
import Vuetify from "vuetify/lib";
import zhHans from "vuetify/es5/locale/zh-Hans";

Vue.use(Vuetify);

export default new Vuetify({
  icons: {
    iconfont: "mdi",
  },
  lang: {
    locales: { zhHans },
    current: "zh-Hans",
  },
  theme: {
    dark: true,
    themes: {
      dark: {
        primary: "#ecc02c",
        success: "#3e99f6",
        warning: "#fd8a2f",
        error: "#ff5252",
        accent: "#2c2c2c",
      },
    },
  },
});
