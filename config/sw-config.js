module.exports = {
  cache: {
    cacheId: "PhotoApp",
    runtimeCaching: [{
      handler: "fastest",
      urlPattern: "\/$"
    }],
    staticFileGlobs: ['dist/**/*']
  },
  manifest: {
    background: "#FFFFFF",
    title: "PhotoApp",
    short_name: "PWA",
    theme_color: "#FFFFFF"
  }
};
