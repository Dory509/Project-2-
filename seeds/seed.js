const sequelize = require('../config/connection');
const { User, Payroll } = require('../models');

const userData = require('./userData.json');
const payrollData = require('./payrollData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  for (const payroll of payrollData) {
    await Payroll.create({
      ...payroll,
      user_id: users[Math.floor(Math.random() * users.length)].id,
    });
  }

  process.exit(0);
};

seedDatabase();
