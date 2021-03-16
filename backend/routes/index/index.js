const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.render('home.html')
})

router.get('/dashboard', (req, res) => {
    res.render('dashboard.html')
})

module.exports = router;
