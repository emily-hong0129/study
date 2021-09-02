'use strict';
// 생성되는 db의 모델

const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class url extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  url.init({  // init : 초기화된 틀
    url: DataTypes.STRING,
    title: DataTypes.STRING,
    visits: {
    type: DataTypes.INTEGER,
    defaultValue: 0
    }
  }, {
    sequelize,
    modelName: 'url',
  });
  return url;
};