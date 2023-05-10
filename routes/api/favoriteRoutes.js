const router = require("express").Router();
const Favorite = require("../../models/Favorite");


router.get("/", (req, res) => {
  Favorite.findAll()
    .then( resp => res.json({ status: "success", payload: resp }))
    .catch( err => res.json({ msg: err.message }))
})


router.get("/:id", (req, res) => {
  Favorite.findByPk(req.params.id)
    .then( resp => res.json({ status: "success", payload: resp }))
    .catch( err => res.json({ msg: err.message }))
})


router.post("/", (req, res) => {
  Favorite.create(req.body)
    .then( resp => res.json({ status: "success", payload: resp }))
    .catch( err => res.json({ msg: err.message }))
})

router.put("/:id", (req, res) => {
  Favorite.update(
    req.body,
    {
      where: {
        id: req.params.id
      }
    }
  )
    .then( resp => res.json({ status: "success", payload: resp }))
    .catch( err => res.json({ msg: err.message }))
})

router.delete("/:id", (req, res) => {
  Favorite.destroy({
    where: {
      id: req.params.id
    }
  })
  .then( resp => res.json({ status: "success", payload: resp }))
  .catch( err => res.json({ msg: err.message }))
})

module.exports = router