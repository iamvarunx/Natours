const express = require('express');
const fs = require('fs');
const morgan = require('morgan');

const tourRouter = require('./routes/tourRoutes');
const userRouter = require('./routes/userRoutes');

const app = express();

// 1) MIDDLEWARES
app.use(morgan('dev'));
app.use(express.json()); // middleware (body-parser)   used in post method(createTour)

app.use((req, res, next) => {
  //   console.log('Hello from the middleware');       //own middleware 1
  next();
});

app.use((req, res, next) => {
  req.requestTime = new Date().toISOString(); //own middleware 2
  next();
});

const tours = JSON.parse(
  fs.readFileSync(`${__dirname}/dev-data/data/tours-simple.json`)
);


app.use('/api/v1/tours', tourRouter);
app.use('/api/v1/users', userRouter);

module.exports =app;
