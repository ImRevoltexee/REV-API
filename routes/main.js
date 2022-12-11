__path = process.cwd()

var express = require('express');
var router = express.Router();

router.get('/docs', (req, res) => {
    res.sendFile(__path + '/views/rev.html')
})
router.get('/', (req, res) => {
    res.sendFile(__path + '/views/docs-rev.html')
})
router.get('/api/game', (req, res) => {
    res.sendFile(__path + '/views/game.html')
})

router.get('/about', (req, res) => {
    res.sendFile(__path + '/views/404.html')
})

module.exports = router
