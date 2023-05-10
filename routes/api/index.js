const router = require("express").Router()
const favoriteRoutes = require("./favoriteRoutes");
const userRoutes = require("./userRoutes");


router.use("/favorite", favoriteRoutes);
router.use("/user", userRoutes);


module.exports = router;