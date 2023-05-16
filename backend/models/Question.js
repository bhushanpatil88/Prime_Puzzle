module.exports = (sequelize, DataTypes) => {
    const Questions = sequelize.define("Questions", {
      question_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      question_1:{
        type: DataTypes.STRING,
        allowNull: false,
      },
      question_2:{
        type: DataTypes.STRING,
        allowNull: false,
      },
      answer_1: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      answer_2: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    });
  
    return Questions;
  };