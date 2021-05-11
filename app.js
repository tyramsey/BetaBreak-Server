require('dotenv').config();
let express = require('express');
let app = express();

let sequelize = require('./db');

let user = require('./controllers/user-controller');
let outdoor = require('./controllers/outdoor-controller');
let userinfo = require('./controllers/userinfo-controller');
let goal = require('./controllers/goal-controller');

// app.use('/test', function(req, res){
//     res.send('This is the test endpoint breaking through to the server')
// })

app.use(require('./middleware/headers'));

app.use(express.json());

app.use('/user', user)
app.use('/outdoor', outdoor)
app.use('/userinfo', userinfo)
app.use('/goal', goal)

sequelize.sync();
// sequelize.sync({force: true})
app.listen(process.env.PORT, () => {
    console.log(`Beta Break on port ${process.env.PORT}`)
})