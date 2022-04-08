const path = require("path");

module.exports = {
  entry: ["regenerator-runtime/runtime.js", "<your enter js file>"],
 
  // entry: path.join(__dirname, "client", "src", "index.jsx"),
  output: {
    filename: "bundle.js",
    path: path.join(__dirname, "client", "public")
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader"]
      }
    ]
  },
  watch: true
};
