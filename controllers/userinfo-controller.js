const router = require('express').Router();
const UserInfo = require('../db').import('../models/userinfo-model');

let validateSession = require('../middleware/validate-session');


router.post('/createin', validateSession, (req, res) => {
 
    
    const createIn = {
      age: req.body.userInfo.age,
      heightInInches: req.body.userInfo.heightInInches,
      weightInPounds: req.body.userInfo.weightInPounds,
      owner_id: req.user.id,
      certification: req.body.userInfo.certification
  
  } 
  UserInfo.create(createIn)
  .then(userInfo => res.status(200).json(userInfo))

  .catch(err => res.status(500).json({error: err}))
  
});


router.get("/getin", validateSession, (req, res) => {
  // let owner_id = req.user.id
  UserInfo.findOne({
    where: {owner_id: req.user.id}
})
  .then(userInfo => res.status(200).json(userInfo))
  .catch(err => res.status(500).json({error: err}))
});

router.put('/updatein/:id', validateSession, function(req, res) {
  const updateIn = {
    age: req.body.userInfo.age,
      heightInInches: req.body.userInfo.heightInInches,
      weightInPounds: req.body.userInfo.weightInPounds,
      owner_id: req.user.id,
      certification: req.body.userInfo.certification
  };
  const query = { where: {owner_id: req.user.id}};

  UserInfo.update(updateIn, query)
  .then((userInfo) => res.status(200).json(userInfo))
  .catch((err) => res.status(500).json({error: err}));
})


router.delete('/deletein/:id', validateSession, function(req, res) {
const query = { where: { id: req.params.id, owner_id: req.user.id}};
UserInfo.destroy(query)
.then((response) =>
res.status(200).json({
  message: "User Info Has Been Deleted",
})
)
.catch((err) => res.status(500).json({ error: err }));
});
module.exports = router;