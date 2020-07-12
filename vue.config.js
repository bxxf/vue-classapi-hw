// eslint-disable-next-line
const StyleLintPlugin = require('stylelint-webpack-plugin');
module.exports = {
  pwa: {
    manifestOptions: {
      icons: [
        {
          src: 'favicon.ico',
          sizes: '64x64 32x32 24x24 16x16',
          type: 'image/x-icon',
        },
      ],
    },
  },
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
      nested: false,
      importPrefix: '@/pages/',
    },
  },
};
