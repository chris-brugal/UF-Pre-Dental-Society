const express = require('express')
const router = express.Router()

router.get('/google', passport.authenticate('google', { scope: ['profile'] }))

// Redirect should be changed to homepage post frontend connection
router.get('/google/callback', passport.authenticate('google', { failureRedirect: '/'}), (req, res) => {
    res.redirect('/dashboard')
})

module.exports = router;
