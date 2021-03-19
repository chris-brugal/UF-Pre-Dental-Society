const express = require('express')
const router = express.Router()

// ALL TEMPORARY //

router.get('/', (req, res) => {
    res.render('home.html')
})

router.get('/dashboard', (req, res) => {
    res.render('dashboard.html')
})

module.exports = router;
