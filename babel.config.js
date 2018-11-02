// const presets = ["@babel/preset-env"];
module.exports = function (api) { // eslint-disable-line
  const env = api.env();
  const presets = [["@babel/preset-env"]];
  const plugins = [];

  if (env === 'production') {
    presets[0].push({
      // "targets": "last 2 versions, > 1%, ie >= 9, Android >= 4.4, iOS >= 8",
      "modules": false
    });
    plugins.push([
      "@babel/plugin-transform-runtime",
      {
        "corejs": 2,
        "helpers": true,
        "regenerator": true,
        "useESModules": false
      }
    ]);
  }

  return {
    presets,
    plugins
  }
};
