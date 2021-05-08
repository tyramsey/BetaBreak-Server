module.exports = (sequelize, DataTypes) => {
    const Goal = sequelize.define("goal", {
       
      pitchcount: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      tradpitches: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      sportpitches: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      tradmaxdiff: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      sportmaxdiff: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      
      daysclimbed: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      duration: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      owner_id: {
        type: DataTypes.INTEGER,
      },
      secret: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
      },
    });
    return Goal;
  };
  