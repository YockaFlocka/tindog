const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Reference extends Model {}

Reference.init(
  {
    // id: {
    //   type: DataTypes.INTEGER, 
    //   allowNull: false,
    //   primaryKey: true, 
    //   autoIncrement: true
    // },
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
    },
    dog_ceo_base_url: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    petfinder_url: {
      type: DataTypes.STRING,
    },
    whitelist: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    }
  },
  {
    sequelize,
    timestamps: true,
    underscored: true,
    modelName: 'reference'
  }
);

module.exports = Reference;