/**
 * express
 */
import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
    console.info(req.query);
    res.render(`pages/index`, { pageTitle: `Mini - ATS` });
});

export default router;