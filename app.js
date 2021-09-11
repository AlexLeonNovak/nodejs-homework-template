require('dotenv').config();
const express = require('express');
const logger = require('morgan');
const cors = require('cors');
const multer = require('multer');
const ErrorException = require('./exceptions/error.exception');

const routes = require('./routes')

const app = express()

const formatsLogger = app.get('env') === 'development' ? 'dev' : 'short'

app.use(logger(formatsLogger))
app.use(express.static(process.env.UPLOAD_DIR))
app.use(cors())
app.use(express.json())

const {responseMethods} = require('./middlewares');
app.use(responseMethods);

app.use('/', routes);

app.use((_,__, next) => next(ErrorException.NotFound))

app.use((err, req, res, next) => {
  let statusCode = err.status || 500;
  if (err instanceof multer.MulterError) {
    statusCode = 400;
  }
  res.status(statusCode).json({
    status: statusCode === 500 ? 'fail' : 'error',
    code: statusCode,
    message: err.message,
    errors: err.errors || []
  })
})

module.exports = app
