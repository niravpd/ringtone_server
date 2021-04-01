const restRouter=require("./restRouter");
const express = require('express');
const bodyParser = require('body-parser');
const logger = require('morgan');
const app = express();
const PORT = process.env.PORT || 8080;
const NODE_ENV = process.env.NODE_ENV || 'development';
const mongoose = require('mongoose')
const url = 'mongodb://localhost:27017/mobcup'

mongoose.connect(url, { useNewUrlParser: true })
app.set('port', PORT);
app.set('env', NODE_ENV);
app.use(logger('tiny'));
app.use(bodyParser.json());
// app.use((req, res, next) => {
//     const err = new Error(`${req.method} ${req.url} Not Found`);
//     err.status = 404;
//     next(err);
// });

const db = mongoose.connection;
db.once('open', _ => {
    console.log('Database connected:', url)
});
app.use((err, req, res, next) => {
    console.error(err);
    res.status(err.status || 500);
    res.json({
        error: {
            message: err.message,
        },
    });
});
app.use("/api", restRouter);


app.listen(PORT, () => {
    console.log(
        `Express Server started on Port ${app.get(
            'port'
        )} | Environment : ${app.get('env')}`
    );
});