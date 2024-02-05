/**
 * Express
 */
import express, { response } from 'express';

const router = express.Router();

router.get('/jobs', (request, response) => {
    const data = {
        pageTitle: `Jobs Collection`,
        hideElement: () => {
            return false;
        }
    };
    response.render('pages/job.collection.ejs', data);
})
    .get('/jobs/:detail', (request, response) => {
        response.render('pages/job.detail.ejs', { pageTitle: 'Job Details' })
    });

export default router;