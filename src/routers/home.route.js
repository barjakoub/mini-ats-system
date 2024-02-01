/**
 * express
 */
import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
    res.render(`pages/index`, { pageTitle: `Mini - ATS`, data: {name: `Fatkhur`} });
}).get('/component', (req, res) => {
    const data = {
        layout: false,
        pageTitle: `Custom Delimiter`,
        title: `Example of Using Custom Delimiter in EJS`,
        items: [
            `Canelo Alvarez`,
            `Thiago Silva`,
            `Ecma Script`
        ]
    };
    res.render(`example`, data);
});

export default router;