module.exports = {
  getTransformModulePath() {
    return require.resolve("react-native-css-transformer");
  },
  getSourceExts() {
    return ["js", "jsx", "css"];
  }
};
