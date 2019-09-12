module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        cwd: 'babelrc',
        root: ['./src'],
        alias: {
          app: './src/app',
          components: './src/components',
          pages: './src/pages',
          store: './src/store',
          routes: './src/routes',
          assets: './src/assets',
          images: './src/assets/images',
          api: './src/api',
          services: './src/services',
          utils: './src/utils',
          styles: './src/styles'
        },
        extensions: ['.js', '.ios.js', '.android.js']
      }
    ],
    [
      "@babel/plugin-proposal-decorators",
      {
        "legacy": true
        // "decoratorsBeforeExport": true
      }
    ]
  ]
};
