module.exports = {
  plugins: [
    require('autoprefixer')({
      "overrideBrowserslist": [
        "iOS >= 8",
        "Android > 4.4",
        ">1%"
      ]
    })
  ]
}
