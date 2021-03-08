const express = require('express');
const router = express.Router();
const Event = require('../../models/event.js');


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

module.exports = router;
