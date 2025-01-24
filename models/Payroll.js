const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Payroll extends Model {}

Payroll.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    company_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    hoursPerWeek: {
      type: DataTypes.STRING,
    },
    date_created: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
    hourlyRate: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    currentWeek:{
      type: DataTypes.DATE,
      allowNull:false
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'user',
        key: 'id',
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'payroll',
  }
);

module.exports = Payroll;
