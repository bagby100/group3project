const express = require('express');
var router = express.Router();
const mongoose = require('mongoose');
const Pet = mongoose.model('pets')

router.get('/', (req, res) => {
    res.render("pet/addOrEdit", {
        viewTitle: "Pet Registration"
    });
});


router.post('/', (req, res) => {
    if (req.body._id == '')
        insertRecord(req, res);
    else
        updateRecord(req, res);
});

function insertRecord(req, res) {
    var pet = new Pet();
    pet.Name = req.body.Name;
    pet.dateArrived = req.body.dateArrived;
    pet.Species = req.body.Species;
    pet.Breed = req.body.Breed;
    pet.Weight = req.body.Weight;
    pet.Color = req.body.Color;
    pet.Sex = req.body.Sex;
    pet.Weight = req.body.Weight;
    pet.Location = req.body.Location;
    pet.Description = req.body.Description;
    pet.save((err, doc) => {
        if (!err)
            res.redirect('pet/list');
        else {
            console.log('Error Inserting Record ' + err)
        }
    });
}

function updateRecord(req, res) {
    Pet.findOneAndUpdate({ _id: req.body._id }, req.body, { new: true }, (err, doc) => {
        if (!err) { res.redirect('pet/list'); }
        else {
            if (err.name == 'ValidationError') {
                handleValidationError(err, req.body);
                res.render("pet/addOrEdit", {
                    viewTitle: 'Update Pet',
                    pet: req.body
                });
            }
            else
                console.log('Error Updating Record : ' + err);
        }
    });
}

router.get('/list', (req, res) => {
    Pet.find((err, docs) => {
        if (!err) {
            res.render('pet/list', {
                list: docs
            })
        } else
            console.log("Error Retreiving List: " + err);
    });
});


router.get('/:id', (req, res) => {
    Pet.findById(req.params.id, (err, doc) => {
        if (!err) {
            res.render("pet/addOrEdit", {
                viewTitle: "Update Pet",
                pet: doc
            });
        }
    });
});

router.get('/delete/:id', (req, res) => {
    Pet.findByIdAndRemove(req.params.id, (err, doc) => {
        if (!err) {
            res.redirect('/pet/list');
        }
        else { console.log('Error Deleting Record :' + err); }
    });
});


module.exports = router;
