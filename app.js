// const {mongoose} = require('./db/mongoose');

const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const router = express.Router();

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({extended : true}));

const user = require('./controllers/userController');

router.get('/', (req, res) => {
  res.status(200).send();
});


app.use('/api', router);
app.use('/api/user', user);

module.exports = app;
