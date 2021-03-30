const express = require('express');
const router = express.Router();
const Officer = require('../../models/Officer.js');


router.get('/', (req, res) => {
    Officer.find()
        .sort({rank: 1})
        .then(officers => res.json(officers))
        .catch(err => console.log(err));
});

router.post('/', (req, res) => {
    const newOfficer = new Officer({
        displayName: req.body.displayName,
        position: req.body.position,
        bio: req.body.bio,
        image: req.body.image,
        rank: req.body.rank
    });

    newOfficer.save()
        .then(officer => res.json(officer))
});

router.delete('/:id', (req,res) => {
    Officer.findById(req.params.id)
        .then(officer => officer.remove()
            .then(() => res.json({
                deleted: true,
                id: req.params.id
            }))
        .catch(() => res.json({
            deleted: false,
            id: req.params.id
        })));
});

router.put('/:id', (req,res) => {
    Officer.findById(req.params.id, function(err, officer){
        if(!officer){
            res.status(404).send("The officer is not found");
        }else{
            officer.displayName = req.body.displayName;
            officer.position = req.body.position;
            officer.bio = req.body.bio;
            officer.image = req.body.image;
            officer.rank = req.body.rank;

            officer.save()
            .then(officer => res.json(officer));
        }
    })
});

module.exports = router;
