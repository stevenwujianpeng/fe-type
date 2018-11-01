// const presets = ["@babel/preset-env"];
module.exports = function (api) {
  const env = api.env();
  const presets = [["@babel/preset-env"]];
  const plugins = [];

  if (env === 'production') {
    presets[0].push({
      "targets": "> 0.25%, not dead",
      "modules": false
    });
  }

  return {
    presets,
    plugins
  }
};
