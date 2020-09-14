module.exports = {
  transpileDependencies: ["vuetify"],
  devServer: {
    proxy: {
      "/moon": {
        target: "http://localhost:9090",
        changeOrigin: true,
        pathRewrite: {
          "^/moon": "",
        },
      },
    },
  },
};
