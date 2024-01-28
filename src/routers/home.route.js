/**
 * express
 */
import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
    console.info(req.query);
    res.render(`pages/index`, { pageTitle: `Mini - ATS` });
}).get('/component', (req, res) => {
    res.render(`example`, { layout: `layouts/example.layout.ejs`, pageTitle: `Example Component` });
});

export default router;