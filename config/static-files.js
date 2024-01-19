/**
 * Built-in Middleware to serve static files.
 * To get more detail about the following options, please refer to
 * @link https://expressjs.com/en/4x/api.html#express.static
 */
export default {
    dotfiles: `ignore`,
    etag: true,
    extensions: [`sass`, `css`, `js`, `ejs`, `mjs`],
    fallthrough: true,
    immutable: false,
    index: `index.html`,
    lastModified: true,
    maxAge: 0,
    redirect: true,
    setHeaders: undefined
};