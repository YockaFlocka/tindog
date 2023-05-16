const router = require("express").Router()
const favoriteRoutes = require("./favoriteRoutes");
const userRoutes = require("./userRoutes");
const homeRoutes = require("./homeRoutes");
const referenceRoutes = require("./referenceRoutes");


router.use("/reference", referenceRoutes);
router.use("/favorite", favoriteRoutes);
router.use("/user", userRoutes);
router.use("/", homeRoutes);


module.exports = router;