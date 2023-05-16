const router = require('express').Router();
const {User, Reference, Favorite} = require("../models");

router.get('/', (req, res) => {
  res.render('all', {logged_in: req.session.logged_in})
})

router.get('/matches', (req, res) => {
  if (!req.session.logged_in) {
    res.redirect('/');
    return;
  }

  res.render('matches', {logged_in: req.session.logged_in})
})

// router.get('/favorites', (req, res) => {
//   res.render('favorites', {logged_in: req.session.logged_in})
// })

router.get('/favorites', async (req, res) => {
  if (!req.session.logged_in) {
    res.redirect('/');
    return;
  }


  //Favorite.findAll({where: { user_id: req.session.user_id || 0 }})

  const currentUser = await User.findByPk(
    req.session.user_id, {
      include: [
       { model: Reference, through: Favorite, as: "favorites" }
      ]
    }
  )

  console.log(currentUser)


  res.render('favorites', {
    logged_in: req.session.logged_in,
    user: currentUser
  
  })
})

router.get('/login', (req, res) => {
  if (req.session.logged_in) {
    res.redirect('/');
    return;
  }
  res.render('login');
});

module.exports = router;