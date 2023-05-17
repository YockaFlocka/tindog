const router = require('express').Router();
const { Favorite, Reference } = require('../models');

router.get('/', (req, res) => {
  res.render('all', {logged_in: req.session.logged_in})
})

router.get('/matches', (req, res) => {
  if (!req.session.logged_in) {
    res.redirect('/');
    return;
  }

  res.render('matches', {logged_in: req.session.logged_in, user_id: req.session.user_id})
})

router.get('/users', async (req, res) => {
  if (req.session.logged_in){
    const favs = await Favorite.findAll({
      where: {user_id: req.session.user_id},
      include: {
        model: Reference,
        attributes: ['name', 'dog_ceo_base_url', 'petfinder_url']
      }
    })
    console.log(favs);
    res.render('users', {logged_in: req.session.logged_in, favorites: favs.map((fav) => fav.get({ plain: true }))})
  } else {
    res.redirect('/');
  }
})

router.get('/login', (req, res) => {
  if (req.session.logged_in) {
    res.redirect('/');
    return;
  }
  res.render('login');
});

module.exports = router;
