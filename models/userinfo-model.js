module.exports = (sequelize, DataTypes) => {

    const UserInfo = sequelize.define('userinfo', {
        age: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        heightInInches: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        weightInPounds: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        owner_id: {
            type: DataTypes.INTEGER,
        },
        certification: {
            type: DataTypes.TEXT,
            allowNull: false
        }
    })
    return UserInfo;
};

