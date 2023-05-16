module.exports = (sequelize, DataTypes) => {
    const Users = sequelize.define("Users", {
      email: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      progress:{
        type:DataTypes.STRING,
        allowNull:false,
      }
    });
  
    return Users;
  };