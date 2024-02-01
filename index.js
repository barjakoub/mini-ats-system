/**
 * express
 */
import express from 'express';
/**
 * config
*/
import staticFilesOptions from './config/static-files.js';
/**
 * template engine
 */
import ejs from 'ejs';
import ejsLayouts from 'express-ejs-layouts';
/**
 * routes
 */
import routes from './src/routers/main.route.js';
// import perantara from "./src/apis/v1/routers/_router.js";
// import path from 'node:path';


const app = express();

/**
 * Specify view engine and directory of pages ./views
 */
ejs.delimiter = `?`; // Set default delimiter to "?"
app.set(`view engine`, `ejs`);
app.set(`views`, `./views`);

/**
 * layouting using express-ejs-layouts
 */
app.use(ejsLayouts);
app.set(`layout`, `layouts/main.layout.ejs`);

/**
 * Serving static files
 */
app.use(`/xbcvbx`, express.static(`public`, staticFilesOptions));

// app.get(`/`, (req, res) => {
//     console.info(req.path);
//     res.render(`pages/index`, { pageTitle: `Here we go:!` });
// });

const PORT = 8080; // production => should use process.env.ENV_NAME
// app.use(perantara);
app.use(routes);

app.listen(8080, () => {
    console.log(`Example app listening on port ${PORT}`);
});