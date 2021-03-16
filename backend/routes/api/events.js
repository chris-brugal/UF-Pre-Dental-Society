const express = require('express');
const router = express.Router();
const Event = require('../../models/Event.js');


router.get('/', (req, res) => {
    Event.find()
        .sort({postDate: -1})
        .then(events => res.json(events))
        .catch(err => console.log(err));
});

router.post('/', (req, res) => {
    const newEvent = new Event({
        title: req.body.title,
        description: req.body.description,
        time: req.body.time,
        location: req.body.location,
        image: req.body.image,
        link: req.body.link,
        postDate: req.body.postDate
    });

    newEvent.save()
        .then(event => res.json(event))

});

router.delete('/:id', (req,res) => {
    Event.findById(req.params.id)
        .then(event => event.remove()
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
    Event.findById(req.params.id, function(err, event){
        if(!event){
            res.status(404).send("The data is not found");
        }else{
            event.title= req.body.title;
            event.description= req.body.description;
            event.time= req.body.time;
            event.location= req.body.location;
            event.image= req.body.image;
            event.link= req.body.link;
            event.postDate= req.body.postDate;

            event.save()
            .then(event => res.json(event));
        }
    })
});

module.exports = router;
