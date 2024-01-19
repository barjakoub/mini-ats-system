import express from "express";
import home from "./home-router.js";

const router = express.Router();
router.use(home);
// router.get(`/`, (req, res) => {
//     console.info(req);
//     res.json({ status: `ok` });
// });

export default router;