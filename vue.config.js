const StyleLintPlugin = require('stylelint-webpack-plugin');
module.exports = {
  devServer: {
    watchOptions: {
      poll: true,
    },
  },
  configureWebpack: {
    plugins: [
      new StyleLintPlugin({
        files: ['src/**/*.{vue,scss}'],
      }),
    ],
  },
  pluginOptions: {
    autoRouting: {
      chunkNamePrefix: 'page-',
      pages: 'src/pages',
      importPrefix: '@/pages/',
    },
  },
};
