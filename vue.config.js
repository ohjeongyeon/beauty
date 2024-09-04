const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  outputDir: "../../src/main/resources/static",
  transpileDependencies: true,

  pluginOptions: {
    vuetify: {
      // https://github.com/vuetifyjs/vuetify-loader/tree/next/packages/vuetify-loader
    }
  },

  devServer: {
    proxy: {
      '/api': {
        target: 'http://localhost:8085',  // Spring Boot 서버 주소
        changeOrigin: true,
        pathRewrite: { '^/': '' },  // 필요한 경우 경로를 재작성할 수 있습니다.
      },
    },
  },
})
