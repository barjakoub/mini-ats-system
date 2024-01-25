/**
 * express
 */
import express from 'express';
/**
 * all page routes
 */
import homeRoute from './home.route.js';

const router = express.Router();

const routeCollection = [
    homeRoute,

];
router.use(routeCollection);

export default router;