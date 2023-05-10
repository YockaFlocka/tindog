const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Reference extends Model {}

Reference.init(
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
    modelName: 'Reference'
  }
);

module.exports = Reference;