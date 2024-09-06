// webpack.mix.js
let mix = require("laravel-mix");

mix.webpackConfig({
  stats: {
    children: true,
  },
});

// prettier-ignore
mix.sass("src/scss/theme.scss", "assets", {
  sassOptions: {
      outputStyle: 'compressed'
  }
})
.sass("src/scss/lp.scss", "assets", {
  sassOptions: {
      outputStyle: 'compressed'
  }
});

mix.js("src/js/theme.js", "assets");
