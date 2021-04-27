const express = require('express');
const router = express.Router();
require('dotenv').config();

const USERNAME = process.env.USERNAME;
const PASSWORD = process.env.PASSWORD;

router.post('/signin', (req, res) => {
    const {body : {username, password}} = req;
    console.log(req.body);
    if (username === USERNAME && password === PASSWORD) {
        res.status(200).send(true);
    } else{
        res.status(400).send(false);
    }
});

module.exports = router;