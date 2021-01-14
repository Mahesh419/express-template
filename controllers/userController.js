const {User} = require('../models/user');

const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
  return res.status(200).send([
    {
      name: 'John Doe',
      email: 'johndoe@test.com',
      contactNo: '123456789'
    }
  ]);
});

module.exports = router;
