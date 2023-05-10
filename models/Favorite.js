const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Favorite extends Model {}

Favorite.init(
  {
    name: {
      type: DataTypes.STRING
    },
    qty: {
      type: DataTypes.INTEGER
    },
  },
  {
    sequelize,
    timestamps: true,
    underscored: true,
    modelName: 'Favorite'
  }
);

module.exports = Favorite;