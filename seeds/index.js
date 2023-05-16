const sequelize = require('../config/connection');
const {Favorite, Reference, User} = require('../models');

const userData = require('./userData.json');
const breedData = require('./breedData.json');
const favoriteData = require('./favoriteData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  await User.bulkCreate(userData, {
    individualHooks: true
  });

  await Reference.bulkCreate(breedData);
  
  await Favorite.create(
    {
      user_id: 1,
      photo_url: "fsfsfsfsg",
      reference_id: 1
    },
    { 
      fields: [ "user_id", "photo_url", "reference_id"] 
    }
  );

  // for (const favorite of favoriteData) {
  //   const ref = await Reference.findOne({ where: { name: favorite.reference_name } });
  //   if (ref) {
  //     const {reference_name, ...favorite_sub} = favorite
  //     await Favorite.create({
  //       ...favorite_sub,
  //       reference_id: ref.id
  //     })
  //   } else {
  //     console.log(`WARNING: '${favorite.reference_name}' not found.  Skipping...`)
  //   }
  // }

  process.exit(0);
};

seedDatabase();
