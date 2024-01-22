import path from 'node:path';

export default {
    entry: `./public/bundling.js`,
    output: {
        path: path.resolve(`public/webpack`),
        filename: `foundation.webpack.js`
    },
    module: {
        rules: [
            { test: /\.css$/, use: [`style-loader`, `css-loader`] }
        ]
    }
};