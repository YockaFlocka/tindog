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
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    user_id: {
      type: DataTypes.INTEGER,
    },
    breed_id: {
      type: DataTypes.INTEGER,
    },
    dog_ceo_base_url: {
      type: DataTypes.STRING,
    },
    reference_id: {
      type: DataTypes.INTEGER,
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