const express = require('express');
const router = express.Router();

router.use('/say-hello', (req, res, next) => {
    res.send('<h1>Hello</h1>')
});
router.use('/say-hi', (req, res, next) => {
    res.send('<h1>Hi</h1>')
});
router.use('/say-bye', (req, res, next) => {
    res.send('<h1>Bye</h1>')
});




module.exports = router;