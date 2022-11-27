require('dotenv').config();
const express = require('express');
const usersRouter = require('./users/users.router');
const db = require('./utils/database');

const port = process.env.PORT

const app = express()

app.use(express.json());

db.authenticate()
    .then(() => console.log('db authenticated'))
    .catch((err) => console.log(err))

db.sync()
    .then(() => console.log('db synced'))
    .catch((err) => console.log(err))

app.get('/', (req, res) => {
    res.status(200).json({message: 'Ok!'})
}) 

app.use('/api/v1/users', usersRouter);

app.listen(port, () => {
    console.log(`Server started at port ${port}`)
})
