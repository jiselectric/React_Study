const express = require('express');
const cors = require('cors');
const app = express();
const api = require('./api');

require('dotenv').config()
const PORT = process.env.PORT || 4000;

const TOKEN = 'ABCD';

const check = (req, res, next) => {
    const { query : { token }} = req;
    try {
        if (token !== TOKEN) {
            res.send(false);
        } else{
            next();
        }
    } catch {
        res.send('Invalid Approach')
    }
}

app.use(express.json());

app.use(cors({
    origin : ['http://localhost:3000'],
    credentials : true,
}));

app.use('/api', api)

app.get('/', (req, res) => {
    res.send('<h1> Hello </h1>')
});

app.get('/nicetomeetyou', (req, res) => {
    res.send('<h1> thank you and you? </h1>')
});

app.get('/getData', (req, res) => {
    res.send({data : 123});
})

app.get('/hello/:name', (req, res) => {
    const { params : { name }} = req;
    res.send(name);
})

app.get('/hi', check, (req, res) => {
    const { query : { name, price }} = req;
    res.send(`${name} : ${price}`);
})

app.get('*', (req, res) => {
    res.send('<h1> Hi </h1>')
})


app.listen(PORT, () => {
    console.log(`START PORT : ${PORT}`);
});
