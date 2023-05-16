const router = require("express").Router();
const { Favorite, User, Reference } = require("../../models");


router.get("/", async (req, res) => {
  try {
    const currentUser = await User.findByPk(req.session.user_id).include([
      { model: Reference, through: Favorite, as: "favorites"}
    ])

    console.log(currentUser)
   // let userFav = await Favorite.findAll({where: { user_id: req.session.user_id || 0 }})
    //console.log("asdfkjsjdifoij", userFav)
    res.render('favorites', {user: currentUser})
  } catch (err) {
    console.log(err)
  }   
})

router.post("/", async (req, res) => {
  console.log(req.body)
  console.log(req.session.user_id)
  console.log("=========================")
    try {
      await Favorite.create({
        user_id: req.session.user_id,
        photo_url: req.body.image,
        reference_id: req.body.reference_id
      })
    } catch (err) {
      console.log(err)
    }
    console.log(req.body)
    res.json("posted favorite")
})

router.delete("/:id", (req, res) => {
  Favorite.destroy({
    where: {
      id: req.params.id,
      user_id: req.session.user_id || 0
    }
  })
  .then( resp => res.json({ status: "success", payload: resp }))
  .catch( err => res.json({ msg: err.message }))
})

module.exports = router