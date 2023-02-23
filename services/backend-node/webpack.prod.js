const common = require("./webpack.common");
const { merge } = require("webpack-merge");

const config = merge(common, {
  mode: "production",
  optimization: {
    minimize: true,
  },
});

module.exports = config;
