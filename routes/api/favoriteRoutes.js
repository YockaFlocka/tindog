const router = require("express").Router();
const Favorite = require("../../models/Favorite");


router.get("/", (req, res) => {
  Favorite.findAll({ where: { user_id: req.session.user_id || 0 } })
    .then( resp => res.json({ status: "success", payload: resp }))
    .catch( err => res.json({ msg: err.message }))
})

router.post("/", (req, res) => {
  Favorite.create(req.body)
    .then( resp => res.json({ status: "success", payload: resp }))
    .catch( err => res.json({ msg: err.message }))
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