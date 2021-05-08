const router = require('express').Router();
const Goal = require('../db').import('../models/goal-model');

let validateSession = require('../middleware/validate-session');
let validateAdmin = require('../middleware/validate-admin');


router.post('/creategoal', validateSession, validateAdmin, (req, res) => {
 
    
    const createGoal = {
      pitchcount: req.body.goal.pitchcount,
      tradpitches: req.body.goal.tradpitches,
      sportpitches: req.body.goal.sportpitches,
      tradmaxdiff: req.body.goal.tradmaxdiff,
      sportmaxdiff: req.body.goal.sportmaxdiff,
      daysclimbed: req.body.goal.daysclimbed,
      duration: req.body.goal.duration,
      owner_id: req.user.id,
      secret: req.body.goal.secret
  
  } 
  Goal.create(createGoal)
  .then(goal => res.status(200).json(goal))

  .catch(err => res.status(500).json({error: err}))
  
});


router.get("/getgoal", validateSession, (req, res) => {
  // let owner_id = req.user.id
  Goal.findAll(
    // where: {owner_id: owner_id}
)
  .then(goals => res.status(200).json(goals))
  .catch(err => res.status(500).json({error: err}))
});

router.put('/updategoal/:id', validateSession, function(req, res) {
  const updateGoal = {
    pitchcount: req.body.goal.pitchcount,
    tradpitches: req.body.goal.tradpitches,
    sportpitches: req.body.goal.sportpitches,
    tradmaxdiff: req.body.goal.tradmaxdiff,
    sportmaxdiff: req.body.goal.sportmaxdiff,
    daysclimbed: req.body.goal.daysclimbed,
    duration: req.body.goal.duration,
    secret: req.body.goal.secret
  };
  const query = { where: {id: req.params.id}};

  Goal.update(updateGoal, query)
  .then((goals) => res.status(200).json(goals))
  .catch((err) => res.status(500).json({error: err}));
})


router.delete('/deletegoal/:id', validateSession, function(req, res) {
const query = { where: { id: req.params.id, owner_id: req.user.id}};
Goal.destroy(query)
.then((response) =>
res.status(200).json({
  message: "Goals Have been crushed",
})
)
.catch((err) => res.status(500).json({ error: err }));
});
module.exports = router;