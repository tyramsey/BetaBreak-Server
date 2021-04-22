const router = require('express').Router();
const Outdoor = require('../db').import('../models/outdoor-model');

let validateSession = require('../middleware/validate-session');


router.post('/createout', validateSession, (req, res) => {
 
    
    const createOut = {
      location: req.body.outdoor.location,
      routename: req.body.outdoor.routename,
      date: req.body.outdoor.date,
      type: req.body.outdoor.type,
      difficulty: req.body.outdoor.difficulty,
      pitches:req.body.outdoor.pitches,
      grade: req.body.outdoor.grade,
      beta: req.body.outdoor.beta,
      style: req.body.outdoor.style,
      duration: req.body.outdoor.duration,
      rating: req.body.outdoor.rating,
      image_id: req.body.outdoor.image_url,
      owner_id: req.user.id,
      secret: req.body.outdoor.secret
  
  } 
  Outdoor.create(createOut)
  .then(outdoor => res.status(200).json(outdoor))

  .catch(err => res.status(500).json({error: err}))
  
});


router.get("/getout", validateSession, (req, res) => {
  let owner_id = req.user.id
  Outdoor.findAll({
    where: {owner_id: owner_id}
})
  .then(outdoors => res.status(200).json(outdoors))
  .catch(err => res.status(500).json({error: err}))
});

router.put('/updateout/:id', validateSession, function(req, res) {
  const updateOut = {
    location: req.body.outdoor.species,
    routename: req.body.outdoor.location,
    date: req.body.outdoor.date,
    type: req.body.outdoor.type,
    difficulty: req.body.outdoor.difficulty,
    pitches: req.body.outdoor.pitches,
    grade: req.body.outdoor.grade,
    beta: req.body.outdoor.beta,
    style: req.body.outdoor.style,
    duration: req.body.outdoor.duration,
    rating: req.body.outdoor.rating,
    image_id: req.body.outdoor.image_url,
    secret: req.body.outdoor.secret
  };
  const query = { where: {id: req.params.id}};

  Outdoor.update(updateOut, query)
  .then((outdoors) => res.status(200).json(outdoors))
  .catch((err) => res.status(500).json({error: err}));
})


router.delete('/deleteout/:id', validateSession, function(req, res) {
const query = { where: { id: req.params.id, owner_id: req.user.id}};
Outdoor.destroy(query)
.then((response) =>
res.status(200).json({
  message: "Outdoor Climb Has Been Deleted",
})
)
.catch((err) => res.status(500).json({ error: err }));
});
module.exports = router;