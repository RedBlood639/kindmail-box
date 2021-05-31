const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const config = require('./config');

const nodetypeRouter = require('./routes/nodetype.route');
mongoose.Promise = global.Promise;
mongoose
  .connect(config.db, {
    useFindAndModify: false,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
  .then(
    () => {
      console.log('DataBase connected sucessfully');
    },
    (error) => {
      console.log('DataBase could not be connected :' + error);
    },
  );
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors());
app.use('/api', nodetypeRouter);

const server = app.listen(config.port, () => {
  console.log('Connected to port :' + config.port);
});
