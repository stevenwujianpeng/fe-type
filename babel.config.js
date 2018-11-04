// const presets = ["@babel/preset-env"];
module.exports = function (api) { // eslint-disable-line
  const env = api.env();
  const presets = [["@babel/preset-env"]];
  const plugins = [];

  if (env === 'production') {
    presets[0].push({
      "targets": "last 2 version",
      "modules": false
    });
    plugins.push(["@babel/plugin-transform-runtime"]);
  }

  return {
    presets,
    plugins
  }
};
