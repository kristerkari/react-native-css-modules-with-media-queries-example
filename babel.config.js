module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: ['react-native-classname-to-dynamic-style'],
  env: {
    production: {
      plugins: ['transform-remove-console'],
    },
  },
};
