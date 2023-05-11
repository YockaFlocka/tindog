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
      type: DataTypes.STRING
    },
    User_ID: {
      type: DataTypes.STRING
    },
    Breed_ID: {
      type: DataTypes.STRING
    },
    dog_ceo_base_url: {
      type: DataTypes.STRING
    },
    Reference_ID: {
      type: DataTypes.STRING
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