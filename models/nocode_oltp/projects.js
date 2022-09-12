'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class projects extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  projects.init({
    id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.STRING
    },
    name: DataTypes.STRING,
    description: DataTypes.STRING(1000),
    user_id: DataTypes.STRING,
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
    modelName: 'projects',
    createdAt: false,
    updatedAt: false
  });

  
  return projects;
};