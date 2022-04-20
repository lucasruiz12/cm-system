const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('turn', {
    fullname: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    time: {
      type: DataTypes.ENUM('10','11','12','13','14','15','16','17','18','19','20','21','22','23','00','01',),
      allowNull: false,
    },
    type: {
      type: DataTypes.ENUM('Fútbol', 'Básquet', 'Pádel'),
      allowNull: false,
    },
    price: {
      type: DataTypes.INTEGER,
      allowNull: false,
    }
  });
};