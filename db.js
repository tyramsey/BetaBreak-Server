const Sequelize = require('sequelize');
const sequelize = new Sequelize(process.env.DATABASE_URL, {
    dialect: "postgres", 

    //comment below code out for local nodemon uncomment for heroku deployment

    // dialectOptions: {
    //     ssl: {
    //         require: true,
    //         rejectUnauthorized: false, // very important
    //       }
    //   }
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