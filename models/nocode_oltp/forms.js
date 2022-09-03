'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class forms extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  forms.init({
    id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.STRING
    },
    project_id:DataTypes.STRING,
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    properties: DataTypes.STRING(100000),
    project_id: DataTypes.STRING,
    is_deleted:DataTypes.BOOLEAN,
    created_at:  {
      type: DataTypes.DATE,
      allowNull: true
    },
    updated_at:  {
      type: DataTypes.DATE,
      allowNull: true
    }
  },
   {
    sequelize,
    modelName: 'forms',
    createdAt: false,
    updatedAt: false
  });

  
  return forms;
};