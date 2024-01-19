import path from 'node:path';

export default {
    entry: `./public/bundle_source/bundle.js`,
    output: {
        path: path.resolve(`public/bundle_results`),
        filename: `foundation-bundle.js`
    },
    module: {
        rules: [
            { test: /\.css$/, use: [`style-loader`, `css-loader`] }
        ]
    }
};