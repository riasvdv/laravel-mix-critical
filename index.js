const mix = require('laravel-mix');

class Critical {
    dependencies() {
        this.requiresReload = `
            HTML Webpack critical has been installed. Please run "npm run dev" again.
        `;

        return ['html-critical-webpack-plugin@1.1.0'];
    }

    register(config) {
        if (!config.urls || config.urls.length <= 0) {
            throw new Error(
                'You need to provide at least 1 valid template with src and dest in the urls option.'
            );
        }

        this.config = Object.assign({
            enabled: mix.inProduction(),
            urls: [],
            options: {},
        }, config);
    }

    webpackPlugins() {
        if (this.config.enabled) {
            const HtmlCritical = require('html-critical-webpack-plugin');

            const plugins = [];
            this.config.urls.forEach((template) => {
                plugins.push(new HtmlCritical(Object.assign({
                    src: template.src,
                    dest: template.dest,
                }, this.config.options)));
            });

            return plugins;
        }
    }
}

mix.extend('critical', new Critical());
