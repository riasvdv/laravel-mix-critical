<p align="center">
<a href="https://www.npmjs.com/package/laravel-mix-critical"><img src="https://img.shields.io/npm/v/laravel-mix-critical.svg" alt="NPM"></a>
<a href="https://npmcharts.com/compare/laravel-mix-critical?minimal=true"><img src="https://img.shields.io/npm/dt/laravel-mix-critical.svg" alt="NPM"></a>
<a href="https://www.npmjs.com/package/laravel-mix-critical"><img src="https://img.shields.io/npm/l/laravel-mix-critical.svg" alt="NPM"></a>
</p>


# Laravel Mix Critical

This extension provides instant Critical support to your Mix (v2.1 and up) builds.

## Usage

First, install the extension.

```
npm install laravel-mix-critical --save-dev
```

Then, require it within your `webpack.mix.js` file, like so:

```js
let mix = require('laravel-mix');

require('laravel-mix-critical');

mix
    .js('resources/assets/js/app.js', 'public/js')
    .less('resources/assets/less/app.less', 'public/css')
    .critical({
        enabled: mix.inProduction(),
        urls: [
            { src: process.env.BASE_URL + '/', dest: 'public/css/index_critical.min.css' },
        ],
        options: {
            minify: true,
        },
    });
```

And you're done! Compile everything down with `npm run dev`.

## Options
Only `urls` is required - all other options are optional.

| Name             | Type               | Default | Description   |
| ---------------- | ------------------ | ------------- |------------- |
| urls     | `array` | `[]` | An array of url objects, each with a src and dest: `{ src: 'http://example.com', dest: 'public/css/index_critical.min.ss' }` |
| enabled          | `boolean` | `mix.inProduction()` | If generating Critical CSS should be enabled |
| options           | `object` | `{}` | An object of [Critical](https://github.com/addyosmani/critical#options) options |
