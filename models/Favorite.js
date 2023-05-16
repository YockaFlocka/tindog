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
    // id: {
    //   type: DataTypes.INTEGER, 
    //   allowNull: false,
    //   primaryKey: true, 
    //   autoIncrement: true
    // },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "user",
        key: "id",
        unique: false
      },
      allowNull: false,
    },
    photo_url: {
      type: DataTypes.STRING,
      // allowNull: false,
    },
    reference_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "reference",
        key: "id",
        unique: false
      }
    }
  },
  {
    sequelize,
    timestamps: true,
    underscored: true,
    modelName: 'favorite'
  }
);

module.exports = Favorite;