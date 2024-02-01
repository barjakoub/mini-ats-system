/**
 * express
 */
import express from 'express';
/**
 * all page routes
 */
import homeRoute from './home.route.js';
import jobsRoute from './jobs.route.js';

const router = express.Router();

const routeCollection = [
    homeRoute,
    jobsRoute
];
router.use(routeCollection);

export default router;