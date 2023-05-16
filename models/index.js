const User = require("./User")
const Favorite = require("./Favorite")
const Reference = require("./Reference")


User.belongsToMany(Reference, {
  through: {
    model: Favorite,
    unique: false
  },
  as: "favorites"
})

Reference.belongsToMany(User, {
  through: {
    model: Favorite,
    unique: false
  },
  as: "favorites"
})

// Need links to tie in reference table, done in router?


module.exports = { Reference, Favorite, User }