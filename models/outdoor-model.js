module.exports = (sequelize, DataTypes) => {

    const Outdoor = sequelize.define('outdoor', {
        location: {
            type: DataTypes.STRING,
            allowNull: false
        },
        routename: {
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
        grade: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        beta: {
            type: DataTypes.STRING,
            allowNull: false
        },
        style: {
            type: DataTypes.STRING,
            allowNull: false
        },
        duration: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        rating: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        image_id: {
            type: DataTypes.STRING,
        },
        owner_id: {
            type: DataTypes.INTEGER,
        },
        secret: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        }
    })
    return Outdoor;
};

