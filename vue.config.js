module.exports = {
  publicPath: "./",
  transpileDependencies: ["vuetify"],
  devServer: {
    proxy: {
      "/moon": {
        target: "http://localhost:8909",
        changeOrigin: true,
        pathRewrite: {
          "^/moon": "",
        },
      },
    },
  },
};
