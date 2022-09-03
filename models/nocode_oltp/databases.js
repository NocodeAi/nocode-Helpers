'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class databases extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  databases.init({
    id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.STRING
    },
    project_id:DataTypes.STRING,
    user_name: DataTypes.STRING,
    password: DataTypes.STRING,
    database_name:DataTypes.STRING,
    host: DataTypes.STRING,
    port: DataTypes.INTEGER,
    type: DataTypes.STRING,
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
    modelName: 'databases',
    createdAt: false,
    updatedAt: false
  });

  
  return databases;
};