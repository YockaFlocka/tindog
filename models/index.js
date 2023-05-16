const User = require("./User")
const Favorite = require("./Favorite")
const Reference = require("./Reference")

User.hasMany(Favorite, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
})

Favorite.belongsTo(User, {
  foreignKey: 'user_id'
})

// Need links to tie in reference table, done in router?


module.exports = { Reference, Favorite, User }