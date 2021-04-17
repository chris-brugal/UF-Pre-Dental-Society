const jwt = require('jsonwebtoken');
const jwtSecret = require('../backend/config/keys.js').jwtSecret;


function auth(req, res, next) {
    try {
        const token = req.header('x-auth-token');
    } catch(e) {
        return res.status(401).json({ msg: 'No token, authization denied' });
    }

    try {
        const decoded = jwt.verify(token, jwtSecret);

        req.user = decoded;
        next();
    } catch(e) {
        res.status(400).json({ msg: 'Token is not valid' });
    }
 }

 module.exports = auth;