const express = require('express');

var router = express.Router();
const mongoose = require('mongoose');
const Admin = mongoose.model('admin')

router.get('/', (req, res) => {
    res.render("admin/addOrEdit", {
        viewTitle: "Admin Registration"
    });
});


router.post('/', (req, res) => {
    insertRecord(req, res);
});

function insertRecord(req, res) {
    var admin = new Admin();
    admin.firstName = req.body.firstName;
    admin.lastName = req.body.lastName;
    admin.email = req.body.email;
    admin.empNum = req.body.empNum;
    admin.password = req.body.password;
    admin.save((err, doc) => {
        if (!err)
            res.redirect('pet');
        else {
            if (err.name == 'ValidationError') {
                handleValidationError(err, req.body);
                res.render("admin/addOrEdit", {
                    viewTitle: "Admin Registration",
                    admin: req.body
                });
            }
            else {
                console.log('Error Inserting Record' + err)
            }
        }
    });
}
function updateRecord(req, res) {
    Admin.findOneAndUpdate({ _id: req.body._id }, req.body, { new: true }, (err, doc) => {
        if (!err) { console.log("Record Updated Successfully"); }
        else {
            if (err.name == 'ValidationError') {
                handleValidationError(err, req.body);
                res.render("admin/addOrEdit", {
                    viewTitle: 'Update Admin',
                    employee: req.body
                });
            }
            else
                console.log('Error Upating Record: ' + err);
        }
    });
}


function handleValidationError(err, body) {
    for (field in err.errors) {
        switch (err.errors[field].path) {
            case 'firstName':
                body['firstNameError'] = err.errors[field].message;
                break;
            case 'lastName':
                body['lastNameError'] = err.errors[field].message;
                break;
            case 'email':
                body['emailError'] = err.errors[field].message;
                break;
            case 'empNum':
                body['empNumError'] = err.errors[field].message;
                break;
            case 'password':
                body['passwordError'] = err.errors[field].message;
                break;
            default:
                break;
        }
    }
}

router.get('/:id', (req, res) => {
    Admin.findById(req.params.id, (err, doc) => {
        if (!err) {
            res.render("admin/addOrEdit", {
                viewTitle: "Update Admin",
                admin: doc
            });
        }
    });
});

router.get('/delete/:id', (req, res) => {
    Admin.findByIdAndRemove(req.params.id, (err, doc) => {
        if (!err) {
            console.log("Deletion Successful");
        }
        else { console.log('Error Deleting Record :' + err); }
    });
});

module.exports = router;