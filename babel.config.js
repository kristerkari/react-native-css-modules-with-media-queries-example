module.exports = {
  presets: ["module:metro-react-native-babel-preset"],
  plugins: ["react-native-classname-to-dynamic-style"],
  env: {
    production: {
      plugins: ["transform-remove-console"]
    }
  }
};
