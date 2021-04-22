const Sequelize = require('sequelize');
const sequelize = new Sequelize('BetaBreak', 'postgres', 'password', {
    host: "localhost",
    dialect: "postgres", 

}
);

sequelize.authenticate().then(
    function() {
        console.log('Connected to BetaBreak postgres database');
    },
    function(err){
        console.log(err);
    }
);
   module.exports = sequelize;