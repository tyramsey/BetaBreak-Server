module.exports = (sequelize, DataTypes) => {

    const Indoor = sequelize.define('indoor', {
        location: {
            type: DataTypes.STRING,
            allowNull: false
        },
        date: {
            type: DataTypes.STRING,
            allowNull: false
        },
        type: {
            type: DataTypes.STRING,
            allowNull: false
        },
        difficulty: {
            type: DataTypes.STRING,
            allowNull: false
        },
        pitches: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        style: {
            type: DataTypes.STRING,
            allowNull: false
        },
        beta: {
            type: DataTypes.STRING,
            allowNull: false
        },
        duration: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        owner_id: {
            type: DataTypes.INTEGER,
        },
        secret: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        }
    })
    return Indoor;
};

