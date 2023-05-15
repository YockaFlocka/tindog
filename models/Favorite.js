const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Favorite extends Model {}

/* 

INCOMPLETE LIST, FUTURE UPDATES MAY BE NECESSARY

fields to add

Breed ID

User ID

image url from dog CEO

Reference ID

*/

Favorite.init(
  {
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    photo_url: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    reference_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    }
  },
  {
    sequelize,
    timestamps: true,
    underscored: true,
    modelName: 'Favorite'
  }
);

module.exports = Favorite;