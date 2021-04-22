module.exports = (sequelize, DataTypes) => {
    const Goal = sequelize.define("goal", {
        vcount: {
          type: DataTypes.INTEGER,
          allowNull: true,
        },
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
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      sportmaxdiff: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      bouldermaxdiff: {
        type: DataTypes.INTEGER,
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
      tradduration: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      sportduration: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      boulderduration: {
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
  