var upstreamTransformer = require("metro/src/transformer");
var css2rn = require("css-to-react-native-transform").default;

module.exports.transform = function({ src, filename, options }) {
  if (filename.endsWith(".css")) {
    var cssObject = css2rn(src, { parseMediaQueries: true });
    return upstreamTransformer.transform({
      src: "module.exports = " + JSON.stringify(cssObject),
      filename,
      options,
    });
  } else {
    return upstreamTransformer.transform({ src, filename, options });
  }
};
