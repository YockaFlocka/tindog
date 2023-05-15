const sequelize = require('../config/connection');
const Reference = require('../models/Reference');

const breedData = require('./breedData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  await Reference.bulkCreate(breedData);

  process.exit(0);
};

seedDatabase();
