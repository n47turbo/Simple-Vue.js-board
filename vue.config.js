const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  productionSourceMap: false,
  configureWebpack: {
    mode: 'production',
    devtool: 'eval'
  },
  devServer: {
    allowedHosts: "all",
  },
  transpileDependencies: true,
  lintOnSave:false,
  pluginOptions: {
    vuetify: {
			// https://github.com/vuetifyjs/vuetify-loader/tree/next/packages/vuetify-loader
		}
  }
  
})
