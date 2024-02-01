/**
 * Express
 */
import express from 'express';

const router = express.Router();

router.get('/jobs', (request, response) => {
    const data = {
        pageTitle: `Jobs Collection`,
        hideElement: () => {
            return false;
        }
    };
    response.render('pages/job.collection.ejs', data);
});

export default router;