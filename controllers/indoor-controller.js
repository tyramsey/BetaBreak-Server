const router = require('express').Router();
const Indoor = require('../db').import('../models/indoor-model');

let validateSession = require('../middleware/validate-session');


router.post('/createin', validateSession, (req, res) => {
 
    
    const createIn = {
      location: req.body.indoor.location,
      date: req.body.indoor.date,
      type: req.body.indoor.type,
      difficulty: req.body.indoor.difficulty,
      pitches: req.body.indoor.pitches,
      style: req.body.indoor.style,
      beta: req.body.indoor.beta,
      duration: req.body.indoor.duration,
      owner_id: req.user.id,
      secret: req.body.indoor.secret
  
  } 
  Indoor.create(createIn)
  .then(indoor => res.status(200).json(indoor))

  .catch(err => res.status(500).json({error: err}))
  
});


router.get("/getin", validateSession, (req, res) => {
  let owner_id = req.user.id
  Indoor.findAll({
    where: {owner_id: owner_id}
})
  .then(indoors => res.status(200).json(indoors))
  .catch(err => res.status(500).json({error: err}))
});

router.put('/updatein/:id', validateSession, function(req, res) {
  const updateIn = {
    location: req.body.indoor.location,
      date: req.body.indoor.date,
      type: req.body.indoor.type,
      difficulty: req.body.indoor.difficulty,
      pitches: req.body.indoor.pitches,
      style: req.body.indoor.style,
      beta: req.body.indoor.beta,
      duration: req.body.indoor.duration,
      secret: req.body.indoor.secret
  };
  const query = { where: {id: req.params.id}};

  Indoor.update(updateIn, query)
  .then((indoors) => res.status(200).json(indoors))
  .catch((err) => res.status(500).json({error: err}));
})


router.delete('/deletein/:id', validateSession, function(req, res) {
const query = { where: { id: req.params.id, owner_id: req.user.id}};
Indoor.destroy(query)
.then((response) =>
res.status(200).json({
  message: "Indoor Climb Has Been Deleted",
})
)
.catch((err) => res.status(500).json({ error: err }));
});
module.exports = router;