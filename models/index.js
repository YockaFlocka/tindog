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
Reference.hasMany(Favorite, {
  foreignKey: 'reference_id',
  onDelete: 'CASCADE'
})

Favorite.belongsTo(Reference, {
  foreignKey: 'reference_id'
})

module.exports = { Reference, Favorite, User }
