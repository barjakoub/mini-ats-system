// import express from "express";
// import authorDummy from "./authorDummy.js";
// import jobs from "./jobsDummy.js";

// const router = express.Router();

// router.get(`/`, (req, res) => {
//     console.info(req.header);
//     /*
//     res.json({
//         name: `Fatkhur Rozak`,
//         role: `Database Engineer, DevOps`,
//         company: `Erajaya Swasembada`,
//         currentProject: `Applicant Tracking System (ATS)`
//     });
//     */
//     const RETURNED_DATA = 100;
//     /* USING SAMPLE DATA
//     const sendingChunk = (start) => {
//         const end = Math.min(start + RETURNED_DATA, jobs.length); // get lower number
//         console.info({
//             endValue: end
//         });
//         const dataChunk = Array.from({ length: end - start }, (_, index) => `Data ${start + index + 1}`);
//         // create array with length => end - start. example, 100 - 0:!

//         res.write(JSON.stringify(dataChunk));
//         // send 100 data

//         if (end < jobs.length) {
//             setTimeout(() => sendingChunk(end), 2000); // sending data with length 200 -100:!
//         } else {
//             res.end();
//         }
//     };
//     sendingChunk(0);
//     */
//     /* USING DUMMY DATA
//     */
//     const totalJobs = jobs.length;
//     let start = 0;

//     const jobsChunk = () => {
//         const end = start + RETURNED_DATA;
//         res.write(JSON.stringify(jobs.slice(start, end + 1)));
//         start = end;

//         if (start > totalJobs - 1) {
//             console.info(`jobs chunked:!`);
//             res.end();
//         } else {
//             setTimeout(() => jobsChunk(), 3000);
//         }
//     };

//     jobsChunk();
// }).get(`/buffered`, (req, res) => {
//     /*
//     if (req.params.buffered === `yeah`) {
//         return res.json({ error: `please be sure that you will get a response as buffer:` });
//     }
//     */
//     console.info(`sending response as buffer...`);

//     const buffer = Buffer.from(JSON.stringify(authorDummy), `utf-8`);
//     console.info(buffer);
//     console.info(`the length of buffer is: ${buffer.length}`);

//     res.set({
//         'Content-Type': `application/json`,
//         'Content-Length': buffer.length
//     });

//     res.send(buffer);
// });

// export default router;