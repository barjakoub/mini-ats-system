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
import ejsLayouts from 'express-ejs-layouts';
/**
 * additional
 */
import perantara from "./src/apis/v1/routers/_router.js";
import path from 'node:path';


const app = express();

/**
 * Specify view engine and directory of pages ./views
 */
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

app.get(`/`, (req, res) => {
    console.info(req.path);
    res.render(`pages/index`, { pageTitle: `Here we go:!` });
});

const PORT = 8080; // production => should use process.env.ENV_NAME
app.use(perantara);

app.listen(8080, () => {
    console.log(`Example app listening on port ${PORT}`);
});