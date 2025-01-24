const User = require('./User');
const Payroll = require('./Payroll');

User.hasMany(Payroll, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Payroll.belongsTo(User, {
  foreignKey: 'user_id'
});

module.exports = { User, Payroll };
