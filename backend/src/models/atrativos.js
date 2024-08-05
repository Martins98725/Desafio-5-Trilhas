'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Atrativos extends Model {
    static associate(models) {
      Atrativos.belongsTo(models.Destino, {
        foreignKey: 'id_destino',  as: 'Destino'
      })
    }
  }
  Atrativos.init({
    nome: DataTypes.STRING,
    tipo: DataTypes.STRING,
    descricao: DataTypes.STRING,
    imagem_url: DataTypes.STRING,
    dicas: DataTypes.STRING,
    id_destino: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Atrativos',
  });
  return Atrativos;
};