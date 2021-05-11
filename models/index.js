const User = require('./user');
const UserInfo = require('./userinfo');
const Outdoor = require('./outdoor');
const Goal = require('./goal');

User.hasOne(UserInfo);
UserInfo.belongTo(User);

User.hasMany(Outdoor);
Outdoor.belongsTo(User);

User.hasOne(Goal);
Goal.belongsTo(User);

module.exports = {
    User,
    UserInfo,
    Outdoor,
    Goal,
}