import express from 'express';
import morgan from 'morgan';
import routes from './app/routes/index.js';

const apiPort = 3009;

const app = express();
app.use(morgan('dev'));
app.use(express.json());
app.use(routes);

app.use(function (req, res) {
  res.status(404).send('Not Found');
});

app.use(function (err, req, res, next) {
  console.error(err.stack);
  res.status(500).send(err.message);
});

app.listen(apiPort, function () {
  console.info(`Listening on port ${apiPort}`);
});
