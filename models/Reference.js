const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Reference extends Model {}

Reference.init(
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING
    },
    dog_ceo_code: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    petfinder_code: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    dog_ceo_base_url: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    petfinder_url: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  },
  {
    sequelize,
    timestamps: true,
    underscored: true,
    modelName: 'Reference'
  }
);

module.exports = Reference;