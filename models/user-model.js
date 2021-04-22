module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('user', {
        username: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
            password:{
                type:  DataTypes.STRING,
                allowNull: false,
            },   
      
            first_name:{
                type:  DataTypes.STRING,
                allowNull: false,
            },
            last_name:{
                type:  DataTypes.STRING,
                allowNull: false,
            },
            
     })
     return User;
}