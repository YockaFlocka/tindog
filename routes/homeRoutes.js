const router = require('express').Router();

router.get('/', (req, res) => {
  res.render('all', {logged_in: req.session.logged_in})
})

router.get('/matches', (req, res) => {
  res.render('matches', {logged_in: req.session.logged_in})
})

// router.get('/favorites', (req, res) => {
//   res.render('favorites', {logged_in: req.session.logged_in})
// })

router.get('/users', (req, res) => {
  res.render('users', {logged_in: req.session.logged_in})
})

router.get('/login', (req, res) => {
  // If the user is already logged in, redirect the request to another route
  // if (req.session.logged_in) {
  //   res.redirect('/profile');
  //   return;
  // }

  res.render('login');
});

module.exports = router;