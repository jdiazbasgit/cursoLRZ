/* config-overrides.js */
/* config-overrides.js */
const webpack = require('webpack');
const path = require('path');
const { GenerateSW } = require('workbox-webpack-plugin'); // Import the GenerateSW class from workbox-webpack-plugin

module.exports = function override(config, env) {


    //do stuff with the webpack config...

    

    config.resolve.fallback = {
        url: require.resolve('url'),
        assert: require.resolve('assert'),
        crypto: require.resolve('crypto-browserify'),
        http: require.resolve('stream-http'),
        https: require.resolve('https-browserify'),
        os: require.resolve('os-browserify/browser'),
        buffer: require.resolve('buffer'),
        stream: require.resolve('stream-browserify'),
    };
    config.plugins.push(
        new webpack.ProvidePlugin({
            process: 'process/browser',
            Buffer: ['buffer', 'Buffer'],
        }),
        new GenerateSW({



            maximumFileSizeToCacheInBytes: 50 * 1024 * 1024, // Set the maximum file size to cache (10 MB in this example)
      // Other configuration options for the service worker go here

    })

    );
    
    config.resolve.alias['@'] = path.resolve(__dirname, 'src');

    return config;
}
