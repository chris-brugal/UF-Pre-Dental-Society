const express = require('express');
const router = express.Router();
const multer = require("multer"); //Needed for image uploading
const Officer = require('../../models/Officer.js');

const storage = multer.diskStorage({
    destination: (req, file, callback) => {
        callback(null, '../../../client/public/uploads');
    },
    filename: (req,file,callback) =>{
        
        callback(null, file.originalname);
    }
})

const upload = multer({storage: storage});

router.get('/', (req, res) => {
    Officer.find()
        .sort({rank: 1})
        .then(officers => res.json(officers))
        .catch(err => console.log(err));
});

router.post('/', upload.single("image"), (req, res) => {
   
    const newOfficer = new Officer({
        displayName: req.body.displayName,
        position: req.body.position,
        bio: req.body.bio,
        image: req.file.originalfile,
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

router.put('/:id', upload.single("image"), (req,res) => {
    Officer.findById(req.params.id, function(err, officer){
        if(!officer){
            res.status(404).send("The officer is not found");
        }else{
            officer.displayName = req.body.displayName;
            officer.position = req.body.position;
            officer.bio = req.body.bio;
            officer.image = req.file.originalname;
            officer.rank = req.body.rank;

            officer.save()
            .then(officer => res.json(officer));
        }
    })
});

module.exports = router;
