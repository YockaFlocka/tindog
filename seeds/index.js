const sequelize = require('../config/connection');
const {Favorite, Reference, User} = require('../models');

const userData = require('./userData.json');
const breedData = require('./breedData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  await Reference.bulkCreate(breedData);

  process.exit(0);
};

seedDatabase();
