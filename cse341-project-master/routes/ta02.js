//TA02 PLACEHOLDER
// Remember, you can make more of these placeholders yourself!
const express = require('express');
const router = express.Router();

let users = [];

router.get('/', (req, res, next) => {
  res.render('pages', {
    title: 'Team Activity 02',
    path: '/ta02', // For pug, EJS
    username: users
  });
});

router.post('/addUser', (req, res, next) => {
  users.push({username: req.body.username});
  res.redirect('/');
});

module.exports = router;
