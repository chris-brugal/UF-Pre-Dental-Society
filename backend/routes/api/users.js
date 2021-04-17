const express = require('express');
const router = express.Router();
const User = require('../../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const jwtSecret = require('../../config/keys.js').jwtSecret;

router.post('/', (req, res) => {
    const { username, password } = req.body;

    if(!username || !password) {
        return res.status(400).json({ msg: 'Please enter all fields' });
    }

    User.findOne({ username })
        .then(user => {
            if(user) return res.status(400).json({ msg: 'Username already in use'});

            const newUser = new User({
                username,
                password
            });

            bcrypt.genSalt(10, (err, salt) => {
                bcrypt.hash(newUser.password, salt, (err, hash) => {
                    if(err) throw err;
                    newUser.password = hash;
                    newUser.save()
                        .then(user => {
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
                        });
                })
            })
        })
});

module.exports = router;
