'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Destino extends Model {
    static associate(models) {
      Destino.hasMany(models.Atrativos, {
        foreignKey: 'id_destino',  
        as: 'Atrativos'
     });
     
    }
  }
  Destino.init({
    nome: DataTypes.STRING,
    descricao: DataTypes.STRING,
    imagem_url: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Destino',
  });
  return Destino;
};