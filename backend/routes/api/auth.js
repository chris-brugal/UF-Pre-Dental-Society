const express = require('express');
const router = express.Router();
const User = require('../../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const auth = require('../../../middleware/auth');
const jwtSecret = require('../../config/keys.js').jwtSecret;

router.post('/', (req, res) => {
    const { username, password } = req.body;

    if(!username || !password) {
        return res.status(400).json({ msg: 'Please enter all fields' });
    }

    User.findOne({ username })
        .then(user => {
            if(!user) return res.status(400).json({ msg: 'User does not exist'});

            const newUser = new User({
                username,
                password
            });

            bcrypt.compare(password, user.password)
                .then(isMatch => {
                    if(!isMatch) return res.status(400).json({ msg: 'Invalid credentials' });

                    jwt.sign(
                        { id: user.id },
                        jwtSecret,
                        { expiresIn: 14400 },
                        (err, token) => {
                            if(err) throw err;
                            res.json({
                                token: token,
                                user: {
                                    id: user.id,
                                    username: user.username
                                }
                            });
                        }
                    )
                })
        })
});

router.get('/user', auth, (req, res) => {
    User.findById(req.user.id)
        .select('-password')
        .then(user => res.json(user));
});

module.exports = router;
